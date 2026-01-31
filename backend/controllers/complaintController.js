const Complaint = require("../models/Complaint");
const getPriority = require("../utils/priorityEngine");

exports.createComplaint = async (req, res) => {
  const priority = getPriority(req.body.category);
  const slaHours = priority === "High" ? 12 : 48;

  const complaint = await Complaint.create({
    ...req.body,
    priority,
    slaDeadline: new Date(Date.now() + slaHours * 3600000)
  });

  res.json(complaint);
};

exports.getComplaints = async (req, res) => {
  const data = await Complaint.find();
  res.json(data);
};
