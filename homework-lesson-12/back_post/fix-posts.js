const fs = require('fs')
const input = fs.readFileSync('posts.json', 'utf-8')

// Replace single quotes with double quotes for keys and string values, remove comments and trailing commas
const fixed = input
  .replace(/([,{\s])([a-zA-Z0-9_]+):/g, '$1"$2":') // keys
  .replace(/'([^']*)'/g, '"$1"') // string values
  .replace(/,\s*([}\]])/g, '$1') // trailing commas
  .replace(/\/\/.*$/gm, '') // remove comments
  .replace(/\n\s*\n/g, '\n') // remove empty lines

// Try to parse and pretty print
try {
  const arr = JSON.parse(fixed)
  fs.writeFileSync('posts.json', JSON.stringify(arr, null, 2), 'utf-8')
  console.log('posts.json fixed and saved!')
} catch (e) {
  console.error('Error parsing JSON:', e.message)
}
