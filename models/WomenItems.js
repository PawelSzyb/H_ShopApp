const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WomenItemShema = new Schema({
  nameItem: {
    type: String,
    isRequired: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "womenitems"
      }
    }
  ]
});

module.exports = WomenItem = mongoose.model("womenitems", WomenItemShema);
