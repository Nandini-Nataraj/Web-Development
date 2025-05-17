const express = require("express");
const { postComment, getComments } = require("../controllers/commentController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/", authenticate, postComment);
router.get("/:movieId", getComments);
module.exports = router;


