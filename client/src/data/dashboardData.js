// QPMO INTEGRATED DASHBOARDS – Decision Intelligence Data
// Advanced KPIs + Power BI / Excel-grade charts

export const QPMO_COLORS = {
    green:  { id: 'green',  primary: '#28A745', light: '#48C764', dark: '#1E7E34', ultraLight: '#E8F8EC', name: 'Facility Operational Excellence' },
    brown:  { id: 'brown',  primary: '#8B4513', light: '#A0522D', dark: '#6B3410', ultraLight: '#F5EDE6', name: 'Construction Quality' },
    blue:   { id: 'blue',   primary: '#007BFF', light: '#3395FF', dark: '#0056B3', ultraLight: '#E6F0FF', name: 'Project Performance' },
    purple: { id: 'purple', primary: '#6F42C1', light: '#8B5CF6', dark: '#5A32A3', ultraLight: '#F0EAFC', name: 'Business Continuity & Safety' },
    orange: { id: 'orange', primary: '#FD7E14', light: '#FDAB47', dark: '#C96200', ultraLight: '#FFF4E6', name: 'Operations & Maintenance' },
    red:    { id: 'red',    primary: '#DC3545', light: '#E65C6A', dark: '#A71D2A', ultraLight: '#FCE8EA', name: 'QPMO Oversight & AI' },
};

export const directors = [
    {
        id: 'facility-excellence',
        dashboardLayer: 'executive',
        name: 'Facility Operational Excellence',
        role: 'Facility Operational Excellence',
        shortRole: 'Facility Excellence',
        color: QPMO_COLORS.green,
        description: 'Business & mission performance — Organizational success',
        icon: 'Building2',
        layoutPosition: 'top',
    },
    {
        id: 'construction-quality',
        dashboardLayer: 'program',
        name: 'Construction Quality',
        role: 'Construction Quality',
        shortRole: 'Construction',
        color: QPMO_COLORS.brown,
        description: 'Build it right — Construction phase',
        icon: 'HardHat',
        layoutPosition: 'middle',
    },
    {
        id: 'project-performance',
        dashboardLayer: 'program',
        name: 'Project Performance',
        role: 'Project Performance',
        shortRole: 'Performance',
        color: QPMO_COLORS.blue,
        description: 'Deliver successfully — Project governance',
        icon: 'Layers',
        layoutPosition: 'middle',
    },
    {
        id: 'business-continuity',
        dashboardLayer: 'operations',
        name: 'Business Continuity',
        role: 'Business Continuity & Safety',
        shortRole: 'Continuity',
        color: QPMO_COLORS.purple,
        description: 'Resilience & readiness — System sustainability',
        icon: 'Shield',
        layoutPosition: 'middle',
    },
    {
        id: 'operations-maintenance',
        dashboardLayer: 'operations',
        name: 'Operations & Maintenance',
        role: 'Operations & Maintenance',
        shortRole: 'O&M',
        color: QPMO_COLORS.orange,
        description: 'Asset lifecycle management — Long-term operations',
        icon: 'Wrench',
        layoutPosition: 'middle',
    },
    {
        id: 'qpmo-oversight',
        dashboardLayer: 'executive',
        name: 'QPMO Oversight & AI Intelligence',
        role: 'QPMO Oversight & AI Intelligence',
        shortRole: 'QPMO Oversight',
        color: QPMO_COLORS.red,
        description: 'Strategic intelligence & AI — Executive governance',
        icon: 'Compass',
        layoutPosition: 'bottom',
    },
];

