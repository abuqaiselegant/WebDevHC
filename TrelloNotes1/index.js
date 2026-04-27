// Users Table
// Organization Table
// Boards Table
// List Table
//cards Table

const express = require("express");


//issueId
//boardid
//users = []
//organizations = []

const app = express();
app.use(express.json());

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userExist = await userModel.findOne({username: username})
    if (userExist){
        res.status(411).json({
            message: "user already exist"
        })
        return;
    }
    const newUser = await userModel.create({username, password})
    res.json({
        message:"user created successfully"
    })

})

app.post("/signin",async(req,res)=>{

})

app.get("/users/:id",(req,res)=>{

})

app.post("/organizations",(req,res)=>{

})

app.get("/organizations/:id",(req,res)=>{

})


app.post("/boards",(req,res)=>{

})

app.get("/boards/:orgId",(req,res)=>{

})

app.post("/lists",(req,res)=>{

})

app.get("/lists/:boardId",(req,res)=>{

})

app.post("/cards",(req,res)=>{

})

app.post("/cards/:listId")











app.listen(3000);