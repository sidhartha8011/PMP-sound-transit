// QPMO INTEGRATED DASHBOARDS – Decision Intelligence Data
// Advanced KPIs + Power BI / Excel-grade charts

export const QPMO_COLORS = {
    designQuality: { id: 'designQuality', primary: '#1E6BB8', light: '#4A99E0', dark: '#15507A', ultraLight: '#E8F2FC', name: 'Design Quality' },
    constructionQuality: { id: 'constructionQuality', primary: '#6A2586', light: '#8B3AAD', dark: '#4A1A5E', ultraLight: '#F3E8F9', name: 'Construction Quality' },
    facilityExcellence: { id: 'facilityExcellence', primary: '#2E8B57', light: '#3DAF6E', dark: '#1F6B42', ultraLight: '#E6F5ED', name: 'Facility Operational Excellence' },
    operationsMaintenance: { id: 'operationsMaintenance', primary: '#E8772E', light: '#F59A56', dark: '#C25E1A', ultraLight: '#FDF0E4', name: 'Operations & Maintenance' },
    qpmoIntegrated: { id: 'qpmoIntegrated', primary: '#C02C38', light: '#DC4F5A', dark: '#8E1F28', ultraLight: '#FCEBED', name: 'QPMO Integrated' },
};

export const directors = [
    { id: 'designQuality', name: 'Design Quality Director', role: 'Design Quality', shortRole: 'Design', color: QPMO_COLORS.designQuality, description: 'Reviews, specifications, constructability, and BIM coordination', icon: 'Compass' },
    { id: 'constructionQuality', name: 'Construction Quality Director', role: 'Construction Quality', shortRole: 'Construction', color: QPMO_COLORS.constructionQuality, description: 'Inspections, NCRs, first-time-right, rework prevention', icon: 'HardHat' },
    { id: 'facilityExcellence', name: 'Facility Operational Excellence Director', role: 'Facility Operational Excellence', shortRole: 'Facility', color: QPMO_COLORS.facilityExcellence, description: 'System reliability, commissioning, energy efficiency, readiness', icon: 'Building2' },
    { id: 'operationsMaintenance', name: 'Operations & Maintenance Director', role: 'Operations & Maintenance', shortRole: 'O&M', color: QPMO_COLORS.operationsMaintenance, description: 'Preventive maintenance, response time, lifecycle cost, availability', icon: 'Wrench' },
    { id: 'qpmoIntegrated', name: 'QPMO Integrated Dashboard', role: 'QPMO Oversight', shortRole: 'QPMO', color: QPMO_COLORS.qpmoIntegrated, description: 'Cross-phase alignment, quality system health, strategic priorities', icon: 'Layers' },
];

// ═══════════════════════════════════════════════════════
// 1. DESIGN QUALITY (BLUE)
// ═══════════════════════════════════════════════════════
export const designQualityData = {
    kpis: [
        { label: 'Design Review Score', value: '94%', target: '90%', trend: 'up', status: 'success', icon: 'ClipboardCheck' },
        { label: 'Specification Compliance', value: '97.2%', target: '95%', trend: 'up', status: 'success', icon: 'FileCheck' },
        { label: 'Constructability Index', value: '88%', target: '85%', trend: 'up', status: 'success', icon: 'Building' },
        { label: 'BIM Clash Resolution', value: '96%', target: '95%', trend: 'stable', status: 'success', icon: 'Layers' },
        { label: 'Non-Conformance Rate', value: '3.2%', target: '5%', trend: 'up', status: 'success', icon: 'Shield' },
        { label: 'Design Change Frequency', value: '2.1/wk', target: '3/wk', trend: 'up', status: 'success', icon: 'RefreshCw' },
        { label: 'RFI Response Time', value: '3.2 Days', target: '5 Days', trend: 'up', status: 'success', icon: 'MessageCircle' },
        { label: 'Design Package Completion', value: '78%', target: '75%', trend: 'up', status: 'success', icon: 'Package' },
        { label: 'Design Maturity Index', value: '82%', target: '80%', trend: 'up', status: 'success', icon: 'Gauge' },
        { label: 'Rework Cost Avoidance', value: '$1.2M', target: '$1M', trend: 'up', status: 'success', icon: 'DollarSign' },
    ],
    charts: [
        // ── Core Charts ──
        {
            type: 'areaTrend', title: 'Design Review Score — Trend & Forecast', span: 'full',
            data: [
                { month: 'Jul', value: 85, target: 90 }, { month: 'Aug', value: 88, target: 90 },
                { month: 'Sep', value: 89, target: 90 }, { month: 'Oct', value: 91, target: 90 },
                { month: 'Nov', value: 92, target: 90 }, { month: 'Dec', value: 93, target: 90 },
                { month: 'Jan', value: 94, target: 90 },
                { month: 'Feb', value: null, target: 90, forecast: 95 },
                { month: 'Mar', value: null, target: 90, forecast: 95.5 },
            ],
        },
        {
            type: 'controlLimits', title: 'Design Non-Conformance Rate (SPC)', span: 'full',
            data: [
                { month: 'Jul', value: 5.8, ucl: 7, lcl: 2, mean: 4.5 },
                { month: 'Aug', value: 5.2, ucl: 7, lcl: 2, mean: 4.5 },
                { month: 'Sep', value: 4.8, ucl: 7, lcl: 2, mean: 4.5 },
                { month: 'Oct', value: 4.1, ucl: 7, lcl: 2, mean: 4.5 },
                { month: 'Nov', value: 3.8, ucl: 7, lcl: 2, mean: 4.5 },
                { month: 'Dec', value: 3.5, ucl: 7, lcl: 2, mean: 4.5 },
                { month: 'Jan', value: 3.2, ucl: 7, lcl: 2, mean: 4.5 },
            ],
        },
        {
            type: 'sparklineTable', title: 'Design KPI Performance Grid', span: 'full',
            data: {
                categoryLabel: 'Design KPI',
                rows: [
                    { name: 'Design Review Score', current: 94, target: 90, unit: '%', higherIsBetter: true, sparkline: [85, 87, 88, 89, 92, 94] },
                    { name: 'Spec Compliance', current: 97.2, target: 95, unit: '%', higherIsBetter: true, sparkline: [93, 94, 95, 95.5, 96, 97.2] },
                    { name: 'BIM Clashes Resolved', current: 96, target: 95, unit: '%', higherIsBetter: true, sparkline: [88, 90, 92, 93, 95, 96] },
                    { name: 'RFI Response (Days)', current: 3.2, target: 5, unit: 'd', higherIsBetter: false, sparkline: [6.1, 5.5, 4.8, 4.2, 3.8, 3.2] },
                    { name: 'Constructability Index', current: 88, target: 85, unit: '%', higherIsBetter: true, sparkline: [78, 80, 82, 84, 86, 88] },
                    { name: 'Package Completion', current: 78, target: 75, unit: '%', higherIsBetter: true, sparkline: [45, 52, 58, 65, 72, 78] },
                    { name: 'Non-Conformance Rate', current: 3.2, target: 5, unit: '%', higherIsBetter: false, sparkline: [5.8, 5.2, 4.8, 4.1, 3.8, 3.2] },
                    { name: 'Design Maturity', current: 82, target: 80, unit: '%', higherIsBetter: true, sparkline: [62, 68, 72, 76, 80, 82] },
                ],
            },
        },
        // ── Advanced Charts ──
        {
            type: 'radarChart', title: 'Design Maturity Index — Multi-Dimension',
            data: [
                { subject: 'Completeness', value: 88, benchmark: 80 },
                { subject: 'Coordination', value: 82, benchmark: 80 },
                { subject: 'Compliance', value: 95, benchmark: 90 },
                { subject: 'Constructability', value: 78, benchmark: 75 },
                { subject: 'BIM Maturity', value: 90, benchmark: 85 },
                { subject: 'Documentation', value: 85, benchmark: 80 },
            ],
        },
        {
            type: 'scatterQuadrant', title: 'Constructability Risk Score — Impact vs Likelihood',
            data: [
                { name: 'Seismic re-analysis', impact: 8, likelihood: 6, size: 200 },
                { name: 'MEP clashes B2', impact: 5, likelihood: 7, size: 150 },
                { name: 'Fire code revision', impact: 7, likelihood: 8, size: 280 },
                { name: 'Structural specs', impact: 4, likelihood: 3, size: 100 },
                { name: 'Geo conditions', impact: 6, likelihood: 4, size: 180 },
                { name: 'Permit delays', impact: 3, likelihood: 5, size: 120 },
                { name: 'Material specs', impact: 2, likelihood: 2, size: 80 },
                { name: 'Vendor coordination', impact: 5, likelihood: 5, size: 160 },
            ],
        },
        {
            type: 'sankeyFlow', title: 'Design → Construction Issue Leakage',
            data: [
                { from: 'Specs', to: 'Construction', value: 5 },
                { from: 'BIM', to: 'Construction', value: 8 },
                { from: 'Specs', to: 'O&M', value: 3 },
                { from: 'Coord.', to: 'Construction', value: 6 },
                { from: 'BIM', to: 'Commissioning', value: 2 },
            ],
        },
        {
            type: 'waterfall', title: 'Design Rework Cost Avoidance ($K)',
            data: [
                { name: 'Potential', value: 0, isTotal: false },
                { name: 'BIM Clashes', value: -480 },
                { name: 'Spec Review', value: -350 },
                { name: 'Constructability', value: -220 },
                { name: 'Escaped', value: 150 },
                { name: 'Net Saved', value: -900, isTotal: true },
            ],
        },
        {
            type: 'combo', title: 'RFI Volume vs Response Rate',
            data: [
                { name: 'Aug', volume: 42, rate: 82, target: 90 },
                { name: 'Sep', volume: 38, rate: 85, target: 90 },
                { name: 'Oct', volume: 55, rate: 88, target: 90 },
                { name: 'Nov', volume: 48, rate: 91, target: 90 },
                { name: 'Dec', volume: 35, rate: 93, target: 90 },
                { name: 'Jan', volume: 30, rate: 95, target: 90 },
            ],
        },
        {
            type: 'heatmap', title: 'BIM Clash Density by Zone & Discipline',
            data: [
                { name: 'Zone A', structural: 12, mep: 28, civil: 8, fire: 5 },
                { name: 'Zone B', structural: 6, mep: 45, civil: 3, fire: 2 },
                { name: 'Zone C', structural: 9, mep: 18, civil: 15, fire: 8 },
                { name: 'Zone D', structural: 4, mep: 22, civil: 6, fire: 3 },
            ],
        },
        {
            type: 'treemap', title: 'Design Effort Allocation by Discipline',
            data: [
                { name: 'Civil', value: 280 }, { name: 'Structural', value: 210 },
                { name: 'MEP', value: 350 }, { name: 'Architecture', value: 180 },
                { name: 'Systems', value: 260 }, { name: 'Geotechnical', value: 120 },
                { name: 'Landscape', value: 80 }, { name: 'Fire Protection', value: 150 },
            ],
        },
        {
            type: 'donut', title: 'BIM Clash Status Distribution', centerLabel: 'Total Clashes',
            data: [
                { name: 'Resolved', value: 450, fill: '#2E8B57' },
                { name: 'In Review', value: 38, fill: '#E8772E' },
                { name: 'New', value: 12, fill: '#C02C38' },
                { name: 'On Hold', value: 8, fill: '#94a3b8' },
            ],
        },
    ],
    insights: {
        recurringIssues: [
            { text: 'MEP coordination gaps in Level B2 mechanical rooms — 3rd occurrence', severity: 'warning' },
            { text: 'Specification conflicts between civil and structural packages', severity: 'info' },
            { text: 'BIM model version control issues causing rework in Zone B', severity: 'warning' },
        ],
        emergingRisks: [
            { text: 'Fire protection design revision may delay 60% milestone by 2 weeks', severity: 'danger' },
            { text: 'New seismic code update requires re-analysis of 3 stations', severity: 'warning' },
        ],
        crossPhaseSignals: [
            { text: 'Construction team flagging constructability concerns on Station 4A foundations', from: 'Construction Quality' },
            { text: 'O&M requesting access panel specifications for tunnel segments', from: 'O&M' },
            { text: 'Facility Excellence needs HVAC design finalized for commissioning planning', from: 'Facility Excellence' },
        ],
    },
};

