const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentItemShema = new Schema({
  nameItem: {
    type: String,
    isRequired: true
  }
});

module.exports = MenItem = mongoose.model("menitems", MentItemShema);
