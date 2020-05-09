const express = require("express");
const path = require("path");
const apiRoutes = require("./api");

const router = express.Router();

router.use("/api", apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;