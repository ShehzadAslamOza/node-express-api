const { BadRequest } = require("../errors/index");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log({ username, password });

  if (!username || !password) {
    throw new BadRequest("Please provide username and password");
  }

  // Just for id
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Yooo ${req.user.username}`,
    secret: `Here is your secret authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
