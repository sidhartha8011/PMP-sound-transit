import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus
};

// Circular progress component
function CircularProgress({ value, max, color, size = 60 }) {
    const percentage = Math.min((value / max) * 100, 100);
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-slate-200"
            />
            {/* Progress circle */}
            <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </svg>
    );
}

export default function KPICard({ kpi, theme, delay = 0 }) {
    const TrendIcon = trendIcons[kpi.trend] || Minus;
    const statusColors = {
        success: 'text-emerald-500 bg-emerald-50',
        warning: 'text-amber-500 bg-amber-50',
        danger: 'text-rose-500 bg-rose-50'
    };

    // Parse numeric values for progress
    const numericValue = parseFloat(String(kpi.value).replace(/[^0-9.]/g, '')) || 0;
    const numericTarget = parseFloat(String(kpi.target).replace(/[^0-9.]/g, '')) || 100;
    const isPercentage = String(kpi.value).includes('%');
    const progressMax = isPercentage ? 100 : numericTarget * 1.2;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -4,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.2 }
            }}
            className="glass-card group relative overflow-hidden"
        >
            {/* Decorative gradient accent */}
            <div
                className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-2xl"
                style={{ background: theme.primary }}
            />

            {/* Top row: Label + Trend */}
            <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {kpi.label}
                </p>
                <motion.div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusColors[kpi.status] || 'text-slate-500 bg-slate-100'}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <TrendIcon className="w-3 h-3" />
                </motion.div>
            </div>

            {/* Value with animated counter effect */}
            <div className="flex items-center gap-4">
                {/* Progress ring for numeric values */}
                {typeof numericValue === 'number' && numericValue > 0 && (
                    <div className="relative">
                        <CircularProgress
                            value={numericValue}
                            max={progressMax}
                            color={theme.primary}
                            size={56}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-600">
                                {Math.round((numericValue / progressMax) * 100)}%
                            </span>
                        </div>
                    </div>
                )}

                <div className="flex-1">
                    <motion.p
                        className={`text-3xl font-bold ${theme.text}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: delay + 0.2 }}
                    >
                        {kpi.value}
                    </motion.p>

                    {kpi.target && (
                        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                            Target: {kpi.target}
                        </p>
                    )}
                </div>
            </div>

            {/* Sparkline placeholder - subtle decoration */}
            <div className="mt-4 flex items-end gap-0.5 h-6 opacity-30">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                            backgroundColor: theme.primary,
                            height: `${20 + Math.random() * 80}%`
                        }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: delay + 0.1 * i }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
