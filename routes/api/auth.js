const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");

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
    res.status(500).send("Server Error ..");
  }
});
// @route   POST api/auth
// @desc    User authentication & get token
// @access  Public
router.post(
  "/",
  [
    // التحقق من أن البريد الإلكتروني صالح
    check("email", "Please include a valid email").isEmail(),
    // التحقق من أن كلمة المرور ر
    check("password", "Please is required").exists(),
  ],
  async (req, res) => {
    // استخراج الأخطاء (إن وجدت) من الطلب
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid credentials-email" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid credentials-password" }] });
      }

      // Return jsonwebtoken
      // إرسال استجابة بسيطة
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error ...");
    }
  }
);

module.exports = router;
