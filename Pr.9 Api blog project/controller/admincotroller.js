const Post = require('../models/blogmodels');
const CommentModels = require('../models/commentmodels');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('userid');

        return res.status(200).send({
            success: true,
            message: 'View all posts',
            posts
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message
        });
    }
};

const getAllComments = async (req, res) => {
    try {
        const comments = await CommentModels.find({})
            .populate('userid')
            .populate('postid');

        return res.status(200).send({
            success: true,
            message: 'View all comments',
            comments
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    getAllPosts,
    getAllComments
};
