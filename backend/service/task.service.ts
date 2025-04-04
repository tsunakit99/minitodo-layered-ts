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
}