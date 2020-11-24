const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
    firstName: String,
    lastName: String,
    password: {
      type: String,
      require: false,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', User)
