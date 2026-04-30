// test.js
const mongoose = require('mongoose');
const { userModel } = require('./models');


async function testUser() {
    const user = new userModel({
      email: 'test123@test.com',
      username: 'testuser123',
      password: 'temp123'
    });
    await user.save();
    console.log('✓ User created!');
  }

setTimeout(testUser, 1000);  // Give connection 1 second to establish
