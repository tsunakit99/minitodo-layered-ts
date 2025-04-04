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

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
    
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const handleEdit = (task: Task) => setEditingTask(task);
    const handleEditSave = (newTitle: string) => { 
        alert(`保存: ${editingTask?.id} → ${newTitle}`);
        // TODO: PATCH API呼び出し
    }

    const handleDelete = (id: string) => { 
        if (confirm(`本当に削除しますか？`)) {
            alert(`削除機能: ${id}`);
        }
    }

    const handleToggleComplete = (task: Task) => { 
        alert(`完了切り替え: ${task.title} → ${!task.completed}`);
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
                                <IconButton edge="end" onClick={() => handleEdit(task)}>
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