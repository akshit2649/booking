import User from '../models/User';

export const register = (req, res, next) => {
  try {
    const newUesr = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  } catch (err) {}
};
