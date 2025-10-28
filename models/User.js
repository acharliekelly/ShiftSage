const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true, lowercase: true, trim: true },
  passwordHash: String
});

UserSchema.methods.setPassword = async function(pw) {
  this.passwordHash = await bcrypt.hash(pw, 10);
}

UserSchema.methods.validatePassword = function(pw) {
  return bcrypt.compare(pw, this.passwordHash);
}

// Hash the password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // save
  try {
    // ?
    if (this.passwordHash && this.passwordHash.length) {
      this.setPassword(this.passwordHash);
      return next();
    } else {
      // error
      console.log("No password!!");
    }
  } catch (err) {
    console.err(err);
    next(err);
  }
});


module.exports = mongoose.model("User", UserSchema);
