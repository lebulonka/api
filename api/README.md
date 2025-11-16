# Value API

A simple serverless API that returns a configurable value between 0.0 and 1.0.

## Quick Start

### Local Development

```bash
npm install -g vercel
npm run dev
```

Then visit `http://localhost:3000` in your browser.

### Configuration

Edit the `DEFAULT_VALUE` constant in `api/value.js` to change the returned value:

```javascript
const DEFAULT_VALUE = 0.5; // Change this to any value between 0.0 and 1.0
```

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Select your GitHub repository
4. Click "Deploy"
5. Every push to your repository will automatically redeploy your API

### Option 2: Deploy via CLI

```bash
vercel
```

## API Usage

### Endpoint

```
GET / or GET /value
```

### Response

```json
{
  "value": 0.5,
  "timestamp": "2025-11-16T10:30:00.000Z"
}
```

### CORS

This API supports CORS and can be called from any origin.

## Example Requests

```bash
# Using curl
curl https://your-api.vercel.app/

# Using JavaScript fetch
fetch('https://your-api.vercel.app/')
  .then(res => res.json())
  .then(data => console.log(data.value))

# Using Python
import requests
response = requests.get('https://your-api.vercel.app/')
print(response.json()['value'])
```

## Error Handling

If the value is not between 0.0 and 1.0, you'll receive:

```json
{
  "error": "Value must be between 0.0 and 1.0",
  "value": <your_value>
}
```

## File Structure

```
api/
├── api/
│   ├── value.js          # Main API handler
│   ├── package.json      # Project configuration
│   ├── vercel.json       # Vercel deployment configuration
│   ├── .gitignore        # Git ignore rules
│   └── README.md         # This file
└── .git/                 # Git repository
```
