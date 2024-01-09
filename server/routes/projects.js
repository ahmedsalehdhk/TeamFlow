const express = require('express')

const router = express.Router()

// 1 GET all projects
router.get('/', (req, res) => {
    res.json({mssg: 'GET all projects'})
})

// 2 GET a single project
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single project'})
})

// 3 POST a new project
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new project'})
})

// 4 DELETE a project
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a project'})
})

// 5 UPDATE a  project
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a project'})
})


module.exports = router