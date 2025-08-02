import express from "express"
import Product from "../models/product.model.js";
import { createProduct, deleteProductById, getProducts, updateProductById } from "../controllers/product.controller.js";

const router = express.Router();

router.post('/', createProduct)

router.get('/', getProducts)

router.delete('/:id', deleteProductById)

router.patch('/:id', updateProductById)

export default router;