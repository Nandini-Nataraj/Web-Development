const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    viewedMovies: [{ type: String }], 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], 
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

