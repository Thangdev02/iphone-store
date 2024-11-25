// import path from 'path';
// import fs from 'fs/promises';

// export default async function handler(req, res) {
//   const dataPath = path.join(process.cwd(), 'database.json');

//   if (req.method === 'GET') {
//     const { username, password } = req.query;

//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     try {
//       const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
//       const user = data.users.find(user => user.username === username && user.password === password);

//       if (user) {
//         const { password, ...userWithoutPassword } = user;
//         return res.status(200).json([userWithoutPassword]);
//       } else {
//         return res.status(404).json({ message: 'Invalid username or password' });
//       }
//     } catch (error) {
//       console.error('Error reading database:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   } else if (req.method === 'POST') {
//     const { username, password, email, phone, dob, gender, address, role } = req.body;

//     // Validate required fields
//     if (!username || !password || !email || !phone) {
//       return res.status(400).json({ message: 'Required fields are missing' });
//     }

//     try {
//       // Read current data
//       const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));

//       // Check if the username or email already exists
//       const userExists = data.users.some(user => user.username === username || user.email === email);
//       if (userExists) {
//         return res.status(409).json({ message: 'Username or email already exists' });
//       }

//       // Add new user to the database
//       const newUser = {
//         id: Date.now(), // Use timestamp as unique ID
//         username,
//         password,
//         email,
//         phone,
//         dob,
//         gender,
//         address,
//         role: role || 'user', // Default role to 'user'
//       };
//       data.users.push(newUser);

//       // Write updated data back to the file
//       await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');
//       return res.status(201).json(newUser);
//     } catch (error) {
//       console.error('Error writing to database:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
export default async function handler(req, res) {
  const dataPath = path.join(process.cwd(), 'database.json');

  if (req.method === 'GET') {
    const { username, password } = req.query;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
      const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
      const user = data.users.find(user => user.username === username && user.password === password);

      if (user) {
        const { password, ...userWithoutPassword } = user;
        return res.status(200).json([userWithoutPassword]);
      } else {
        return res.status(404).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error reading database:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    const { username, password, email, phone, dob, gender, address, role } = req.query;  // Changed to query parameters

    if (!username || !password || !email || !phone) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    try {
      const data = JSON.parse(await fs.readFile(dataPath, 'utf-8'));

      const userExists = data.users.some(user => user.username === username || user.email === email);
      if (userExists) {
        return res.status(409).json({ message: 'Username or email already exists' });
      }

      // Add new user
      const newUser = {
        id: Date.now(), // Use timestamp as unique ID
        username,
        password,
        email,
        phone,
        dob,
        gender,
        address,
        role: role || 'user', // Default role to 'user'
      };
      data.users.push(newUser);

      // Write to database
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');
      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error writing to database:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}

