import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, email, phone, dob, gender, address, role } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Username, password, and email are required' });
    }

    try {
      // Read data from the JSON file
      const dataPath = path.join(process.cwd(), 'database.json');
      const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));

      // Check if the username already exists
      const userExists = data.users.find(user => user.username === username);

      if (userExists) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      // Add new user to the list
      const newUser = {
        username,
        password,
        email,
        phone,
        dob,
        gender,
        address,
        role: role || 'user',  // Default to 'user' if no role is provided
      };

      data.users.push(newUser);

      // Save updated data back to the JSON file
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2));

      // Return a success message with the new user data (excluding the password)
      const { password: _, ...userWithoutPassword } = newUser;
      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error('Error reading or writing the database file:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
