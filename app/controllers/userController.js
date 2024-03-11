const { getUserModelForTenant } = require('../models');

const getUserList = async (req, res) => {
  const tenantId = req.query.tenantId;
  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenantId in query parameters' });
  }
  const UserModel = getUserModelForTenant(tenantId);
  console.log('Find users from', UserModel.db.name);
  try {
    const users = await UserModel.find();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const createUser = async (req, res) => {
  const tenantId = req.query.tenantId;
  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenantId in query parameters' });
  }
  const { name, email } = req.body;
  const UserModel = getUserModelForTenant(tenantId);
  console.log('Create user in', UserModel.db.name);
  try {
    const user = new UserModel({ name, email });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUserList,
  createUser,
};
