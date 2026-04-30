const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sk_db_user:1XrSoPIxQEFa7u06@cluster1.81hju9s.mongodb.net/TrelloNotes1")

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

const boardSchema = mongoose.Schema({
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
  const cardSchema = mongoose.Schema({ 
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
  const listSchema = mongoose.Schema({
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


const organizationModel = mongoose.model("Organizations", organizationSchema);
const userModel = mongoose.model("User", userSchema)
const boardModel = mongoose.model("Board", boardSchema);
const cardModel = mongoose.model("Card", cardSchema)
const listModel = mongoose.model("List", listSchema);
  

module.exports = { userModel, organizationModel, boardModel, cardModel, listModel };
