import Mongoose from "mongoose";

const userSchema =new Mongoose.Schema({
    name:String,
    email: String,
    phoneNumber: String,
    password: String,
    registerDate: {type: Date, default: Date.now},
    dbStatus: Boolean
});

const user = Mongoose.model("users", userSchema);

export default user;