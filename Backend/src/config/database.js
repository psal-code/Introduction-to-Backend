import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB connected !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection failed (${error.name}): ${error.message}`);

        for (const [address, server] of error.reason?.servers ?? []) {
            if (server.error) {
                console.error(`${address}: ${server.error.name}: ${server.error.message}`);
            }
        }

        process.exit(1);
    }
};

export default connectDB;