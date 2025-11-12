const express = require('express');
const app = express();
const { products } = require('./data');

app.use(express.static('./public'));

app.use(express.json());

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: 'That product was not found.' });
  }
  res.json(product);
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit, maxPrice } = req.query;
  let filtered = [...products];

  if (search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (maxPrice) {
    const priceLimit = parseFloat(maxPrice);
    filtered = filtered.filter((p) => p.price <= priceLimit);
  }

  if (limit) {
    filtered = filtered.slice(0, Number(limit));
  }

  if (filtered.length < 1) {
    return res.status(200).json({ message: 'No products matched your criteria.' });
  }

  res.json(filtered);
});

const port = 5000;
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
