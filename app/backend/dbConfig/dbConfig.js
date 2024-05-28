import mongoose from "mongoose";
export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo db has connected");
    });
    connection.on("error", (e) => {
      console.log("Mongo db connection failed");
      console.log(e);
      process.exit(500);
    });
  } catch (e) {
    console.log("something went wrong in connecting to wrong");
    console.log(e);
  }
}