import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, email, phone, dob, gender, address, role } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Username, password, and email are required' });
    }

    try {
      const dataPath = path.join(process.cwd(), 'database.json');
      console.log('Database Path:', dataPath);

      // In production, mock the database or use a real DB
      if (process.env.NODE_ENV === 'production') {
        return res.status(501).json({ message: 'Database writing is disabled in production' });
      }

      const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
      const userExists = data.users.find(user => user.username === username);

      if (userExists) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      const newUser = {
        username,
        password,
        email,
        phone,
        dob,
        gender,
        address,
        role: role || 'user',
      };

      data.users.push(newUser);
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2));

      const { password: _, ...userWithoutPassword } = newUser;
      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error('Error in API:', error.stack || error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
