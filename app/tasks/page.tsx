import { Container, Typography } from "@mui/material";
import { TaskFormContainer } from "./components/TaskFormContainer";
import { TaskListContainer } from "./components/TaskListContainer";

export default function TaskPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        MiniTodo
      </Typography>
      <TaskFormContainer />
      <TaskListContainer />
    </Container>
  );
}
