// api/posts.js

import { NextResponse } from "next/server";

// Example data
const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];
  
  // Handler for /api/posts
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Return a list of posts
      res.status(200).json(posts);
    } else if (req.method === 'POST') {
      // Create a new post
      const newPost = { id: posts.length + 1, title: req.body.title, content: req.body.content };
      posts.push(newPost);
      res.status(201).json(newPost);
    } else {
      // Handle unsupported methods
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  


// export async function GET(req) {
//   try {
//     return NextResponse.json({ message: "DATA FROM BACKEND." }, { status: 201 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }