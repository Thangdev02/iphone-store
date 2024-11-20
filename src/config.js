export const ApiUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9999'
  : 'https://iphone-store-iota.vercel.app/api';
