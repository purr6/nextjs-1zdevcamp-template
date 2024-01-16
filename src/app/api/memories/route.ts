import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Action to read
export const GET = async (req: NextRequest) => {
    const memories = await prisma.chatMemory.findMany({});
    return NextResponse.json({
        memories,
    });
};

// Action to create
export const POST = async (req: NextRequest) => {
    const { title, content } = await req.json();

    const memory = await prisma.chatMemory.create({
        data: {
            title,
            content,
        },
    });
    return NextResponse.json({
        memory,
    });
};