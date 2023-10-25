import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hash(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ msg: "Signup success" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const vaildPassword = bcryptjs.compareSync(password, validUser.password);
    if (!vaildPassword) return next(errorHandler(401, "Wrong Credentials"));
  } catch (error) {
    next(error);
  }
};
