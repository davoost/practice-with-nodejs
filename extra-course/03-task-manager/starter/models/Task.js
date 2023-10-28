const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true, //gets rid of some white Space
        maxlength: [20, 'name cannot be more than 20 characters']
    }, 
    completed:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)