const express = require('express');
const helmet = require('helmet');
const PORT = process.env.PORT || 4242;
const cors = require('cors');
const recipesRoutes = require('./recipes/recipesRoutes.js');
// const { Client } = require('pg');
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

const server = express();

server.use(helmet());
server.use(express.json(), cors());

server.get('/', (req, res) => {
  res.send('Hello friend')
});

server.use('/api/recipes', recipesRoutes);

server.listen(PORT, () => console.log(`API running on ${PORT}`));