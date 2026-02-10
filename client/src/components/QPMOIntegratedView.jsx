import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
    ResponsiveContainer, Tooltip, Legend, LineChart, Line,
    XAxis, YAxis, CartesianGrid,
} from 'recharts';
import {
    Activity, AlertTriangle, ArrowRight, ArrowUp, ArrowDown,
    Target, TrendingUp, CheckCircle2, Clock, Layers,
    AlertCircle, Minus, Shield, DollarSign, Rocket, BarChart3
} from 'lucide-react';
import { qpmoIntegratedData, QPMO_COLORS } from '../data/dashboardData';
import WidgetRenderer from './WidgetRenderer';

const tooltipStyle = {
    background: '#1e293b',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
    fontSize: '12px',
    padding: '12px 16px',
};
const axisStyle = { fill: '#94a3b8', fontSize: 11 };

const RADAR_COLORS = ['#6A2586', '#1E6BB8', '#2E8B57', '#E8772E'];

const iconMap = { Shield, DollarSign, CheckCircle2, Rocket, Activity, BarChart3, Target, Layers };

export default function QPMOIntegratedView() {
    const data = qpmoIntegratedData;
    const color = QPMO_COLORS.qpmoIntegrated.primary;

    // ─── System Health Gauge ───
    const GaugeWidget = () => {
        const v = data.systemHealth.overall;
        const size = 220, sw = 20;
        const r = (size - sw) / 2;
        const halfC = r * Math.PI;
        const pct = Math.min(v / 100, 1);
        const offset = halfC * (1 - pct);
        const zoneColor = pct >= 0.9 ? '#2E8B57' : pct >= 0.75 ? '#E8772E' : '#C02C38';

        return (
            <div className="flex flex-col items-center">
                <svg width={size} height={size / 2 + 30} viewBox={`0 0 ${size} ${size / 2 + 30}`}>
                    <path d={`M ${sw / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - sw / 2} ${size / 2}`} fill="none" stroke="#f0f2f5" strokeWidth={sw} strokeLinecap="round" />
                    <path d={`M ${sw / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - sw / 2} ${size / 2}`} fill="none" stroke="#C02C38" strokeWidth={4} strokeLinecap="round" opacity={0.15} strokeDasharray={`${halfC * 0.6} ${halfC * 0.4}`} />
                    <path d={`M ${sw / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - sw / 2} ${size / 2}`} fill="none" stroke="#E8772E" strokeWidth={4} strokeLinecap="round" opacity={0.15} strokeDasharray={`${halfC * 0.25} ${halfC * 0.75}`} strokeDashoffset={`-${halfC * 0.6}`} />
                    <path d={`M ${sw / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - sw / 2} ${size / 2}`} fill="none" stroke="#2E8B57" strokeWidth={4} strokeLinecap="round" opacity={0.15} strokeDasharray={`${halfC * 0.15} ${halfC * 0.85}`} strokeDashoffset={`-${halfC * 0.85}`} />
                    <motion.path
                        d={`M ${sw / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - sw / 2} ${size / 2}`}
                        fill="none" stroke={zoneColor} strokeWidth={sw} strokeLinecap="round"
                        strokeDasharray={halfC}
                        initial={{ strokeDashoffset: halfC }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.8, ease: 'easeOut' }}
                    />
                    <text x={size / 2} y={size / 2 - 12} textAnchor="middle" fill="#1e293b" fontSize="42" fontWeight="800">{v}</text>
                    <text x={size / 2} y={size / 2 + 10} textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500" letterSpacing="1.5">{data.systemHealth.label.toUpperCase()}</text>
                </svg>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
                    {data.systemHealth.breakdown.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                            <span className="text-[11px] text-slate-500">{item.name}</span>
                            <span className="text-xs font-bold text-slate-700 ml-auto">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // ─── Cross-Phase Alignment Radar ───
    const AlignmentRadar = () => (
        <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={data.crossPhaseAlignment} cx="50%" cy="50%" outerRadius="68%">
                <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 9 }} tickCount={5} />
                <Radar name="Construction" dataKey="construction" stroke={RADAR_COLORS[0]} fill={RADAR_COLORS[0]} fillOpacity={0.08} strokeWidth={2} />
                <Radar name="Design" dataKey="design" stroke={RADAR_COLORS[1]} fill={RADAR_COLORS[1]} fillOpacity={0.08} strokeWidth={2} />
                <Radar name="Facility" dataKey="facility" stroke={RADAR_COLORS[2]} fill={RADAR_COLORS[2]} fillOpacity={0.08} strokeWidth={2} />
                <Radar name="O&M" dataKey="om" stroke={RADAR_COLORS[3]} fill={RADAR_COLORS[3]} fillOpacity={0.08} strokeWidth={2} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
        </ResponsiveContainer>
    );

    // ─── Program Quality Trend (multi-line) ───
    const ProgramTrend = () => (
        <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data.programTrend} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f5" vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis domain={[60, 100]} tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Line type="monotone" dataKey="design" name="Design" stroke="#1E6BB8" strokeWidth={2.5} dot={{ fill: '#1E6BB8', r: 3, strokeWidth: 0 }} />
                <Line type="monotone" dataKey="construction" name="Construction" stroke="#6A2586" strokeWidth={2.5} dot={{ fill: '#6A2586', r: 3, strokeWidth: 0 }} />
                <Line type="monotone" dataKey="facility" name="Facility" stroke="#2E8B57" strokeWidth={2.5} dot={{ fill: '#2E8B57', r: 3, strokeWidth: 0 }} />
                <Line type="monotone" dataKey="om" name="O&M" stroke="#E8772E" strokeWidth={2.5} dot={{ fill: '#E8772E', r: 3, strokeWidth: 0 }} />
            </LineChart>
        </ResponsiveContainer>
    );

    return (
        <div className="space-y-6">
            {/* Banner */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                <div className="w-1 h-12 rounded-full" style={{ background: color }} />
                <div>
                    <h1 className="text-xl font-bold text-slate-800">QPMO Integrated Dashboard</h1>
                    <p className="text-sm text-slate-400">Cross-phase alignment, system health & strategic priorities</p>
                </div>
            </motion.div>

            {/* ─── Executive KPIs Row ─── */}
            {data.executiveKpis && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {data.executiveKpis.map((kpi, i) => {
                        const Icon = iconMap[kpi.icon] || Activity;
                        const TrendIcon = kpi.trend === 'up' ? ArrowUp : kpi.trend === 'down' ? ArrowDown : Minus;
                        const trendColor = kpi.trend === 'up' ? '#2E8B57' : kpi.trend === 'down' ? '#C02C38' : '#94a3b8';
                        return (
                            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }}
                                className="clean-card p-4 relative overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }} />
                                <div className="flex items-start justify-between mb-2">
                                    <div className="p-1.5 rounded-lg" style={{ background: color + '12' }}>
                                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                                    </div>
                                    <TrendIcon className="w-3 h-3" style={{ color: trendColor }} />
                                </div>
                                <p className="text-xl font-extrabold text-slate-800 mb-0.5">{kpi.value}</p>
                                <p className="text-[10px] text-slate-400 font-medium leading-tight">{kpi.label}</p>
                                <p className="text-[9px] text-slate-300 mt-1">Target: {kpi.target}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}

            {/* ─── Row 1: Health Gauge + Alignment Radar ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-emerald-600" />
                        System Quality Health
                    </h3>
                    <GaugeWidget />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-blue-600" />
                        Cross-Phase Alignment
                    </h3>
                    <AlignmentRadar />
                </motion.div>
            </div>

            {/* ─── Row 2: Program Quality Trend ─── */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="clean-card p-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                    Program Quality Trend — All Directors
                </h3>
                <ProgramTrend />
            </motion.div>

            {/* ─── Executive Charts (NEW) ─── */}
            {data.executiveCharts && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {data.executiveCharts.map((chart, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18 + i * 0.04 }}
                            className={`clean-card p-6 ${chart.span === 'full' ? 'lg:col-span-2' : ''}`}
                        >
                            <h3 className="text-sm font-semibold text-slate-700 mb-5 flex items-center gap-2">
                                <div className="w-1.5 h-5 rounded-full" style={{ background: color }} />
                                {chart.title}
                            </h3>
                            <WidgetRenderer widget={chart} color={color} />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* ─── KPI Alignment Panel ─── */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="clean-card p-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-5 flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-red-500" />
                    KPI Alignment — All Directors
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.kpiSummary.map((group, gi) => (
                        <motion.div key={gi} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + gi * 0.06 }} className="rounded-xl border-2 p-4" style={{ borderColor: group.color + '40' }}>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: group.color }}>{group.director}</h4>
                            <div className="space-y-3">
                                {group.kpis.map((kpi, ki) => {
                                    const isGood = kpi.status === 'success';
                                    return (
                                        <div key={ki} className="flex items-center justify-between">
                                            <span className="text-xs text-slate-500">{kpi.label}</span>
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isGood ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                                                {kpi.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* ─── Quality Leakage Flow ─── */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="clean-card p-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                    Quality Leakage Flow — Cross-Phase
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {data.qualityLeakage.map((item, i) => {
                        const sevColor = item.severity === 'high' ? '#C02C38' : item.severity === 'medium' ? '#E8772E' : '#94a3b8';
                        return (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.06 }} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold text-slate-600 bg-white px-2 py-0.5 rounded-lg border border-slate-100">{item.from}</span>
                                    <ArrowRight className="w-3 h-3 text-slate-400" />
                                    <span className="text-xs font-bold text-slate-600 bg-white px-2 py-0.5 rounded-lg border border-slate-100">{item.to}</span>
                                    <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: sevColor + '15', color: sevColor }}>
                                        {item.issues} issues
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* ─── Bottlenecks + Improvement Focus ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        Bottleneck Indicators
                    </h3>
                    <div className="space-y-3">
                        {data.bottlenecks.map((item, i) => {
                            const sev = item.severity === 'high' ? { bg: 'bg-red-50', border: 'border-red-200', pill: 'bg-red-100 text-red-700' } : { bg: 'bg-amber-50', border: 'border-amber-200', pill: 'bg-amber-100 text-amber-700' };
                            return (
                                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.06 }} className={`p-4 rounded-xl ${sev.bg} border ${sev.border}`}>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-xs font-bold text-slate-700">{item.area}</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${sev.pill}`}>{item.severity}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-2">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-slate-400">Metric: <span className="font-bold text-slate-600">{item.metric}</span></span>
                                        <span className="text-[10px] text-slate-400">{item.affected.join(' · ')}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-blue-600" />
                        Strategic Improvement Focus
                    </h3>
                    <div className="overflow-hidden rounded-xl border border-slate-100">
                        <table className="qpmo-table">
                            <thead>
                                <tr>
                                    <th>Initiative</th>
                                    <th className="text-center">Priority</th>
                                    <th className="text-center">Impact</th>
                                    <th className="text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.improvementFocus.map((item, i) => {
                                    const prColor = item.priority === 'critical' ? 'bg-red-50 text-red-700' : item.priority === 'high' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700';
                                    const stColor = item.status === 'In Progress' ? 'bg-blue-50 text-blue-700' : item.status === 'Pilot' ? 'bg-emerald-50 text-emerald-700' : item.status === 'Approved' ? 'bg-purple-50 text-purple-700' : 'bg-slate-50 text-slate-600';
                                    return (
                                        <motion.tr key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.06 }}>
                                            <td>
                                                <span className="text-xs font-medium text-slate-700">{item.area}</span>
                                                <p className="text-[10px] text-slate-400 mt-0.5">{item.owner}</p>
                                            </td>
                                            <td className="text-center"><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${prColor}`}>{item.priority}</span></td>
                                            <td className="text-center"><span className="text-xs font-bold text-slate-600">{item.impact}</span></td>
                                            <td className="text-center"><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stColor}`}>{item.status}</span></td>
                                        </motion.tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
