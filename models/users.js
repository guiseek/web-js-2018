let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
  nome: {
    type: String,
    // unique: true,
    required: true
  },
  idade: {
    type: Number
  },
  created: {
    type: Date
  }
})

UserSchema.pre('save', next => {
  let usuario = this
  if (this.isNew) {
    usuario.created = new Date()
  }
  next();
})

module.exports = mongoose.model('users', UserSchema)
