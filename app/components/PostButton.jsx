'use client';
import { Button } from '@mui/material';
export default function PostButton() {
  async function handleClick() {
    try {
      let res = await fetch('http://localhost:3000/examples', { method: 'POST' });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log('An error occured');
    }
  }

  return (
    <Button data-test='post-btn' onClick={handleClick}>
      Post Data
    </Button>
  );
}
