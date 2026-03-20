const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')

const app = express()
const PORT = process.env.PORT || 3000
const DATA_FILE = path.join(__dirname, 'posts.json')

app.use(cors())
app.use(bodyParser.json())

// Helper to read posts from file
function readPosts() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (e) {
    return []
  }
}

// Helper to write posts to file
function writePosts(posts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf-8')
}

// Middleware для затримки 3 секунди
app.use((req, res, next) => {
  setTimeout(next, 3000)
})

// GET /posts (with pagination)
app.get('/posts', (req, res) => {
  const { page = 1, limit = 10 } = req.query
  const posts = readPosts()
  const total = posts.length
  const pageNum = parseInt(page, 10)
  const limitNum = parseInt(limit, 10)
  const start = (pageNum - 1) * limitNum
  const paginated = posts.slice(start, start + limitNum)
  res.json({
    posts: paginated,
    meta: {
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      totalPagesNumber: Math.ceil(total / limitNum),
    },
  })
})

// GET /posts/:id
app.get('/posts/:id', (req, res) => {
  const posts = readPosts()
  const post = posts.find((p) => p.id === req.params.id)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  res.json(post)
})

// POST /posts
app.post('/posts', (req, res) => {
  const posts = readPosts()
  const {
    authorId,
    title,
    body,
    likesNumber = 0,
    dislikesNumber = 0,
  } = req.body
  const newPost = {
    id: uuidv4(),
    authorId,
    title,
    body,
    likesNumber,
    dislikesNumber,
    createdAt: new Date().toISOString(),
  }
  posts.unshift(newPost)
  writePosts(posts)
  res.status(201).json(newPost)
})

// PUT /posts/:id
app.put('/posts/:id', (req, res) => {
  const posts = readPosts()
  const idx = posts.findIndex((p) => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Post not found' })
  const updated = { ...posts[idx], ...req.body }
  posts[idx] = updated
  writePosts(posts)
  res.json(updated)
})

// DELETE /posts/:id
app.delete('/posts/:id', (req, res) => {
  let posts = readPosts()
  const idx = posts.findIndex((p) => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Post not found' })
  const [deleted] = posts.splice(idx, 1)
  writePosts(posts)
  res.json(deleted)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
