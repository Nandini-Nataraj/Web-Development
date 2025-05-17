const Comment = require("../models/commentModel");
const User = require("../models/userModel");

exports.postComment = async (req, res) => {
    try {
        const { movieId, content } = req.body;
        const userId = req.user.id;

        const comment = await Comment.create({ userId, movieId, content });
        await User.findByIdAndUpdate(userId, { $push: { comments: comment._id } });

        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getComments = async (req, res) => {
    try {
        const { movieId } = req.params;
        const comments = await Comment.find({ movieId }).populate("userId", "name");
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
};
