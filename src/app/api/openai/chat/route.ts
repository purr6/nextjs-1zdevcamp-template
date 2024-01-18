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
