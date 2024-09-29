const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
// @ route  GET api/auth
// @ desc   Test route
// @ access Pulic
router.get("/", (req, res) => res.send("Auth route"));
module.exports = router;
