const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sk_db_user:1XrSoPIxQEFa7u06@cluster1.81hju9s.mongodb.net/trello_n")

const userSchema = mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

const organizationSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: String,
    members: [{type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    admin: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

const BoardsSchema = mongoose.Schema({
    name: {
        type:String,
        required: true},
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organisation',
        required:true},
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  const CardSchema = mongoose.Schema({ 
    listId: {  
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    position: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  const ListSchema = mongoose.Schema({
    title: {type: String,
            required: true},
    boardId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    position: {
        type: Number,
        default : 0},
    createdAt: {
      type: Date,
      default: Date.now
    }
  });


const organizationModel = mongoose.model("organizations", organizationSchema);
const userModel = mongoose.model("users", userSchema)
const boardsModel = mongoose.model("boards", BoardsSchema);
const cardModel = mongoose.model("cards", CardSchema)
const listModel = mongoose.model("lists", ListSchema);





  

