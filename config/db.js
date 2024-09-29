// db.js
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mondoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected ...");
  } catch (err) {
    console.error(`error: ${err.message}`);
    console.error(`error: ${err.name} - ${err.message}`);

    process.exit(1);
  }
};
// console.log("Connecting to database:", db); // طباعة سلسلة الاتصال

module.exports = connectDB; // تصدير الدالة
