"use client";
import { Link, Typography } from "@mui/material";


export default function Home() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <Link href="/tasks" underline="none">
        <Typography variant="h6">タスク一覧へ</Typography>
      </Link>
        
    </main>
  );
}