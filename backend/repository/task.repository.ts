import { Task } from "@model/task";

export interface TaskRepository {
    create(title: string): Promise<Task>;
}