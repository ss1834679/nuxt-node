// api/users.js
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const connectDB = require('../utils/mongoose')

connectDB()

// 创建用户模型
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
const User = mongoose.model('User', UserSchema)

// 获取所有用户
router.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// 创建用户
router.post('/', async (req, res) => {
  const newUser = new User(req.body)
  await newUser.save()
  res.json(newUser)
})

module.exports = router
