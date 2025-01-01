const UserModels = require('../models/usermodels');

const addData = async (req, res) => {
    try {
        const { name, password, email, city, phone } = req.body;

        if (!name || !password || !email || !city || !phone) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }

        const duplicateUser = await UserModels.findOne({ email });
        if (duplicateUser) {
            return res.status(400).send({
                success: false,
                message: "User is already registered",
            });
        }

        const user = await UserModels.create({
            name,
            password,
            email,
            city,
            phone,
        });

        return res.status(201).send({
            success: true,
            message: "User successfully created",
            user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

const viewUsers = async (req, res) => {
    try {
        const users = await UserModels.find({});
        return res.status(200).send({
            success: true,
            length: users.length,
            message: "Users successfully fetched",
            users,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.query;

        await UserModels.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: "User successfully deleted",
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id, name, password, email, city, phone } = req.body;

        const user = await UserModels.findByIdAndUpdate(id, {
            name,
            password,
            email,
            city,
            phone,
        }, { new: true });

        return res.status(200).send({
            success: true,
            message: "User successfully updated",
            user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    addData,
    viewUsers,
    deleteUser,
    updateUser,
};
