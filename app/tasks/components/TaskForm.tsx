"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

type TaskFormProps = {
  onSubmit: (title: string) => void;
  execTime: number | null;
};

export const TaskForm = ({ onSubmit, execTime }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mb: 4 }}>
      <TextField
        fullWidth
        label="新しいタスク"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        追加
      </Button>
      {execTime !== null && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          処理時間: {execTime.toFixed(2)} ms
        </Typography>
      )}
    </Box>
  );
};
