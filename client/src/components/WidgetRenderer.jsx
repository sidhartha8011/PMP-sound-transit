import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, RadarChart,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import {
    AlertTriangle, CheckCircle, Clock, MapPin, Users, Shield, Zap,
    Calendar, ArrowRight, TrendingUp, DollarSign, FileText, Star,
    Award, BookOpen, GraduationCap, Wrench, ChevronRight
} from 'lucide-react';

const CHART_COLORS = ['#00A5D9', '#FF6A13', '#6A2586', '#10b981', '#f59e0b', '#ef4444'];

// Animated counter component
function AnimatedNumber({ value, duration = 1000 }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {value}
        </motion.span>
    );
}

// Project card for portfolio map
function ProjectCard({ project, index }) {
    const phaseColors = {
        'Design': 'from-cyan-400 to-cyan-600',
        'Planning': 'from-amber-400 to-amber-600',
        'Construction': 'from-orange-400 to-orange-600',
        'Testing': 'from-purple-400 to-purple-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="relative p-4 bg-gradient-to-br from-white/80 to-white/40 rounded-xl border border-white/60 shadow-lg overflow-hidden"
        >
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${phaseColors[project.phase] || 'from-slate-400 to-slate-600'}`} />
            <div className="flex justify-between items-start ml-3">
                <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase">{project.code}</p>
                    <h4 className="font-bold text-slate-800 mt-1">{project.name}</h4>
                    <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${phaseColors[project.phase] || 'from-slate-400 to-slate-600'} text-white`}>
                            {project.phase}
                        </span>
                        <span className="text-xs text-slate-500">{project.budget}</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{project.progress}%</span>
                </div>
            </div>
        </motion.div>
    );
}

// Safety incident card
function SafetyCard({ incident, index }) {
    const typeIcons = { 'Near Miss': AlertTriangle, 'First Aid': Shield, 'Observation': Clock };
    const typeColors = {
        'Near Miss': 'text-amber-500 bg-amber-50 border-amber-200',
        'First Aid': 'text-rose-500 bg-rose-50 border-rose-200',
        'Observation': 'text-blue-500 bg-blue-50 border-blue-200'
    };
    const Icon = typeIcons[incident.type] || AlertTriangle;
    const colorClass = typeColors[incident.type] || 'text-slate-500 bg-slate-50 border-slate-200';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl border ${colorClass} flex items-start gap-3`}
        >
            <div className={`p-2 rounded-lg ${colorClass.includes('amber') ? 'bg-amber-100' : colorClass.includes('rose') ? 'bg-rose-100' : 'bg-blue-100'}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <p className="font-semibold text-slate-800">{incident.type}</p>
                <p className="text-sm text-slate-600 mt-1">{incident.description}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{incident.time}</span>
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-full ${incident.action === 'Resolved' || incident.action === 'Closed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{incident.action}</span>
                </div>
            </div>
        </motion.div>
    );
}

