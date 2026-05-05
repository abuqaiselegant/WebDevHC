// Users Table
// Organization Table
// Boards Table
// List Table
//cards Table

const express = require("express");
const {userModel, organizationModel, boardModel} = require("./models")

//issueId
//boardid
//users = []
//organizations = []

const app = express();
app.use(express.json());

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const userExist = await userModel.findOne({username: username})
    if (userExist){
        res.status(411).json({
            message: "user already exist"
        })
        return;
    }
    const newUser = await userModel.create({username, password, email})
    res.json({
        message:"user created successfully"
    })

})

app.post("/signin",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const userExist = await userModel.findOne({email: email})
    if (!userExist || userExist.password !== password){
        res.status(401).json({
            message:"invalid credential"
        })
        return;
    }
    // const token = jwt.sign({userId: userExist._id}, "secretkey123");
    // res.json({token})
    res.status(200).json({message:"login success"})
})

app.get("/users/:id",async(req,res)=>{
    const {id}  = req.params.id;
    const user = await userModel.findOne({_id:id});
    if (!user){
        res.status(404).json({
            message:"user not found"
        })
        return;
    }
    res.json(user)
})

app.post("/organizations",async (req,res)=>{
    const name = req.body.name;
    const description = req.body.description;
    const adminId = req.body.id;

    const org = new organizationModel({
        name,
        description,
        members:[adminId],
        admins:[adminId]
    })
    await org.save();
    res.json({
        message:"organization created successfully"
    })
})

app.get("/organizations",async(req,res)=>{
    const orgs = await organizationModel.find();
    res.json(orgs)

})

app.post("/add-member-to-organization", async (req,res)=>{
    const userId = req.body.userId;
    const organisationId = req.body.organisationId;
    const memberUsername = req.body.memberUsername;

    if(!userId || !organisationId || !memberUsername){
        return res.status(400).json({
            message: "required field not found!"
        })
    }
    
    const organization = await organizationModel.findOne({
        _id: organisationId
    })
    if (!organization){
        res.status(404).json({
            message: "organization not found"
        })
        return;
    }
    const memberUser = await userModel.findOne({
        username : memberUsername
    })
    if(!memberUser){
        return res.status(404).json({
            message:"user not found"
        })
    }

    organization.members.push(memberUser._id);
    await organization.save();

    res.json({
        message:"member added succssfully"
    })

})


app.post("/boards",async(req,res)=>{
    const name = req.body.name;
    const organizationId = req.body.organizationId;
//  const user = await userModel.findById(id).select('-password');  // Don't send password!
    const org = organizationModel.findOne({_id:organizationId});
    if (!org){
        res.status(400).json({
            message:"org not found"
        })
        return ;
    }
    const newBoard = new boardModel({
        name : "questions",
        organizationId: organizationId
    })
    await newBoard.save();
    res.json({
        message:"board created successfully"
    })


})

app.get("/boards/:orgId",async(req,res)=>{
    const orgId = req.params.orgId;
    const boards = await boardModel.findOne({_id : orgId})

    if (!boards){
        res.status(404)
        return;
    }
    res.json(boards);

})

app.post("/lists",(req,res)=>{
    
})

app.get("/lists/:boardId",(req,res)=>{

})

app.post("/cards",(req,res)=>{

})

app.post("/cards/:listId",(req,res)=>{})











app.listen(3000);