const express = require('express');
const bodyParser = require('body-parser');
const inventoryListRoute = require('./routes/inventoryListRoute');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/inventory-list', inventoryListRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server API is running on port ${PORT}`);
});