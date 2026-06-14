// Very small auth guard for a personal portfolio backend.
// Requests that create/update/delete data (or read contact messages) must
// send a header:  x-admin-key: <ADMIN_KEY from .env>
// This is intentionally simple - it just keeps random visitors from
// editing your portfolio content or reading your inbox.

function requireAdmin(req, res, next) {
  const providedKey = req.header('x-admin-key');
  const expectedKey = process.env.ADMIN_KEY;

  if (!expectedKey) {
    return res.status(500).json({
      error: 'Server misconfigured: ADMIN_KEY is not set in the environment.',
    });
  }

  if (!providedKey || providedKey !== expectedKey) {
    return res.status(401).json({ error: 'Unauthorized: missing or invalid admin key.' });
  }

  next();
}

module.exports = requireAdmin;
