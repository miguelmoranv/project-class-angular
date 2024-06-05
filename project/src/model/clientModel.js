import mongoose from "mongoose";
import Address from "./addressModel";

const clientSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true},
    lastName: { type: String, required: true},
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address:{type: Address},
    status:{type: Boolean},
    creationDate:{type:Date},
    deleteDate:{type:Date},
});
 

const Client = mongoose.model('Client', clientSchema);

export default Client;