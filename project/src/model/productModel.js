import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: String },
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    price: { type: Number },
    amount:{type: Number},
    status:{type: Boolean},
    creationDate:{type:Date},
    deleteDate:{type:Date},
});
 

const Product = mongoose.model('Products', productSchema);

export default Product;