// ═══════════════════════════════════════════════════════
// QPMO 30-KPI RAIL INDUSTRY MODEL (5 KPIs × 6 Sections)
// ═══════════════════════════════════════════════════════
export const QPMO_SECTION_KPIS = {
    'facility-excellence': {
        title: 'Facility Operational Excellence',
        color: QPMO_COLORS.green,
        description: 'Service performance & mission success',
        aiInsight: 'System Availability has exceeded 99% for 3 consecutive months. Energy efficiency improvement of 8% is tracking ahead of 10% annual target. Recommend expanding predictive maintenance to Escalator Bank B to maintain uptime trajectory.',
        charts: [
            { name: 'ProgramHealthRadar', title: 'Program Health Radar', subtitle: 'Safety, Quality, Schedule, Cost, Risk, Stakeholder' },
            { name: 'CapitalPortfolioMap', title: 'Capital Portfolio Map', subtitle: 'TDLE, WSLE, ELE — Sized by budget, colored by risk' },
            { name: 'AssetLifecycle', title: 'Asset Lifecycle Dashboard', subtitle: 'Design → Installed → Tested → Commissioned → Operational' },
            { name: 'ResourceCapacity', title: 'Facility Resource Utilization', subtitle: 'Staff allocation across stations and O&M zones' },
        ],
        summaryStats: [
            { label: 'System Health Index', value: '91%', delta: '+2.1%', deltaType: 'positive' },
            { label: 'Active Stations', value: '24/26', delta: '2 commissioning', deltaType: 'neutral' },
            { label: 'Daily Ridership', value: '142,850', delta: '+5.8%', deltaType: 'positive' },
            { label: 'Fleet Availability', value: '98.4%', delta: '+0.3%', deltaType: 'positive' },
        ],
        progressMetrics: [
            { label: 'Commissioning Progress', value: 67, target: 65, unit: '%' },
            { label: 'Deficiency Close Rate', value: 88, target: 85, unit: '%' },
            { label: 'Operational Readiness', value: 72, target: 70, unit: '%' },
            { label: 'Predictive Score', value: 86, target: 80, unit: '%' },
            { label: 'Lifecycle Value Index', value: 78, target: 75, unit: '%' },
            { label: 'Sustainability Rating', value: 91, target: 85, unit: '%' },
        ],
        projectHealth: [
            { project: 'TDLE', phase: 'Construction', completion: 68, spi: 0.98, cpi: 1.01, risk: 'Medium', budget: '$3.4B' },
            { project: 'WSLE', phase: 'Design', completion: 42, spi: 0.94, cpi: 1.02, risk: 'High', budget: '$2.8B' },
            { project: 'ELE', phase: 'Commissioning', completion: 91, spi: 1.02, cpi: 0.99, risk: 'Low', budget: '$1.2B' },
            { project: 'NLX', phase: 'Procurement', completion: 35, spi: 0.97, cpi: 1.04, risk: 'Medium', budget: '$4.1B' },
            { project: 'SRL', phase: 'Planning', completion: 12, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$0.8B' },
        ],
        recentActivity: [
            { time: '2h ago', event: 'Station B2 HVAC commissioning test passed', type: 'success', by: 'Diana Park' },
            { time: '4h ago', event: 'Energy audit completed — 4.2 kWh/mi achieved', type: 'success', by: 'Kevin O\'Brien' },
            { time: '6h ago', event: 'Escalator Bank A preventive maintenance completed', type: 'info', by: 'Thomas Grant' },
            { time: '1d ago', event: 'Passenger throughput exceeded 140K daily milestone', type: 'success', by: 'System' },
            { time: '1d ago', event: 'Track Section 4 vibration sensors calibrated', type: 'info', by: 'Kevin O\'Brien' },
        ],
        okr: { objective: 'Improve operational readiness of new infrastructure.', keyResults: ['Commissioning readiness > 95%', 'Service reliability > 98%', 'Energy efficiency improved 10%'] },
        insights: {
            recurringIssues: [
                { text: 'HVAC control system integration issues across Stations 2–4', severity: 'warning' },
                { text: 'Elevator commissioning delays due to manufacturer lead times', severity: 'info' },
                { text: 'Passenger information display outages at 3 stations — firmware issue', severity: 'warning' },
            ],
            emergingRisks: [
                { text: 'Fire alarm integration testing reveals compatibility issue with legacy systems', severity: 'danger' },
                { text: 'Predictive model indicates HVAC compressor failure within 60 days at Station 3', severity: 'danger' },
            ],
            crossPhaseSignals: [
                { text: 'Construction punch list items impacting commissioning schedule for Station 3', from: 'Construction Quality' },
                { text: 'O&M requesting training schedule alignment with commissioning milestones', from: 'O&M' },
                { text: 'QPMO flagging energy monitoring software licensing gap', from: 'QPMO Oversight' },
            ],
        },
        kpis: [
            { label: 'System Availability', value: '99.2%', target: '99%', trend: 'up', measures: '% of rail system operational uptime', matters: 'Measures network reliability' },
            { label: 'On-Time Performance', value: '96.5%', target: '95%', trend: 'up', measures: '% trains arriving on schedule', matters: 'Key rider service metric' },
            { label: 'Passenger Throughput', value: '142K/day', target: '135K', trend: 'up', measures: 'Riders served per day', matters: 'Capacity utilization' },
            { label: 'Energy Efficiency', value: '4.2 kWh/mi', target: '<4.5', trend: 'up', measures: 'Energy per train-mile', matters: 'Sustainability & cost control' },
            { label: 'Service Reliability', value: '2.1', target: '<3.0', trend: 'up', measures: 'Delay incidents per 1000 trips', matters: 'Operational stability' },
        ]
    },
    'construction-quality': {
        title: 'Construction Quality',
        color: QPMO_COLORS.brown,
        description: 'Build quality & defect prevention',
        aiInsight: 'NCR-2024-089 root cause analysis reveals a recurring pattern in concrete batch QC holds across NLX. First-Time-Right rate dropped 3% this month. Recommend focused training on WSLE concrete pour procedures.',
        charts: [
            { name: 'DeliveryPipeline', title: 'Construction Delivery Pipeline', subtitle: 'Planning → Design → Procurement → Construction → Commissioning → Operations' },
            { name: 'DecisionVelocity', title: 'QC Decision Velocity', subtitle: 'NCR approvals, inspection sign-offs, and hold resolution speed' },
            { name: 'ScheduleConfidence', title: 'Construction Schedule Confidence', subtitle: 'Planned vs Actual — Early warning for construction delays' },
        ],
        summaryStats: [
            { label: 'Active NCRs', value: '12', delta: '-3 this week', deltaType: 'positive' },
            { label: 'Inspections Today', value: '8', delta: '2 pending', deltaType: 'neutral' },
            { label: 'First Time Right', value: '92%', delta: '-3% MoM', deltaType: 'negative' },
            { label: 'QC Hold Items', value: '4', delta: '1 resolved today', deltaType: 'positive' },
        ],
        progressMetrics: [
            { label: 'Structural Inspections', value: 96, target: 95, unit: '%' },
            { label: 'MEP Inspections', value: 91, target: 93, unit: '%' },
            { label: 'Concrete QC Compliance', value: 88, target: 95, unit: '%' },
            { label: 'Weld Quality Index', value: 97, target: 95, unit: '%' },
            { label: 'Waterproofing Tests', value: 94, target: 90, unit: '%' },
            { label: 'BIM Coordination Score', value: 98, target: 95, unit: '%' },
        ],
        projectHealth: [
            { project: 'TDLE', phase: 'Construction', completion: 68, spi: 0.98, cpi: 1.01, risk: 'Medium', budget: '$3.4B' },
            { project: 'WSLE', phase: 'Construction', completion: 55, spi: 0.94, cpi: 1.02, risk: 'High', budget: '$2.8B' },
            { project: 'NLX', phase: 'Construction', completion: 72, spi: 0.97, cpi: 1.04, risk: 'Medium', budget: '$4.1B' },
            { project: 'ELE', phase: 'Punch List', completion: 94, spi: 1.02, cpi: 0.99, risk: 'Low', budget: '$1.2B' },
            { project: 'SRL', phase: 'Pre-Construction', completion: 15, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$0.8B' },
        ],
        recentActivity: [
            { time: '1h ago', event: 'NCR-2024-092 opened — rebar spacing deviation on NLX Level B3', type: 'warning', by: 'Marcus Williams' },
            { time: '3h ago', event: 'Structural load test passed — Bridge Segment 7 (TDLE)', type: 'success', by: 'Thomas Grant' },
            { time: '5h ago', event: 'Concrete batch plant QC hold resolved — NLX', type: 'success', by: 'Marcus Williams' },
            { time: '8h ago', event: 'BIM clash detection completed — 3 new conflicts identified (WSLE)', type: 'warning', by: 'Sarah Chen' },
            { time: '1d ago', event: 'Fire suppression system inspection passed — Level B2', type: 'success', by: 'Diana Park' },
        ],
        okr: { objective: 'Deliver infrastructure with zero critical defects.', keyResults: ['NCR rate reduced by 30%', 'Rework below 2%', '100% inspection coverage'] },
        insights: {
            recurringIssues: [
                { text: 'Concrete batch plant temperature deviations in early morning pours — 3rd month', severity: 'warning' },
                { text: 'Welding inspection backlog on Track Segment 4 growing', severity: 'info' },
                { text: 'NCR closure lagging for Systems trade — investigate process bottleneck', severity: 'warning' },
            ],
            emergingRisks: [
                { text: 'Rework rate trending up for Systems trade — root cause needed', severity: 'warning' },
                { text: 'New NCR on waterproofing membrane at Station 3 platform level', severity: 'danger' },
            ],
            crossPhaseSignals: [
                { text: 'Design revisions on MEP shaft sizes pending — delays field coordination', from: 'Design Quality' },
                { text: 'Commissioning team needs early access to completed sections for testing', from: 'Facility Excellence' },
                { text: 'O&M requesting as-built documentation updates for Track Section 4', from: 'O&M' },
            ],
        },
        kpis: [
            { label: 'Inspection Pass Rate', value: '94%', target: '95%', trend: 'stable', measures: '% inspections passed first time', matters: 'Build-quality indicator' },
            { label: 'NCR Rate', value: '2.4/project', target: '<3', trend: 'up', measures: 'Non-conformance reports per project', matters: 'Defect detection' },
            { label: 'Rework Cost %', value: '1.8%', target: '<2%', trend: 'up', measures: 'Rework cost vs total construction cost', matters: 'Quality efficiency' },
            { label: 'Punch List Closure Rate', value: '87%', target: '90%', trend: 'stable', measures: 'Speed of resolving defects', matters: 'Project closeout readiness' },
            { label: 'Design Clash Resolution', value: '98%', target: '100%', trend: 'up', measures: 'BIM conflicts resolved before construction', matters: 'Prevents field rework' },
        ]
    },
    'project-performance': {
        title: 'Project Performance',
        color: QPMO_COLORS.blue,
        description: 'Delivery efficiency & project governance',
        aiInsight: 'SPI for WSLE has dropped below 1.0 for the second consecutive period. Cost performance remains strong at 1.02. AI model predicts 72% probability of schedule recovery if MEP coordination is resolved within 14 days.',
        charts: [
            { name: 'ScheduleConfidence', title: 'Schedule Confidence Index (S-Curve)', subtitle: 'Planned vs Actual progress — Early warning for schedule drift' },
            { name: 'DecisionVelocity', title: 'Decision Velocity Dashboard', subtitle: 'Governance health — Pending vs Approved decisions over time' },
            { name: 'DeliveryPipeline', title: 'Project Delivery Pipeline', subtitle: 'Identify where projects are stuck in the lifecycle' },
            { name: 'CapitalPortfolioMap', title: 'Capital Portfolio Status', subtitle: 'Budget status, risk level, and completion % by program' },
        ],
        summaryStats: [
            { label: 'Portfolio Value', value: '$12.3B', delta: 'On Track', deltaType: 'positive' },
            { label: 'Earned Value', value: '$8.1B', delta: '+$420M this Q', deltaType: 'positive' },
            { label: 'Active Change Orders', value: '7', delta: '-2 vs last month', deltaType: 'positive' },
            { label: 'Pending Decisions', value: '14', delta: '4 critical', deltaType: 'negative' },
        ],
        progressMetrics: [
            { label: 'TDLE Overall Progress', value: 68, target: 70, unit: '%' },
            { label: 'WSLE Overall Progress', value: 42, target: 48, unit: '%' },
            { label: 'ELE Overall Progress', value: 91, target: 88, unit: '%' },
            { label: 'NLX Overall Progress', value: 35, target: 33, unit: '%' },
            { label: 'SRL Overall Progress', value: 12, target: 10, unit: '%' },
            { label: 'FTA Compliance Rate', value: 96, target: 95, unit: '%' },
        ],
        projectHealth: [
            { project: 'TDLE', phase: 'Construction', completion: 68, spi: 0.98, cpi: 1.01, risk: 'Medium', budget: '$3.4B' },
            { project: 'WSLE', phase: 'Design', completion: 42, spi: 0.94, cpi: 1.02, risk: 'High', budget: '$2.8B' },
            { project: 'ELE', phase: 'Commissioning', completion: 91, spi: 1.02, cpi: 0.99, risk: 'Low', budget: '$1.2B' },
            { project: 'NLX', phase: 'Procurement', completion: 35, spi: 0.97, cpi: 1.04, risk: 'Medium', budget: '$4.1B' },
            { project: 'SRL', phase: 'Planning', completion: 12, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$0.8B' },
        ],
        recentActivity: [
            { time: '30m ago', event: 'Change Order CO-2025-003 submitted for ADA ramp modification (WSLE)', type: 'warning', by: 'Anna Liu' },
            { time: '2h ago', event: 'FTA monthly progress report approved and submitted', type: 'success', by: 'Robert Kim' },
            { time: '4h ago', event: 'TDLE milestone MS-14 (Track Installation) marked complete', type: 'success', by: 'James Rodriguez' },
            { time: '6h ago', event: 'SPI alert triggered — WSLE dropped below 0.95 threshold', type: 'warning', by: 'System' },
            { time: '1d ago', event: 'ELE commissioning readiness review passed (91% complete)', type: 'success', by: 'Diana Park' },
        ],
        okr: { objective: 'Deliver capital projects on time and on budget.', keyResults: ['SPI ≥ 1.0', 'CPI ≥ 1.0', 'Change orders reduced 20%'] },
        insights: {
            recurringIssues: [
                { text: 'WSLE schedule slippage continues — SPI below 1.0 for 3rd consecutive period', severity: 'warning' },
                { text: 'Procurement cycle times exceeding targets for MEP packages', severity: 'info' },
                { text: 'Change order volume increasing on NLX due to soil conditions', severity: 'warning' },
            ],
            emergingRisks: [
                { text: 'FTA compliance gap detected — risk of funding delay if not resolved by Q2', severity: 'danger' },
                { text: 'Material cost escalation may push CPI below 1.0 on TDLE by Q3', severity: 'warning' },
            ],
            crossPhaseSignals: [
                { text: 'Construction delays on NLX propagating to commissioning timeline', from: 'Construction Quality' },
                { text: 'Facility team flagging incomplete design packages for Station B2', from: 'Facility Excellence' },
                { text: 'QPMO AI model predicts 72% probability of WSLE schedule recovery if MEP resolved in 14 days', from: 'QPMO Oversight' },
            ],
        },
        kpis: [
            { label: 'Schedule Performance Index (SPI)', value: '0.96', target: '≥ 1.0', trend: 'stable', measures: 'Schedule adherence', matters: 'Delivery efficiency' },
            { label: 'Cost Performance Index (CPI)', value: '1.02', target: '≥ 1.0', trend: 'up', measures: 'Budget performance', matters: 'Financial control' },
            { label: 'Change Order Frequency', value: '4.2%', target: '<5%', trend: 'up', measures: 'Change orders per contract', matters: 'Scope stability' },
            { label: 'Risk Mitigation Completion', value: '88%', target: '90%', trend: 'stable', measures: '% risks mitigated on time', matters: 'Risk governance' },
            { label: 'Procurement Cycle Time', value: '42 days', target: '<45', trend: 'up', measures: 'Time to award contracts', matters: 'Supply chain efficiency' },
        ]
    },
    'business-continuity': {
        title: 'Business Continuity & Safety',
        color: QPMO_COLORS.purple,
        description: 'Resilience & safety',
        aiInsight: 'Zero cybersecurity incidents maintained for 180+ days. Disaster Recovery drill scheduled for March 15 — current readiness score of 92/100 exceeds baseline. Safety incident rate trending 58% below industry benchmark.',
        charts: [
            { name: 'RiskHeatMap', title: 'Risk Heat Map', subtitle: 'Critical program threats (Probability × Impact)' },
            { name: 'ProgramHealthRadar', title: 'Safety & Resilience Radar', subtitle: 'Multi-dimensional safety posture across all programs' },
            { name: 'TaskThroughput', title: 'Safety Task Throughput', subtitle: 'Open vs Resolved safety actions — Compliance tracking' },
        ],
        summaryStats: [
            { label: 'Days Without Incident', value: '184', delta: '+7 days', deltaType: 'positive' },
            { label: 'Open Safety Items', value: '3', delta: '-2 this week', deltaType: 'positive' },
            { label: 'DR Readiness', value: '92/100', delta: '+4 since audit', deltaType: 'positive' },
            { label: 'Active Risk Mitigations', value: '11', delta: '3 critical', deltaType: 'negative' },
        ],
        progressMetrics: [
            { label: 'OSHA Compliance', value: 98, target: 95, unit: '%' },
            { label: 'Fire Safety Systems', value: 94, target: 100, unit: '%' },
            { label: 'Seismic Preparedness', value: 88, target: 85, unit: '%' },
            { label: 'Cyber Resilience', value: 96, target: 90, unit: '%' },
            { label: 'Emergency Drill Score', value: 91, target: 85, unit: '%' },
            { label: 'Business Continuity Plan', value: 85, target: 80, unit: '%' },
        ],
        projectHealth: [
            { project: 'TDLE', phase: 'Active', completion: 95, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$12M' },
            { project: 'WSLE', phase: 'Monitor', completion: 82, spi: 0.98, cpi: 1.01, risk: 'Medium', budget: '$8M' },
            { project: 'NLX', phase: 'Active', completion: 78, spi: 0.96, cpi: 1.02, risk: 'Medium', budget: '$15M' },
            { project: 'ELE', phase: 'Closing', completion: 97, spi: 1.01, cpi: 1.00, risk: 'Low', budget: '$5M' },
            { project: 'SRL', phase: 'Planning', completion: 45, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$3M' },
        ],
        recentActivity: [
            { time: '2h ago', event: 'OSHA 2025 checklist updated and distributed to all project sites', type: 'success', by: 'James Rodriguez' },
            { time: '5h ago', event: 'Cybersecurity penetration test completed — zero vulnerabilities found', type: 'success', by: 'IT Security' },
            { time: '8h ago', event: 'Seismic sensor calibration complete for Track Section 2-7', type: 'info', by: 'Kevin O\'Brien' },
            { time: '1d ago', event: 'Emergency evacuation drill score: 91/100 (exceeded target)', type: 'success', by: 'Safety Team' },
            { time: '2d ago', event: 'Business continuity plan updated for extreme weather protocols', type: 'info', by: 'Patricia Foster' },
        ],
        okr: { objective: 'Ensure uninterrupted transportation service.', keyResults: ['Emergency response time < 15 min', 'Zero major service interruptions', 'Resilience score > 90%'] },
        insights: {
            recurringIssues: [
                { text: 'Emergency exit signage battery replacements overdue at 4 stations', severity: 'warning' },
                { text: 'Seismic sensor false positives increasing in Track Sections 2–5', severity: 'info' },
                { text: 'Safety training attendance below 90% threshold for Q1', severity: 'warning' },
            ],
            emergingRisks: [
                { text: 'Severe weather forecast — potential flood risk to tunnel ventilation systems', severity: 'danger' },
                { text: 'Third-party cybersecurity audit reveals firmware vulnerability in SCADA systems', severity: 'danger' },
            ],
            crossPhaseSignals: [
                { text: 'Construction site evacuation routes need updating as TDLE Phase 3 begins', from: 'Construction Quality' },
                { text: 'O&M requesting emergency power failover testing during commissioning window', from: 'O&M' },
                { text: 'Design team needs to finalize fire suppression specs for new tunnel sections', from: 'Design Quality' },
            ],
        },
        kpis: [
            { label: 'Safety Incident Rate', value: '0.42', target: '<1.0', trend: 'up', measures: 'Incidents per 200K work hours', matters: 'Workforce safety' },
            { label: 'Emergency Response Time', value: '12 min', target: '<15 min', trend: 'up', measures: 'Response to operational disruptions', matters: 'Service resilience' },
            { label: 'Cybersecurity Incident Rate', value: '0', target: '0', trend: 'stable', measures: 'System cyber events', matters: 'Infrastructure protection' },
            { label: 'Disaster Recovery Readiness', value: '92/100', target: '>90', trend: 'up', measures: 'Recovery plan readiness score', matters: 'System resilience' },
            { label: 'Climate Risk Exposure', value: 'Low', target: 'Low', trend: 'stable', measures: 'Infrastructure risk from environmental events', matters: 'Long-term sustainability' },
        ]
    },
    'operations-maintenance': {
        title: 'Operations & Maintenance',
        color: QPMO_COLORS.orange,
        description: 'Asset lifecycle management',
        aiInsight: 'Predictive model flags Escalator Bank B for preventive maintenance within 7 days (MTBF pattern match 94%). Maintenance backlog stable at 18 items. Resource capacity utilization averaging 82% — optimal range.',
        charts: [
            { name: 'AssetLifecycle', title: 'Asset Lifecycle Dashboard', subtitle: 'Design → Installed → Tested → Commissioned → Operational' },
            { name: 'ResourceCapacity', title: 'Resource Capacity Map', subtitle: 'Utilization across Engineers, Safety Officers, BIM leads' },
            { name: 'TaskThroughput', title: 'Task Throughput Flow', subtitle: 'Kanban flow — Tasks Created vs Completed vs Backlog growth' },
        ],
        summaryStats: [
            { label: 'Active Work Orders', value: '47', delta: '-5 this week', deltaType: 'positive' },
            { label: 'Avg Response Time', value: '2.4h', delta: '-18min MoM', deltaType: 'positive' },
            { label: 'PM Completion', value: '94%', delta: '+2% MoM', deltaType: 'positive' },
            { label: 'Asset Uptime', value: '97.5%', delta: 'Above target', deltaType: 'positive' },
        ],
        progressMetrics: [
            { label: 'Escalator Systems', value: 94, target: 95, unit: '%' },
            { label: 'HVAC Systems', value: 97, target: 95, unit: '%' },
            { label: 'Signaling & Communications', value: 99, target: 98, unit: '%' },
            { label: 'Track & Guideway', value: 96, target: 95, unit: '%' },
            { label: 'Power Distribution', value: 98, target: 97, unit: '%' },
            { label: 'Fire & Life Safety', value: 100, target: 100, unit: '%' },
        ],
        projectHealth: [
            { project: 'Station A', phase: 'Operational', completion: 100, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$1.2M/yr' },
            { project: 'Station B', phase: 'Commissioning', completion: 92, spi: 0.98, cpi: 1.01, risk: 'Low', budget: '$0.9M/yr' },
            { project: 'Depot North', phase: 'Operational', completion: 100, spi: 1.00, cpi: 0.98, risk: 'Medium', budget: '$2.4M/yr' },
            { project: 'Depot South', phase: 'Operational', completion: 100, spi: 1.00, cpi: 1.02, risk: 'Low', budget: '$1.8M/yr' },
            { project: 'Track Sect. 4', phase: 'Maintenance', completion: 78, spi: 0.95, cpi: 1.05, risk: 'Medium', budget: '$3.1M/yr' },
        ],
        recentActivity: [
            { time: '1h ago', event: 'Escalator Bank A preventive maintenance completed ahead of schedule', type: 'success', by: 'Kevin O\'Brien' },
            { time: '3h ago', event: 'HVAC chiller unit #4 filter replaced — efficiency restored to 98%', type: 'info', by: 'Maintenance Team' },
            { time: '6h ago', event: 'Predictive alert: Track Section 4 vibration anomaly detected', type: 'warning', by: 'AI System' },
            { time: '12h ago', event: 'Work order WO-2025-089 closed — platform lighting repair', type: 'success', by: 'Thomas Grant' },
            { time: '1d ago', event: 'Monthly asset health report generated — 97.5% availability', type: 'info', by: 'System' },
        ],
        okr: { objective: 'Maximize reliability of operational infrastructure.', keyResults: ['Asset availability > 99%', 'Maintenance backlog reduced 25%', 'Predictive maintenance coverage > 70%'] },
        insights: {
            recurringIssues: [
                { text: 'Escalator #3 at Station 2 recurring mechanical fault — 4th incident this quarter', severity: 'warning' },
                { text: 'HVAC filter replacement schedule lagging in underground stations', severity: 'info' },
                { text: 'Signal system firmware updates deferred 3 times due to scheduling conflicts', severity: 'warning' },
            ],
            emergingRisks: [
                { text: 'Spare parts inventory for signal systems approaching critical minimum', severity: 'danger' },
                { text: 'Vendor contract renewal for elevator maintenance due in 60 days — no bid received', severity: 'warning' },
            ],
            crossPhaseSignals: [
                { text: 'Facility commissioning handover documents incomplete for Station 2 systems', from: 'Facility Excellence' },
                { text: 'Design team clarification needed on maintenance access routes for tunnel fans', from: 'Design Quality' },
                { text: 'Construction as-built documentation gaps delaying maintenance SOP development', from: 'Construction Quality' },
            ],
        },
        kpis: [
            { label: 'Asset Availability', value: '97.5%', target: '>96%', trend: 'up', measures: '% time equipment operational', matters: 'Infrastructure reliability' },
            { label: 'Mean Time Between Failures', value: '42 days', target: '>30d', trend: 'up', measures: 'Time between system failures', matters: 'Asset health' },
            { label: 'Maintenance Response Time', value: '2.4 hrs', target: '<4 hrs', trend: 'up', measures: 'Time to fix operational issues', matters: 'Service continuity' },
            { label: 'Maintenance Backlog', value: '18', target: '<20', trend: 'stable', measures: 'Outstanding maintenance work', matters: 'Asset risk indicator' },
            { label: 'Lifecycle Asset Cost', value: '$4.2M', target: '$4.5M', trend: 'up', measures: 'Cost over asset life', matters: 'Financial sustainability' },
        ]
    },
    'qpmo-oversight': {
        title: 'QPMO Oversight & AI Intelligence',
        color: QPMO_COLORS.red,
        description: 'Strategic governance & AI analytics',
        aiInsight: 'Predictive Schedule Risk triggered for WSLE. A pattern of RFI delays in the Knowledge Hub correlates with an 8% chance of schedule slippage next month. Recommend escalating MEP coordination review. Portfolio Risk Index stable at 14.2 — within management threshold.',
        charts: [
            { name: 'ProgramHealthRadar', title: 'Program Health Radar', subtitle: 'Cross-program health — Safety, Quality, Schedule, Cost, Risk, Stakeholder' },
            { name: 'RiskHeatMap', title: 'Enterprise Risk Heat Map', subtitle: 'Critical program threats (Probability × Impact) across all projects' },
            { name: 'CapitalPortfolioMap', title: 'Strategic Portfolio Overview', subtitle: 'AI-recommended budget reallocation and risk-adjusted priorities' },
            { name: 'ScheduleConfidence', title: 'Cross-Program Schedule Confidence', subtitle: 'Portfolio-wide planned vs actual — aggregate schedule health' },
        ],
        summaryStats: [
            { label: 'Portfolio Value at Risk', value: '$120M', delta: '<$150M threshold', deltaType: 'positive' },
            { label: 'Total Programs', value: '5', delta: '3 active construction', deltaType: 'neutral' },
            { label: 'AI Predictions Accuracy', value: '92%', delta: '+4% this quarter', deltaType: 'positive' },
            { label: 'Governance Score', value: '94/100', delta: '+2 since last audit', deltaType: 'positive' },
        ],
        progressMetrics: [
            { label: 'TDLE Program Health', value: 82, target: 80, unit: '%' },
            { label: 'WSLE Program Health', value: 68, target: 75, unit: '%' },
            { label: 'ELE Program Health', value: 94, target: 85, unit: '%' },
            { label: 'NLX Program Health', value: 76, target: 70, unit: '%' },
            { label: 'SRL Program Health', value: 88, target: 80, unit: '%' },
            { label: 'Portfolio-wide Alignment', value: 88, target: 85, unit: '%' },
        ],
        projectHealth: [
            { project: 'TDLE', phase: 'Construction', completion: 68, spi: 0.98, cpi: 1.01, risk: 'Medium', budget: '$3.4B' },
            { project: 'WSLE', phase: 'Design', completion: 42, spi: 0.94, cpi: 1.02, risk: 'High', budget: '$2.8B' },
            { project: 'ELE', phase: 'Commissioning', completion: 91, spi: 1.02, cpi: 0.99, risk: 'Low', budget: '$1.2B' },
            { project: 'NLX', phase: 'Procurement', completion: 35, spi: 0.97, cpi: 1.04, risk: 'Medium', budget: '$4.1B' },
            { project: 'SRL', phase: 'Planning', completion: 12, spi: 1.00, cpi: 1.00, risk: 'Low', budget: '$0.8B' },
        ],
        recentActivity: [
            { time: '15m ago', event: 'AI model updated — portfolio risk recalculated across all 5 programs', type: 'info', by: 'AI System' },
            { time: '1h ago', event: 'Board briefing materials auto-generated for Q1 Capital Review', type: 'success', by: 'System' },
            { time: '3h ago', event: 'WSLE schedule risk escalated to Program Director — SPI at 0.94', type: 'warning', by: 'AI System' },
            { time: '6h ago', event: 'Governance compliance audit completed — score: 94/100', type: 'success', by: 'Patricia Foster' },
            { time: '1d ago', event: 'Strategic priority realignment approved — NLX elevated to Priority 2', type: 'success', by: 'Executive Team' },
        ],
        okr: { objective: 'Enable data-driven leadership decisions.', keyResults: ['Predictive risk detection > 90%', 'Portfolio dashboard updated daily', 'AI insights adopted by leadership'] },
        insights: {
            recurringIssues: [
                { text: 'Cross-program data discrepancies between PMIS and BIM models persist', severity: 'warning' },
                { text: 'Executive report generation requires manual intervention despite automation', severity: 'info' },
                { text: 'AI prediction confidence drops below 85% for programs with incomplete data', severity: 'warning' },
            ],
            emergingRisks: [
                { text: 'Portfolio risk index approaching $150M threshold — 2 programs driving increase', severity: 'danger' },
                { text: 'Board requesting real-time ESG metrics not yet integrated into dashboards', severity: 'warning' },
            ],
            crossPhaseSignals: [
                { text: 'Construction flagging data latency issues — field data 48hrs behind dashboard', from: 'Construction Quality' },
                { text: 'Facility Excellence requesting AI-driven commissioning predictions', from: 'Facility Excellence' },
                { text: 'O&M predictive maintenance models need integration into enterprise risk view', from: 'O&M' },
            ],
        },
        kpis: [
            { label: 'Portfolio Risk Index', value: '14.2', target: '<15', trend: 'stable', measures: 'Overall risk across projects', matters: 'Executive awareness' },
            { label: 'Governance Compliance Score', value: '94%', target: '>90%', trend: 'up', measures: 'Audit & process compliance', matters: 'Organizational maturity' },
            { label: 'Data Completeness Index', value: '98%', target: '100%', trend: 'up', measures: 'Quality of PMIS/BIM data', matters: 'Digital decision readiness' },
            { label: 'Predictive Schedule Risk', value: '86%', target: '>90%', trend: 'stable', measures: 'AI prediction of delays', matters: 'Proactive mitigation' },
            { label: 'Strategic Alignment Score', value: '88/100', target: '>85', trend: 'up', measures: 'Projects aligned to mission priorities', matters: 'Portfolio optimization' },
        ]
    }
};

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
    switch (directorId) { // Data functions will be defined inside components directly or layered here.
        case 'executive': return executiveData;
        case 'program': return programData;
        case 'operations': return operationsData;
        default: return null;
    }
}

// ═══════════════════════════════════════════════════════
// 6. QPMO INTELLIGENCE DASHBOARD (NEW 1-4-1 LAYOUT)
// ═══════════════════════════════════════════════════════
export const qpmoIntelligenceData = {
    // Top Section (Green)
    facilityExcellence: {
        id: 'facility-excellence',
        title: 'Facility Operational Excellence',
        color: '#2E8B57', // Green
        description: 'Business & mission performance, organizational success',
        kpis: [
            { label: 'System Availability', value: '99.2%', target: '99%' },
            { label: 'On-Time Performance', value: '96.5%', target: '95%' },
            { label: 'Energy Efficiency', value: '+8.4%', target: '+10%' },
            { label: 'Supply Chain Reliability', value: '92%', target: '90%' },
            { label: 'Customer Satisfaction', value: '4.6/5', target: '4.5' },
        ],
        okr: {
            objective: 'Improve operational readiness of new infrastructure.',
            keyResults: [
                'Commissioning readiness > 95%',
                'Service reliability > 98%',
                'Energy efficiency improved 10%'
            ]
        }
    },
    // Middle 1 (Brown)
    constructionQuality: {
        id: 'construction-quality',
        title: 'Construction Quality',
        color: '#8B4513', // Brown
        description: 'Build it right, Construction phase',
        kpis: [
            { label: 'Inspection Pass Rate', value: '94%', target: '95%' },
            { label: 'NCR Frequency', value: '2.4/mo', target: '<3' },
            { label: 'Rework Cost', value: '1.8%', target: '<2%' },
            { label: 'Clash Resolution', value: '98%', target: '100%' },
        ],
        okr: {
            objective: 'Deliver infrastructure with zero critical defects.',
            keyResults: [
                'NCR rate reduced by 30%',
                'Rework below 2%',
                '100% inspection coverage'
            ]
        }
    },
    // Middle 2 (Blue)
    projectPerformance: {
        id: 'project-performance',
        title: 'Project Performance',
        color: '#1E6BB8', // Blue
        description: 'Deliver successfully, Project governance',
        kpis: [
            { label: 'SPI (Schedule)', value: '0.96', target: '1.0' },
            { label: 'CPI (Cost)', value: '1.02', target: '1.0' },
            { label: 'Change Orders', value: '4.2%', target: '<5%' },
            { label: 'Risk Mitigation', value: '88%', target: '90%' },
        ],
        okr: {
            objective: 'Deliver capital projects on time and on budget.',
            keyResults: [
                'SPI ≥ 1.0',
                'CPI ≥ 1.0',
                'Change orders reduced 20%'
            ]
        }
    },
    // Middle 3 (Purple)
    businessContinuity: {
        id: 'business-continuity',
        title: 'Business Continuity',
        color: '#6A2586', // Purple
        description: 'Resilience & readiness, System sustainability',
        kpis: [
            { label: 'Safety Incidents', value: '0.4', target: '<1.0' },
            { label: 'Resilience Score', value: '92/100', target: '90' },
            { label: 'Cyber Incidents', value: '0', target: '0' },
            { label: 'Disaster Recovery', value: '2.5h', target: '<4h' },
        ],
        okr: {
            objective: 'Ensure uninterrupted transportation service.',
            keyResults: [
                'Emergency response time < 15 minutes',
                'Zero major service interruptions',
                'Resilience score > 90%'
            ]
        }
    },
    // Middle 4 (Orange)
    operationsMaintenance: {
        id: 'operations-maintenance',
        title: 'Operations & Maintenance',
        color: '#E8772E', // Orange
        description: 'Asset lifecycle management, Long-term operations',
        kpis: [
            { label: 'MTBF', value: '45d', target: '>40d' },
            { label: 'Maint. Backlog', value: '18', target: '<20' },
            { label: 'Asset Downtime', value: '1.2%', target: '<2%' },
            { label: 'PM Completion', value: '96%', target: '95%' },
        ],
        okr: {
            objective: 'Maximize reliability of operational infrastructure.',
            keyResults: [
                'Asset availability > 99%',
                'Maintenance backlog reduced 25%',
                'Predictive maintenance coverage > 70%'
            ]
        }
    },
    // Bottom Section (Red)
    qpmoOversight: {
        id: 'qpmo-oversight',
        title: 'QPMO Oversight & AI Intelligence',
        color: '#C02C38', // Red
        description: 'Strategic intelligence & AI, Executive governance',
        kpis: [
            { label: 'Portfolio Risk Index', value: '14.2', target: '<15' },
            { label: 'Schedule Risk Model', value: '86%', target: '>90%' },
            { label: 'Data Completeness', value: '98%', target: '100%' },
            { label: 'AI Prediction Act.', value: '82%', target: '>80%' },
        ],
        okr: {
            objective: 'Enable data-driven leadership decisions.',
            keyResults: [
                'Predictive risk detection > 90%',
                'Portfolio performance dashboard updated daily',
                'AI insights adopted by leadership'
            ]
        }
    }
};

export const toolItems = [
    { id: 'tasks', label: 'Action Board', icon: 'CheckSquare' },
    { id: 'decisions', label: 'Decision Log', icon: 'GitBranch' },
    { id: 'documents', label: 'Knowledge Hub', icon: 'FileText' },
    { id: 'resources', label: 'Capacity & Talent', icon: 'Bookmark' },
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
