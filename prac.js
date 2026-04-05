const express = require("express");
const app = express();

app.use(express.json());


const notes = [];

app.post("/notes", (req, res)=>{
    const note = req.body.note;
    notes.push(note);

    res.json({
        message:"Done"
    });
})

app.get("/notes",(req, res)=>{
    res.json({
        notes
    })
})


app.get("/",(req, res)=>{
    res.sendFile("/Users/abuqais/Desktop/Journey2024/HClass/prac.html")
})


app.listen(3002, function(){
    console.log("Server is running on port 3002");
});