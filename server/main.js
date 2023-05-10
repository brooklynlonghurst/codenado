const express = require('express')
const {login, register } = require('./controllers/auth')
const db = require('./util/database')
const {User, Post, Like} = require('./util/models')

const app = express()
app.use(express.json())

//! associations
User.hasMany(Post) //one user can have many post
Post.belongsTo(User) //one post belongs to one user

Like.belongsTo(Post) //likes belong to one post
Post.hasMany(Like) //one post can have many likes

Like.belongsTo(User) //likes belong to one user
User.hasMany(Like) //one user can have many likes

app.post('/api/register')
app.post('/api/login')

db.sync()

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})