const mg = require("mongoose");
const { boolean } = require("zod");
require('dotenv').config();

// this is not how we connect in real world application, we insert it in a .env file.
mg.connect(process.env.mongoUrl);
// the above URL makes db vulnerable. Anybody can get this URL and login to your db.
// corrected it by adding it in .env file


const todoSchema = mg.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mg.model('todos', todoSchema);

module.exports = {
    todo
}