const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    pmiColor: { type: String, required: true },
    photoUrl: String,
    personnel: [String],
    subTabs: [{
        title: String,
        valueCenterId: String
    }]
});

module.exports = mongoose.model('Director', directorSchema);
