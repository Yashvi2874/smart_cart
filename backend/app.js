const express = require('express');
const cartRoutes = require('./routes/cart.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/cart', cartRoutes);
app.use(errorHandler);

module.exports = app;