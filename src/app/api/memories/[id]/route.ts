import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Action to read
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const memory = await prisma.chatMemory.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json({
        memory: memory,
    });
};


// Action to delete
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const memory = await prisma.chatMemory.delete({
        where: {
            id: Number(params.id),
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