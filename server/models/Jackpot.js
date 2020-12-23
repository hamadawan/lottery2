const { Schema, model } = require("mongoose");

const jackpotSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["mega", "pick6", "powerball"]
    },
    jackpot: {
      type: Number,
      required: true
    },
    cashvalue: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = model("jackpot", jackpotSchema);
