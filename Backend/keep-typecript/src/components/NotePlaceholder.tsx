import React, { useState } from "react";
import { TextField } from "@mui/material";
import TaskModal from "./TaskModal";

const NotePlaceholder: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <TextField
        onClick={handleOpenModal}
        fullWidth
        variant="outlined"
        placeholder="Take a note..."
      />
      <TaskModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default NotePlaceholder;
