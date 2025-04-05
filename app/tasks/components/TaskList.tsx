"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { EditTaskDialog } from "./EditTaskDialog";

type Task = {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string;
};

type TaskListProps = {
  tasks: Task[];
  mutate: () => void;
};

export const TaskList = ({ tasks, mutate }: TaskListProps) => {
    
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const handleEditSave = async (newTitle: string) => {
        if (!editingTask) return;

        await fetch(`/api/tasks/${editingTask.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle }),
        });

        setEditingTask(null);
        mutate(); // 再取得
    };

    const handleDelete = async (id: string) => { 
        if (!confirm(`本当に削除しますか？`)) return;

        await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
        })
        mutate(); // 再取得
    }

    const handleToggleComplete = async (task: Task) => { 
        await fetch(`/api/tasks/${task.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !task.completed }),
        })
        mutate(); // 再取得
    }

    if (tasks.length === 0) { 
        return <Typography variant="body2">タスクがありません</Typography>;
    }

    return (
        <Paper elevation={2} sx={{ maxWidth: 500, p: 2 }}>
            <List>
                {tasks.map((task) => (
                    <ListItem
                        key={task.id}
                        secondaryAction={
                            <Stack direction="row" spacing={1}>
                                <IconButton edge="end" onClick={() => setEditingTask(task)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" onClick={() => handleDelete(task.id.toString())}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        }
                        disablePadding
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task)}
                            />
                        </ListItemIcon>
                        <ListItemText primary={task.title} secondary={new Date(task.createdAt).toLocaleString()} />
                    </ListItem>
                ))}
            </List>
            <EditTaskDialog
                open={!!editingTask}
                onClose={() => setEditingTask(null)}
                initialValue={editingTask?.title || ""}
                onSave={handleEditSave}
            />
        </Paper>
        
    );
}