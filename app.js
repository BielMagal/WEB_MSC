// Packages
const express = require('express');
// Controllers
const login_controller = require('./controllers/login');
const app = express();

// Use package passport for authentication
app.get('/', login_controller.getLogin);

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Listening at http://${host}:${port}`);
});
