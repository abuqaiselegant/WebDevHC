const express = require("express");
const app = express();

const notes = []  //bad way to store

//post- create a note
app.post("/notes",function(req,res){
    const note = req.body.note;
    notes.push(note);

    res.json({
        message:"notes done!"
    })
})

app.get("/notes",function(req,res){
    res.json({notes})
})

app.listen(3000);