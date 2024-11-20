// api/users.js
import data from '../../database.json';

export default function handler(req, res) {
  res.status(200).json(data.users); // Trả về danh sách người dùng
}
