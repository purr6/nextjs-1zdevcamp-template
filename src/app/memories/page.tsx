"use client";
import { MemoryCard } from '@/components/memory-card'
import React from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button';

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

export default function Memories() {
    const [memories, setMemories] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchMemories = async () => {
            const data = await getMemories();
            setMemories(data);
        };
        fetchMemories();
    }, []);

    if (!memories) {
        return <div>Loading...</div>; // 데이터가 로드되는 동안 표시할 내용
    }

    console.log(memories);

    return (
        <div>
            <div>
                <Link className="ml-4 text-right" href="/memories/new">
                    <Button>New</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {memories.map((memory: any, index: number) => (
                    <MemoryCard key={index} chatMemory={memory} />
                ))}
            </div>
        </div>

    )
}
