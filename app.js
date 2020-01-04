const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/users");

const app = express();

mongoose
    .connect("mongodb+srv://nickstein:4db1Lj5dRKN3hN5I@cluster0-bdzfi.mongodb.net/test?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => console.log("Connected to the database"))
    .catch(() => console.log("Failed to connect to database"));

    app.use(bodyParser.urlencoded({extended: false}));

    app.use(bodyParser.json());
    app.use('/', users);
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log("Connected to localhost:" + PORT);
    })

