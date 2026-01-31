const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  category: String,
  description: String,
  location: String,
  priority: String,
  status: { type: String, default: "Submitted" },
  slaDeadline: Date
}, { timestamps: true });

module.exports = mongoose.model("Complaint", complaintSchema);
