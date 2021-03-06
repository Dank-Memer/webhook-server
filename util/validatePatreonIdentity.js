const { createHmac } = require('crypto');

module.exports = function validatePatreonIdentity (req, secret) {
  const hash = req.headers['x-patreon-signature'];
  const hmac = createHmac('md5', secret);
  hmac.update(req.body);
  const crypted = hmac.digest('hex');
  return crypted === hash;
};
