const { getItemModelForTenant } = require('../models');

const getItemList = async (req, res) => {
  const tenantId = req.query.tenantId;
  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenantId in query parameters' });
  }
  const ItemModel = getItemModelForTenant(tenantId);
  console.log('Find items from', ItemModel.db.name);
  try {
    const items = await ItemModel.find();
    res.json({ items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createItem = async (req, res) => {
  const tenantId = req.query.tenantId;
  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenantId in query parameters' });
  }
  const { name, products } = req.body;
  const ItemModel = getItemModelForTenant(tenantId);
  console.log('Create item in', ItemModel.db.name);
  try {
    const item = new ItemModel({ name, products });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getItemList,
  createItem,
};