// ═══════════════════════════════════════════════════════
// 2. CONSTRUCTION QUALITY (PURPLE)
// ═══════════════════════════════════════════════════════
export const constructionQualityData = {
    kpis: [
        { label: 'First Time Right', value: '92%', target: '90%', trend: 'up', status: 'success', icon: 'CheckCircle2' },
        { label: 'NCR Aging', value: '5 Days', target: '7 Days', trend: 'up', status: 'success', icon: 'Clock' },
        { label: 'Inspection Pass Rate', value: '96.5%', target: '95%', trend: 'up', status: 'success', icon: 'Shield' },
        { label: 'Rework Rate', value: '2.1%', target: '3%', trend: 'down', status: 'success', icon: 'RefreshCw' },
        { label: 'Open NCRs', value: '18', target: '25', trend: 'up', status: 'success', icon: 'ClipboardCheck' },
        { label: 'Safety Observation Rate', value: '4.2/day', target: '3/day', trend: 'up', status: 'success', icon: 'HardHat' },
        { label: 'Quality Drift Index', value: '0.3%', target: '1%', trend: 'up', status: 'success', icon: 'Activity' },
        { label: 'Contractor Quality Index', value: '88/100', target: '85', trend: 'up', status: 'success', icon: 'BarChart3' },
        { label: 'Inspection Effectiveness', value: '94%', target: '90%', trend: 'up', status: 'success', icon: 'Gauge' },
        { label: 'Rework Cost Impact', value: '$143K', target: '$200K', trend: 'up', status: 'success', icon: 'DollarSign' },
    ],
    charts: [
        // ── Core Charts ──
        {
            type: 'stackedColumn', title: 'Open vs Closed NCRs by Month', span: 'full',
            categories: [{ key: 'open', label: 'Open' }, { key: 'closed', label: 'Closed' }],
            data: [
                { name: 'Sep', open: 22, closed: 15 }, { name: 'Oct', open: 18, closed: 20 },
                { name: 'Nov', open: 15, closed: 22 }, { name: 'Dec', open: 12, closed: 18 },
                { name: 'Jan', open: 10, closed: 16 }, { name: 'Feb', open: 8, closed: 14 },
            ],
        },
        {
            type: 'controlLimits', title: 'Quality Drift Index — SPC Control Chart', span: 'full',
            data: [
                { month: 'Jul', value: 1.8, ucl: 3, lcl: 0, mean: 1.5 },
                { month: 'Aug', value: 1.5, ucl: 3, lcl: 0, mean: 1.5 },
                { month: 'Sep', value: 1.2, ucl: 3, lcl: 0, mean: 1.5 },
                { month: 'Oct', value: 0.9, ucl: 3, lcl: 0, mean: 1.5 },
                { month: 'Nov', value: 0.6, ucl: 3, lcl: 0, mean: 1.5 },
                { month: 'Dec', value: 0.4, ucl: 3, lcl: 0, mean: 1.5 },
                { month: 'Jan', value: 0.3, ucl: 3, lcl: 0, mean: 1.5 },
            ],
        },
        {
            type: 'leaderboard', title: 'Contractor Quality Index (CQI) — Rankings',
            data: [
                { name: 'Contractor Alpha', score: 94, unit: '/100' },
                { name: 'Contractor Beta', score: 91, unit: '/100' },
                { name: 'Contractor Gamma', score: 88, unit: '/100' },
                { name: 'Contractor Delta', score: 85, unit: '/100' },
                { name: 'Contractor Epsilon', score: 82, unit: '/100' },
                { name: 'Contractor Zeta', score: 78, unit: '/100' },
            ],
        },
        {
            type: 'pareto', title: 'Rework Cost Impact — Pareto Analysis',
            data: [
                { name: 'Electrical', value: 85 },
                { name: 'Concrete', value: 62 },
                { name: 'Steel', value: 45 },
                { name: 'Mechanical', value: 38 },
                { name: 'Plumbing', value: 22 },
                { name: 'Finishes', value: 15 },
                { name: 'Other', value: 8 },
            ],
        },
        // ── Advanced Charts ──
        {
            type: 'scatterQuadrant', title: 'Inspection Effectiveness — Correlation',
            data: [
                { name: 'Station 1 Electrical', impact: 8, likelihood: 2, size: 180 },
                { name: 'Station 2 Civil', impact: 6, likelihood: 4, size: 150 },
                { name: 'Station 3 Mech', impact: 5, likelihood: 7, size: 200 },
                { name: 'Station 4 Systems', impact: 3, likelihood: 8, size: 120 },
                { name: 'Tunnel A Civil', impact: 7, likelihood: 3, size: 170 },
                { name: 'Depot Electrical', impact: 4, likelihood: 5, size: 140 },
            ],
        },
        {
            type: 'bullet', title: 'Quality Metrics vs Targets', span: 'full',
            data: [
                { name: 'First Time Right', actual: 92, target: 90, max: 100, unit: '%' },
                { name: 'Inspection Pass Rate', actual: 96.5, target: 95, max: 100, unit: '%' },
                { name: 'Safety Compliance', actual: 99.2, target: 98, max: 100, unit: '%' },
                { name: 'Documentation', actual: 94, target: 90, max: 100, unit: '%' },
                { name: 'NCR Closure Rate', actual: 88, target: 85, max: 100, unit: '%' },
            ],
        },
        {
            type: 'radarChart', title: 'Quality Performance Radar',
            data: [
                { subject: 'FTR', value: 92, benchmark: 90 },
                { subject: 'Inspections', value: 96, benchmark: 90 },
                { subject: 'Safety', value: 99, benchmark: 95 },
                { subject: 'Documentation', value: 94, benchmark: 88 },
                { subject: 'Rework Control', value: 97, benchmark: 90 },
                { subject: 'NCR Closure', value: 90, benchmark: 85 },
            ],
        },
        {
            type: 'waterfall', title: 'Rework Cost Drivers ($K)',
            data: [
                { name: 'Start', value: 0, isTotal: false },
                { name: 'Electrical', value: 85 }, { name: 'Concrete', value: 62 },
                { name: 'Steel', value: 45 }, { name: 'Mechanical', value: 38 },
                { name: 'Corrections', value: -55 }, { name: 'Recovery', value: -32 },
                { name: 'Net Cost', value: 143, isTotal: true },
            ],
        },
        {
            type: 'heatmap', title: 'Inspection Pass Rate by Station & Trade',
            data: [
                { name: 'Station 1', electrical: 97, civil: 95, mechanical: 93, systems: 90 },
                { name: 'Station 2', electrical: 94, civil: 92, mechanical: 96, systems: 88 },
                { name: 'Station 3', electrical: 91, civil: 88, mechanical: 90, systems: 85 },
                { name: 'Station 4', electrical: 88, civil: 86, mechanical: 87, systems: 72 },
                { name: 'Tunnel A', electrical: 95, civil: 93, mechanical: 91, systems: 89 },
            ],
        },
        {
            type: 'multiLine', title: 'FTR by Trade — 6-Month Trend',
            series: [
                { key: 'electrical', label: 'Electrical' }, { key: 'civil', label: 'Civil' },
                { key: 'mechanical', label: 'Mechanical' }, { key: 'systems', label: 'Systems' },
            ],
            data: [
                { month: 'Sep', electrical: 88, civil: 85, mechanical: 87, systems: 80 },
                { month: 'Oct', electrical: 90, civil: 87, mechanical: 88, systems: 82 },
                { month: 'Nov', electrical: 91, civil: 88, mechanical: 90, systems: 84 },
                { month: 'Dec', electrical: 93, civil: 90, mechanical: 91, systems: 86 },
                { month: 'Jan', electrical: 94, civil: 91, mechanical: 93, systems: 87 },
                { month: 'Feb', electrical: 95, civil: 92, mechanical: 94, systems: 88 },
            ],
        },
        {
            type: 'histogram', title: 'NCR Closure Time Distribution (Days)',
            data: [
                { bin: '0-2', count: 12 }, { bin: '2-4', count: 28 },
                { bin: '4-6', count: 35 }, { bin: '6-8', count: 18 },
                { bin: '8-10', count: 8, highlight: true }, { bin: '10-14', count: 5, highlight: true },
                { bin: '14+', count: 2, highlight: true },
            ],
        },
    ],
    insights: {
        recurringIssues: [
            { text: 'Concrete batch plant temperature deviations in early morning pours', severity: 'warning' },
            { text: 'Welding inspection backlog on Track Segment 4', severity: 'info' },
            { text: 'NCR closure lagging for Systems trade — investigate process bottleneck', severity: 'warning' },
        ],
        emergingRisks: [
            { text: 'Rework rate trending up for Systems trade — investigate root cause', severity: 'warning' },
            { text: 'New NCR on waterproofing membrane at Station 3 platform', severity: 'danger' },
        ],
        crossPhaseSignals: [
            { text: 'Design revisions on MEP shaft sizes pending — delays field coordination', from: 'Design Quality' },
            { text: 'Commissioning team needs early access to completed sections for testing', from: 'Facility Excellence' },
        ],
    },
};

