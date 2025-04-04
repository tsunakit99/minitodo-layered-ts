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
}