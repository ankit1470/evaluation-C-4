 const mongoose = require('mongoose');
const userController = require('./controllers/user.controllers')
 const todoSchema = new mongoose.Schema({
     title : {type: 'string', required:true},
     userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
 },
 

 {
    timestamps : true,
    versionKey : false,
})

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;