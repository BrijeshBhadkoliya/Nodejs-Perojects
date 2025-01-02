const UserModels = require('../models/usermodels');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }

        const user = await UserModels.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign({ payload: user }, "vora", { expiresIn: "1h" });

        return res.status(200).send({
            success: true,
            token,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    loginUser,
};
