import { encryptPassword, matchPassword } from "../helper/authHelper.js";
import usersModel from "../model/usersModel.js";
//this is my controller for registration
export let registerController = async (req, res) => {
  let { email, password, name, address, phone } = req.body;
  try {
    if (!email) {
      return res.status(500).send({ message: "email is required *" });
    }
    if (!password) {
      return res.status(500).send({ message: "password is required *" });
    }
    if (!name) {
      return res.status(500).send({ message: "name is required *" });
    }
    if (!address) {
      return res.status(500).send({ message: "address is required *" });
    }
    if (!phone) {
      return res.status(500).send({ message: "phone is required *" });
    }
    let findUser = await usersModel.findOne({ email: email });
    if (findUser) {
      return res.status(200).send({ message: "User is Already Register" });
    }
    let hashpassword = await encryptPassword(password);
    let user = await new usersModel({
      name,
      password: hashpassword,
      address,
      phone,
      email,
    }).save();

    res
      .status(201)
      .send({ message: "User is registered Successfully", success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Somthing wrong while registration",
      err,
      success: false,
    });
  }
};
export let loginController = async (req, res) => {
  let { email, password } = req.body;
  if (!email) {
    res.status(500).send({ message: "Email field is required*" });
  }
  if (!password) {
    res.status(500).send({ message: "Password field is required*" });
  }
  let existingUser = await usersModel.findOne({ email: email });
  console.log("existing user", existingUser);
  if (!existingUser) {
      return  res.status(200).send({ message: "Either Email or password is invalid" });
  }
  let result = await matchPassword(password, existingUser.password);
  if (!result) {
     return  res.status(200).send({ message: " Either Email or password is invalid" });
  }c
  res.send("hello");
};
