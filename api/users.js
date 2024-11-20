// src/api/users.js
import data from '../../database.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { username, password } = req.query; // Lấy thông tin từ query params
    const user = data.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      res.status(200).json(user); // Trả về người dùng nếu tìm thấy
    } else {
      res.status(404).json({ message: 'User not found' }); // Trả về lỗi nếu không tìm thấy người dùng
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Trả về lỗi nếu không phải GET request
  }
}
