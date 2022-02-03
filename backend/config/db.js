import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to mongoDB: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(err.message.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
