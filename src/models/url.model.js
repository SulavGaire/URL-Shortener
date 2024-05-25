import mongoose, {Schema} from "mongoose";

const urlSchema = new Schema(
  {
    original: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Url = mongoose.model("Url", urlSchema);

