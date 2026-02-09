const express = require('express');
const cors = require('cors');
const { directors, projects, valueCenters } = require('./seed');

const app = express();
app.use(cors());
app.use(express.json());

// API: Get initial dashboard state
app.get('/api/dashboard/init', (req, res) => {
    res.json({
        directors: directors.map(d => ({
            id: d.id,
            name: d.name,
            role: d.role,
            pmiColor: d.pmiColor,
            secondaryColor: d.secondaryColor,
            personnel: d.personnel,
            subTabs: d.subTabs
        })),
        projects,
        currentUser: {
            name: directors[0].name,
            role: directors[0].role,
            avatar: directors[0].photoUrl
        }
    });
});

// API: Get director data with all value centers
app.get('/api/director/:id', (req, res) => {
    const { id } = req.params;
    const director = directors.find(d => d.id === id);

    if (!director) {
        return res.status(404).json({ error: 'Director not found' });
    }

    // Get all value centers for this director
    const directorValueCenters = {};
    director.subTabs.forEach(tab => {
        if (valueCenters[tab.id]) {
            directorValueCenters[tab.id] = valueCenters[tab.id];
        }
    });

    res.json({
        director,
        valueCenters: directorValueCenters
    });
});

// API: Get specific value center
app.get('/api/valuecenter/:id', (req, res) => {
    const { id } = req.params;
    const vc = valueCenters[id];

    if (!vc) {
        return res.status(404).json({ error: 'Value Center not found' });
    }

    res.json(vc);
});

// API: Get all projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Antigravity API running on port ${PORT}`);
    console.log(`   Directors: ${directors.length}`);
    console.log(`   Value Centers: ${Object.keys(valueCenters).length}`);
    console.log(`   Projects: ${projects.length}`);
});
