import mongoose, { Schema } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 10);

const urlSchema = new Schema(
  {
    full: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
      default: () => nanoid(),
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

export const Url = mongoose.model("Url", urlSchema);
