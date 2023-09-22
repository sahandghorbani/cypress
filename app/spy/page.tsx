"use client";
import { Button, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const page = () => {
  const [title, setTitle] = useState(""); // State for the title
  const [sum, setSum] = useState(0);

  // Function to calculate the sum and update the title
  const calculateSumAndSetTitle = () => {
    const arg1 = Math.floor(Math.random() * 10); // Random argument 1
    const arg2 = Math.floor(Math.random() * 10); // Random argument 2
    setSum(arg1 + arg2);
  };

  useEffect(() => {
    if (sum > 10) {
      setTitle("More than 10 ⬆️");
    } else {
      setTitle("Less than 10 ⬇️");
    }
  }, [sum]);

  return (
    <Container>
      <h1>{sum}</h1>
      <h2>Title: {title}</h2>
      <Button data-cy="calc-btn" onClick={calculateSumAndSetTitle}>
        Calculate Sum
      </Button>
    </Container>
  );
};

export default page;
