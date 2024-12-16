const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//Load environment variables
dotenv.config();


const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());


//Routes
const racerRouters = require("./routes/racerRoutes");
app.use("/api/racers", racerRouters);

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
