const express = require("express");
const path = require("path");
const apiRoutes = require("./api");

const router = express.Router();

// The router is going to look for an index inside ./api for any URL that uses the index/api URL
// It'll be looking for an index in that ./api folder
router.use("/api", apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;