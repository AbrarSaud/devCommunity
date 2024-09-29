const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
// @ route  GET api/profile
// @ desc   Test route
// @ access Pulic
router.get("/", (req, res) => res.send("Profile route"));
module.exports = router;
