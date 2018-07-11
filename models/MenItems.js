const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentItemShema = new Schema({
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
        ref: "menitems"
      }
    }
  ]
});

module.exports = MenItem = mongoose.model("menitems", MentItemShema);
