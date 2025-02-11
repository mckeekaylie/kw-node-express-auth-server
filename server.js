const express = require("express");
const app = express();

const cors = require("cors");

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", (req, res) => {
  const token = jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: "1h" });
  const response = token;
  return res.status(200).json(response);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
