const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("BG_Server Running");
});

app.post("/build", (req, res) => {

    const data = req.body;

    console.log("New Server Request:", data);

    res.json({
        status: "success",
        message: "Minecraft server build started"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
