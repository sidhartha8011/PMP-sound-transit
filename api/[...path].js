const { directors, projects, valueCenters } = require('../server/seed');

module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    // /api/dashboard/init
    if (path === '/api/dashboard/init') {
        return res.json({
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
    }

    // /api/director/:id
    const directorMatch = path.match(/^\/api\/director\/(.+)$/);
    if (directorMatch) {
        const id = directorMatch[1];
        const director = directors.find(d => d.id === id);
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        const directorValueCenters = {};
        director.subTabs.forEach(tab => {
            if (valueCenters[tab.id]) {
                directorValueCenters[tab.id] = valueCenters[tab.id];
            }
        });
        return res.json({ director, valueCenters: directorValueCenters });
    }

    // /api/valuecenter/:id
    const vcMatch = path.match(/^\/api\/valuecenter\/(.+)$/);
    if (vcMatch) {
        const id = vcMatch[1];
        const vc = valueCenters[id];
        if (!vc) {
            return res.status(404).json({ error: 'Value Center not found' });
        }
        return res.json(vc);
    }

    // /api/projects
    if (path === '/api/projects') {
        return res.json(projects);
    }

    return res.status(404).json({ error: 'API route not found' });
};
