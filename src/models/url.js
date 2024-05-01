const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
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

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
