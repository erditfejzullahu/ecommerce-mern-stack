import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(conn.connection.host, ' mongodb connected');
        
    } catch (error) {
        console.error(error, ' mongodb error');
        process.exit(1) // 1 fail 0 success
    }
}