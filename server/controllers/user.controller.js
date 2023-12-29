const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

exports.register_user = async (req, res) => {
  try {
    const { firstName, lastName, mobile, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      firstName,
      lastName,
      mobile,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    console.log(error, "Error creating User");
    return res.send("Error Singing up");
  }
};

exports.login_user = async (req, res) => {
  const { mobile, password } = req.body;
  try {
    const loggedInUser = await UserModel.findOne({ mobile: mobile });
    if (!loggedInUser) {
      return res.status(401).send("User with this mobile not found");
    }
    //validating password
    const isPasswordValid = bcrypt.compare(password, loggedInUser.password);

    //create jwt
    if (isPasswordValid) {
      const token = jwt.sign({ mobile: loggedInUser.mobile }, "SECRET", {
        expiresIn: "1h",
      });
      return res.status(200).send({
        token: token,
        user: loggedInUser,
        msg: "Login Success",
      });
    } else {
      return res.status(401).send("Invalid Password");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Invalid credentails");
  }
};

exports.authenticate_token = async (req, res) => {
  return res.send({ message: "This is a protected route" });
};
