const express = require("express");
const path = require("path");
const bookRoutes = require("./book-routes");
const googleRoutes = require("./google-routes");

const router = express.Router();

// router.use("/books", bookRoutes);
router.use("/google", googleRoutes);

module.exports = router;