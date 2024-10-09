const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());                // Enable CORS for all routes
app.use(express.json());         // to parse all json objects in requests

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

app.listen(3000);