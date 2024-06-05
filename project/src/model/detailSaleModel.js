import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
    id: { type: String},
    idSale: { type: String, required: true, unique: true },
    IdProduct: { type: String, required: true },
    quantity: { type: number },
    amount: { type: number},
    unitPrice: { type: number},
    creationDate:{type:Date},
});
 

const Detail = mongoose.model('Detail', detailSchema);

export default Detail;