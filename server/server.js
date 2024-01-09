const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// importing express routers
const projectRoutes = require('./routes/projects')
const taskRoutes = require('./routes/tasks')

// express app
const app = express()

// middeware
app.use(express.json())     // enable use of 'req' in routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes for projects
app.use('/api/projects', projectRoutes)

// routes for tasks
app.use('/api/tasks', taskRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Listening to Port: ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

