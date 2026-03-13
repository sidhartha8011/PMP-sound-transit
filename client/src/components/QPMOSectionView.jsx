import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Target, Cpu, Info, Clock, CheckCircle2, AlertTriangle, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { QPMO_SECTION_KPIS } from '../data/dashboardData';

// Chart imports
import ProgramHealthRadar from './charts/ProgramHealthRadar';
import CapitalPortfolioMap from './charts/CapitalPortfolioMap';
import DeliveryPipeline from './charts/DeliveryPipeline';
import ScheduleConfidence from './charts/ScheduleConfidence';
import DecisionVelocity from './charts/DecisionVelocity';
import RiskHeatMap from './charts/RiskHeatMap';
import AssetLifecycle from './charts/AssetLifecycle';
import ResourceCapacity from './charts/ResourceCapacity';
import TaskThroughput from './charts/TaskThroughput';

const chartComponents = {
    ProgramHealthRadar, CapitalPortfolioMap, DeliveryPipeline,
    ScheduleConfidence, DecisionVelocity, RiskHeatMap,
    AssetLifecycle, ResourceCapacity, TaskThroughput,
};

const TrendIcon = ({ trend }) => {
    if (trend === 'up') return <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />;
    if (trend === 'down') return <TrendingDown className="w-3.5 h-3.5 text-red-500" />;
    return <Minus className="w-3.5 h-3.5 text-slate-400" />;
};

const riskColor = (risk) => {
    if (risk === 'High') return { bg: 'rgba(220,53,69,0.1)', text: '#DC3545', border: 'rgba(220,53,69,0.3)' };
    if (risk === 'Medium') return { bg: 'rgba(253,126,20,0.1)', text: '#FD7E14', border: 'rgba(253,126,20,0.3)' };
    return { bg: 'rgba(40,167,69,0.1)', text: '#28A745', border: 'rgba(40,167,69,0.3)' };
};

const activityIcon = (type) => {
    if (type === 'success') return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />;
    if (type === 'warning') return <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />;
    return <Activity className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />;
};

