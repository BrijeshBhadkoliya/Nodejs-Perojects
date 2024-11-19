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
    const { name, price, pages, description } = req.body;
    await UserModel.create({
        name,
        price,
        pages,
        description
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log('record add');
        return res.redirect('/');

    })

};

const deletRecord = async (req, res) => {
    let id = new mongoose.Types.ObjectId(req.query.id);
    
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
    const { editId, name, price, pages, description } = req.body
    await UserModel.findByIdAndUpdate(editId, {
        name,
        price,
        pages,
        description
    })
    return res.redirect('/')
}

module.exports = {
    firstPage, add, addData, deletRecord, editData, Upgreat
}