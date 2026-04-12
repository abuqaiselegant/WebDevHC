const express = require("express");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("./middleware")

let userId = 1;
let organizationId = 1;
let issueId = 1;
let boardId =1;

const USERS = [];

const ORGANIZATIONS = [];

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
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;

    const organization = ORGANIZATIONS.find(org =>org.id === organizationId);
    if (!orgainzation || organization.admin !== userId){
        res.status(411).json({
            message:"organization not found or you are not an admin!"
        })
        return;
    }
    const memberUser = USERS.find(u => u.username === memberUsername);
    if (!member){
        res.status(403).json({
            message:"member not in our database!"
        })
        return;
    }
    organization.members.push(memberId);
    res.json({
        message:"member added"
    })
})

app.post("/board",(req,res)=>{

})

app.post("/issue",(req,res)=>{

})


//read - get endpoints

app.get("/organization", authMiddleware, (req,res)=>{
    const userId = req.userId;
    const organizationId = parseInt(req.query.organizationId);
    const organization = ORGANIZATIONS.find(o => o.id === organizationId);

    if (!organization || organization.admin !== userId){
        res.status(411).json({
            message:"Either organization not found or you are not an admin!"
        })
        return;
    }
    res.json({
        organization: {
            ...organization, 
            members: organization.members.map(memberId => {
                const user = USERS.find(u => u.id === memberId);
                return {id: user.id , username : user.username}
            })
        }
    })
})
//GET /boards?organizationId=1
//more to do
app.get("/boards",authMiddleware,(req,res)=>{
    const userId = req.userId;
    const organizationId = parseInt(req.query.organizationId);
    const organization = ORGANIZATIONS.find(o => o.id === organizationId);
    if (!organization || organization.admin !== userId){
        res.status(411).json({
            message:"Either organization not found or you are not an admin!"
        })
        return;
    }
    res.json({})
})

app.get("/issues",(req,res)=>{

})

app.get("/members",(req,res)=>{

})

app.put("/issues",(req,res)=>{

})

app.delete("/members",authMiddleware,(req,res)=>{
    const userId = req.userId;
    const organisationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;
    const organization = ORGANIZATIONS.find(org =>org.id === organizationId);
    if (!orgainzation || organization.admin !== userId){
        res.status(411).json({
            message:"organization not found or you are not an admin!"
        })
        return;
    }
    const memberUser = USERS.find(u => u.username === memberUsername);
    if (!member){
        res.status(403).json({
            message:"member not in our database!"
        })
        return;
    }
    organization.members = organization.members.filter(user => user.id !== memberUser.id);
    res.json({
        message:"member removed"
    })
})
app.listen(3005);