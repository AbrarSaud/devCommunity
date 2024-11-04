const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");
// @ route  GET api/auth
// @ desc   Test route
// @ access Pulic
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ..")
  }
});
module.exports = router;
