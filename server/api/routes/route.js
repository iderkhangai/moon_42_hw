const interviews = require("../controllers/mainController");
module.exports = function(app) {
    // simple route to check system is healthy
    app.get("/", (req, res) => {
        res.json({ message: "System is up" });
    });
    //api route
    app.get("/api/interview/magic/:input", interviews.getMagic);
    //for other url it responds following error
    app.all("*", function(req, res) {
        res.status(400).json({ message: "Invalid URL" });
    });
};