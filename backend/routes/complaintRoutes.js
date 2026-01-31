const router = require("express").Router();
const { createComplaint, getComplaints } = require("../controllers/complaintController");

router.post("/", createComplaint);
router.get("/", getComplaints);

module.exports = router;
