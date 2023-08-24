const express = require('express');
const bodyParser = require('body-parser');
const inventoryListRoute = require('./routes/inventoryListRoute');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use((req, res, next) => {
  const now = new Date();
  console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/inventory-list', inventoryListRoute);

// Route not found
app.use((req, res, next) => {
  console.error('There might be an error on your path route, please take a look');
  return res.sendStatus(404);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server API is running on port ${PORT}`);
});