import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Action to read
export const GET = async (req: NextRequest) => {
    const memories = await prisma.chatMemory.findMany({});

    return NextResponse.json({
        memories: memories,
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

// Action to delete
export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url).searchParams;
    const id = Number(url.get("id")) || 0;

    const memory = await prisma.chatMemory.delete({
        where: {
            id: id,
        },
    });

    if (!memory) {
        return NextResponse.json(
            {
                message: "Error",
            },
            {
                status: 500,
            }
        );
    }

    return NextResponse.json({});
};

// Action to update or edit
export const PUT = async (req: NextRequest) => {
    const { title, content, id } = await req.json();

    const memory = await prisma.chatMemory.update({
        where: {
            id: Number(id),
        },

        data: {
            title,
            content,
        },
    });

    return NextResponse.json({
        memory,
    });
};