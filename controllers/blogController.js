const Blog = require('../models/blogModel.js')

// POST
const createBlog = async (req, res) => {
    const { title, desc, img } = req.body

    try {
        const blog = await Blog.create({
            title,
            desc,
            img,
        })

        if (!blog) {
            return res.status(400).json({
                acknowledged: false,
                msg: 'blog not found'
            })
        }
        res.status(200).json({
            acknowledged: true,
            blog
        })
    } catch (error) {
        return res.status(400).json({ mssg: 'Error in creating blog' })
    }




}

// GET all
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({})

        if (!blogs) {
            return res.status(400).json({
                acknowledged: false,
                msg: 'blogs not found'
            })
        }
        res.status(200).send(blogs)
    } catch (error) {
        return res.status(400).json({ mssg: 'Cannot get blogs' })
    }
}

module.exports = { createBlog, getBlogs }