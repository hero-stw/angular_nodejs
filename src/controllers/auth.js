import User from "../models/users";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({
      user: {
        _id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Can not create user" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ _id: user._id }, "process.env.SECRET", {
      expiresIn: "1h",
    });
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Can not sign in" });
  }
};
export const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).exec();
    if (!user) {
      res.status(400).json({
        message: "Cant find user with this Id",
      });
    }
    req.profile = user;
    req.profile.password = undefined;
    next();
  } catch (error) {
    console.log(error);
  }
};
