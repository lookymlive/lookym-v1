
import mongoose from "mongoose";

let connection: typeof mongoose;

const startDb = async () => {
  const url = process.env.MONGO_URI;
  if (!url) throw Error("Missing env variable 'MONGO_URI'");
  
  try {
    if (!connection) {
      connection = await mongoose.connect(url);
      console.log('Connected successfully to MongoDB');
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', (error as any).message);
    throw Error((error as any).message);
  }
};

export default startDb;
