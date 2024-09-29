const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
// @ route  GET api/user
// @ desc   Test route
// @ access Pulic
router.get("/", (req, res) => res.send("User route"));
module.exports = router;
