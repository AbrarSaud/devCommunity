const express = require("express");// استدعاء مكتبة Express.js

const app = express();// إنشاء تطبيق Express:

app.get("/", (req, res) => res.send("API Running"));// تعريف مسار (Route) بسيط:
const PORT = process.env.PORT || 5000; // تحديد رقم المنفذ (PORT):

// تشغيل الخادم:
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
