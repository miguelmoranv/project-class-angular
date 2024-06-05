import mongoose from "mongoose";
import Address from "./addressModel";

const saleSchema = new mongoose.Schema({
    id: { type: String},
    idClient: { type: String, required: true},
    status:{type: String, required:true,  enum: Object.values(TypeSale)},
    idUser:{ type: String, required: true},
    typePayment:{type: String,
        enum: Object.values(TypePayment),},
    total:{type: number},
    creationDate:{type:Date},
  
});
 

const Sale = mongoose.model('Sale', saleSchema);

export default Sale;