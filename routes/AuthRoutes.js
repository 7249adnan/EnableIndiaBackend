const express = require("express");
//const { signup, login } = require("../controllers/authController");
const router = express.Router();

/* router.post("/signup", signup);
router.post("/login", login); */

router.get("/", (req, res) => {
  res.json({ message: "Express is running, hello world!" });
});

router.get("/hello", (req, res) => {
  res.send("Express is running hello worls!");
});

module.exports = router;
