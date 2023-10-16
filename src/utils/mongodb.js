import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log("Database Connected");
  } catch (error) {
    console.log("DB Connextion error:", error);
  }
};
