const express = require("express");
const connectDB = require("./config/db");
const grievanceRoutes = require("./routes/grievanceRoutes");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/grievances", grievanceRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
