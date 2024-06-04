import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import genToken from "../utils/genToken.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, pass, confPass } = req.body;

    if (pass !== confPass) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);

    // profile pic
    const pic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

    const newUser = new User({
      firstName,
      lastName,
      email,
      pass: hashedPass,
      profilePic: pic,
    });

    if (newUser) {
      // generate token here
      genToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, pass } = req.body;
    console.log("hit" + email + pass);
    const user = await User.findOne({ email });
    console.log(user);
    const isPasswordCorrect = await bcrypt.compare(pass, user?.pass || "");
    

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    genToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};