// ═══════════════════════════════════════════════════════
// 3. FACILITY OPERATIONAL EXCELLENCE (GREEN)
// ═══════════════════════════════════════════════════════
export const facilityExcellenceData = {
    kpis: [
        { label: 'Asset Uptime', value: '99.1%', target: '99%', trend: 'up', status: 'success', icon: 'Activity' },
        { label: 'MTBF', value: '42 Days', target: '30 Days', trend: 'up', status: 'success', icon: 'Timer' },
        { label: 'Energy Deviation', value: '+2.1%', target: '±5%', trend: 'stable', status: 'success', icon: 'Zap' },
        { label: 'Downtime Events', value: '3', target: '5', trend: 'up', status: 'success', icon: 'XCircle' },
        { label: 'Asset Performance Index', value: '94.5%', target: '92%', trend: 'up', status: 'success', icon: 'Gauge' },
        { label: 'Commissioning Progress', value: '67%', target: '65%', trend: 'up', status: 'success', icon: 'PlayCircle' },
        { label: 'Deficiency Close Rate', value: '88%', target: '85%', trend: 'up', status: 'success', icon: 'CheckCircle2' },
        { label: 'Operational Readiness', value: '72%', target: '70%', trend: 'up', status: 'success', icon: 'Rocket' },
        { label: 'Predictive Score', value: '86%', target: '80%', trend: 'up', status: 'success', icon: 'BarChart3' },
        { label: 'Lifecycle Value Index', value: '1.15', target: '1.00', trend: 'up', status: 'success', icon: 'DollarSign' },
    ],
    charts: [
        // ── Core Charts ──
        {
            type: 'bullet', title: 'Asset Uptime & Energy Performance', span: 'full',
            data: [
                { name: 'Asset Uptime', actual: 99.1, target: 99, max: 100, unit: '%' },
                { name: 'MTBF (Days)', actual: 42, target: 30, max: 60, unit: '' },
                { name: 'Energy Deviation', actual: 2.1, target: 5, max: 10, unit: '%' },
                { name: 'Asset Performance', actual: 94.5, target: 92, max: 100, unit: '%' },
                { name: 'Deficiency Close', actual: 88, target: 85, max: 100, unit: '%' },
            ],
        },
        {
            type: 'forecastBand', title: 'Predictive Failure Probability — HVAC', span: 'full',
            data: [
                { month: 'Jul', value: 12 }, { month: 'Aug', value: 15 },
                { month: 'Sep', value: 14 }, { month: 'Oct', value: 18 },
                { month: 'Nov', value: 22 }, { month: 'Dec', value: 25 },
                { month: 'Jan', value: 28 },
                { month: 'Feb', forecast: 32, upper: 38, lower: 26 },
                { month: 'Mar', forecast: 35, upper: 42, lower: 28 },
                { month: 'Apr', forecast: 38, upper: 48, lower: 28 },
            ],
        },
        {
            type: 'scatterQuadrant', title: 'Asset Criticality vs Performance',
            data: [
                { name: 'HVAC Compressor A', impact: 8, likelihood: 6, size: 200 },
                { name: 'Elevator Motor Stn1', impact: 9, likelihood: 4, size: 250 },
                { name: 'Fire Panel Main', impact: 7, likelihood: 3, size: 180 },
                { name: 'Signal Controller', impact: 9, likelihood: 2, size: 220 },
                { name: 'Escalator Drive', impact: 6, likelihood: 7, size: 170 },
                { name: 'Lighting Circuit B', impact: 2, likelihood: 5, size: 90 },
                { name: 'Platform Doors', impact: 8, likelihood: 5, size: 200 },
                { name: 'PA System', impact: 3, likelihood: 3, size: 80 },
            ],
        },
        {
            type: 'heatmap', title: 'Operational Risk Exposure by Station',
            data: [
                { name: 'Station 1', systems: 95, safety: 98, power: 92, comms: 88 },
                { name: 'Station 2', systems: 88, safety: 95, power: 85, comms: 82 },
                { name: 'Station 3', systems: 72, safety: 90, power: 70, comms: 75 },
                { name: 'Station 4', systems: 60, safety: 85, power: 58, comms: 68 },
                { name: 'Depot', systems: 92, safety: 97, power: 95, comms: 90 },
            ],
        },
        // ── Advanced Charts ──
        {
            type: 'cumulativeArea', title: 'Lifecycle Value Index — Cumulative ROI',
            data: [
                { name: 'Year 1', value: 0.4, benchmark: 0.3 },
                { name: 'Year 2', value: 0.65, benchmark: 0.55 },
                { name: 'Year 3', value: 0.85, benchmark: 0.75 },
                { name: 'Year 4', value: 1.0, benchmark: 0.9 },
                { name: 'Year 5', value: 1.15, benchmark: 1.0 },
            ],
        },
        {
            type: 'progressRings', title: 'Commissioning Progress by System', span: 'full',
            data: [
                { label: 'HVAC', value: 80, max: 100 }, { label: 'Electrical', value: 72, max: 100 },
                { label: 'Fire Protection', value: 65, max: 100 }, { label: 'Elevators', value: 55, max: 100 },
                { label: 'Comms', value: 60, max: 100 }, { label: 'Plumbing', value: 78, max: 100 },
                { label: 'Security', value: 45, max: 100 }, { label: 'Signal', value: 52, max: 100 },
            ],
        },
        {
            type: 'histogram', title: 'Downtime Event Duration Distribution (Hours)',
            data: [
                { bin: '0-1', count: 8 }, { bin: '1-2', count: 14 },
                { bin: '2-4', count: 22 }, { bin: '4-8', count: 12 },
                { bin: '8-12', count: 5, highlight: true }, { bin: '12-24', count: 3, highlight: true },
                { bin: '24+', count: 1, highlight: true },
            ],
        },
        {
            type: 'funnel', title: 'Deficiency Resolution Pipeline',
            data: [
                { name: 'Total Identified', value: 342 }, { name: 'Triaged', value: 310 },
                { name: 'In Resolution', value: 245 }, { name: 'Verification', value: 180 },
                { name: 'Closed', value: 156 },
            ],
        },
        {
            type: 'combo', title: 'Energy Consumption vs Efficiency Score',
            data: [
                { name: 'Sep', volume: 1250, rate: 82, target: 90 },
                { name: 'Oct', volume: 1180, rate: 85, target: 90 },
                { name: 'Nov', volume: 1100, rate: 88, target: 90 },
                { name: 'Dec', volume: 1050, rate: 90, target: 90 },
                { name: 'Jan', volume: 1020, rate: 91, target: 90 },
                { name: 'Feb', volume: 980, rate: 92, target: 90 },
            ],
        },
        {
            type: 'waterfall', title: 'Commissioning Schedule Variance (Days)',
            data: [
                { name: 'Baseline', value: 0, isTotal: false },
                { name: 'HVAC delays', value: 12 }, { name: 'Elevator lead', value: 18 },
                { name: 'Labor shortage', value: 8 }, { name: 'Acceleration', value: -15 },
                { name: 'Resequencing', value: -10 }, { name: 'Net Variance', value: 13, isTotal: true },
            ],
        },
    ],
    insights: {
        recurringIssues: [
            { text: 'HVAC control system integration issues across Stations 2–4', severity: 'warning' },
            { text: 'Elevator commissioning delays due to manufacturer lead times', severity: 'info' },
        ],
        emergingRisks: [
            { text: 'Fire alarm integration testing reveals compatibility issue with legacy systems', severity: 'danger' },
            { text: 'Energy monitoring software requires additional licensing', severity: 'warning' },
            { text: 'Predictive model indicates HVAC compressor failure within 60 days at Station 3', severity: 'danger' },
        ],
        crossPhaseSignals: [
            { text: 'Construction punch list items impacting commissioning for Station 3', from: 'Construction Quality' },
            { text: 'O&M requesting training schedule alignment with commissioning milestones', from: 'O&M' },
        ],
    },
};

