// controllers/userController.js

// Example data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  
  // Get all users
  export const getAllUsers = (req, res) => {
    res.status(200).json(users);
  };
  
  // Get user by ID
  export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === parseInt(id));
    if (!user) {
      res.status(404).json({ message: `User with ID ${id} not found` });
    } else {
      res.status(200).json(user);
    }
  };
  
  // Create a new user
  export const createUser = (req, res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  