const express = require("express");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("./middleware")

let userId = 1;
let organizationId = 1;
let issueId = 1;
let boardId =1;

const USERS = [];

const ORGANIZATIONS = [{
    organizationId: 1, //uniqueness constraint
    title:"100xdevs",
    desctipiton:"Learning coding platform",
    members:1,
    admins:[2],
}, {
    organizationId: 2, //uniqueness constraint
    title:"raman org",
    desctipiton:"Experimenting",
    members:1,
    admins:[],
}];

const BOARDS = [{
    id: 1,
    title:"",
    organizationId: 1,
}];

const ISSUES = [{
    id: 1,
    title:"Add dark mode",
    boardId: 1,
    state:"inprogress",
}, {
    id:2,
    title:"Allow admins to create boards",
    boardId: 1,
    state:"done",
}];


const app = express();
app.use(express.json());

//writing routes
//create
app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username);
    if (userExists) {
        res.status(411).json({
            message: "user already exists"
        })
        return;
    }
    USERS.push({
        id: userId++,
        username,
        password,
    })
    res.json({
        message: "user created successfully",
    })

})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const userExists = USERS.find(u => u.username === username && u.password === password);
    if (!userExists){
        res.status(401).json({
            message:"invalid ceredentials!"
        })
        return;
    }
    const token = jwt.sign({userId : userExists.id}, "secretkey123");
    res.json({
        token
    })

})

app.post("/organization",authMiddleware,(req,res)=>{
    const userId = req.userId;
    ORGANIZATIONS.push({
        id: organizationId++, //uniqueness constraint
        title:req.body.title,
        desctipiton:req.body.description,
        members:userId,
        admins:[],
    })
    res.json({
        message:"organization created successfully",
        id: organizationId-1,
    })

})

app.post("add-member-to-organization",authMiddleware,(req,res)=>{
    const userId = req.userId;

})

app.post("/board",(req,res)=>{

})

app.post("/issue",(req,res)=>{

})


//read
app.get("/boards",(req,res)=>{

})

app.get("/issues",(req,res)=>{

})

app.get("/members",(req,res)=>{

})

app.put("/issues",(req,res)=>{

})

app.delete("/members",(req,res)=>{

})
app.listen(3005);