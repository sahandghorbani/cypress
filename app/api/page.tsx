"use client";
import React, { useState, useEffect } from "react";
import AddPostComponent from "./AddPost";
import { Card, CardContent, CardHeader, Container } from "@mui/material";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMorePosts = () => {
    setData([]);
    setLoading(true);
    const apiUrl = "http://localhost:3001/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData((prevData) => [...prevData, ...result]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const addPost = (newPost) => {
    const apiUrl = "http://localhost:3001/posts";
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setData((prevData) => [result, ...prevData]);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  useEffect(() => {
    fetchMorePosts();
  }, []);

  return (
    <Container>
      <AddPostComponent onAddPost={addPost} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Card>
          {data.map((item) => (
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }} key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </CardContent>
          ))}
        </Card>
      )}
    </Container>
  );
};

export default MyComponent;
