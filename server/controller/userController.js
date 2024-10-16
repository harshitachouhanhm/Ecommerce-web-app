const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Sign up
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let check = await Users.findOne({ email });
    if (check) {
      return res.status(400).json({ errors: "Existing user found with this email" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({
      name: username,
      email,
      password,
      cartData: cart,
    });
    await user.save();

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ email });
    if (!user || password !== user.password) {
      return res.status(400).json({ errors: "Invalid credentials" });
    }

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
