"use client";
import { useState } from "react";
import { TaskForm } from "./TaskForm";

export const TaskFormContainer = () => { 
    const [execTime, setExecTime] = useState<number | null>(null);

    const handleCreate = async (title: string) => {
        const start = performance.now();

        const res = await fetch("/api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });

        const end = performance.now();
        setExecTime(end - start);

        if (!res.ok) {
            const error = await res.json();
            alert(error.error);
        }
    };

    return <TaskForm onSubmit={handleCreate} execTime={execTime} />;
}