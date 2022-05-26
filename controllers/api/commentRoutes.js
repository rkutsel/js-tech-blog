const router = require("express").Router();
const { Comment } = require("../../models");
const date = require("../../utils/helpers");
const isAuth = require("../../utils/isauth");

router.post("/", isAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      date: date.format_date(),
      user_id: req.session.user_id,
      post_id: req.body.postId,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
