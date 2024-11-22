// import data from '../database.json'; // Đọc dữ liệu từ file database.json

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     const { username, password } = req.query;  // Extract username and password from query params

//     const user = data.users.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       res.status(200).json(user);  // Return the user if found
//     } else {
//       res.status(404).json({ message: 'User not found' });  // Return an error if no user is found
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });  // Handle unsupported methods
//   }
// }

import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { username, password } = req.query; // Get query parameters

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
      // Read data from the JSON file
      const dataPath = path.join(process.cwd(), 'database.json');
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

      // Find user with matching username and password
      // Check password as well
      const user = data.users.find(
        (user) =>
          user.username.trim().toLowerCase() === username.trim().toLowerCase() &&
          user.password === password  // Ensure password matches
      );

      if (user) {
        const { password, ...userWithoutPassword } = user;  // Exclude password from response
        res.status(200).json(userWithoutPassword);
      } else {
        res.status(404).json({ message: 'Invalid username or password' });
      }

    } catch (error) {
      console.error('Error reading the database file:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
