import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/mongodbgraphql", {
      useNewUrlParser: true,
    });
    console.log(">>> DB Connected");
  } catch {
    console.log(">>> Mongo Connection Error");
  }
}
