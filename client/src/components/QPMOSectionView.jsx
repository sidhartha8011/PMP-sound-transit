import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Target, Cpu, Info } from 'lucide-react';
import { QPMO_SECTION_KPIS, QPMO_COLORS } from '../data/dashboardData';

// Chart imports — lazy-loaded per section
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

export default function QPMOSectionView({ sectionId }) {
    const section = QPMO_SECTION_KPIS[sectionId];
    if (!section) return <div className="p-10 text-center text-slate-500">Section not found</div>;

    const { title, color, description, kpis, okr, charts } = section;

    return (
        <div className="space-y-6">
            {/* AI Alert for QPMO Oversight */}
            {sectionId === 'qpmo-oversight' && (
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl p-4 flex items-start gap-3"
                    style={{
                        background: `linear-gradient(135deg, ${QPMO_COLORS.red.primary}12, ${QPMO_COLORS.red.primary}06)`,
                        border: `1px solid ${QPMO_COLORS.red.primary}22`
                    }}
                >
                    <Cpu className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: QPMO_COLORS.red.primary }} />
                    <div>
                        <p className="text-sm font-bold text-slate-800">AI Insight</p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            Predictive Schedule Risk triggered for <strong>WSLE</strong>. A pattern of RFI delays in the Knowledge Hub
                            correlates with an <strong>8% chance of schedule slippage</strong> next month. Recommend escalating MEP coordination review.
                        </p>
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
                        {/* Top color accent */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                            style={{ background: `linear-gradient(90deg, ${color.primary}, ${color.light})` }}
                        />

                        {/* KPI Label */}
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-tight mb-3 min-h-[28px]">
                            {kpi.label}
                        </p>

                        {/* Value + Trend */}
                        <div className="flex items-end justify-between mb-3">
                            <span className="text-2xl font-extrabold text-slate-800 leading-none">{kpi.value}</span>
                            <TrendIcon trend={kpi.trend} />
                        </div>

                        {/* Target */}
                        <div className="flex items-center gap-1 mb-3">
                            <Target className="w-3 h-3" style={{ color: color.primary }} />
                            <span className="text-[10px] text-slate-400 font-semibold">Target: {kpi.target}</span>
                        </div>

                        {/* What it measures & Why it matters — shown on hover */}
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
                style={{
                    borderLeft: `4px solid ${color.primary}`,
                    boxShadow: '0 8px 30px rgb(0,0,0,0.04)'
                }}
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

            {/* ═══ CHARTS GRID ═══ */}
            {charts && charts.length > 0 && (
                <div className={`grid grid-cols-1 ${charts.length >= 2 ? 'lg:grid-cols-2' : ''} gap-6`}>
                    {charts.map((chartName, i) => {
                        const ChartComponent = chartComponents[chartName];
                        if (!ChartComponent) return null;
                        return (
                            <motion.div
                                key={chartName}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 + i * 0.1 }}
                                className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6"
                                style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}
                            >
                                <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-5 rounded-full" style={{ background: color.primary }} />
                                    {chartName.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>
                                <ChartComponent />
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
