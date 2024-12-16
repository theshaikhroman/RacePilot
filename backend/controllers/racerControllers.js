const getRacers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "fetching all racers.",
        data: [],
    });
};

module.exports = {getRacers};