export default function QPMOSectionView({ sectionId }) {
    const section = QPMO_SECTION_KPIS[sectionId];
    if (!section) return <div className="p-10 text-center text-slate-500">Section not found</div>;

    const { title, color, description, kpis, okr, charts, aiInsight, summaryStats, progressMetrics, projectHealth, recentActivity } = section;

    return (
        <div className="space-y-6">
            {/* ═══ AI PREDICTIVE ALERT ═══ */}
            {aiInsight && (
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl p-4 flex items-start gap-3"
                    style={{
                        background: `linear-gradient(135deg, ${color.primary}12, ${color.primary}06)`,
                        border: `1px solid ${color.primary}22`
                    }}
                >
                    <Cpu className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: color.primary }} />
                    <div>
                        <p className="text-sm font-bold text-slate-800">AI Insight</p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{aiInsight}</p>
                    </div>
                </motion.div>
            )}

            {/* Section Header */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                <div className="w-1.5 h-14 rounded-full" style={{ background: color.primary }} />
                <div>
                    <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">{title}</h1>
                    <p className="text-sm text-slate-400 font-medium">{description}</p>
                </div>
            </motion.div>

            {/* ═══ SUMMARY STATS BAR (4 headline metrics) ═══ */}
            {summaryStats && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.02 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {summaryStats.map((stat, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-4 relative overflow-hidden hover:shadow-lg transition-shadow"
                            style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
                            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${color.primary}, ${color.primary}80)` }} />
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                            <p className="text-2xl font-extrabold text-slate-800 mt-1">{stat.value}</p>
                            <div className="flex items-center gap-1 mt-1.5">
                                {stat.deltaType === 'positive' && <ArrowUpRight className="w-3 h-3 text-emerald-500" />}
                                {stat.deltaType === 'negative' && <ArrowDownRight className="w-3 h-3 text-red-500" />}
                                <span className={`text-[10px] font-semibold ${stat.deltaType === 'positive' ? 'text-emerald-600' : stat.deltaType === 'negative' ? 'text-red-500' : 'text-slate-400'}`}>
                                    {stat.delta}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

            {/* ═══ 5 KPI CARDS ═══ */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {kpis.map((kpi, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i, type: 'spring', damping: 20 }}
                        className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-5 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                        style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                            style={{ background: `linear-gradient(90deg, ${color.primary}, ${color.light})` }} />
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-tight mb-3 min-h-[28px]">{kpi.label}</p>
                        <div className="flex items-end justify-between mb-3">
                            <span className="text-2xl font-extrabold text-slate-800 leading-none">{kpi.value}</span>
                            <TrendIcon trend={kpi.trend} />
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                            <Target className="w-3 h-3" style={{ color: color.primary }} />
                            <span className="text-[10px] text-slate-400 font-semibold">Target: {kpi.target}</span>
                        </div>
                        <div className="border-t border-slate-100 pt-2.5 mt-auto">
                            <div className="flex items-start gap-1.5 mb-1">
                                <Info className="w-3 h-3 mt-0.5 flex-shrink-0 text-slate-300" />
                                <span className="text-[10px] text-slate-400 leading-tight">{kpi.measures}</span>
                            </div>
                            <p className="text-[10px] font-semibold ml-4.5" style={{ color: color.primary + 'cc' }}>{kpi.matters}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ═══ OKR BLOCK ═══ */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-5"
                style={{ borderLeft: `4px solid ${color.primary}`, boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
            >
                <div className="flex items-start gap-2.5 mb-3">
                    <Target className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: color.primary }} />
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Objective (OKR)</p>
                        <p className="text-sm font-bold text-slate-800">{okr.objective}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 ml-[26px]">
                    {okr.keyResults.map((kr, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: color.primary + '30', background: color.ultraLight }}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color.primary }} />
                            <span className="text-xs font-medium text-slate-700">{kr}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ═══ KEY METRICS PROGRESS + RECENT ACTIVITY (side by side) ═══ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Progress Metrics */}
                {progressMetrics && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6"
                        style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
                    >
                        <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-5 rounded-full" style={{ background: color.primary }} />
                            Key Metrics Progress
                        </h3>
                        <div className="space-y-4">
                            {progressMetrics.map((metric, idx) => {
                                const pct = Math.min(metric.value, 100);
                                const isAboveTarget = metric.value >= metric.target;
                                return (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-xs font-medium text-slate-600">{metric.label}</span>
                                            <span className="text-xs font-bold" style={{ color: isAboveTarget ? '#28A745' : '#FD7E14' }}>
                                                {metric.value}{metric.unit} / {metric.target}{metric.unit}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden relative">
                                            {/* Target marker */}
                                            <div className="absolute top-0 bottom-0 w-[2px] bg-slate-400 z-10" style={{ left: `${metric.target}%` }} />
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${pct}%` }}
                                                transition={{ delay: 0.4 + idx * 0.05, duration: 0.8, ease: 'easeOut' }}
                                                className="h-full rounded-full"
                                                style={{ background: isAboveTarget ? `linear-gradient(90deg, ${color.primary}, ${color.primary}cc)` : `linear-gradient(90deg, #FD7E14, #FD7E14cc)` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* Recent Activity Feed */}
                {recentActivity && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6"
                        style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
                    >
                        <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-5 rounded-full" style={{ background: color.primary }} />
                            Recent Activity
                        </h3>
                        <div className="space-y-3">
                            {recentActivity.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.45 + idx * 0.05 }}
                                    className="flex gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                                    style={{ background: 'rgba(255,255,255,0.4)' }}
                                >
                                    {activityIcon(item.type)}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-slate-700 font-medium leading-snug">{item.event}</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <Clock className="w-2.5 h-2.5 text-slate-300" />
                                            <span className="text-[10px] text-slate-400">{item.time}</span>
                                            <span className="text-[10px] text-slate-300">•</span>
                                            <span className="text-[10px] text-slate-400 font-medium">{item.by}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* ═══ PROJECT HEALTH TABLE ═══ */}
            {projectHealth && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6"
                    style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
                >
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-5 rounded-full" style={{ background: color.primary }} />
                        Project Health Summary
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Project</th>
                                    <th className="text-left py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phase</th>
                                    <th className="text-left py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Progress</th>
                                    <th className="text-center py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">SPI</th>
                                    <th className="text-center py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">CPI</th>
                                    <th className="text-center py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Risk</th>
                                    <th className="text-right py-2.5 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectHealth.map((proj, idx) => {
                                    const risk = riskColor(proj.risk);
                                    return (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-white/40 transition-colors">
                                            <td className="py-3 px-3">
                                                <span className="text-xs font-bold text-slate-800">{proj.project}</span>
                                            </td>
                                            <td className="py-3 px-3">
                                                <span className="text-xs text-slate-600 px-2 py-0.5 rounded-full" style={{ background: `${color.primary}10`, color: color.primary }}>
                                                    {proj.phase}
                                                </span>
                                            </td>
                                            <td className="py-3 px-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                        <div className="h-full rounded-full" style={{ width: `${proj.completion}%`, background: color.primary }} />
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-600">{proj.completion}%</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-3 text-center">
                                                <span className={`text-xs font-bold ${proj.spi >= 1.0 ? 'text-emerald-600' : proj.spi >= 0.95 ? 'text-amber-600' : 'text-red-600'}`}>
                                                    {proj.spi.toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="py-3 px-3 text-center">
                                                <span className={`text-xs font-bold ${proj.cpi >= 1.0 ? 'text-emerald-600' : proj.cpi >= 0.95 ? 'text-amber-600' : 'text-red-600'}`}>
                                                    {proj.cpi.toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="py-3 px-3 text-center">
                                                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                                                    style={{ background: risk.bg, color: risk.text, border: `1px solid ${risk.border}` }}>
                                                    {proj.risk}
                                                </span>
                                            </td>
                                            <td className="py-3 px-3 text-right">
                                                <span className="text-xs font-bold text-slate-700">{proj.budget}</span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {/* ═══ CHARTS GRID (3-4 charts per section) ═══ */}
            {charts && charts.length > 0 && (
                <div className={`grid grid-cols-1 ${charts.length >= 2 ? 'lg:grid-cols-2' : ''} gap-6`}>
                    {charts.map((chart, i) => {
                        const chartName = typeof chart === 'string' ? chart : chart.name;
                        const chartTitle = typeof chart === 'string' ? chart.replace(/([A-Z])/g, ' $1').trim() : chart.title;
                        const chartSubtitle = typeof chart === 'string' ? null : chart.subtitle;
                        const ChartComponent = chartComponents[chartName];
                        if (!ChartComponent) return null;
                        return (
                            <motion.div
                                key={chartName + '-' + i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6"
                                style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
                            >
                                <h3 className="text-sm font-semibold text-slate-700 mb-1 flex items-center gap-2">
                                    <div className="w-1.5 h-5 rounded-full" style={{ background: color.primary }} />
                                    {chartTitle}
                                </h3>
                                {chartSubtitle && (
                                    <p className="text-xs text-slate-400 mb-4 ml-[18px]">{chartSubtitle}</p>
                                )}
                                {!chartSubtitle && <div className="mb-3" />}
                                <ChartComponent />
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
