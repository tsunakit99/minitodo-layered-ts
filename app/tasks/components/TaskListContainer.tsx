"use client";
import { Typography } from "@mui/material";
import useSWR from "swr";
import { TaskList } from "./TaskList";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const TaskListContainer = () => { 
    const { data: tasks, error, isLoading } = useSWR("/api/tasks", fetcher);
    
    if (isLoading) return <Typography variant="body2">Loading...</Typography>;
    if (error) return <Typography variant="body2" color="error">Error loading tasks</Typography>;

    return <TaskList tasks={tasks} />;
}