const express = require("express")
const app = express();
const {createTodo, updateTodo} = require("./types.js");
const { todo } = require("./db.js");

const cors = require("cors");       // this allows us to hit backend running on same server from the same server frontend
app.use(cors());    // this says we can hit this backend from any server now (if we want to only hit it from a specific server, we can do so by app.use(cors({origin : 'our-server-url'})))

app.use(express.json());                // pass a json body if it's there

// {body : {title : title, description : description}}
app.post('/todo', async (req, res) => {
    const todoPayload = req.body;
    const parsedPayload = createTodo.safeParse(todoPayload);        // returns a json (not todoPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong input!"
        });
        return;
    }

    // insert in mongoDb
    await todo.create({
        title : todoPayload.title,
        description : todoPayload.description,
        completed : false
    })

    res.status(200).json({
        msg : "Todo created!"
    })
});

app.get('/todos', async (req, res) => {
    const todoList = await todo.find({});
    res.status(200).send(todoList);
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "Wrong input!"
        });
    }

    try {
        const updatedTodo = await todo.findByIdAndUpdate(
            req.body.id,
            { completed: true },
            { new: true } // Returns the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.json({ msg: "Todo updated" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
});




app.listen(3000, () => {
    console.log('Site is running at http://localhost:3000/');
});