import MESSAGES from "@/constants/message";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, MESSAGES.NAME_REQUIRED],
    },
    email: {
      type: String,
      required: [true, MESSAGES.EMAIL_REQUIRED],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, MESSAGES.PHONE_REQUIRED],
      unique: true,
    },
    password: {
      type: String,
      required: [true, MESSAGES.PASSWORD_REQUIRED],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
