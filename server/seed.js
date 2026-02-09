// METRO TRANSIT AUTHORITY - QPMO DASHBOARD SEED DATA
// Demo Data for Portfolio Management Office

const directors = [
    {
        id: 'strategy',
        name: 'Alex Morgan',
        role: 'Principal & Strategy Lead',
        pmiColor: '#00A5D9',
        photoUrl: '/avatars/alex.jpg',
        personnel: ['Alex Morgan', 'Sam Rivera'],
        subTabs: [
            { id: 'planning', title: 'Strategic Planning & Vision' },
            { id: 'dbe', title: 'Inclusive Economic Strategy (DBE)' },
            { id: 'funding', title: 'Funding Policy & Regulatory' },
            { id: 'stakeholder', title: 'Stakeholder Engagement' }
        ]
    },
    {
        id: 'controls',
        name: 'Jordan Chen',
        role: 'Project Controls Director',
        pmiColor: '#6A2586',
        secondaryColor: '#FF6A13',
        photoUrl: '/avatars/jordan.jpg',
        personnel: ['Jordan Chen', 'Marcus Webb'],
        subTabs: [
            { id: 'scope', title: 'Scope & Change Management' },
            { id: 'schedule', title: 'Schedule (Pull Planning)' },
            { id: 'cost', title: 'Cost & Target Value Delivery' },
            { id: 'risk', title: 'Risk Intelligence' }
        ]
    },
    {
        id: 'construction',
        name: 'Sam Williams',
        role: 'Construction & Safety Director',
        pmiColor: '#FF6A13',
        photoUrl: '/avatars/sam.jpg',
        personnel: ['Sam Williams', 'Chris Parker'],
        subTabs: [
            { id: 'safety', title: 'Workforce Safety (TRIR)' },
            { id: 'field', title: 'Field Execution & Logistics' },
            { id: 'punchlist', title: 'Zero Punch List Quality' },
            { id: 'subconsultant', title: 'Subconsultant Performance' }
        ]
    },
    {
        id: 'qpmo',
        name: 'Dr. Taylor Reed',
        role: 'QPMO & Innovation Director',
        pmiColor: '#6A2586',
        photoUrl: '/avatars/taylor.jpg',
        personnel: ['Dr. Taylor Reed'],
        subTabs: [
            { id: 'digital', title: 'Digital Twin & BIM' },
            { id: 'quality', title: 'Quality Assurance (NCRs)' },
            { id: 'innovation', title: 'Continuous Improvement' },
            { id: 'talent', title: 'Talent & Workforce Dev' }
        ]
    }
];

const projects = [
    { code: 'NLX', name: 'Northside Line Extension', budget: 3.2, phase: 'Design', riskLevel: 'Med', progress: 42, status: 'green', geoCoordinates: [40.7831, -73.9712] },
    { code: 'WCL', name: 'Westcoast Connector Line', budget: 4.8, phase: 'Planning', riskLevel: 'High', progress: 15, status: 'yellow', geoCoordinates: [40.7282, -73.7949] },
    { code: 'EBL', name: 'Eastbridge Link', budget: 3.7, phase: 'Construction', riskLevel: 'Low', progress: 78, status: 'green', geoCoordinates: [40.7589, -73.8855] },
    { code: 'SRL', name: 'Southend Rapid Line', budget: 4.2, phase: 'Planning', riskLevel: 'Med', progress: 22, status: 'green', geoCoordinates: [40.6892, -73.9442] }
];

