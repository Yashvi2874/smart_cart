import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllProducts = async (req, res) => {
  try {
    const productsPath = path.join(__dirname, '..', 'data', 'products.json');
    const productsData = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(productsData);
    res.json(products);
  } catch (err) {
    console.error('Error reading products:', err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