// Partner table with modern styling
function PartnerTable({ data }) {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200/50">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
                    <tr>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Partner</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Specialty</th>
                        <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">DBE</th>
                        <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((partner, i) => (
                        <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
                        >
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-slate-600" />
                                    </div>
                                    <span className="font-medium text-slate-800">{partner.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-600">{partner.specialty || partner.role}</td>
                            <td className="py-3 px-4 text-center">
                                {partner.dbe !== undefined && (
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${partner.dbe ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                        {partner.dbe ? 'Yes' : 'No'}
                                    </span>
                                )}
                            </td>
                            <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${partner.performance || partner.score || 0}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                        />
                                    </div>
                                    <span className="font-semibold text-slate-800">{partner.performance || partner.score}%</span>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// EVM Chart with gradient
function EVMChart({ data }) {
    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPV" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00A5D9" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00A5D9" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorEV" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorAC" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(v) => `$${v}M`} />
                    <Tooltip
                        contentStyle={{
                            background: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                        }}
                    />
                    <Area type="monotone" dataKey="pv" stroke="#00A5D9" strokeWidth={2} fillOpacity={1} fill="url(#colorPV)" name="Planned Value" />
                    <Area type="monotone" dataKey="ev" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorEV)" name="Earned Value" />
                    <Area type="monotone" dataKey="ac" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorAC)" name="Actual Cost" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

// Funnel chart for pipelines
function FunnelChart({ data }) {
    return (
        <div className="space-y-3">
            {data?.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                    style={{ originX: 0 }}
                >
                    <div
                        className="h-10 rounded-lg flex items-center justify-between px-4 text-white font-medium"
                        style={{
                            width: `${100 - i * 12}%`,
                            background: item.fill || `linear-gradient(90deg, ${CHART_COLORS[i % CHART_COLORS.length]} 0%, ${CHART_COLORS[i % CHART_COLORS.length]}99 100%)`
                        }}
                    >
                        <span className="text-sm">{item.name || item.stage}</span>
                        <span className="text-lg font-bold">{item.value || item.count}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Digital Twin placeholder with 3D effect
function DigitalTwinViewer() {
    return (
        <motion.div
            className="h-48 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
        >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(100,200,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(100,200,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>
            <motion.div
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 blur-xl opacity-30"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative text-center z-10">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Digital Twin Interface</p>
                <p className="text-cyan-300/70 text-sm mt-1">BIM Model Visualization</p>
            </div>
        </motion.div>
    );
}

// Timeline widget
function TimelineWidget({ data }) {
    const statusColors = {
        complete: 'bg-emerald-500',
        active: 'bg-cyan-500',
        upcoming: 'bg-slate-300'
    };
    const statusBg = {
        complete: 'bg-emerald-50 border-emerald-200 text-emerald-700',
        active: 'bg-cyan-50 border-cyan-200 text-cyan-700',
        upcoming: 'bg-slate-50 border-slate-200 text-slate-500'
    };

    return (
        <div className="relative space-y-0">
            {data?.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 pb-6 last:pb-0"
                >
                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ring-4 ring-white ${statusColors[item.status]}`} />
                        {i < data.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-1 min-h-[40px]" />}
                    </div>
                    {/* Content */}
                    <div className={`flex-1 p-3 rounded-xl border ${statusBg[item.status]} -mt-1`}>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm">{item.milestone}</p>
                            <div className="flex items-center gap-1 text-xs">
                                <Calendar className="w-3 h-3" />
                                <span>{item.date}</span>
                            </div>
                        </div>
                        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full capitalize ${item.status === 'complete' ? 'bg-emerald-100 text-emerald-700' :
                                item.status === 'active' ? 'bg-cyan-100 text-cyan-700' :
                                    'bg-slate-100 text-slate-500'
                            }`}>
                            {item.status}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Sankey / Funding Flow Widget
function SankeyWidget({ data }) {
    const nodes = data?.nodes || [];
    const links = data?.links || [];
    const nodeColors = ['#00A5D9', '#00A5D9', '#00A5D9', '#6A2586', '#FF6A13', '#10b981', '#f59e0b'];

    return (
        <div className="space-y-4">
            {/* Source nodes */}
            <div className="grid grid-cols-3 gap-3">
                {nodes.slice(0, 3).map((node, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 rounded-xl text-white text-center font-semibold text-sm"
                        style={{ background: `linear-gradient(135deg, ${nodeColors[i]}, ${nodeColors[i]}CC)` }}
                    >
                        <DollarSign className="w-5 h-5 mx-auto mb-1" />
                        {node}
                    </motion.div>
                ))}
            </div>

            {/* Flow indicators */}
            <div className="flex justify-center gap-2 py-2">
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    >
                        <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                    </motion.div>
                ))}
            </div>

            {/* Target nodes */}
            <div className="grid grid-cols-4 gap-3">
                {nodes.slice(3).map((node, i) => {
                    const totalValue = links
                        .filter(l => l.target === i + 3)
                        .reduce((sum, l) => sum + l.value, 0);
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="p-3 rounded-xl border border-slate-200 bg-white/80 text-center"
                        >
                            <p className="font-semibold text-sm text-slate-700">{node}</p>
                            <p className="text-lg font-bold mt-1" style={{ color: nodeColors[i + 3] }}>${totalValue}M</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// Sentiment Widget
function SentimentWidget({ data }) {
    return (
        <div className="space-y-6">
            {/* Overall sentiment bars */}
            <div className="flex gap-1 h-8 rounded-xl overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${data.positive}%` }}
                    transition={{ duration: 0.8 }}
                    className="bg-emerald-500 flex items-center justify-center text-white text-xs font-bold"
                >
                    {data.positive}% Positive
                </motion.div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${data.neutral}%` }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="bg-slate-400 flex items-center justify-center text-white text-xs font-bold"
                >
                    {data.neutral}% Neutral
                </motion.div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${data.negative}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-rose-500 flex items-center justify-center text-white text-xs font-bold"
                >
                    {data.negative}%
                </motion.div>
            </div>

            {/* Topic sentiments */}
            <div className="grid grid-cols-2 gap-3">
                {data.topics?.map((topic, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/50"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700">{topic.topic}</span>
                            <span className={`text-sm font-bold ${topic.sentiment >= 60 ? 'text-emerald-600' : topic.sentiment >= 40 ? 'text-amber-600' : 'text-rose-600'}`}>
                                {topic.sentiment}%
                            </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full rounded-full ${topic.sentiment >= 60 ? 'bg-emerald-500' : topic.sentiment >= 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${topic.sentiment}%` }}
                                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Change Log Widget
function ChangeLogWidget({ data }) {
    const priorityColors = {
        high: 'bg-rose-100 text-rose-700 border-rose-200',
        medium: 'bg-amber-100 text-amber-700 border-amber-200',
        low: 'bg-emerald-100 text-emerald-700 border-emerald-200'
    };
    const statusIcons = {
        pending: Clock,
        approved: CheckCircle,
        rejected: AlertTriangle
    };

    return (
        <div className="space-y-3">
            {data?.map((item, i) => {
                const StatusIcon = statusIcons[item.status] || Clock;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 rounded-xl border border-slate-200/50 bg-white/80 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-mono text-slate-400">{item.id}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${priorityColors[item.priority]}`}>
                                        {item.priority}
                                    </span>
                                </div>
                                <h4 className="font-semibold text-slate-800">{item.title}</h4>
                                <p className="text-sm text-slate-500 mt-1">{item.reason}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                                <span className="text-lg font-bold text-slate-800">${item.value}M</span>
                                <StatusIcon className={`w-5 h-5 ${item.status === 'approved' ? 'text-emerald-500' : 'text-amber-500'}`} />
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

// PPC Trend Widget
function PPCTrendWidget({ data }) {
    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="ppcGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6A2586" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#6A2586" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="week" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} domain={[60, 100]} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="ppc" stroke="#6A2586" strokeWidth={2} fillOpacity={1} fill="url(#ppcGrad)" name="PPC %" />
                    <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Target" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

// Risk Radar Widget - converts seed data format to radar chart
function RiskRadarWidget({ data, theme }) {
    const radarData = data.map(r => ({
        subject: r.name,
        risk: r.probability * r.impact,
        fullMark: 25
    }));

    const levelColors = { critical: '#ef4444', high: '#f59e0b', medium: '#00A5D9', low: '#10b981' };

    return (
        <div className="space-y-4">
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 25]} tick={{ fill: '#64748b', fontSize: 10 }} />
                        <Radar name="Risk Score" dataKey="risk" stroke={theme.primary} fill={theme.primary} fillOpacity={0.3} strokeWidth={2} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {data.map((r, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/80"
                    >
                        <div className="w-2 h-2 rounded-full" style={{ background: levelColors[r.level] }} />
                        <span className="text-xs text-slate-600 flex-1">{r.name}</span>
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${r.level === 'critical' ? 'bg-rose-100 text-rose-700' :
                                r.level === 'high' ? 'bg-amber-100 text-amber-700' :
                                    r.level === 'medium' ? 'bg-cyan-100 text-cyan-700' :
                                        'bg-emerald-100 text-emerald-700'
                            }`}>{r.level}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Logistics Timeline Widget
function LogisticsTimelineWidget({ data }) {
    const statusColors = {
        scheduled: 'bg-cyan-100 text-cyan-700 border-cyan-200',
        confirmed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        planned: 'bg-amber-100 text-amber-700 border-amber-200',
        pending: 'bg-slate-100 text-slate-600 border-slate-200'
    };

    return (
        <div className="space-y-3">
            {data?.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/60 border border-slate-200/50 hover:shadow-md transition-shadow"
                >
                    <div className="p-2 rounded-lg bg-orange-50">
                        <Calendar className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-sm text-slate-800">{item.activity}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border capitalize ${statusColors[item.status]}`}>
                        {item.status}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

// Production Metrics Widget
function ProductionMetricsWidget({ data }) {
    return (
        <div className="space-y-4">
            {data?.map((item, i) => {
                const pct = Math.round((item.actual / item.planned) * 100);
                const isOver = item.actual >= item.planned;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium text-slate-700">{item.activity}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">Planned: {item.planned}</span>
                                <span className={`text-sm font-bold ${isOver ? 'text-emerald-600' : 'text-amber-600'}`}>
                                    {item.actual}
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full rounded-full ${isOver ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' : 'bg-gradient-to-r from-amber-500 to-amber-400'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(pct, 120)}%` }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

// Punch List Tracker Widget
function PunchListTrackerWidget({ data }) {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200/50">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
                    <tr>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Trade</th>
                        <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Open</th>
                        <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Closed</th>
                        <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">FTR %</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, i) => (
                        <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
                        >
                            <td className="py-3 px-4 font-medium text-slate-800 flex items-center gap-2">
                                <Wrench className="w-4 h-4 text-slate-400" />
                                {item.trade}
                            </td>
                            <td className="py-3 px-4 text-center">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">{item.open}</span>
                            </td>
                            <td className="py-3 px-4 text-center">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">{item.closed}</span>
                            </td>
                            <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.ftr}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                        />
                                    </div>
                                    <span className="font-bold text-sm text-emerald-700">{item.ftr}%</span>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Subconsultant Health Matrix Widget
function SubconsultantHealthWidget({ data }) {
    const dimensions = ['quality', 'schedule', 'cost', 'safety'];
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200/50">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
                    <tr>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Firm</th>
                        {dimensions.map(d => (
                            <th key={d} className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">{d}</th>
                        ))}
                        <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Overall</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, i) => (
                        <motion.tr
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
                        >
                            <td className="py-3 px-4 font-medium text-slate-800">{item.name}</td>
                            {dimensions.map(d => (
                                <td key={d} className="py-3 px-4 text-center">
                                    <span className={`text-sm font-semibold ${item[d] >= 95 ? 'text-emerald-600' : item[d] >= 90 ? 'text-cyan-600' : 'text-amber-600'}`}>
                                        {item[d]}
                                    </span>
                                </td>
                            ))}
                            <td className="py-3 px-4 text-right">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                                    <Star className="w-3 h-3" /> {item.overall}
                                </span>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Value Tree Widget
function ValueTreeWidget({ data }) {
    return (
        <div className="space-y-6">
            {data?.map((branch, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-100">
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                        </div>
                        <h4 className="font-bold text-slate-800">{branch.name}</h4>
                        <span className="text-lg font-bold text-purple-600">${branch.value}M</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 ml-11">
                        {branch.children?.map((child, j) => (
                            <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + j * 0.1 }}
                                className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100"
                            >
                                <p className="text-sm font-medium text-slate-700">{child.name}</p>
                                <p className="text-lg font-bold text-purple-600 mt-1">${child.value}M</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Talent Funnel Widget
function TalentFunnelWidget({ data }) {
    const maxCount = Math.max(...data.map(d => Math.max(d.count, d.target)));
    return (
        <div className="space-y-4">
            {data?.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-purple-500" />
                            {item.stage}
                        </span>
                        <span className="text-sm">
                            <span className="font-bold text-slate-800">{item.count}</span>
                            <span className="text-slate-400"> / {item.target}</span>
                        </span>
                    </div>
                    <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute h-full rounded-full bg-purple-200"
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.target / maxCount) * 100}%` }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        />
                        <motion.div
                            className="absolute h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.count / maxCount) * 100}%` }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Audit List Widget
function AuditListWidget({ data }) {
    return (
        <div className="space-y-3">
            {data?.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-slate-200/50"
                >
                    <div className={`p-2 rounded-lg ${item.result === 'Passed' ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                        {item.result === 'Passed'
                            ? <CheckCircle className="w-5 h-5 text-emerald-600" />
                            : <AlertTriangle className="w-5 h-5 text-amber-600" />
                        }
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-800">{item.name}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                    </div>
                    <div className="text-right">
                        <span className={`text-xs px-2 py-1 rounded-full ${item.result === 'Passed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                            {item.result}
                        </span>
                        <p className="text-lg font-bold text-slate-800 mt-0.5">{item.score}%</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// NCR Trend Widget (fixed to match seed data keys: aging, target)
function NCRTrendWidget({ data }) {
    return (
        <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="ncrGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6A2586" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#6A2586" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} domain={[0, 12]} />
                    <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="aging" stroke="#6A2586" strokeWidth={2} fillOpacity={1} fill="url(#ncrGrad)" name="NCR Aging (Days)" />
                    <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Target" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default function WidgetRenderer({ widget, theme }) {
    const { type, data, title } = widget;

    switch (type) {
        case 'portfolioMap':
            return (
                <div className="grid grid-cols-2 gap-4">
                    {data?.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            );

        case 'timeline':
            return <TimelineWidget data={data} />;

        case 'evm':
        case 'evmChart':
            return <EVMChart data={data} />;

        case 'funnel':
        case 'inclusionPipeline':
            return <FunnelChart data={data} />;

        case 'sankey':
            return <SankeyWidget data={data} />;

        case 'sentiment':
            return <SentimentWidget data={data} />;

        case 'changeLog':
            return <ChangeLogWidget data={data} />;

        case 'ppcTrend':
            return <PPCTrendWidget data={data} />;

        case 'safetyBoard':
            return (
                <div className="space-y-3">
                    {data?.map((incident, i) => (
                        <SafetyCard key={i} incident={incident} index={i} />
                    ))}
                </div>
            );

        case 'partnerTable':
        case 'subconsultantTable':
            return <PartnerTable data={data} />;

        case 'riskRadar':
            return <RiskRadarWidget data={data} theme={theme} />;

        case 'logisticsTimeline':
            return <LogisticsTimelineWidget data={data} />;

        case 'productionMetrics':
            return <ProductionMetricsWidget data={data} />;

        case 'punchList':
            return (
                <div className="space-y-2">
                    {data?.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
                        >
                            <div className={`w-2 h-2 rounded-full ${item.status === 'Complete' ? 'bg-emerald-500' : item.status === 'In Progress' ? 'bg-amber-500' : 'bg-slate-300'}`} />
                            <span className="flex-1 text-sm text-slate-700">{item.item}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Complete' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                {item.status}
                            </span>
                        </motion.div>
                    ))}
                </div>
            );

        case 'punchListTracker':
            return <PunchListTrackerWidget data={data} />;

        case 'subconsultantHealth':
            return <SubconsultantHealthWidget data={data} />;

        case 'digitalTwin':
            return <DigitalTwinViewer />;

        case 'ncrTrend':
            return <NCRTrendWidget data={data} />;

        case 'auditList':
            return <AuditListWidget data={data} />;

        case 'valueTree':
            return <ValueTreeWidget data={data} />;

        case 'talentFunnel':
            return <TalentFunnelWidget data={data} />;

        default:
            return (
                <div className="p-6 text-center text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                    <p className="text-sm">Widget: {type}</p>
                </div>
            );
    }
}
