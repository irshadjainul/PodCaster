import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (username.length < 5) {
      return res.status(400).json({ message: "Username length must be 5" });
    }
    if (password.length < 5) {
      return res.status(400).json({ message: "Password length must be 5" });
    }

    //checking user exist or not
    const existingEmail = await userModel.findOne({ email: email });
    const existingUsername = await userModel.findOne({ username: username });
    if (existingUsername || existingEmail) {
      return res
        .status(400)
        .json({ message: "Username or Email already exist" });
    }

    //hashing pass
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({ username, email, password: hashPass });
    await newUser.save();

    return res.status(200).json({ message: "Acount Created" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //checking user exists or not
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid Credential" });
    }
    //checking password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    //generate jwttoken
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.cookie("podcasterUserToken", token, () => {
      httpOnly: true;
      maxAge: 30 * 24 * 60 * 60 * 1000;
      secure: process.env.NODE_ENV === "production";
      sameSite: "None";
    });
    return res.status(200).json({
      message: "Login Successful",
      id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const logout = async (req, res) => {
  await res.clearCookie("podcasterUserToken", { httpOnly: true });
  res.status(200).json({ message: "Logged out successfull" });
};

const checkCookie = (req, res) => {
  const token = req.cookies.podcasterUserToken;
  if (token) {
   return res.status(200).json({ message: true });
  }
  return res.status(200).json({ message: false });
};

const userDetails = async (req, res) => {
  try {
    const { email } = req.user;
    const existingUser = await userModel
      .findOne({ email: email })
      .select("-password");
    return res.status(200).json({ user: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default { register, login, logout, checkCookie, userDetails };
