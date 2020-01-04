const express = require("express");
const router = express.Router();
const User = require("../modules/User");

router
    .get("/", (req,res) => {
        User.find()
            .then(users => res.send(users))
            .catch(err => console.log("Error: " + err));
    })

    .get("/:id", (req,res) => {
        user.findById(req.param.id)
            .then(user => res.send(user))
            .catch(err => console.log("Error: " + err));
    })

    .post("/", (req,res) => {
        const newUser = new User ({
            ...req.body
        });

        newUser.save().then(user => res.send(user)).catch(err => console.log(err));
    })

    .put("/:id", (req,res) => {
        const { id } = req.params;
        const updateMovie = {
            ...req.body
        };
        Movie.findByIdAndUpdate(id, updateMovie)
        .then(result => res.send(result))
        .catch(err => console.log(err));
    })

    .delete("/:id", (req,res) => {
        User.findByIdAndRemove(req.params.id)
        .then(result => res.send(result))
        .catch(err => res.send(err));
    });

    module.exports = router;