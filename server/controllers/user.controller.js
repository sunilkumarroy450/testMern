const UserModel = require("../models/user.model");

exports.create_user = async (req, res) => {
  console.log(req.body, "body");
  try {
    const user = new UserModel({ ...req.body });
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    console.log(error, "Error creating User");
  }
};
