const express = require('express')

const port = 8080;

const app = express();

app.set('view engine', 'ejs');
let Task = [];
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('index', { tasks: Task });
});
app.post('/includedData', (req, res) => {
    let { task, status, dedline } = req.body
    obj = {
        id: Math.floor(Math.random() * 9999),
        task: task,
        status: status,
        dedline: dedline
    }
    Task.push(obj);
    res.redirect('/')
});
app.get('/deletdata', (req, res) => {

    Task = Task.filter(task => task.id!= req.query.deletId);
    res.redirect('/');
});
app.get('/editid', (req, res) => {
  return  res.render('edit', { task: Task.find(task => task.id == req.query.editid) });
  
});
app.post('/UpdateData', (req, res) => {

    let {editid,task,status,dedline} = req.body;

    if (editid){
        Task.map((val)=>{
            val.task = task;
            val.status = status;
            val.dedline = dedline;
            return val;
        });
        
    }
  res.redirect('/');
});
app.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log(`Server is running on http://localhost:${port}/`);
});
