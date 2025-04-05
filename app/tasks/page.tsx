"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import { TaskFormContainer } from "./components/TaskFormContainer";
import { TaskListContainer } from "./components/TaskListContainer";

export default function TaskPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            MiniTodo App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            タスクを追加・管理してみましょう
          </Typography>
        </Box>
        <TaskFormContainer />
        <TaskListContainer />
      </Paper>
    </Container>
  );
}
