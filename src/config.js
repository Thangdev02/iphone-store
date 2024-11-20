// src/config.js

// Dùng localhost cho môi trường phát triển (local)
export const ApiUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:9999'  // Localhost cho phát triển
  : '/api';  // Dùng API của Vercel khi triển khai lên Vercel
