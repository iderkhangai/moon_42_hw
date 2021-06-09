// Retrieve all Customers from the database.
const utils = require("../utils/helper");
exports.getMagic = (req, res) => {
    // console.log("req", req.params.input);
    let response;
    let request = req.params.input.toLowerCase();
    if (!utils.isValid(request)) {
        res.status(400).send({
            message: "Parameter is invalid!",
            timestamp: new Date().toLocaleString(),
        });
    }
    try {
        response = utils.helper(req.params.input);
    } catch (error) {
        // console.log(error);
    }
    res.json({ result: response });
};