// ═══════════════════════════════════════════════════════
// 4. OPERATIONS & MAINTENANCE (ORANGE)
// ═══════════════════════════════════════════════════════
export const operationsMaintenanceData = {
    kpis: [
        { label: 'Work Order Closure Rate', value: '94%', target: '90%', trend: 'up', status: 'success', icon: 'Settings' },
        { label: 'Avg Response Time', value: '18 Min', target: '30 Min', trend: 'up', status: 'success', icon: 'Timer' },
        { label: 'PM vs CM Ratio', value: '72:28', target: '75:25', trend: 'up', status: 'success', icon: 'BarChart3' },
        { label: 'First-Time Fix Rate', value: '78%', target: '80%', trend: 'up', status: 'success', icon: 'Gauge' },
        { label: 'Equipment Availability', value: '97.5%', target: '96%', trend: 'up', status: 'success', icon: 'Power' },
        { label: 'Work Order Backlog', value: '23', target: '30', trend: 'down', status: 'success', icon: 'ListChecks' },
        { label: 'Maintenance Maturity', value: '3.8/5', target: '3.5', trend: 'up', status: 'success', icon: 'Activity' },
        { label: 'Failure Recurrence', value: '4.2%', target: '5%', trend: 'up', status: 'success', icon: 'RefreshCw' },
        { label: 'MTTR', value: '2.8 Hrs', target: '4 Hrs', trend: 'up', status: 'success', icon: 'Clock' },
        { label: 'Lifecycle Cost Index', value: '0.92', target: '1.00', trend: 'up', status: 'success', icon: 'DollarSign' },
    ],
    charts: [
        // ── Core Charts ──
        {
            type: 'donut', title: 'Work Order Status Distribution', centerLabel: 'Total WOs',
            data: [
                { name: 'Completed', value: 186, fill: '#2E8B57' },
                { name: 'In Progress', value: 45, fill: '#1E6BB8' },
                { name: 'Pending', value: 23, fill: '#E8772E' },
                { name: 'Overdue', value: 8, fill: '#C02C38' },
            ],
        },
        {
            type: 'stackedColumn', title: 'PM vs CM Work Orders by Month', span: 'full',
            categories: [{ key: 'pm', label: 'Preventive' }, { key: 'cm', label: 'Corrective' }],
            data: [
                { name: 'Sep', pm: 85, cm: 42 }, { name: 'Oct', pm: 88, cm: 38 },
                { name: 'Nov', pm: 92, cm: 35 }, { name: 'Dec', pm: 90, cm: 32 },
                { name: 'Jan', pm: 95, cm: 28 }, { name: 'Feb', pm: 98, cm: 25 },
            ],
        },
        // ── Advanced Charts ──
        {
            type: 'radarChart', title: 'Maintenance Maturity Index',
            data: [
                { subject: 'PM Program', value: 88, benchmark: 80 },
                { subject: 'Inventory Mgmt', value: 72, benchmark: 75 },
                { subject: 'CMMS Utilization', value: 85, benchmark: 80 },
                { subject: 'Skills & Training', value: 78, benchmark: 75 },
                { subject: 'Reliability Eng.', value: 65, benchmark: 70 },
                { subject: 'Predictive Maint.', value: 55, benchmark: 60 },
            ],
        },
        {
            type: 'controlLimits', title: 'Failure Recurrence Rate — SPC Trend', span: 'full',
            data: [
                { month: 'Jul', value: 6.5, ucl: 8, lcl: 2, mean: 5 },
                { month: 'Aug', value: 6.0, ucl: 8, lcl: 2, mean: 5 },
                { month: 'Sep', value: 5.5, ucl: 8, lcl: 2, mean: 5 },
                { month: 'Oct', value: 5.2, ucl: 8, lcl: 2, mean: 5 },
                { month: 'Nov', value: 4.8, ucl: 8, lcl: 2, mean: 5 },
                { month: 'Dec', value: 4.5, ucl: 8, lcl: 2, mean: 5 },
                { month: 'Jan', value: 4.2, ucl: 8, lcl: 2, mean: 5 },
            ],
        },
        {
            type: 'treemap', title: 'Maintenance Cost per Asset Class',
            data: [
                { name: 'Mechanical', value: 156 }, { name: 'Electrical', value: 123 },
                { name: 'HVAC', value: 146 }, { name: 'Safety Systems', value: 90 },
                { name: 'Structural', value: 72 }, { name: 'Plumbing', value: 52 },
                { name: 'Communications', value: 38 }, { name: 'Grounds', value: 22 },
            ],
        },
        {
            type: 'scatterQuadrant', title: 'Preventive Effectiveness — PM ROI Scatter',
            data: [
                { name: 'HVAC PM', impact: 8, likelihood: 2, size: 220 },
                { name: 'Escalator PM', impact: 7, likelihood: 3, size: 200 },
                { name: 'Elevator PM', impact: 9, likelihood: 2, size: 250 },
                { name: 'Lighting PM', impact: 3, likelihood: 4, size: 100 },
                { name: 'Signal PM', impact: 9, likelihood: 1, size: 240 },
                { name: 'Plumbing PM', impact: 4, likelihood: 5, size: 130 },
            ],
        },
        {
            type: 'multiLine', title: 'Equipment Availability by Category', span: 'full',
            series: [
                { key: 'escalators', label: 'Escalators' }, { key: 'elevators', label: 'Elevators' },
                { key: 'hvac', label: 'HVAC' }, { key: 'signals', label: 'Signals' },
                { key: 'power', label: 'Power' },
            ],
            data: [
                { month: 'Sep', escalators: 94, elevators: 96, hvac: 97, signals: 99, power: 98 },
                { month: 'Oct', escalators: 93, elevators: 97, hvac: 97, signals: 99, power: 98 },
                { month: 'Nov', escalators: 95, elevators: 96, hvac: 98, signals: 99, power: 99 },
                { month: 'Dec', escalators: 96, elevators: 97, hvac: 98, signals: 99, power: 99 },
                { month: 'Jan', escalators: 95, elevators: 98, hvac: 97, signals: 100, power: 99 },
                { month: 'Feb', escalators: 97, elevators: 98, hvac: 98, signals: 99, power: 99 },
            ],
        },
        {
            type: 'bullet', title: 'Maintenance KPI Performance',
            data: [
                { name: 'PM Completion', actual: 94, target: 90, max: 100, unit: '%' },
                { name: 'Equipment Availability', actual: 97.5, target: 96, max: 100, unit: '%' },
                { name: 'First-Call Resolution', actual: 78, target: 80, max: 100, unit: '%' },
                { name: 'Parts Availability', actual: 92, target: 95, max: 100, unit: '%' },
                { name: 'Technician Utilization', actual: 85, target: 82, max: 100, unit: '%' },
            ],
        },
        {
            type: 'donut', title: 'Asset Health Distribution', centerLabel: 'Total Assets',
            data: [
                { name: 'Excellent', value: 62, fill: '#2E8B57' },
                { name: 'Good', value: 25, fill: '#1E6BB8' },
                { name: 'Fair', value: 10, fill: '#E8772E' },
                { name: 'Poor', value: 3, fill: '#C02C38' },
            ],
        },
        {
            type: 'waterfall', title: 'Monthly Maintenance Cost Variance ($K)',
            data: [
                { name: 'Budget', value: 0, isTotal: false },
                { name: 'Labor', value: 42 }, { name: 'Parts', value: 28 },
                { name: 'Emergency', value: 35 }, { name: 'Contractor', value: 18 },
                { name: 'Savings', value: -45 }, { name: 'Rebates', value: -12 },
                { name: 'Net Spend', value: 66, isTotal: true },
            ],
        },
    ],
    insights: {
        recurringIssues: [
            { text: 'Escalator #3 at Station 2 recurring mechanical fault — 4th incident this quarter', severity: 'warning' },
            { text: 'HVAC filter replacement schedule lagging in underground stations', severity: 'info' },
        ],
        emergingRisks: [
            { text: 'Spare parts inventory for signal systems approaching critical minimum', severity: 'danger' },
            { text: 'Vendor contract renewal for elevator maintenance due in 60 days', severity: 'warning' },
        ],
        crossPhaseSignals: [
            { text: 'Facility commissioning handover documents incomplete for Station 2 systems', from: 'Facility Excellence' },
            { text: 'Design team clarification needed on maintenance access routes for tunnel fans', from: 'Design Quality' },
        ],
    },
};

