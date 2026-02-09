const mongoose = require('mongoose');

const valueCenterSchema = new mongoose.Schema({
    title: { type: String, required: true },
    directorId: { type: String, required: true },
    kpis: [{
        label: String,
        value: mongoose.Schema.Types.Mixed,
        target: mongoose.Schema.Types.Mixed,
        trend: { type: String, enum: ['up', 'down', 'stable'] },
        status: { type: String, enum: ['success', 'warning', 'danger'] }
    }],
    widgets: [{
        type: { type: String },
        title: String,
        data: mongoose.Schema.Types.Mixed
    }],
    aiInsight: String
});

module.exports = mongoose.model('ValueCenter', valueCenterSchema);
