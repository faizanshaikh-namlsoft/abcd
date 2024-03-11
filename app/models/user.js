const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

function getUserModelForTenant(tenantId) {
  const db = mongoose.connection.useDb(`tenant_${tenantId}`, { useCache: true });
  console.log(`TenantId of DB connected: ${tenantId}`);
  return db.model('User', userSchema);
}

module.exports = getUserModelForTenant;
