const mongoose = require('mongoose');

const inscricaoSchema = new mongoose.Schema({
    user: {type: String, required: true},

    serviceId: {type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true},

    role: {type: String, required: true},
    availability: {type: String, required: true},
    experience: {type: String, required: true},
    observations: { type: String },
    sharedData: { type: Boolean, required: true },

    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Inscricao', inscricaoSchema);