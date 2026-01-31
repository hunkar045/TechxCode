const mongoose = require("mongoose");

const grievanceSchema = new mongoose.Schema({
  citizenName: String,
  category: String,
  description: String,
  department: String,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Grievance", grievanceSchema);
