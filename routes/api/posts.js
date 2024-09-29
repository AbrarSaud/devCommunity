const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
// @ route  GET api/posts
// @ desc   Test route
// @ access Pulic
router.get("/", (req, res) => res.send("Posts route"));
module.exports = router;
