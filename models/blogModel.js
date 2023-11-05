const mongoose = require('mongoose');

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: String,
    desc: String,
    img: String,
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)