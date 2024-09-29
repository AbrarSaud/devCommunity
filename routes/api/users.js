const express = require("express"); // استدعاء مكتبة Express.js
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/user
// @desc    User registration
// @access  Public
router.post(
  "/",
  [
    // التحقق من أن الاسم غير فارغ
    check("name", "Name is required").not().isEmpty(),

    // التحقق من أن البريد الإلكتروني صالح
    check("email", "Please include a valid email").isEmail(),

    // التحقق من أن كلمة المرور تحتوي على 6 أحرف أو أكثر
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    // استخراج الأخطاء (إن وجدت) من الطلب
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // طباعة البيانات المرسلة في الطلب
    console.log(req.body);

    // إرسال استجابة بسيطة
    res.send("User route");
  }
);

module.exports = router;
