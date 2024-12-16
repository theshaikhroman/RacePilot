const express = require("express");
const router = express.Router();

//Controller
const { getRacers } = require("../controllers/racerControllers");

//Routes
router.get("/", getRacers);

module.exports = router;
