const express = require("express");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("./middleware");
const {userModel, organizationModel} = require("./models");

// let userId = 1;
// let organizationId = 1;
let issueId = 1;
let boardId =1;

// const USERS = [];
// const ORGANIZATIONS = [];

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
} ];


const app = express();
app.use(express.json());

//writing routes
//create
app.post("/signup", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // const userExists = USERS.find(u => u.username === username);
    const userExist = await userModel.findOne({username: username});

    if (userExist) {
        res.status(411).json({
            message: "user already exists"
        })
        return;
    }
    // USERS.push({
    //     id: userId++,
    //     username,
    //     password,
    // })
    const newUser = await userModel.create({username, password})
    res.json({
        message: "user created successfully",
    })

})

app.post("/signin",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    // const userExists = USERS.find(u => u.username === username && u.password === password);
    const userExist = await userModel.findOne({
        username: username,
        password: password
    })
    if (!userExist){
        res.status(401).json({
            message:"invalid ceredentials!"
        })
        return;
    }
    const token = jwt.sign({userId : userExist._id}, "secretkey123");
    res.json({
        token
    })

})

app.post("/organization",authMiddleware,async(req,res)=>{
    const userId = req.userId;
    // ORGANIZATIONS.push({
    //     id: organizationId++, //uniqueness constraint
    //     title:req.body.title,
    //     desctipiton:req.body.description,
    //     members:userId,
    //     admins:[],
    // })
    const newOrg = await organizationModel.create({
        title: req.body.title,
        description: req.body.description,
        admin: userId,
        members: []
    })
    res.json({
        message:"organization created successfully",
        id: newOrg._id
    })

})

app.post("/add-member-to-organization",authMiddleware,async(req,res)=>{
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;

    // const organization = ORGANIZATIONS.find(org =>org.id === organizationId);

    const organization = await organizationModel.findOne({
        _id: organizationId
    });

    if (!organization || organization.admin.toString() !== userId){
        res.status(411).json({
            message:"organization not found or you are not an admin!"
        })
        return;
    }
    // const memberUser = USERS.find(u => u.username === memberUsername);
    const memberUser = await userModel.findOne({
        username: memberUsername
    });
    if (!memberUser){
        res.status(403).json({
            message:"member not in our database!"
        })
        return;
    }
    // organization.members.push(memberId);
    // res.json({
    //     message:"member added"
    // })

    organization.members.push(memberUser._id);
    await organization.save();
    res.json({
        message:"member added"
    })
})

app.post("/board",(req,res)=>{

})

app.post("/issue",(req,res)=>{

})


//read - get endpoints

app.get("/organization", authMiddleware, async (req,res)=>{
    const userId = req.userId;
    const organizationId = req.query.organizationId;
    // const organization = ORGANIZATIONS.find(o => o.id === organizationId);
    const organization = await organizationModel.findOne({
        _id: organizationId
    });

    if (!organization || organization.admin.toString() !== userId){
        res.status(411).json({
            message:"Either organization not found or you are not an admin!"
        })
        return;
    }
    const members = await userModel.find({
        _id: organization.members
    })
    // res.json({
    //     organization: {
    //         ...organization, 
    //         members: organization.members.map(memberId => {
    //             const user = USERS.find(u => u.id === memberId);
    //             return {id: user.id , username : user.username}
    //         })
    //     }
    // })
    res.json({
        organization: {
            title: organization.title,
            description: organization.description,
            members: members.map(m => ({
                username: m.username,
                id: m._id
            }))
        }
    })
})
//GET /boards?organizationId=1
//more to do
app.get("/boards",authMiddleware,async(req,res)=>{
    const userId = req.userId;
    const organizationId = parseInt(req.query.organizationId);
    // const organization = ORGANIZATIONS.find(o => o.id === organizationId);
    const organization = await organizationModel.findOne({
        _id: organizationId
    });
    if (!organization || organization.admin.toString() !== userId){
        res.status(411).json({
            message:"Either organization not found or you are not an admin!"
        })
        return;
    }
    res.json(400,{
        message:"No boards found"
    })
})

app.get("/issues",(req,res)=>{

})

app.get("/members",(req,res)=>{

})

app.put("/issues",(req,res)=>{

})

app.delete("/members",authMiddleware,async (req,res)=>{
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;
    // const organization = ORGANIZATIONS.find(org =>org.id === organisationId);
    const organization = await organizationModel.findOne({
        _id: organizationId
    });
    if (!organization || organization.admin.toString() !== userId){
        res.status(411).json({
            message:"organization not found or you are not an admin!"
        })
        return;
    }
    // const memberUser = USERS.find(u => u.username === memberUsername);
    const memberUser = await userModel.findOne({
        username: memberUsername
    });
    if (!memberUser){
        res.status(403).json({
            message:"member not in our database!"
        })
        return;
    }
    // organization.members = organization.members.filter(user => user.id !== memberUser.id);
    organization.members = organization.members.filter(x => x.toString() !== memberUser._id.toString());
    await organization.save();
    res.json({
        message:"member removed"
    })
})
app.listen(3005);