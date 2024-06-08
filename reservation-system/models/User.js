// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    reservation: [{ type: String }],
    balance: { type: Number, default: 0 },
    status: { type: String, default: 'active' },
    role: { type: String, default: 'user' },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

