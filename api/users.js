import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username, password } = req.query;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
      // Read data asynchronously from the JSON file
      const dataPath = path.join(process.cwd(), 'database.json');
      const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));

      const user = data.users.find(
        (user) =>
          user.username.trim().toLowerCase() === username.trim().toLowerCase() &&
          user.password === password
      );

      if (user) {
        const { password, ...userWithoutPassword } = user;
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
