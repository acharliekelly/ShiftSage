require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

(async () => {
  try {
    await mongoose.connect(process.env.DB_STRING);
    const username = process.env.SEED_USER || "admin";
    const password = process.env.SEED_PASSWORD || "devpass";

    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username });
      await user.setPassword(password);
      await user.save();
      console.log(`✅ Created user ${username} / ${password}`);
    } else {
      console.log(`ℹ️ User ${username} already exists`);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
})();