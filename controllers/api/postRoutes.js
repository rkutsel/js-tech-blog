const router = require("express").Router();
const { Post } = require("../../models");
const date = require("../../utils/helpers");

router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      date: date.format_date(),
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
