const { getDocumentModelForTenant } = require('../models');

const getDocumentList = async (req, res) => {
  const tenantId = req.query.tenantId;
  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenantId in query parameters' });
  }
  const DocumentModel = getDocumentModelForTenant(tenantId);
  console.log('Find documents from', DocumentModel.db.name);
  try {
    const documents = await DocumentModel.find();
    res.json({ documents });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createDocument = async (req, res) => {
  const tenantId = req.query.tenantId;
  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenantId in query parameters' });
  }
  const { name, content } = req.body;
  const DocumentModel = getDocumentModelForTenant(tenantId);
  console.log('Create document in', DocumentModel.db.name);
  try {
    const document = new DocumentModel({ name, content });
    const savedDocument = await document.save();
    res.status(201).json(savedDocument);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getDocumentList,
  createDocument,
};
