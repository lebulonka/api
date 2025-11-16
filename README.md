# Value API

A simple serverless API that returns a configurable value between 0.0 and 1.0.

## How to Use

1. Edit `index.js` and change the `value` variable to your desired number (0.0-1.0)
2. Push to GitHub
3. Vercel will automatically redeploy

## Fetch the Value

```javascript
fetch('https://apideep.vercel.app/')
  .then(res => res.json())
  .then(data => console.log(data.value))
```
