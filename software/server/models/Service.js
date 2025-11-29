const mongoose = require ('mongoose')

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slots: {
        type: Number,
        required: true,
        min: 0
    },
    imageSource: {
        type: String
    },
    owner: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Service', serviceSchema);