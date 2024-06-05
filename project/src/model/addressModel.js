import mongoose from "mongoose";

const Address = {
    street: { type: String, required: true, unique: true },
    neibohood: { type: String, required: true, unique: true },
    zipCode: { type: String, required: true },
    city: { type: String, required: true },
};


export default Address;