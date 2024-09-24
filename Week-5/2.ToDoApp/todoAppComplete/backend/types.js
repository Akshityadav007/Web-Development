// write all the zod input validations here
const zod = require("zod");


// creation validation
const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

// updation validation
const updateTodo = zod.object({
    id : zod.string()
})


// send these fn when imported
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}