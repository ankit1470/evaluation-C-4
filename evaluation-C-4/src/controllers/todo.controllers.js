const express = require('express');
const router = express. Router();

router.post("", async() =>{
    try {
        const todo = await Todo.create(req.body)
        return res.status(200).send(todo);

    }
    catch (err) {
        console.error(err.message);
    }
})

module.exports= router;