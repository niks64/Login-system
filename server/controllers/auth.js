import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import User from "../models/user";

export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  //Validating the entries of the form
  if (!name) {
    return res.status(400).send("Please enter a name");
  }

  if (!password || password.length < 6) {
    return res
      .status(400)
      .send("Please enter a password of appropriate length");
  }

  if (!secret) {
    return res.status(400).send("Please enter an answer");
  }
  const exist = await User.findOne({ email });

  if (exist) {
    return res.status(400).send("Email is already in use");
  }

  //hashing the password
  const hashedPassword = await hashPassword(password);

  const user = new User({ name, email, password: hashedPassword, secret });

  try {
    await user.save();
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Gets the user from the database
    const user = await User.findOne({ email });

    //Checks if the user is in the database. Error if not
    if (!user) {
      return res.status(400).send("User not found");
    }

    //Checks if the passwords match, first arg: the password, second arg: hashed password
    const match = await comparePassword(password, user.password);

    //If it doesnt match, asks the user to try again
    if (!match) return res.status(400).send("Wrong password. Try again");

    //creates token. first arg: payload (id), second arg: env token var, third arg: expire
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //Not saving the users data
    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error");
  }
};
