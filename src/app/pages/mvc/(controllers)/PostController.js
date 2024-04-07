// controllers/postController.js

// Example data
const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];
  
  // Get all posts
  export const getAllPosts = (req, res) => {
    res.status(200).json(posts);
  };
  
  // Get post by ID
  export const getPostById = (req, res) => {
    const { id } = req.params;
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
      res.status(404).json({ message: `Post with ID ${id} not found` });
    } else {
      res.status(200).json(post);
    }
  };
  
  // Create a new post
  export const createPost = (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
  };
  