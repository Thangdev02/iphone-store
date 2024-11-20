// api/orders.js
import data from '../database.json'; // Đọc dữ liệu từ file database.json



export default function handler(req, res) {
    // Kiểm tra phương thức HTTP
    if (req.method === 'GET') {
      // Trả về danh sách sản phẩm
      res.status(200).json(data.orders); 
    } else {
      // Nếu không phải GET, trả về lỗi
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
