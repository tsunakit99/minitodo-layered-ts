import { Task } from "@model/task";
import { PrismaClient } from "@prisma/client";
import { TaskRepository } from "@repo/task.repository";

const prisma = new PrismaClient();

export class PrismaTaskRepository implements TaskRepository {
    async create(title: string): Promise<Task> {
        const task = await prisma.task.create({ data: { title } });
        return task;
    }

    async findAll(): Promise<Task[]> {
        const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
        return tasks;
    }

    async findById(id: string): Promise<Task | null> {
        const task = await prisma.task.findUnique({ where: { id } });
        return task;
    }

    async update(id: string, data: Partial<Task>): Promise<Task> {
        const updatedTask = await prisma.task.update({ where: { id }, data: { title: data.title, completed: data.completed } });
        return updatedTask;
    }

    async delete(id: string): Promise<void> {
        await prisma.task.delete({ where: { id } });
    }
}