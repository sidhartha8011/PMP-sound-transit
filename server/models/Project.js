const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    budget: Number,
    phase: { type: String, enum: ['Planning', 'Design', 'Construction'] },
    riskLevel: { type: String, enum: ['High', 'Med', 'Low'] },
    geoCoordinates: [Number],
    progress: Number,
    status: { type: String, enum: ['green', 'yellow', 'red'] }
});

module.exports = mongoose.model('Project', projectSchema);
