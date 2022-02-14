import userModel from "../models/userModel.js";

const regiaterUser = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phoneNumber ||
    !req.body.password
  )
    return res.status(400).send({ message: "Incomplete data" });

  let schema = new userModel({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    dbStatus: true,
  });

  let result = await schema.save();
  if(!result) return res.status(500).send({message: "failed to register user"})

  res.status(200).send({result});
};

export default {regiaterUser}
