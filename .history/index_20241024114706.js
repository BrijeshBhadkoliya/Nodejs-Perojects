const express =  require('express');

const port = 8100;

const app = express()

const UserModel =  require('./modules/BookModels');

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/app', (req, res) => {
    return res.render('add');
});
app.post('/addData', (req, res) => {
    const {name,price,pages,description} = req.body;
    UserModel.create({
        name,
        price,
        pages,
        description
    }).then((data) => {
        console.log('Record added:', data);
        return res.redirect('/app');
    })
    .catch((err) => {
        console.error('Error adding record:', err);
        return res.status(500).send('Error adding record');
    });
    
});
app.listen(port,(err)=>{
    if(err){
        console.log(err); 
    }
    console.log(`server is runing http://localhost:${port}/app `);
    
});