// src/api/users.js
import data from '../database.json'; // Đọc dữ liệu từ file database.json

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'GET') {
      const { username, password } = req.query;
  
      const user = data.users.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
