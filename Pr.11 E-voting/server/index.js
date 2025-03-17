let express = require('express');
let app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 6000;
require('./config/db'); 
 
app.use('/',require('./routes/indexRouter'));

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});