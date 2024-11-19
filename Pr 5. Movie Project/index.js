const express = require('express');

const port = 7200;
require('./config/db')
const app = express()
const mongoose = require('mongoose');
const UserModel = require('./modules/BookModels');  

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/',require('./Routes/indexRoute'))

// app.get("/", async (req, res) => {

//     let data = await UserModel.find({})
//     return res.render("veiw", { data })
// })

// app.get('/add', (req, res) => {
//     return res.render('add');
// });
// app.post('/addData', (req, res) => {
//     const { name, price, pages, description } = req.body;
//     UserModel.create({
//         name,
//         price,
//         pages,
//         description
//     }).then((data, err) => {
//         if (err) {
//             console.log(err);
//             return false;
//         }
//         console.log('record add');
//         return res.redirect('/');

//     })

// });

// app.get('/deletRecord', (req, res) => {
//     let id = new mongoose.Types.ObjectId(req.query.id);
//     // console.log("id ====> ", id);
//     UserModel.findByIdAndDelete(id).then((data) => {
//         console.log("user delete");
//         return res.redirect('/')
//     }).catch((err) => {
//         console.log(err);
//         return false;
//     })
// })

// app.get('/editData', async (req, res) => {
//     const id = new mongoose.Types.ObjectId(req.query.id)
//     const data = await UserModel.findById(id)
//     return res.render('edit', { data })
// })


// app.post('/Upgreat', async (req, res) => {
//     const {editId , name , price , pages , description} = req.body
//   await  UserModel.findByIdAndUpdate(editId,{
//         name,
//         price,
//         pages,
//         description
//     })
//     return res.redirect('/')
// })
app.use("/uploads", express.static(path.join(__dirname,"uplods")));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const  fileupload = multer({ storage: storage }.single("avtar"));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`server is runing http://localhost:${port}/add `);

}); 