const express = require("express");
const cors = require("cors");
app = express();
app.use(cors());

require("./api/routes/route.js")(app);
// setting port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});