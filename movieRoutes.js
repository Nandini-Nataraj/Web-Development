const express = require("express");
const { getMovieDetails } = require("../controllers/movieController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/:id", authenticate, getMovieDetails);
module.exports = router;

