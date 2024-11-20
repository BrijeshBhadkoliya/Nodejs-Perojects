const UserModel = require('../modules/BookModels');
const mongoose = require('mongoose');
const multer = require('multer')
const fs = require("fs")
const firstPage = async (req, res) => {

    let data = await UserModel.find({})
    return res.render("veiw", { data })
};

const add = (req, res) => {
    return res.render('add');
};

const addData = async (req, res) => {

    const { name, price, pages } = req.body;
    console.log(req.file);

    await UserModel.create({
        name: name,
        price,
        pages,
        description: req.file.path
    })
    console.log('record add');
    return res.redirect('/');


};

const deletRecord = async (req, res) => {
    let id = new mongoose.Types.ObjectId(req.query.id);
    let singal = await usersmodel.findById(id)
    fs.unlinkSync(singal.description)
    // console.log("id ====> ", id);
    await UserModel.findByIdAndDelete(id).then((data) => {
        console.log("user delete");
        return res.redirect('/')
    }).catch((err) => {
        console.log(err);
        return false;
    })
}

const editData = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.query.id)
    const data = await UserModel.findById(id)
    return res.render('edit', { data })
}
const Upgreat = async (req, res) => {
    const { editId, name, price, pages } = req.body

    if (req.file) {

        let singal = await usersmodel.findById(editid)
        fs.unlinkSync(singal.description)

        await UserModel.findByIdAndUpdate(editId, {
            name,
            price,
            pages,
            description: req.file.path
        })
        return res.redirect('/')
    } else {

        const single = await usersmodel.findById(editid);

        await usersmodel.findByIdAndUpdate(editid, {
            name: name,
            desc: desc,
            price: price,
            description: single.description
        })
        return res.redirect('/views');
    }

}  
 

module.exports = {
    firstPage, add, addData, deletRecord, editData, Upgreat
}