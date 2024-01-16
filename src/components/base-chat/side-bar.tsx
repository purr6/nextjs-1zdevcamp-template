"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'

const getMemories = async () => {
    // Because this is server components, we have to define the URL with http
    const res = await fetch('/api/memories')
    if (!res.ok) {
        return {
        }
    } else {
        const json = await res.json()
        return json.memories
    }
}

export function SideBar() {

    const [memories, setMemories] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchMemories = async () => {
            const data = await getMemories();
            setMemories(data);
        };
        fetchMemories();
    }, []);

    const deleteMemory = async (id: Number) => {
        const res = await fetch(`/api/memories/${id}`, {
            method: 'DELETE',
        })
        if (!res.ok) {
            return {
            }
        } else {
            const json = await res.json()
            setMemories(memories.filter((memory: any) => memory.id !== id));
            return json.memories
        }
    };

    if (!memories) {
        return (
            <aside className="w-80 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
                <div>Loading...</div>
            </aside>); // 데이터가 로드되는 동안 표시할 내용
    }

    return (
        <aside className="w-80 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
            <div className="flex items-center justify-start h-16 px-6 border-b dark:border-gray-700">
                <h1 className="text-lg font-semibold dark:text-gray-200">1ZDEVCAMP</h1>
                <h2 className="ml-2 text-sm font-semibold dark:text-gray-200">Memory Hub</h2>
                <Link className="ml-4 text-right" href="/memories">⚙️
                </Link>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-4 overflow-y-auto">
                {memories.map((memory: { title: string, content: string, id: Number }, index: number) => (
                    <div className="bg-white shadow rounded-lg p-4 dark:bg-gray-700 flex justify-between items-start" key={index}>
                        <div>
                            <h2 className="text-lg font-semibold dark:text-gray-200">{memory.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{memory.content}</p>
                        </div>
                        <Button className="text-red-500" variant="outline" onClick={() => deleteMemory(memory.id)}>
                            <TrashIcon className="h-6 w-6" memoryId={memory.id} />
                        </Button>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

interface Props {
    className: string;
    memoryId: Number;
}

function TrashIcon(props: Props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2v2" />
        </svg>
    )
}