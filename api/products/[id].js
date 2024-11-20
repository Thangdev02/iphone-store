import data from '../../database.json'; // Import data from the database.json file

export default function handler(req, res) {
  const { id } = req.query; // Extract the `id` from the query parameters

  if (req.method === 'GET') {
    // Find the product by id
    const product = data.products.find((prod) => prod.id === id);

    if (product) {
      // If product is found, return it with a 200 status
      res.status(200).json(product);
    } else {
      // If product is not found, return a 404 status
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    // If the method is not GET, return a 405 (Method Not Allowed)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
