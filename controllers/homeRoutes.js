const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const isAuth = require("../utils/isauth");

router.get("/", async (req, res) => {
  try {
    const dbArticleData = await Post.findAll({
      attributes: ["id", "title", "article", "date"],
      include: [
        {
          model: User,
          required: true,
          attributes: ["username"],
        },
      ],
    });
    const articles = dbArticleData.map((article) =>
      article.get({ plain: true })
    );
    res.render("articles", { articles, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", isAuth, async (req, res) => {
  res.render("dash", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  res.render("auth");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  const isLogin = true;
  res.render("auth", { isLogin });
});

router.get("/posts/:id", async (req, res) => {
  try {
    const dbArticleData = await Post.findOne({
      attributes: ["id", "title", "article", "date"],
      where: { id: req.path.split("/")[2] },
      include: [
        {
          model: User,
          required: true,
          attributes: ["username"],
        },
      ],
    });

    const dbCommentData = await Comment.findAll({
      attributes: ["comment", "date"],
      where: { post_id: req.path.split("/")[2] },
      include: [
        {
          model: User,
          required: true,
          attributes: ["username"],
        },
      ],
    });
    const article = dbArticleData.get({ plain: true });
    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );
    res.render("article", {
      article,
      comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
