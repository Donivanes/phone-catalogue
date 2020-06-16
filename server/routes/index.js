const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

const phones = require("./phones");

router.use("/phones", phones);

module.exports = router;
