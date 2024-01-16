"use client";
import React from 'react'
import { NewMemory } from '@/components/new-memory';

export default function NewMemoryPage() {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <NewMemory />
        </div>
    )
}
