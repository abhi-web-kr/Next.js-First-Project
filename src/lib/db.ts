import { error } from "console";
import { connect } from "mongoose";

let mongodbUrl = process.env.MONGODB_URI;
if (!mongodbUrl) {
    throw new Error("mongodb url is not found");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if(!cached.promise) {
        cached.promise = connect(mongodbUrl).then((c) => c.connection);
    }

    try {
        cached.conn = await cached.promise;
    } catch {
        throw error;
    }

    return cached.conn;
};

export default connectDB;
