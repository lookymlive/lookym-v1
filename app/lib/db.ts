import mongoose from "mongoose";

const startDb = async () => {
  const url = process.env.MONGO_URI;
  if (!url) throw new Error("Missing environment variable 'MONGO_URI'");

  try {
    if (mongoose.connection.readyState === 0) { // 0 significa desconectado
      await mongoose.connect(url);
      console.log("Connected successfully to MongoDB");
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB:", (error as Error).message);
    throw new Error(`MongoDB connection error: ${(error as Error).message}`);
  }
};

// Cerrar la conexión al cerrar el servidor, solo para entornos de desarrollo
if (process.env.NODE_ENV === "development") {
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
  });
}

export default startDb;

