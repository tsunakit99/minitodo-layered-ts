import { Task } from "@model/task";
import { TaskRepository } from "@repo/task.repository";

export class TaskService {
    constructor(private readonly repo: TaskRepository) { }
    
    async create(title: string): Promise<Task> { 
        if (!title || title.trim() === "") throw new Error("Title is required");
        return this.repo.create(title);
    }

    async findAll(): Promise<Task[]> {
        return this.repo.findAll();
    }

    async updateTask(id: string, title?: string, completed?: boolean): Promise<Task> {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error("Task not found");

        const updated = {
            ...existing,
            title: title ?? existing.title,
            completed: completed ?? existing.completed,
        };
        
        return this.repo.update(id, updated);
    }
    
    async deleteTask(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}