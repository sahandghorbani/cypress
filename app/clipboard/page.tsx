"use client";
import React, { useState } from "react";
import { Container, Snackbar, Button } from "@mui/material";
import { myFunction } from "../../func";

const CopyToClipboardButton = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "Hello, world!";
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setSnackbarOpen(true);
      localStorage.setItem("clipboard", textToCopy);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <p>{myFunction()}</p>
      <p>{copied ? "Text copied to clipboard!" : "Click the button to copy text to clipboard"}</p>
      <Button data-cy="copy-btn" variant="contained" onClick={copyToClipboard}>
        Copy to Clipboard
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={1000} onClose={handleSnackbarClose} message="Copied to clipboard" />
    </Container>
  );
};

export default CopyToClipboardButton;
