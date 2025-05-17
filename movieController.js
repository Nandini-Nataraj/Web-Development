const axios = require("axios");
const User = require("../models/userModel");

exports.getMovieDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id; // Extracted from JWT
        const movieDetails = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.e865be78b51a72545ae5e9a3a4ade872}`
        );

        await User.findByIdAndUpdate(userId, { $addToSet: { viewedMovies: id } });
        res.json(movieDetails.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movie details" });
    }
};
