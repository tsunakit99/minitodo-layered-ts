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

export async function GET() {
    try {
        const repo = new PrismaTaskRepository();
        const service = new TaskService(repo);
        const tasks = await service.findAll();
        return NextResponse.json(tasks, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function PATCH(request: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = context.params;
    const { title, completed } = await request.json();
    const repo = new PrismaTaskRepository();
    const service = new TaskService(repo);
    const task = await service.updateTask(id, title, completed);
    return NextResponse.json(task);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(_: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = context.params;
    const repo = new PrismaTaskRepository();
    const service = new TaskService(repo);
    await service.deleteTask(id);
    return NextResponse.json({ message: "Task deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}