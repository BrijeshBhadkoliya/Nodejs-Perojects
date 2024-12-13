const express = require('express')
const db = require('./config/db')
const PORT = 8000;

const app = express();
app.use(express.urlencoded({extended:true}))

app.use('/', require('./Router/indexRouter') )

app.listen(PORT, (err)=>{

    if(err) throw console.log(err);
     console.log(`Server is run http://localhost:${PORT}/`);
     
})