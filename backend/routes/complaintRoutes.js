const express = require("express");
const router = express.Router();
const Grievance = require("../models/Grievance");

router.post("/submit", async (req, res) => {
  const grievance = new Grievance(req.body);
  await grievance.save();
  res.json({ message: "Grievance submitted successfully" });
});

router.get("/", async (req, res) => {
  const data = await Grievance.find();
  res.json(data);
});

module.exports = router;
