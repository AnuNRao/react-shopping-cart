import express from 'express';
import cors from 'cors';

import productsRoutes from './routes/product.route.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend running successfully');
});

app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});