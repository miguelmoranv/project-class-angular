import Product from '../model/productModel.js';
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
    try {
        const { code, name, category, description,price,amount } = req.body;
        
        const product = new Product({ 
            
            code, 
            name,
             category, 
             description, 
             price: parseFloat(price),
             amount,
            status:true,
        creationDate: new Date()
    });

        await product.save();
        res.status(201).send(product);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id,code, name, description,price,amount } = req.body;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }
console.log(product)
        product.name=name;
        product.description=description;
        product.price= parseFloat(price);
        product.amount=product.amount+amount;

        await product.save()
                res.status(201).send(product);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
}

export const deleteProduct = async (req, res, next) => {
   
    try {
    
        const product = await Product.findById(req.params._id);

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }

        product.status=false;
        product.deleteDate=new Date();
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const getProduct = async (req, res) => {
    try {
        
        const product = await Product.find();

        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}
