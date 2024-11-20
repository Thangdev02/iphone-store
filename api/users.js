import data from '../database.json'; // Đọc dữ liệu từ file database.json

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { username, password } = req.query;  // Extract username and password from query params

    const user = data.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      res.status(200).json(user);  // Return the user if found
    } else {
      res.status(404).json({ message: 'User not found' });  // Return an error if no user is found
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });  // Handle unsupported methods
  }
}
