const app = require('express')();

app.get('/', (req, res) => res.send('elegant YT'));

module.exports = () => {
  app.listen(3000);
}
