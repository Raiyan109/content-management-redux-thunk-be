const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()
const blogRoutes = require('./routes/blogs.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/blogs', blogRoutes)


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, (req, res) => {
            console.log(`Content Management Server listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