// ═══════════════════════════════════════════════════════
// 5. QPMO INTEGRATED DASHBOARD (RED/NEUTRAL)
// ═══════════════════════════════════════════════════════
export const qpmoIntegratedData = {
    systemHealth: {
        overall: 91,
        label: 'System Quality Index',
        breakdown: [
            { name: 'Design Quality', value: 94, color: '#1E6BB8' },
            { name: 'Construction Quality', value: 92, color: '#6A2586' },
            { name: 'Facility Excellence', value: 88, color: '#2E8B57' },
            { name: 'O&M', value: 90, color: '#E8772E' },
        ],
    },
    crossPhaseAlignment: [
        { subject: 'Quality Standards', design: 94, construction: 92, facility: 88, om: 90 },
        { subject: 'Schedule Adherence', design: 91, construction: 85, facility: 78, om: 82 },
        { subject: 'Risk Mitigation', design: 88, construction: 90, facility: 82, om: 85 },
        { subject: 'Documentation', design: 96, construction: 94, facility: 85, om: 88 },
        { subject: 'Compliance', design: 98, construction: 97, facility: 92, om: 94 },
        { subject: 'Collaboration', design: 85, construction: 88, facility: 80, om: 83 },
    ],
    // Executive KPIs for QPMO
    executiveKpis: [
        { label: 'Total Lifecycle NCR Rate', value: '2.4%', target: '3%', trend: 'up', status: 'success', icon: 'Shield' },
        { label: 'Quality Cost Index', value: '$2.1M', target: '$2.5M', trend: 'up', status: 'success', icon: 'DollarSign' },
        { label: 'Decision Closure Rate', value: '91%', target: '85%', trend: 'up', status: 'success', icon: 'CheckCircle2' },
        { label: 'Quality Value Realized', value: '$4.8M', target: '$4M', trend: 'up', status: 'success', icon: 'Rocket' },
        { label: 'Systemic Root Cause Index', value: '12%', target: '15%', trend: 'up', status: 'success', icon: 'Activity' },
        { label: 'Organizational Learning', value: '+18%', target: '+10%', trend: 'up', status: 'success', icon: 'BarChart3' },
    ],
    // Executive charts
    executiveCharts: [
        {
            type: 'waterfall', title: 'Quality Value Realization ($M)', span: 'full',
            data: [
                { name: 'Baseline', value: 0, isTotal: false },
                { name: 'Rework Avoided', value: 1.8 }, { name: 'Early Detection', value: 1.2 },
                { name: 'Process Improvement', value: 0.9 }, { name: 'Training ROI', value: 0.4 },
                { name: 'Escaped Defects', value: -0.5 },
                { name: 'Net Value', value: 3.8, isTotal: true },
            ],
        },
        {
            type: 'pareto', title: 'Systemic Root Cause Index — Top Failure Modes',
            data: [
                { name: 'Coord. Gaps', value: 28 }, { name: 'Spec Ambiguity', value: 22 },
                { name: 'Skill Deficit', value: 18 }, { name: 'Material', value: 14 },
                { name: 'Process', value: 10 }, { name: 'Equipment', value: 5 },
                { name: 'Other', value: 3 },
            ],
        },
        {
            type: 'scatterQuadrant', title: 'Quality vs Schedule Trade-off Analysis',
            data: [
                { name: 'Station 1', impact: 8, likelihood: 3, size: 200 },
                { name: 'Station 2', impact: 6, likelihood: 5, size: 180 },
                { name: 'Station 3', impact: 4, likelihood: 7, size: 160 },
                { name: 'Station 4', impact: 3, likelihood: 8, size: 140 },
                { name: 'Tunnel A', impact: 7, likelihood: 4, size: 200 },
                { name: 'Depot', impact: 9, likelihood: 2, size: 250 },
            ],
        },
        {
            type: 'slopeChart', title: 'Organizational Learning Index — YoY',
            data: [
                { label: 'Design Quality', before: 78, after: 94, yearBefore: '2024', yearAfter: '2025' },
                { label: 'Construction', before: 75, after: 92, yearBefore: '2024', yearAfter: '2025' },
                { label: 'Facility', before: 68, after: 88, yearBefore: '2024', yearAfter: '2025' },
                { label: 'O&M', before: 72, after: 90, yearBefore: '2024', yearAfter: '2025' },
            ],
        },
    ],
    qualityLeakage: [
        { from: 'Design', to: 'Construction', issues: 12, severity: 'medium', description: 'Specification ambiguities causing field interpretation issues' },
        { from: 'Construction', to: 'Commissioning', issues: 8, severity: 'low', description: 'Punch list items delaying system testing' },
        { from: 'Design', to: 'O&M', issues: 5, severity: 'high', description: 'Maintenance access design gaps identified post-construction' },
        { from: 'Construction', to: 'O&M', issues: 3, severity: 'low', description: 'As-built documentation incomplete for select systems' },
    ],
    bottlenecks: [
        { area: 'MEP Coordination', severity: 'high', affected: ['Design Quality', 'Construction Quality'], description: 'Cross-discipline clashes delaying construction by 2 weeks average', metric: '38 open clashes' },
        { area: 'Commissioning Schedule', severity: 'medium', affected: ['Construction Quality', 'Facility Excellence'], description: 'Construction delays pushing commissioning windows', metric: '3 weeks behind' },
        { area: 'Spare Parts Inventory', severity: 'high', affected: ['Facility Excellence', 'O&M'], description: 'Critical parts below minimum stock levels', metric: '12 items at risk' },
    ],
    programTrend: [
        { month: 'Jul', design: 82, construction: 80, facility: 72, om: 78 },
        { month: 'Aug', design: 85, construction: 82, facility: 75, om: 80 },
        { month: 'Sep', design: 87, construction: 85, facility: 78, om: 82 },
        { month: 'Oct', design: 90, construction: 88, facility: 82, om: 85 },
        { month: 'Nov', design: 92, construction: 90, facility: 85, om: 88 },
        { month: 'Dec', design: 93, construction: 91, facility: 86, om: 89 },
        { month: 'Jan', design: 94, construction: 92, facility: 88, om: 90 },
    ],
    improvementFocus: [
        { area: 'Design-Construction Handoff', priority: 'critical', impact: 'High', effort: 'Medium', owner: 'Design + Construction', status: 'In Progress' },
        { area: 'Commissioning Planning', priority: 'high', impact: 'High', effort: 'High', owner: 'Facility Excellence', status: 'Planning' },
        { area: 'Predictive Maintenance', priority: 'medium', impact: 'Medium', effort: 'Low', owner: 'O&M', status: 'Pilot' },
        { area: 'Integrated Document Control', priority: 'high', impact: 'High', effort: 'Medium', owner: 'All', status: 'Approved' },
    ],
    kpiSummary: [
        {
            director: 'Design Quality', color: '#1E6BB8', kpis: [
                { label: 'Review Score', value: '94%', status: 'success' },
                { label: 'BIM Clashes', value: '96%', status: 'success' },
                { label: 'RFI Time', value: '3.2d', status: 'success' },
            ]
        },
        {
            director: 'Construction Quality', color: '#6A2586', kpis: [
                { label: 'FTR', value: '92%', status: 'success' },
                { label: 'NCR Aging', value: '5d', status: 'success' },
                { label: 'Rework', value: '2.1%', status: 'success' },
            ]
        },
        {
            director: 'Facility Excellence', color: '#2E8B57', kpis: [
                { label: 'Reliability', value: '99.1%', status: 'success' },
                { label: 'Commission.', value: '67%', status: 'warning' },
                { label: 'Readiness', value: '72%', status: 'warning' },
            ]
        },
        {
            director: 'O&M', color: '#E8772E', kpis: [
                { label: 'PM Completion', value: '94%', status: 'success' },
                { label: 'MTTR', value: '2.8h', status: 'success' },
                { label: 'Availability', value: '97.5%', status: 'success' },
            ]
        },
    ],
};

