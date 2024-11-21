import { User } from "../models/index.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { full_name, username, email, phone_number, address, password } =
      req.body;

    const existingUser = await User.findOne({
      where: { username, email },
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      full_name,
      username,
      email,
      phone_number,
      address,
      password: hashedPassword,
    });

    const userResponse = {
      ...newUser.toJSON(),
    };
    delete userResponse.password;

    const data = {
      id: userResponse.id,
    };
    generateToken(data, res);

    return res
      .status(201)
      .json({ message: "User created successfully", user: userResponse });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const userResponse = {
      ...user.toJSON(),
    };
    delete userResponse.password;

    const data = {
      id: userResponse.id,
    };

    generateToken(data, res);

    return res
      .status(200)
      .json({ message: "Login successful", user: userResponse });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
