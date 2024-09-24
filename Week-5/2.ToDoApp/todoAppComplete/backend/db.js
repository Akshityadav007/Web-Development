const mg = require("mongoose");
const { boolean } = require("zod");

// this is not how we connect in real world application, we insert it in a .env file.
mg.connect('mongodb+srv://AkshitYadav:Akshit123@cluster0.y9pwl.mongodb.net/todoApp');
// the above URL makes db vulnerable. Anybody can get this URL and login to your db.


const todoSchema = mg.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mg.model('todos', todoSchema);

module.exports = {
    todo
}