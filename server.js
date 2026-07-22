const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.static("public"));
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});