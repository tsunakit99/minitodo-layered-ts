"use client";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  initialValue: string;
  onSave: (newTitle: string) => void;
};

export const EditTaskDialog = ({ open, onClose, initialValue, onSave }: Props) => {
  const [title, setTitle] = useState(initialValue);

  const handleSave = () => {
    onSave(title);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>タスクの編集</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="タイトル"
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>キャンセル</Button>
        <Button onClick={handleSave} variant="contained">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};
