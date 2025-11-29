const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // cant leave empty/null
        unique: true // two people can't have the same username
    },
    password: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['ONG', 'Volunteer'] // restricting to these two
    },
    token: {type: String} // Database-backed sessions
});

module.exports = mongoose.model('User', userSchema);