export function getDashboardData(directorId) {
    switch (directorId) {
        case 'designQuality': return designQualityData;
        case 'constructionQuality': return constructionQualityData;
        case 'facilityExcellence': return facilityExcellenceData;
        case 'operationsMaintenance': return operationsMaintenanceData;
        default: return null;
    }
}

export const toolItems = [
    { id: 'tasks', label: 'Tasks', icon: 'CheckSquare' },
    { id: 'decisions', label: 'Decisions', icon: 'GitBranch' },
    { id: 'documents', label: 'Documents', icon: 'FileText' },
    { id: 'resources', label: 'Resources', icon: 'Bookmark' },
];

/* ==========  TOOLS DATA  ========== */

export const tasksData = [
    { id: 'T-001', title: 'Finalize BIM clash resolution for NLX Station B2', status: 'in-progress', priority: 'critical', owner: 'Sarah Chen', dueDate: '2025-02-15', project: 'NLX', tags: ['BIM', 'Design'] },
    { id: 'T-002', title: 'Complete NCR-2024-089 root cause analysis', status: 'in-progress', priority: 'high', owner: 'Marcus Williams', dueDate: '2025-02-12', project: 'WSLE', tags: ['NCR', 'Quality'] },
    { id: 'T-003', title: 'Review HVAC commissioning protocol — Phase 2', status: 'review', priority: 'high', owner: 'Diana Park', dueDate: '2025-02-18', project: 'ELE', tags: ['Commissioning', 'Facility'] },
    { id: 'T-004', title: 'Update safety inspection checklist per OSHA 2025', status: 'done', priority: 'medium', owner: 'James Rodriguez', dueDate: '2025-02-05', project: 'All', tags: ['Safety', 'Compliance'] },
    { id: 'T-005', title: 'Prepare Q1 quality metrics executive brief', status: 'in-progress', priority: 'high', owner: 'Anna Liu', dueDate: '2025-02-20', project: 'QPMO', tags: ['Reporting', 'Executive'] },
    { id: 'T-006', title: 'Calibrate vibration monitoring sensors — Track Section 4', status: 'backlog', priority: 'medium', owner: 'Kevin O\'Brien', dueDate: '2025-02-25', project: 'TDLE', tags: ['O&M', 'Sensors'] },
    { id: 'T-007', title: 'Audit DBE subcontractor documentation', status: 'review', priority: 'medium', owner: 'Patricia Foster', dueDate: '2025-02-14', project: 'NLX', tags: ['DBE', 'Compliance'] },
    { id: 'T-008', title: 'Submit FTA monthly progress report', status: 'done', priority: 'high', owner: 'Robert Kim', dueDate: '2025-02-08', project: 'All', tags: ['FTA', 'Reporting'] },
    { id: 'T-009', title: 'Install fire suppression system — Level B3', status: 'backlog', priority: 'critical', owner: 'Thomas Grant', dueDate: '2025-03-01', project: 'WSLE', tags: ['Safety', 'Construction'] },
    { id: 'T-010', title: 'Resolve concrete batch plant QC hold', status: 'in-progress', priority: 'critical', owner: 'Marcus Williams', dueDate: '2025-02-11', project: 'NLX', tags: ['QC', 'Materials'] },
    { id: 'T-011', title: 'Update design specs for platform widening', status: 'backlog', priority: 'low', owner: 'Sarah Chen', dueDate: '2025-03-15', project: 'SRL', tags: ['Design', 'Scope'] },
    { id: 'T-012', title: 'Complete preventive maintenance — Escalator Bank A', status: 'done', priority: 'medium', owner: 'Kevin O\'Brien', dueDate: '2025-02-06', project: 'ELE', tags: ['PM', 'O&M'] },
    { id: 'T-013', title: 'Conduct structural load test — Bridge Segment 7', status: 'review', priority: 'high', owner: 'Thomas Grant', dueDate: '2025-02-16', project: 'TDLE', tags: ['Testing', 'Construction'] },
    { id: 'T-014', title: 'Review change order CO-2025-002 (ADA upgrades)', status: 'in-progress', priority: 'high', owner: 'Anna Liu', dueDate: '2025-02-13', project: 'WSLE', tags: ['Change Order', 'ADA'] },
];

