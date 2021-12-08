const User = require('../models/User');

async function createUser(username, email, gender, hashedPassword) {

    const user = new User({
        username,
        email,
        gender,
        hashedPassword
    })
    await user.save();
    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ email: { $regex: pattern } }).lean();
    return user;
}

async function getUserById(id) {
    const user = await User.findById(id).lean();
    return user;
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById
}