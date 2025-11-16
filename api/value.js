/**
 * API handler that returns a configurable value between 0.0 and 1.0
 * Configure the value by editing the DEFAULT_VALUE constant below
 */

const DEFAULT_VALUE = 0.5; // Change this to any value between 0.0 and 1.0

export default function handler(req, res) {
  // Set CORS headers to allow requests from anywhere
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Validate that the value is between 0.0 and 1.0
  if (DEFAULT_VALUE < 0.0 || DEFAULT_VALUE > 1.0) {
    res.status(400).json({
      error: 'Value must be between 0.0 and 1.0',
      value: DEFAULT_VALUE
    });
    return;
  }

  res.status(200).json({
    value: DEFAULT_VALUE,
    timestamp: new Date().toISOString()
  });
}