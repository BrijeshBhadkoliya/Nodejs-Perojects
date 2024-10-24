const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', (err) => {
  console.error('Database connection error:', err);
});

database.once('open', () => {
  console.log('DB is connected');
  // Start the server after the database is connected
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is running at http://localhost:${port}/app`);
  });
});

module.exports = database;