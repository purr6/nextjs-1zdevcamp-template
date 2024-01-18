import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { PrismaClient } from "@prisma/client";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { messages } = await req.json();
  const memories = await prisma.chatMemory.findMany({});
  console.log(memories);

  //memories are json array now. make memories_str title and content to string
  var memories_str = "";
  for (var i = 0; i < memories.length; i++) {
    memories_str += `(${memories[i].title}:${memories[i].content}),`;
  }

  //add system message to messages array first position
  //{ "role": "system", "content": "content"} 
  messages.unshift({ "role": "system", "content": `아래는 유저와 대화하며 기억 및 기록한 내용이야. 이 기억을 참조해서 답변을 해줘, [${memories_str}]` });

  console.log(messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  // , body: { model: "gpt-4-1106-preview", response_format: { type: "json_object" } } 

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
