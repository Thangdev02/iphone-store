// api/brands.js
import data from '../../database.json';

export default function handler(req, res) {
  res.status(200).json(data.brands); // Trả về danh sách thương hiệu
}