export const decisionsData = [
    { id: 'D-001', title: 'Approve platform widening scope change', status: 'approved', date: '2025-02-08', owner: 'Alex Morgan', impact: 'High', rationale: 'ADA compliance requirement and projected ridership increase of 18% by 2028 necessitates wider platforms. Cost impact: +$2.1M offset by VE savings.', stakeholders: ['Design', 'Construction', 'FTA'], project: 'WSLE' },
    { id: 'D-002', title: 'Defer tunnel ventilation upgrade to Phase 3', status: 'deferred', date: '2025-02-06', owner: 'Sam Williams', impact: 'Medium', rationale: 'Current system meets minimum code requirements. Upgrade can be integrated into Phase 3 without schedule impact. Risk: moderate — requires monitoring.', stakeholders: ['Facility', 'O&M', 'Safety'], project: 'NLX' },
    { id: 'D-003', title: 'Adopt predictive maintenance AI for escalators', status: 'approved', date: '2025-02-05', owner: 'Diana Park', impact: 'High', rationale: 'Pilot results show 35% reduction in unplanned downtime. ROI breakeven in 14 months. Vendor: Siemens MindSphere.', stakeholders: ['O&M', 'IT', 'Finance'], project: 'ELE' },
    { id: 'D-004', title: 'Reject alternative concrete supplier bid', status: 'rejected', date: '2025-02-04', owner: 'Marcus Williams', impact: 'Low', rationale: 'Supplier failed batch plant QC audit. Compressive strength test results below spec (3800 psi vs 4000 psi min). Current supplier retained.', stakeholders: ['Construction', 'QC'], project: 'NLX' },
    { id: 'D-005', title: 'Approve BIM Level 3 mandate for all new designs', status: 'approved', date: '2025-02-03', owner: 'Sarah Chen', impact: 'High', rationale: 'Reduces design clashes by 40% based on NLX pilot data. Increases constructability score. Training plan in place for all design teams.', stakeholders: ['Design', 'Construction', 'BIM'], project: 'All' },
    { id: 'D-006', title: 'Increase DBE goal from 10% to 12%', status: 'pending', date: '2025-02-10', owner: 'Patricia Foster', impact: 'Medium', rationale: 'FTA recommendation and board directive. Current participation at 12.4% — already exceeding proposed target. Formalization for compliance.', stakeholders: ['Strategy', 'Legal', 'FTA'], project: 'All' },
    { id: 'D-007', title: 'Select track alignment option B for SRL', status: 'pending', date: '2025-02-09', owner: 'Alex Morgan', impact: 'Critical', rationale: 'Option B reduces environmental impact, avoids 3 property acquisitions, saves $8M. Slight increase in travel time (+45 sec). Public hearing scheduled.', stakeholders: ['Strategy', 'Community', 'Environmental'], project: 'SRL' },
    { id: 'D-008', title: 'Extend warranty period for signal systems', status: 'approved', date: '2025-02-01', owner: 'Kevin O\'Brien', impact: 'Medium', rationale: 'Negotiated 5-year extended warranty at 8% premium. Covers software updates and critical hardware. Reduces lifecycle cost by $1.2M.', stakeholders: ['O&M', 'Procurement', 'Finance'], project: 'TDLE' },
    { id: 'D-009', title: 'Implement real-time quality dashboards', status: 'approved', date: '2025-01-28', owner: 'Anna Liu', impact: 'High', rationale: 'Consolidates data from 4 director dashboards into QPMO integrated view. Eliminates manual report generation (40 hrs/month). First phase: KPIs + charts.', stakeholders: ['QPMO', 'IT', 'All Directors'], project: 'QPMO' },
    { id: 'D-010', title: 'Pause NLX tunneling during seismic assessment', status: 'pending', date: '2025-02-11', owner: 'Thomas Grant', impact: 'Critical', rationale: 'Recent geotechnical survey shows unexpected soil conditions at Section 5. 48-hour assessment window. Schedule impact: 3-5 days if confirmed.', stakeholders: ['Construction', 'Safety', 'Geotech'], project: 'NLX' },
];

