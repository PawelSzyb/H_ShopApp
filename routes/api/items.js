const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load items model
const MenItem = require("../../models/MenItems");
const User = require("../../models/User");

// @route   POST api/items/menitems
// @desc    Men item like
// @access  Private
router.post(
  "/menitems",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newItem = new MenItem({
      nameItem: req.body.nameItem
    });
    newItem.save().then(item => {
      res.json(item);
    });
  }
);

// @route   POST api/items/menitems/like/:id
// @desc    Men item like
// @access  Private
router.post(
  "/menitems/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ email: req.email });
    then(user => {
      MenItem.findById(req.params.id)
        .then(item => {})
        .catch(err => res.status(404).json({ itemnotfound: "Item not found" }));
    });
  }
);

module.exports = router;
