"use client";
import { useChat } from 'ai/react';

export function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({ api: "/api/openai/chat" });
	return (
		<div className="flex flex-col w-full max-w-md py-2 mx-auto stretch text-sm text-zinc-100 text-black">
			{messages.map(m => (
				<div key={m.id} className="whitespace-pre-wrap text-black">
					{m.role === 'user' ? 'You: ' : '1Z: '}
					{m.content}
				</div>
			))}
			<br></br>

			<form onSubmit={handleSubmit} className="w-full max-w-2xl">
				<div className="flex justify-between items-center">
					<input
						className="w-full max-w-md p-2 border border-gray-300 rounded shadow-xl text-black"
						value={input}
						placeholder="어떤 기억을 등록해드릴까요?"
						onChange={handleInputChange}
						style={{ textAlign: 'center' }}
					/>
					<button type="submit" className="w-12 h-10 ml-2 py-1 px-2 bg-zinc-200 text-black rounded shadow">전송</button>
				</div>
			</form>
		</div>
	);
}
