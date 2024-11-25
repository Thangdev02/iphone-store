import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username, password } = req.query;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
      // Read data from the JSON file
      const dataPath = path.join(process.cwd(), 'database.json');
      const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));

      // Find user in the JSON file
      const user = data.users.find(user => user.username === username && user.password === password);

      if (user) {
        // Exclude password from the response
        const { password, ...userWithoutPassword } = user;
        return res.status(200).json([userWithoutPassword]);  // Return user inside an array to match frontend expectations
      } else {
        return res.status(404).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error reading the database file:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