export const documentsData = [
    { id: 'DOC-001', title: 'QPMO Quality Management Plan v4.2', category: 'procedure', status: 'approved', version: '4.2', owner: 'Anna Liu', lastUpdated: '2025-02-08', size: '2.4 MB', downloads: 156 },
    { id: 'DOC-002', title: 'NLX Station B2 — Structural Design Package', category: 'specification', status: 'review', version: '3.1', owner: 'Sarah Chen', lastUpdated: '2025-02-10', size: '18.7 MB', downloads: 42 },
    { id: 'DOC-003', title: 'Monthly NCR Report — January 2025', category: 'report', status: 'approved', version: '1.0', owner: 'Marcus Williams', lastUpdated: '2025-02-05', size: '1.8 MB', downloads: 89 },
    { id: 'DOC-004', title: 'HVAC Commissioning Protocol — ELE Phase 2', category: 'procedure', status: 'review', version: '2.0', owner: 'Diana Park', lastUpdated: '2025-02-09', size: '4.1 MB', downloads: 23 },
    { id: 'DOC-005', title: 'FTA Quarterly Compliance Report Q4-2024', category: 'report', status: 'approved', version: '1.0', owner: 'Robert Kim', lastUpdated: '2025-01-31', size: '3.2 MB', downloads: 67 },
    { id: 'DOC-006', title: 'Change Order CO-2025-002 — ADA Platform Upgrades', category: 'submittal', status: 'review', version: '1.1', owner: 'Alex Morgan', lastUpdated: '2025-02-11', size: '890 KB', downloads: 15 },
    { id: 'DOC-007', title: 'Concrete Batch Plant QC Specifications', category: 'specification', status: 'approved', version: '2.3', owner: 'Thomas Grant', lastUpdated: '2025-01-28', size: '5.6 MB', downloads: 34 },
    { id: 'DOC-008', title: 'DBE Participation Tracking Report', category: 'report', status: 'approved', version: '1.0', owner: 'Patricia Foster', lastUpdated: '2025-02-07', size: '1.1 MB', downloads: 45 },
    { id: 'DOC-009', title: 'Escalator Preventive Maintenance SOP', category: 'procedure', status: 'approved', version: '3.0', owner: 'Kevin O\'Brien', lastUpdated: '2025-02-03', size: '2.9 MB', downloads: 78 },
    { id: 'DOC-010', title: 'WSLE Track Alignment Option B Analysis', category: 'report', status: 'draft', version: '0.8', owner: 'Alex Morgan', lastUpdated: '2025-02-10', size: '7.3 MB', downloads: 8 },
    { id: 'DOC-011', title: 'Signal System Extended Warranty Agreement', category: 'submittal', status: 'approved', version: '1.0', owner: 'Kevin O\'Brien', lastUpdated: '2025-02-01', size: '450 KB', downloads: 12 },
    { id: 'DOC-012', title: 'BIM Level 3 Implementation Guide', category: 'procedure', status: 'draft', version: '1.0', owner: 'Sarah Chen', lastUpdated: '2025-02-09', size: '6.2 MB', downloads: 19 },
    { id: 'DOC-013', title: 'Seismic Assessment — NLX Section 5', category: 'report', status: 'draft', version: '0.5', owner: 'Thomas Grant', lastUpdated: '2025-02-11', size: '12.4 MB', downloads: 3 },
    { id: 'DOC-014', title: 'Safety Inspection Checklist 2025 (OSHA)', category: 'specification', status: 'superseded', version: '1.0', owner: 'James Rodriguez', lastUpdated: '2025-02-05', size: '980 KB', downloads: 112 },
];

export const resourcesData = [
    { id: 'R-001', name: 'Sarah Chen', role: 'Lead Design Engineer', utilization: 92, skills: ['BIM', 'Structural', 'AutoCAD'], projects: ['NLX', 'SRL'], color: '#1E6BB8', status: 'active', certifications: ['PE', 'PMP'] },
    { id: 'R-002', name: 'Marcus Williams', role: 'QA/QC Manager', utilization: 88, skills: ['NCR Management', 'Auditing', 'Six Sigma'], projects: ['NLX', 'WSLE'], color: '#6A2586', status: 'active', certifications: ['CQE', 'PMP'] },
    { id: 'R-003', name: 'Diana Park', role: 'Facility Operations Lead', utilization: 78, skills: ['Commissioning', 'HVAC', 'Energy Systems'], projects: ['ELE'], color: '#2E8B57', status: 'active', certifications: ['CxA', 'LEED AP'] },
    { id: 'R-004', name: 'Kevin O\'Brien', role: 'O&M Program Manager', utilization: 85, skills: ['Predictive Maintenance', 'Asset Mgmt', 'SCADA'], projects: ['TDLE', 'ELE'], color: '#E8772E', status: 'active', certifications: ['PMP', 'CMRP'] },
    { id: 'R-005', name: 'Anna Liu', role: 'QPMO Analytics Lead', utilization: 95, skills: ['Data Analytics', 'Reporting', 'Power BI'], projects: ['QPMO', 'All'], color: '#C02C38', status: 'active', certifications: ['PMP', 'PMI-PBA'] },
    { id: 'R-006', name: 'Thomas Grant', role: 'Construction Superintendent', utilization: 98, skills: ['Concrete', 'Structural', 'Safety'], projects: ['WSLE', 'TDLE'], color: '#6A2586', status: 'over-allocated', certifications: ['PE', 'CHST'] },
    { id: 'R-007', name: 'Patricia Foster', role: 'DBE Compliance Officer', utilization: 65, skills: ['Compliance', 'Procurement', 'Reporting'], projects: ['NLX', 'All'], color: '#1E6BB8', status: 'available', certifications: ['CPCM'] },
    { id: 'R-008', name: 'Robert Kim', role: 'Regulatory Affairs Manager', utilization: 72, skills: ['FTA Compliance', 'Permitting', 'Environmental'], projects: ['All'], color: '#2E8B57', status: 'active', certifications: ['PMP', 'ENV SP'] },
    { id: 'R-009', name: 'James Rodriguez', role: 'Safety Director', utilization: 82, skills: ['OSHA', 'Risk Assessment', 'Training'], projects: ['All'], color: '#E8772E', status: 'active', certifications: ['CSP', 'CHST'] },
    { id: 'R-010', name: 'Alex Morgan', role: 'Program Director', utilization: 90, skills: ['Strategy', 'Stakeholder Mgmt', 'Governance'], projects: ['All'], color: '#C02C38', status: 'active', certifications: ['PMP', 'PgMP'] },
];
