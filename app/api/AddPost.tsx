// AddPostComponent.js
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddPostComponent = ({ onAddPost }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{ border: "1px solid", bgcolor: "gray" }}
        type="text"
        placeholder="Title"
        value={title}
        data-cy="create-post-input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button data-cy="create-post-btn" type="submit">
        Add Post
      </Button>
    </form>
  );
};

export default AddPostComponent;
