const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load items model
const MenItem = require("../../models/MenItems");
const WomenItem = require("../../models/WomenItems");
const User = require("../../models/User");

//@route  GET api/items/menItems
//@desc   Get posts
//@access Public
router.get("/menitems", (req, res) => {
  MenItem.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found." }));
});

// @route   POST api/items/menitems
// @desc    Men item
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
    User.findOne({ user: req.user.id }).then(user => {
      MenItem.findById(req.params.id)
        .then(item => {
          if (
            item.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            const removeIndex = item.likes
              .map(like => like.user.toString())
              .indexOf(req.user.id);
            // Remove like from array
            item.likes.splice(removeIndex, 1);
            // Save
            item.save().then(item => res.json(item));
          } else {
            item.likes.unshift({ user: req.user.id });
            item.save().then(item => res.json(item));
          }
        })
        .catch(err => err.status(404).json({ usernotfound: "user not found" }));
    });
  }
);

// @route   POST api/items/womenitems
// @desc    Women item
// @access  Private
router.post(
  "/womenitems",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newItem = new WomenItem({
      nameItem: req.body.nameItem
    });
    newItem.save().then(item => {
      res.json(item);
    });
  }
);

//@route  GET api/items/menItems
//@desc   Get posts
//@access Public
router.get("/womenitems", (req, res) => {
  WomenItem.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found." }));
});

// @route   POST api/items/womenitems/like/:id
// @desc    Women item like
// @access  Private
router.post(
  "/womenitems/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
      WomenItem.findById(req.params.id)
        .then(item => {
          if (
            item.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            const removeIndex = item.likes
              .map(like => like.user.toString())
              .indexOf(req.user.id);
            // Remove like from array
            item.likes.splice(removeIndex, 1);
            // Save
            item.save().then(item => res.json(item));
          } else {
            item.likes.unshift({ user: req.user.id });
            item.save().then(item => res.json(item));
          }
        })
        .catch(err => err.status(404).json({ usernotfound: "user not found" }));
    });
  }
);

module.exports = router;
