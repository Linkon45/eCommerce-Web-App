import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to mongoDB: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
