const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  products: [String],
});

function getItemModelForTenant(tenantId) {
  const db = mongoose.connection.useDb(`tenant_${tenantId}`, { useCache: true });
  console.log(`TenantId of DB connected: ${tenantId}`);
  return db.model('Item', itemSchema);
}

module.exports = getItemModelForTenant;
