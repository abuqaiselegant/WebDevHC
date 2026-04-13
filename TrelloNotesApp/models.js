const mongoose = require("mongoose");
mongoose.connect("");


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

const organizationModel = mongoose.model("organizations", orgainzationSchema);
const userModel = mongoose.model("users", userSchema)

module.exports = {
    organizationModel,
    userModel
}