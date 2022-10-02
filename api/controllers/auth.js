import User from '../models/User.js';

export const register = async (req, res, next) => {
  try {
    const newUesr = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUesr.save();
    res.status(200).json('User has been created!');
  } catch (err) {
    next(err);
  }
};
