const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mondoURI");

const connectDB = async () => {
  try {
    // محاولة الاتصال بقاعدة البيانات مع الخيارات المناسبة
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useNewUrlParser: true,  // حل مشكلة التحليل الجديد
      useUnifiedTopology: true, // استخدام الطوبولوجيا الموحدة
    });
    console.log("MongoDB Connected ...");
  } catch (err) {
    console.error(`error: ${err.message}`);
    console.error(`error: ${err.name} - ${err.message}`);

    process.exit(1);
  }
};
// console.log("Connecting to database:", db); // طباعة سلسلة الاتصال

module.exports = connectDB; // تصدير الدالة
