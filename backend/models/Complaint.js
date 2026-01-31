const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  category: String,
  description: String,
  location: String,
  priority: String,
  status: { type: String, default: "Submitted" },
  slaDeadline: Date
}, { timestamps: true });

module.exports = mongoose.model("Complaint", ComplaintSchema);
