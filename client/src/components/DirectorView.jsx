import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
    TrendingUp, TrendingDown, Minus, Activity,
    ClipboardCheck, FileCheck, Building, Layers, MessageCircle, Package,
    CheckCircle2, Clock, Shield, RefreshCw, BarChart3, HardHat,
    Zap, PlayCircle, XCircle, Rocket, Gauge, Settings,
    Timer, Power, ListChecks, DollarSign, Bell, Compass, Wrench,
    AlertTriangle, Info, ArrowRight
} from 'lucide-react';
import KPICard from './KPICard';
import WidgetRenderer from './WidgetRenderer';
import QPMOIntegratedView from './QPMOIntegratedView';
import { getDashboardData, directors, QPMO_COLORS } from '../data/dashboardData';

const iconMap = {
    ClipboardCheck, FileCheck, Building, Layers, MessageCircle, Package,
    CheckCircle2, Clock, Shield, RefreshCw, BarChart3, HardHat,
    Activity, Zap, PlayCircle, XCircle, Rocket, Gauge, Settings,
    Timer, Power, ListChecks, DollarSign, Bell, Compass, Wrench,
};

const severityStyles = {
    danger: { bg: 'bg-red-50', border: 'border-red-200', icon: AlertTriangle, iconColor: 'text-red-500', text: 'text-red-800' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-200', icon: AlertTriangle, iconColor: 'text-amber-500', text: 'text-amber-800' },
    info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: Info, iconColor: 'text-blue-500', text: 'text-blue-800' },
};

export default function DirectorView({ directorId }) {
    const { setActiveTheme } = useTheme();
    const director = directors.find(d => d.id === directorId);
    const data = getDashboardData(directorId);

    useEffect(() => {
        if (director) {
            const themeMap = { designQuality: 'blue', constructionQuality: 'purple', facilityExcellence: 'green', operationsMaintenance: 'orange', qpmoIntegrated: 'red' };
            setActiveTheme(themeMap[directorId] || 'blue');
        }
    }, [directorId, director, setActiveTheme]);

    if (directorId === 'qpmoIntegrated') {
        return <QPMOIntegratedView />;
    }

    if (!data || !director) return null;

    const color = director.color.primary;

    return (
        <div className="space-y-6">
            {/* ─── Zone 1: KPI Snapshot Row ─── */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
                {data.kpis.map((kpi, i) => (
                    <KPICard key={i} kpi={kpi} color={color} index={i} iconMap={iconMap} />
                ))}
            </motion.div>

            {/* ─── Zone 2: Advanced Visualizations ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {data.charts.map((chart, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.04 }}
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

            {/* ─── Zone 3: Insight & Signal Area ─── */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            >
                {/* Recurring Issues */}
                <div className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        Recurring Issues
                    </h3>
                    <div className="space-y-2.5">
                        {data.insights.recurringIssues.map((item, i) => {
                            const s = severityStyles[item.severity] || severityStyles.info;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.06 }} className={`p-3.5 rounded-xl ${s.bg} border ${s.border}`}>
                                    <div className="flex items-start gap-2">
                                        <s.icon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${s.iconColor}`} />
                                        <p className={`text-xs leading-relaxed ${s.text}`}>{item.text}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Emerging Risks */}
                <div className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                        Emerging Risks
                    </h3>
                    <div className="space-y-2.5">
                        {data.insights.emergingRisks.map((item, i) => {
                            const s = severityStyles[item.severity] || severityStyles.info;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.06 }} className={`p-3.5 rounded-xl ${s.bg} border ${s.border}`}>
                                    <div className="flex items-start gap-2">
                                        <s.icon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${s.iconColor}`} />
                                        <p className={`text-xs leading-relaxed ${s.text}`}>{item.text}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Cross-Phase Signals */}
                <div className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5" style={{ color }} />
                        Cross-Phase Signals
                    </h3>
                    <div className="space-y-2.5">
                        {data.insights.crossPhaseSignals.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.06 }} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-xs text-slate-600 leading-relaxed mb-1.5">{item.text}</p>
                                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color }}>From: {item.from}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
