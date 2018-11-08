

const mongoose = require('mongoose');

const schema = mongoose.Schema;


const UserSchema = new Schema({

  userName: {
    type: string,
    required: true,
    unique: true
  },
  password: {
    type: string,
    required: true
  },
  admin: {
    type: boolean,
    default: false
  }


});

const User = mongoose.model("Users", UserSchema);
module.exports = User;