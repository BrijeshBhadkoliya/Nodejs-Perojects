const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 6000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  let h2 =   res.send('<h2>Hello World</h2>');

    return res.render('index', { h2 });
});

app.listen(port, () =>  console.log(`Server is running on port http://localhost:${port}/`)); 