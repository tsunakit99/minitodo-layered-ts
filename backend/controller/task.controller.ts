import { PrismaTaskRepository } from "@infra/prisma-task.repository";
import { TaskService } from "@service/task.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) { 
    try {
        const { title } = await request.json();
        const repo = new PrismaTaskRepository();
        const service = new TaskService(repo);
        const task = await service.create(title);
        return NextResponse.json(task, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}