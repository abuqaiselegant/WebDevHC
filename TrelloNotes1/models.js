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
    name: String,
    description: String,
    members: [mongoose. Types.ObjectId],
    admin: [mongoose. Types.ObjectId],
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

const BoardsSchema = mongoose.Schema({
    name: String,
    organizationId: orgId,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
const CardSchema = mongoose.Schema({
    listId: listId,
    description: String,
    title:String,
    position: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  const ListSchema = mongoose.Schema({
    title: String,
    boardId: String,
    position: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });


const organizationModel = mongoose.model("organizations", organizationSchema);
const userModel = mongoose.model("users", userSchema)
const boardsModel = mongoose.model("boards", BoardsSchema);
const cardModel = mongoose.model("users", CardSchema)
const listModel = mongoose.model("lists", ListSchema);





  

