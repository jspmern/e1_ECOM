import { encryptPassword } from "../helper/authHelper.js";
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
