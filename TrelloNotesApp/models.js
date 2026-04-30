const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sk_db_user:@cluster1.81hju9s.mongodb.net/trello_app")//no pwd

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const organizationSchema = mongoose.Schema({
    title: String,
    description: String,
    members:[mongoose. Types.ObjectId],
    admin: [mongoose. Types.ObjectId]
})

const organizationModel = mongoose.model("organizations", organizationSchema);
const userModel = mongoose.model("users", userSchema)

module.exports = {
    organizationModel,
    userModel
}




