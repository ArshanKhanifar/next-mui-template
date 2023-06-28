import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        // Optionally, you can perform any necessary actions after successful post creation
      } else {
        console.error("Error creating post:", response.status);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Body"
        value={body}
        onChange={handleBodyChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Create Post
      </Button>
    </form>
  );
};

export default CreateBlogPost;
