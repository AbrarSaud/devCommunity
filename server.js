const express = require("express"); // استدعاء مكتبة Express.js
const connectDB = require("./config/db");

const app = express(); // إنشاء تطبيق Express:


//  Connected Database 
connectDB(); 
app.get("/", (req, res) => res.send("API Running")); // تعريف مسار (Route) بسيط:

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))

const PORT = process.env.PORT || 5000; // تحديد رقم المنفذ (PORT):

// تشغيل الخادم:
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
