import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import path from "path"

dotenv.config()

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products', productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend/dist")))
    app.get('/{*any}', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
}

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Serve started at localhost:${process.env.PORT}`);
})