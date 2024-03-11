const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: String,
  content: String,
});

function getDocumentModelForTenant(tenantId) {
  const db = mongoose.connection.useDb(`tenant_${tenantId}`, { useCache: true });
  console.log(`TenantId of DB connected: ${tenantId}`);
  return db.model('Document', documentSchema);
}

module.exports = getDocumentModelForTenant;
