const mongoose = require('mongoose')    //allows Schemas to be built

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fromProject: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    assignedBy: {
        type: String,
        required: true
    },
    completionStatus: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)
