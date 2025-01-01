const Blog = require('../models/blogmodels');
const fs = require('fs');

const addBlog = async (req, res) => {
    try {
        const { title, desc } = req.body;

        if (!title || !desc || !req.file) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }

        const blogPost = await Blog.create({
            userid: req.user._id,
            title,
            desc,
            image: req.file.path,
        });

        return res.status(201).send({
            success: true,
            message: "Blog created successfully",
            blogPost,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

const viewBlog = async (req, res) => {
    try {
        const blogs = await Blog.find({ userid: req.user._id }).populate('userid');
        return res.status(200).send({
            success: true,
            message: "Blogs fetched successfully",
            blogs,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.query;

        const blogPost = await Blog.findByIdAndDelete(id);
        if (blogPost) {
            fs.unlinkSync(blogPost.image);
        }

        return res.status(200).send({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id, title, desc } = req.body;

        const blogPost = await Blog.findById(id);
        if (!blogPost) {
            return res.status(404).send({
                success: false,
                message: "Blog not found",
            });
        }

        if (req.file) {
            fs.unlinkSync(blogPost.image);
            blogPost.image = req.file.path;
        }

        blogPost.title = title || blogPost.title;
        blogPost.desc = desc || blogPost.desc;

        await blogPost.save();

        return res.status(200).send({
            success: true,
            message: "Blog updated successfully",
            blogPost,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    addBlog,
    viewBlog,
    deleteBlog,
    updateBlog,
};
