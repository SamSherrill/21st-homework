const express = require("express");
const controller = require("../../controllers/googleController")

const router = express.Router();

// I'll need to have one route, a get route, to pull from the Google API

router.route("/").get(controller.getBooks);

module.exports = router;