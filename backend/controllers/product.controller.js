import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    const product = req.body; //user will send product body data

    if(!product.name || !product.price || !product.image){
        res.status(400).json({success: false, message: "Please provide all fields."})
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Serve error."})
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error"})
    }
}

export const deleteProductById = async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error."})
    }
}

export const updateProductById = async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, body, {new: true}) //new true return the new updated object;
        res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error"})
    }
}