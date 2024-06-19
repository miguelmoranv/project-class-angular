import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String},
    username: { type: String, required: true, unique: true },
    name: { type: String},
    lastName: { type: String},
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    status:{type: Boolean, required:true},
    creationDate:{type:Date},
    role:{type: String},
    deleteDate:{type:Date},
    idClient: { type: String},
});
 

const User = mongoose.model('User', userSchema);

export default User;