const valueCenters = {
    // ============ DIRECTOR A: STRATEGY & INCLUSION ============
    planning: {
        title: 'Strategic Planning & Vision',
        directorId: 'strategy',
        aiInsight: 'Program schedule variance is trending positive at 0.94. Grant utilization is on track at 92% with Q2 milestone approaching.',
        kpis: [
            { label: 'Schedule Variance', value: '0.94', target: '1.00', trend: 'up', status: 'success' },
            { label: 'Portfolio Health', value: 'Green', target: 'Green', trend: 'stable', status: 'success' },
            { label: 'Grant Utilization', value: '92%', target: '90%', trend: 'up', status: 'success' },
            { label: 'Active Projects', value: '4', target: '4', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'portfolioMap',
                title: 'Sound Transit Portfolio Map',
                data: projects
            },
            {
                type: 'timeline',
                title: 'Program Milestones',
                data: [
                    { milestone: 'TDLE 30% Design', date: 'Mar 2024', status: 'complete' },
                    { milestone: 'ELE Systems Testing', date: 'Jun 2024', status: 'active' },
                    { milestone: 'WSLE Environmental', date: 'Sep 2024', status: 'upcoming' }
                ]
            }
        ]
    },
    dbe: {
        title: 'Inclusive Economic Strategy (DBE)',
        directorId: 'strategy',
        aiInsight: 'DBE participation exceeds target at 12.4%. Prompt payment velocity has improved to 5 days average.',
        kpis: [
            { label: 'DBE Participation', value: '12.4%', target: '12%', trend: 'up', status: 'success' },
            { label: 'Unbundled Packages', value: '89', target: '80', trend: 'up', status: 'success' },
            { label: 'Prompt Payment', value: '5 Days', target: '7 Days', trend: 'up', status: 'success' },
            { label: 'SBE Participation', value: '8.2%', target: '8%', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'funnel',
                title: 'Inclusion Pipeline',
                data: [
                    { name: 'Identified', value: 120, fill: '#00A5D9' },
                    { name: 'Unbundled', value: 95, fill: '#00A5D9CC' },
                    { name: 'Solicited', value: 72, fill: '#00A5D9AA' },
                    { name: 'Bids Received', value: 58, fill: '#00A5D988' },
                    { name: 'Awarded', value: 47, fill: '#00A5D966' }
                ]
            },
            {
                type: 'partnerTable',
                title: 'DBE Partners',
                data: [
                    { name: 'RSE Corp', specialty: 'Civil Engineering', dbe: true, performance: 98 },
                    { name: 'STV Inc', specialty: 'Systems Integration', dbe: true, performance: 95 },
                    { name: 'LANGAN', specialty: 'Geotechnical', dbe: false, performance: 92 },
                    { name: 'GeoTest', specialty: 'Environmental', dbe: true, performance: 96 }
                ]
            }
        ]
    },
    funding: {
        title: 'Funding Policy & Regulatory',
        directorId: 'strategy',
        aiInsight: 'FTA Grant drawdown at $450M. 14 permits pending review with 3 expected closures this week.',
        kpis: [
            { label: 'FTA Grant Drawdown', value: '$450M', target: '$500M', trend: 'up', status: 'success' },
            { label: 'Permit Approvals', value: '14', target: '10', trend: 'down', status: 'warning' },
            { label: 'State Funding', value: '$280M', target: '$300M', trend: 'stable', status: 'success' },
            { label: 'Compliance Rate', value: '100%', target: '100%', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'sankey',
                title: 'Funding Flow',
                data: {
                    nodes: ['Federal FTA', 'State WSDOT', 'Local ST3', 'TDLE', 'WSLE', 'ELE', 'Operations'],
                    links: [
                        { source: 0, target: 3, value: 180 },
                        { source: 0, target: 4, value: 220 },
                        { source: 1, target: 3, value: 120 },
                        { source: 1, target: 5, value: 160 },
                        { source: 2, target: 3, value: 200 },
                        { source: 2, target: 4, value: 180 },
                        { source: 2, target: 6, value: 100 }
                    ]
                }
            }
        ]
    },
    stakeholder: {
        title: 'Stakeholder Engagement',
        directorId: 'strategy',
        aiInsight: 'Public sentiment NPS at +45. Community meetings this month focused on station design feedback.',
        kpis: [
            { label: 'Public Sentiment', value: 'NPS +45', target: '+40', trend: 'up', status: 'success' },
            { label: 'Community Meetings', value: '12', target: '10', trend: 'up', status: 'success' },
            { label: 'Media Mentions', value: '28', target: '20', trend: 'up', status: 'success' },
            { label: 'Issues Resolved', value: '15', target: '12', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'sentiment',
                title: 'Stakeholder Sentiment Pulse',
                data: {
                    positive: 45,
                    neutral: 35,
                    negative: 20,
                    topics: [
                        { topic: 'Station Design', sentiment: 72 },
                        { topic: 'Noise Concerns', sentiment: 38 },
                        { topic: 'Timeline', sentiment: 55 },
                        { topic: 'Accessibility', sentiment: 85 }
                    ]
                }
            }
        ]
    },

    // ============ DIRECTOR B: PROJECT CONTROLS ============
    scope: {
        title: 'Scope & Change Management',
        directorId: 'controls',
        aiInsight: 'Scope stability index at 0.98. Pending change order for Station Entrance Redesign ($2.1M) addresses ADA accessibility.',
        kpis: [
            { label: 'Scope Stability', value: '0.98', target: '0.95', trend: 'stable', status: 'success' },
            { label: 'Pending COs', value: '$5.6M', target: '$8M', trend: 'down', status: 'success' },
            { label: 'Approved COs', value: '12', target: '15', trend: 'stable', status: 'success' },
            { label: 'Avg Approval Time', value: '8 Days', target: '10 Days', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'changeLog',
                title: 'Recent Change Orders',
                data: [
                    { id: 'CO-2024-015', title: 'Station Entrance Redesign', reason: 'ADA Accessibility Enhancement', value: 2.1, status: 'pending', priority: 'high' },
                    { id: 'CO-2024-014', title: 'Tunnel Ventilation Upgrade', reason: 'Safety Enhancement', value: 1.8, status: 'approved', priority: 'medium' },
                    { id: 'CO-2024-013', title: 'Platform Extension', reason: 'Capacity Planning', value: 1.7, status: 'approved', priority: 'low' }
                ]
            }
        ]
    },
    schedule: {
        title: 'Schedule (Pull Planning)',
        directorId: 'controls',
        aiInsight: 'SPI trending at 1.01. Weekly PPC at 85% with 12/12 milestones achieved this quarter.',
        kpis: [
            { label: 'SPI', value: '1.01', target: '1.00', trend: 'up', status: 'success' },
            { label: 'PPC', value: '85%', target: '80%', trend: 'up', status: 'success' },
            { label: 'Milestones Hit', value: '12/12', target: '12/12', trend: 'stable', status: 'success' },
            { label: 'Lookahead Items', value: '47', target: '50', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'ppcTrend',
                title: 'Pull Plan Complete Trend',
                data: [
                    { week: 'W1', ppc: 78, target: 80 },
                    { week: 'W2', ppc: 82, target: 80 },
                    { week: 'W3', ppc: 79, target: 80 },
                    { week: 'W4', ppc: 85, target: 80 },
                    { week: 'W5', ppc: 83, target: 80 },
                    { week: 'W6', ppc: 85, target: 80 }
                ]
            }
        ]
    },
    cost: {
        title: 'Cost & Target Value Delivery',
        directorId: 'controls',
        aiInsight: 'CPI at 1.03 indicates cost efficiency. TVD savings of $12M achieved through value engineering on WSLE.',
        kpis: [
            { label: 'CPI', value: '1.03', target: '1.00', trend: 'up', status: 'success' },
            { label: 'TVD Savings', value: '$12M', target: '$10M', trend: 'up', status: 'success' },
            { label: 'Estimate Accuracy', value: '±3%', target: '±5%', trend: 'up', status: 'success' },
            { label: 'Contingency Used', value: '18%', target: '25%', trend: 'down', status: 'success' }
        ],
        widgets: [
            {
                type: 'evm',
                title: 'Earned Value Analysis - West Seattle Link',
                data: [
                    { month: 'Sep', ev: 42, pv: 40, ac: 41 },
                    { month: 'Oct', ev: 58, pv: 55, ac: 56 },
                    { month: 'Nov', ev: 75, pv: 72, ac: 73 },
                    { month: 'Dec', ev: 92, pv: 90, ac: 89 },
                    { month: 'Jan', ev: 108, pv: 105, ac: 104 },
                    { month: 'Feb', ev: 125, pv: 122, ac: 121 }
                ]
            }
        ]
    },
    risk: {
        title: 'Risk Intelligence',
        directorId: 'controls',
        aiInsight: 'Total risk exposure at $14M. Permitting delays remain highest concern with mitigation plan activated.',
        kpis: [
            { label: 'Risk Exposure', value: '$14M', target: '$20M', trend: 'down', status: 'success' },
            { label: 'Mitigations Closed', value: '45', target: '40', trend: 'up', status: 'success' },
            { label: 'Open Risks', value: '8', target: '10', trend: 'down', status: 'success' },
            { label: 'Risk Reviews', value: 'Weekly', target: 'Weekly', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'riskRadar',
                title: 'Risk Heat Map',
                data: [
                    { name: 'Permitting Delays', probability: 4, impact: 5, level: 'critical' },
                    { name: 'Geotech Issues', probability: 3, impact: 4, level: 'high' },
                    { name: 'Labor Shortage', probability: 3, impact: 3, level: 'medium' },
                    { name: 'Material Costs', probability: 4, impact: 2, level: 'medium' },
                    { name: 'Weather Delays', probability: 2, impact: 2, level: 'low' }
                ]
            }
        ]
    },

    // ============ DIRECTOR C: CONSTRUCTION & SAFETY ============
    safety: {
        title: 'Workforce Safety (TRIR)',
        directorId: 'construction',
        aiInsight: 'TRIR at 0.85, well below industry average. 47 consecutive safe days. Near miss at Station 4A under investigation.',
        kpis: [
            { label: 'TRIR', value: '0.85', target: '1.00', trend: 'down', status: 'success' },
            { label: 'Days Safe', value: '47', target: '30', trend: 'up', status: 'success' },
            { label: 'Near Misses', value: '2', target: '5', trend: 'down', status: 'success' },
            { label: 'PPE Compliance', value: '99%', target: '98%', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'safetyBoard',
                title: 'Safety Vigilance Board',
                data: [
                    { type: 'Near Miss', description: 'Dropped Tool - Station 4A', time: '2 hrs ago', severity: 'yellow', action: 'Under Review' },
                    { type: 'Observation', description: 'PPE Compliance Check', time: 'Yesterday', severity: 'green', action: 'Resolved' },
                    { type: 'First Aid', description: 'Minor Cut - Tunnel Seg 2', time: '3 days ago', severity: 'green', action: 'Closed' }
                ]
            }
        ]
    },
    field: {
        title: 'Field Execution & Logistics',
        directorId: 'construction',
        aiInsight: '42 active crews on site. Material delivery on-time rate at 96%. Concrete pour scheduled for Thursday.',
        kpis: [
            { label: 'Active Crews', value: '42', target: '40', trend: 'stable', status: 'success' },
            { label: 'Material On-Time', value: '96%', target: '95%', trend: 'up', status: 'success' },
            { label: 'Equipment Util', value: '87%', target: '85%', trend: 'up', status: 'success' },
            { label: 'Daily Output', value: '112%', target: '100%', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'logisticsTimeline',
                title: 'Upcoming Deliveries & Activities',
                data: [
                    { activity: 'Concrete Pour - Platform 3', date: 'Thu Feb 13', status: 'scheduled' },
                    { activity: 'OCS Pole Delivery (12 units)', date: 'Fri Feb 14', status: 'confirmed' },
                    { activity: 'Track Installation - Seg 4', date: 'Mon Feb 17', status: 'planned' },
                    { activity: 'Systems Testing - Phase 2', date: 'Wed Feb 19', status: 'pending' }
                ]
            },
            {
                type: 'productionMetrics',
                title: 'Daily Production vs Target',
                data: [
                    { activity: 'Track Install (ft)', planned: 150, actual: 165 },
                    { activity: 'OCS Poles', planned: 12, actual: 11 },
                    { activity: 'Concrete (cy)', planned: 45, actual: 48 },
                    { activity: 'Cable Pulls', planned: 8, actual: 9 }
                ]
            }
        ]
    },
    punchlist: {
        title: 'Zero Punch List Quality',
        directorId: 'construction',
        aiInsight: 'First Time Right at 92%. Electrical trade FTR improved 5% this week. 53 open deficiencies trending down.',
        kpis: [
            { label: 'First Time Right', value: '92%', target: '90%', trend: 'up', status: 'success' },
            { label: 'Open Deficiencies', value: '53', target: '60', trend: 'down', status: 'success' },
            { label: 'Avg Close Time', value: '3.2 Days', target: '5 Days', trend: 'up', status: 'success' },
            { label: 'Rework Rate', value: '2.1%', target: '3%', trend: 'down', status: 'success' }
        ],
        widgets: [
            {
                type: 'punchListTracker',
                title: 'Punch List by Trade',
                data: [
                    { trade: 'Electrical', open: 18, closed: 42, ftr: 94 },
                    { trade: 'Civil', open: 12, closed: 38, ftr: 91 },
                    { trade: 'Mechanical', open: 8, closed: 35, ftr: 93 },
                    { trade: 'Systems', open: 15, closed: 28, ftr: 88 }
                ]
            }
        ]
    },
    subconsultant: {
        title: 'Subconsultant Performance',
        directorId: 'construction',
        aiInsight: 'Invoice velocity at 7 days average. RSE Corp leading with 98% quality score. Submittal turnaround improved to 4 days.',
        kpis: [
            { label: 'Invoice Velocity', value: '7 Days', target: '10 Days', trend: 'up', status: 'success' },
            { label: 'Submittal TAT', value: '4 Days', target: '5 Days', trend: 'up', status: 'success' },
            { label: 'Avg Quality Score', value: '95%', target: '90%', trend: 'up', status: 'success' },
            { label: 'Active Subs', value: '24', target: '25', trend: 'stable', status: 'success' }
        ],
        widgets: [
            {
                type: 'subconsultantHealth',
                title: 'Subconsultant Performance Matrix',
                data: [
                    { name: 'RSE Corp', quality: 98, schedule: 95, cost: 92, safety: 100, overall: 96 },
                    { name: 'STV Inc', quality: 95, schedule: 92, cost: 88, safety: 98, overall: 93 },
                    { name: 'LANGAN', quality: 92, schedule: 90, cost: 94, safety: 96, overall: 93 },
                    { name: 'GeoTest', quality: 96, schedule: 88, cost: 90, safety: 100, overall: 94 }
                ]
            }
        ]
    },

    // ============ DIRECTOR D: QPMO & DIGITAL ============
    digital: {
        title: 'Digital Twin & BIM',
        directorId: 'qpmo',
        aiInsight: 'Model sync at 98%. 14,000 assets tagged in digital twin. 450 clashes resolved this quarter.',
        kpis: [
            { label: 'Model Sync', value: '98%', target: '95%', trend: 'up', status: 'success' },
            { label: 'Assets Tagged', value: '14k', target: '12k', trend: 'up', status: 'success' },
            { label: 'Clashes Resolved', value: '450', target: '400', trend: 'up', status: 'success' },
            { label: 'Model Accuracy', value: '99.2%', target: '98%', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'digitalTwin',
                title: '360° Site Visualizer',
                data: {
                    location: 'Downtown Station - Level B2',
                    lastSync: new Date().toISOString(),
                    viewType: 'BIM Model',
                    activeUsers: 8
                }
            }
        ]
    },
    quality: {
        title: 'Quality Assurance (NCRs)',
        directorId: 'qpmo',
        aiInsight: 'NCR aging at 5 days average, down from 8 days last month. 100% audit compliance maintained.',
        kpis: [
            { label: 'NCR Aging', value: '5 Days', target: '7 Days', trend: 'down', status: 'success' },
            { label: 'Audit Compliance', value: '100%', target: '100%', trend: 'stable', status: 'success' },
            { label: 'Open NCRs', value: '12', target: '15', trend: 'down', status: 'success' },
            { label: 'Doc Accuracy', value: '98%', target: '95%', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'ncrTrend',
                title: 'NCR Aging Trend',
                data: [
                    { month: 'Sep', aging: 9, target: 7 },
                    { month: 'Oct', aging: 8, target: 7 },
                    { month: 'Nov', aging: 7, target: 7 },
                    { month: 'Dec', aging: 6, target: 7 },
                    { month: 'Jan', aging: 5.5, target: 7 },
                    { month: 'Feb', aging: 5, target: 7 }
                ]
            },
            {
                type: 'auditList',
                title: 'Recent Audits',
                data: [
                    { name: 'Safety Compliance', date: 'Feb 5', result: 'Passed', score: 98 },
                    { name: 'Document Control', date: 'Feb 1', result: 'Passed', score: 100 },
                    { name: 'QA/QC Process', date: 'Jan 28', result: 'Minor Findings', score: 94 }
                ]
            }
        ]
    },
    innovation: {
        title: 'Continuous Improvement',
        directorId: 'qpmo',
        aiInsight: 'Innovation ROI at $2.1M. 15 lessons learned captured this quarter. Value engineering on WSLE yielded $8M savings.',
        kpis: [
            { label: 'Innovation ROI', value: '$2.1M', target: '$1.5M', trend: 'up', status: 'success' },
            { label: 'Lessons Learned', value: '15', target: '10', trend: 'up', status: 'success' },
            { label: 'VE Savings', value: '$8M', target: '$5M', trend: 'up', status: 'success' },
            { label: 'Ideas Submitted', value: '28', target: '20', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'valueTree',
                title: 'Value Creation Breakdown',
                data: [
                    {
                        name: 'QPMO', value: 2.1, children: [
                            { name: 'Process Efficiency', value: 0.8 },
                            { name: 'Technology', value: 0.7 },
                            { name: 'Training', value: 0.6 }
                        ]
                    },
                    {
                        name: 'Programs', value: 8.0, children: [
                            { name: 'WSLE VE', value: 4.5 },
                            { name: 'TDLE VE', value: 2.5 },
                            { name: 'ELE VE', value: 1.0 }
                        ]
                    }
                ]
            }
        ]
    },
    talent: {
        title: 'Talent & Workforce Dev',
        directorId: 'qpmo',
        aiInsight: 'Staff retention at 95%. 1,200 training hours logged. 15 new certifications earned this quarter.',
        kpis: [
            { label: 'Staff Retention', value: '95%', target: '90%', trend: 'up', status: 'success' },
            { label: 'Training Hours', value: '1,200', target: '1,000', trend: 'up', status: 'success' },
            { label: 'Certifications', value: '15', target: '10', trend: 'up', status: 'success' },
            { label: 'Engagement Score', value: '4.2/5', target: '4.0', trend: 'up', status: 'success' }
        ],
        widgets: [
            {
                type: 'talentFunnel',
                title: 'Talent Pipeline',
                data: [
                    { stage: 'Recruitment', count: 45, target: 40 },
                    { stage: 'Onboarding', count: 12, target: 15 },
                    { stage: 'Training', count: 28, target: 25 },
                    { stage: 'Certified', count: 15, target: 10 }
                ]
            }
        ]
    }
};

module.exports = { directors, projects, valueCenters };
