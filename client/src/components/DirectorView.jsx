import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
    TrendingUp, TrendingDown, Minus,
    Sparkles, ChevronRight, Target, Users, DollarSign, AlertTriangle,
    Map, Handshake, FileText, MessageSquare, HardHat, Truck, ClipboardCheck,
    Building2, Cpu, Shield, Lightbulb, GraduationCap
} from 'lucide-react';
import KPICard from './KPICard';
import WidgetRenderer from './WidgetRenderer';

// Icon mapping for each value center tab
const tabIcons = {
    // Strategy tabs
    planning: Map,
    dbe: Handshake,
    funding: DollarSign,
    stakeholder: MessageSquare,
    // Controls tabs
    scope: Target,
    schedule: ClipboardCheck,
    cost: DollarSign,
    risk: AlertTriangle,
    // Construction tabs
    safety: Shield,
    field: Truck,
    punchlist: ClipboardCheck,
    subconsultant: Building2,
    // QPMO tabs
    digital: Cpu,
    quality: Shield,
    innovation: Lightbulb,
    talent: GraduationCap
};

export default function DirectorView({ directorId }) {
    const { theme, setActiveTheme, getThemeFromColor } = useTheme();
    const [director, setDirector] = useState(null);
    const [valueCenters, setValueCenters] = useState({});
    const [activeTab, setActiveTab] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!directorId) return;

        setLoading(true);
        fetch(`/api/director/${directorId}`)
            .then(res => res.json())
            .then(data => {
                setDirector(data.director);
                setValueCenters(data.valueCenters);
                setActiveTheme(getThemeFromColor(data.director.pmiColor));
                if (data.director.subTabs?.length > 0) {
                    setActiveTab(data.director.subTabs[0].id);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [directorId, setActiveTheme, getThemeFromColor]);

    if (loading || !director) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-[#00A5D9]"></div>
            </div>
        );
    }

    const activeVC = valueCenters[activeTab];

    return (
        <div className="space-y-6">
            {/* Director Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    background: `linear-gradient(135deg, ${director.pmiColor} 0%, ${director.pmiColor}CC 100%)`,
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
                className="p-6 rounded-2xl text-white relative overflow-hidden"
            >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/5 rounded-full translate-y-1/2" />

                <div className="flex items-center justify-between relative z-10">
                    <div>
                        <h2 className="text-2xl font-bold drop-shadow-sm">{director.name}</h2>
                        <p className="text-white/90">{director.role}</p>
                        <div className="flex gap-2 mt-3">
                            {director.personnel?.map((p, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                                >
                                    {p}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex gap-6">
                        <div className="text-center">
                            <motion.div
                                className="text-3xl font-bold"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {director.subTabs?.length || 4}
                            </motion.div>
                            <div className="text-xs text-white/70 uppercase tracking-wide">Value Centers</div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                className="text-3xl font-bold"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {director.personnel?.length || 2}
                            </motion.div>
                            <div className="text-xs text-white/70 uppercase tracking-wide">Team Members</div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                className="text-3xl font-bold text-emerald-300"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Active
                            </motion.div>
                            <div className="text-xs text-white/70 uppercase tracking-wide">Status</div>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* AI Insight Agent */}
            {activeVC?.aiInsight && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card border-l-4 border-[#6A2586]"
                >
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#6A2586]/10 rounded-lg">
                            <Sparkles className="w-5 h-5 text-[#6A2586]" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-[#6A2586] uppercase tracking-wide mb-1">AI Insight Agent</p>
                            <p className="text-slate-600 text-sm">{activeVC.aiInsight}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Sub-Tabs Navigation - Premium Icon Switch */}
            <div className="glass-card p-2">
                <div className="flex gap-3 overflow-x-auto">
                    {director.subTabs?.map((tab, index) => {
                        const TabIcon = tabIcons[tab.id] || Target;
                        const isActive = activeTab === tab.id;

                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative flex-1 min-w-[140px]"
                            >
                                {/* Active indicator background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabBg"
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background: `linear-gradient(135deg, ${director.pmiColor} 0%, ${director.pmiColor}CC 100%)`,
                                            boxShadow: `0 8px 24px -8px ${director.pmiColor}60`
                                        }}
                                        transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                                    />
                                )}

                                {/* Hover indicator for inactive */}
                                {!isActive && (
                                    <div className="absolute inset-0 rounded-xl bg-slate-100/0 hover:bg-slate-100/80 transition-colors" />
                                )}

                                <div className={`relative z-10 flex flex-col items-center gap-2 py-4 px-3 transition-all duration-300`}>
                                    {/* Icon container */}
                                    <motion.div
                                        className={`p-3 rounded-xl transition-all duration-300 ${isActive
                                            ? 'bg-white/25'
                                            : 'bg-slate-100/80'
                                            }`}
                                        animate={{
                                            scale: isActive ? 1.1 : 1,
                                            rotate: isActive ? [0, -5, 5, 0] : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <TabIcon className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-500'
                                            }`} />
                                    </motion.div>

                                    {/* Label */}
                                    <span className={`text-xs font-semibold text-center leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-600'
                                        }`}>
                                        {tab.title.split('&')[0].trim()}
                                    </span>

                                    {/* Active dot indicator */}
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1 : 0,
                                            opacity: isActive ? 1 : 0
                                        }}
                                        className="w-1.5 h-1.5 rounded-full bg-white"
                                    />
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Value Center Content */}
            <AnimatePresence mode="wait">
                {activeVC && (
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* KPI Grid */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {activeVC.kpis?.map((kpi, i) => (
                                <KPICard key={i} kpi={kpi} theme={theme} delay={i * 0.1} />
                            ))}
                        </div>

                        {/* Widgets */}
                        <div className="space-y-6">
                            {activeVC.widgets?.map((widget, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="glass-panel p-6"
                                >
                                    <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>{widget.title}</h3>
                                    <WidgetRenderer widget={widget} theme={theme} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
