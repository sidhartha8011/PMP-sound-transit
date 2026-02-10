import { motion } from 'framer-motion';
import {
    TrendingUp, TrendingDown, Minus,
    ClipboardCheck, FileText, Layers, MessageCircle, Package,
    CheckCircle2, Clock, Shield, RefreshCw, BarChart3, HardHat,
    Activity, Zap, PlayCircle, XCircle, Rocket,
    Settings, Timer, Power, ListChecks, DollarSign, Bell, Building, Gauge
} from 'lucide-react';

const trendIcons = { up: TrendingUp, down: TrendingDown, stable: Minus };

const kpiIcons = {
    ClipboardCheck, FileCheck: FileText, Building, Layers, MessageCircle, Package,
    CheckCircle2, Clock, Shield, RefreshCw, BarChart3, HardHat,
    Activity, Zap, PlayCircle, XCircle, Rocket,
    Settings, Timer, Power, ListChecks, DollarSign, Bell, Gauge,
};

export default function KPICard({ kpi, color, index, iconMap }) {
    const icons = iconMap || kpiIcons;
    const Ic = icons[kpi.icon] || Activity;
    const Trend = trendIcons[kpi.trend] || Minus;
    const isUp = kpi.trend === 'up';
    const isDown = kpi.trend === 'down';

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="kpi-card group relative"
        >
            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}AA)` }}
            />

            {/* Icon + Trend row */}
            <div className="flex items-start justify-between mb-3">
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: color + '12' }}
                >
                    <Ic className="w-5 h-5" style={{ color }} />
                </div>
                <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${isUp
                            ? 'bg-emerald-50 text-emerald-600'
                            : isDown
                                ? 'bg-red-50 text-red-600'
                                : 'bg-slate-50 text-slate-500'
                        }`}
                >
                    <Trend className="w-3 h-3" />
                    {kpi.trend === 'up' ? 'Up' : kpi.trend === 'down' ? 'Down' : 'Stable'}
                </div>
            </div>

            {/* Value */}
            <p className="text-2xl font-extrabold text-slate-800 tracking-tight leading-none mb-1">
                {kpi.value}
            </p>

            {/* Label */}
            <p className="text-[11px] text-slate-400 font-medium mb-3 leading-tight">
                {kpi.label}
            </p>

            {/* Target bar */}
            <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        style={{ background: color }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.08 }}
                    />
                </div>
                <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap">
                    Target: {kpi.target}
                </span>
            </div>
        </motion.div>
    );
}
