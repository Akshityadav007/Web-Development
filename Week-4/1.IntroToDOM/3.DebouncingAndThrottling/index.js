const express = require("express")
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const sum = a + b;

    res.status(200).send(sum.toString());
})


app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
});