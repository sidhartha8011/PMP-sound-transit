import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GitBranch, CheckCircle2, Clock, XCircle, Pause,
    ChevronDown, ChevronRight, AlertTriangle, Users, Zap
} from 'lucide-react';
import { decisionsData } from '../data/dashboardData';

const STATUS_CONFIG = {
    pending: { label: 'Pending', bg: 'bg-amber-50', text: 'text-amber-700', icon: Clock, dot: '#E8772E' },
    approved: { label: 'Approved', bg: 'bg-emerald-50', text: 'text-emerald-700', icon: CheckCircle2, dot: '#2E8B57' },
    deferred: { label: 'Deferred', bg: 'bg-blue-50', text: 'text-blue-700', icon: Pause, dot: '#1E6BB8' },
    rejected: { label: 'Rejected', bg: 'bg-red-50', text: 'text-red-700', icon: XCircle, dot: '#C02C38' },
};

const IMPACT_COLOR = {
    Critical: 'bg-red-100 text-red-700',
    High: 'bg-orange-50 text-orange-700',
    Medium: 'bg-blue-50 text-blue-600',
    Low: 'bg-slate-50 text-slate-500',
};

export default function DecisionsView() {
    const [expandedId, setExpandedId] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');

    const filtered = useMemo(() =>
        filterStatus === 'all' ? decisionsData : decisionsData.filter(d => d.status === filterStatus),
        [filterStatus]
    );

    const stats = useMemo(() => ({
        total: decisionsData.length,
        pending: decisionsData.filter(d => d.status === 'pending').length,
        approved: decisionsData.filter(d => d.status === 'approved').length,
        avgDays: 4.2,
    }), []);

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 to-purple-700" />
                <div>
                    <h1 className="text-xl font-bold text-slate-800">Decision Log</h1>
                    <p className="text-sm text-slate-400">Track decisions, rationale, and stakeholder alignment</p>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid grid-cols-4 gap-4">
                {[
                    { label: 'Total Decisions', value: stats.total, icon: GitBranch, color: '#6A2586' },
                    { label: 'Pending', value: stats.pending, icon: Clock, color: '#E8772E' },
                    { label: 'Approved', value: stats.approved, icon: CheckCircle2, color: '#2E8B57' },
                    { label: 'Avg Decision Time', value: `${stats.avgDays}d`, icon: Zap, color: '#1E6BB8' },
                ].map((stat, i) => (
                    <div key={i} className="clean-card p-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: stat.color }} />
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg" style={{ background: stat.color + '12' }}>
                                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-slate-800">{stat.value}</p>
                                <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Filters */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center gap-2">
                <span className="text-xs text-slate-400 mr-1">Filter:</span>
                {['all', 'pending', 'approved', 'deferred', 'rejected'].map(s => (
                    <button key={s} onClick={() => setFilterStatus(s)}
                        className={`text-[11px] font-medium px-3 py-1 rounded-full transition-all capitalize ${filterStatus === s ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                        {s}
                    </button>
                ))}
            </motion.div>

            {/* Decision Cards */}
            <div className="space-y-3">
                {filtered.map((dec, i) => {
                    const cfg = STATUS_CONFIG[dec.status];
                    const StatusIcon = cfg.icon;
                    const isExpanded = expandedId === dec.id;
                    return (
                        <motion.div key={dec.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }}
                            className="clean-card overflow-hidden">
                            {/* Main row */}
                            <button onClick={() => setExpandedId(isExpanded ? null : dec.id)}
                                className="w-full p-5 flex items-center gap-4 text-left hover:bg-slate-50/50 transition-colors">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: cfg.dot + '15' }}>
                                    <StatusIcon className="w-4 h-4" style={{ color: cfg.dot }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-mono text-slate-400">{dec.id}</span>
                                        <span className="text-[10px] text-slate-300">·</span>
                                        <span className="text-[10px] text-slate-400">{dec.date}</span>
                                        <span className="text-[10px] text-slate-300">·</span>
                                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded">{dec.project}</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-700 truncate">{dec.title}</p>
                                </div>
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${IMPACT_COLOR[dec.impact]}`}>{dec.impact}</span>
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
                                {isExpanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                            </button>

                            {/* Expanded details */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }} className="overflow-hidden">
                                        <div className="px-5 pb-5 pt-0 border-t border-slate-100">
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                                                <div className="lg:col-span-2">
                                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Rationale</h4>
                                                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl">{dec.rationale}</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Owner</h4>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                                                                <span className="text-[10px] font-bold text-purple-700">{dec.owner.split(' ').map(n => n[0]).join('')}</span>
                                                            </div>
                                                            <span className="text-xs font-medium text-slate-700">{dec.owner}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Stakeholders</h4>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {dec.stakeholders.map(s => (
                                                                <span key={s} className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full font-medium">{s}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
