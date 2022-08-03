import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastname: String,
  age: Number,
});

export default model("User", userSchema);
