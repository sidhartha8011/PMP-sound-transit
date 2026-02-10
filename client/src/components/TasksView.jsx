import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, Clock, AlertTriangle, Inbox, ArrowUp,
    Calendar, User, Tag, LayoutGrid, List, Filter
} from 'lucide-react';
import { tasksData } from '../data/dashboardData';

const STATUS_CONFIG = {
    'backlog': { label: 'Backlog', bg: 'bg-slate-100', text: 'text-slate-600', dot: '#94a3b8' },
    'in-progress': { label: 'In Progress', bg: 'bg-blue-50', text: 'text-blue-700', dot: '#1E6BB8' },
    'review': { label: 'Review', bg: 'bg-amber-50', text: 'text-amber-700', dot: '#E8772E' },
    'done': { label: 'Done', bg: 'bg-emerald-50', text: 'text-emerald-700', dot: '#2E8B57' },
};

const PRIORITY_CONFIG = {
    'critical': { label: 'Critical', bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
    'high': { label: 'High', bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    'medium': { label: 'Medium', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    'low': { label: 'Low', bg: 'bg-slate-50', text: 'text-slate-500', border: 'border-slate-200' },
};

const COLUMNS = ['backlog', 'in-progress', 'review', 'done'];

export default function TasksView() {
    const [viewMode, setViewMode] = useState('kanban');
    const [filterPriority, setFilterPriority] = useState('all');

    const filtered = useMemo(() =>
        filterPriority === 'all' ? tasksData : tasksData.filter(t => t.priority === filterPriority),
        [filterPriority]
    );

    const grouped = useMemo(() => {
        const g = {};
        COLUMNS.forEach(s => g[s] = []);
        filtered.forEach(t => g[t.status]?.push(t));
        return g;
    }, [filtered]);

    const stats = useMemo(() => ({
        total: tasksData.length,
        inProgress: tasksData.filter(t => t.status === 'in-progress').length,
        done: tasksData.filter(t => t.status === 'done').length,
        critical: tasksData.filter(t => t.priority === 'critical').length,
    }), []);

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 hidden sm:block" />
                <div className="flex-1 min-w-0">
                    <h1 className="text-lg sm:text-xl font-bold text-slate-800">Task Management</h1>
                    <p className="text-xs sm:text-sm text-slate-400">Track and manage quality program tasks across all projects</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setViewMode('kanban')} className={`p-2 rounded-lg transition-all ${viewMode === 'kanban' ? 'bg-blue-50 text-blue-700' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button onClick={() => setViewMode('table')} className={`p-2 rounded-lg transition-all ${viewMode === 'table' ? 'bg-blue-50 text-blue-700' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <List className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                    { label: 'Total Tasks', value: stats.total, icon: Inbox, color: '#1E6BB8' },
                    { label: 'In Progress', value: stats.inProgress, icon: Clock, color: '#E8772E' },
                    { label: 'Completed', value: stats.done, icon: CheckCircle2, color: '#2E8B57' },
                    { label: 'Critical', value: stats.critical, icon: AlertTriangle, color: '#C02C38' },
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center gap-2 flex-wrap">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-400 mr-1">Priority:</span>
                {['all', 'critical', 'high', 'medium', 'low'].map(p => (
                    <button key={p} onClick={() => setFilterPriority(p)}
                        className={`text-[11px] font-medium px-3 py-1 rounded-full transition-all capitalize ${filterPriority === p ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                        {p}
                    </button>
                ))}
            </motion.div>

            {/* Kanban View */}
            <AnimatePresence mode="wait">
                {viewMode === 'kanban' ? (
                    <motion.div key="kanban" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="kanban-scroll-wrapper">
                        <div className="grid grid-cols-4 gap-4 kanban-grid" style={{ minHeight: 400 }}>
                            {COLUMNS.map(col => {
                                const cfg = STATUS_CONFIG[col];
                                return (
                                    <div key={col} className="space-y-3">
                                        <div className="flex items-center gap-2 pb-2 border-b-2" style={{ borderColor: cfg.dot }}>
                                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: cfg.dot }} />
                                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{cfg.label}</span>
                                            <span className="ml-auto text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{grouped[col].length}</span>
                                        </div>
                                        <div className="space-y-2.5">
                                            {grouped[col].map((task, ti) => {
                                                const pr = PRIORITY_CONFIG[task.priority];
                                                return (
                                                    <motion.div key={task.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: ti * 0.04 }}
                                                        className="bg-white rounded-xl p-3.5 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all cursor-pointer group">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <span className="text-[10px] font-mono text-slate-400">{task.id}</span>
                                                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${pr.bg} ${pr.text} border ${pr.border}`}>{pr.label}</span>
                                                        </div>
                                                        <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-3 group-hover:text-slate-900 transition-colors">{task.title}</p>
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="text-[10px] text-slate-400 flex items-center gap-1"><User className="w-2.5 h-2.5" />{task.owner.split(' ')[0]}</span>
                                                            <span className="text-[10px] text-slate-400 flex items-center gap-1"><Calendar className="w-2.5 h-2.5" />{task.dueDate.slice(5)}</span>
                                                            <span className="ml-auto text-[9px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded">{task.project}</span>
                                                        </div>
                                                        <div className="flex gap-1 mt-2">
                                                            {task.tags.map(tag => (
                                                                <span key={tag} className="text-[9px] text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">{tag}</span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="table" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="clean-card overflow-x-auto">
                        <table className="qpmo-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Task</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Priority</th>
                                    <th>Owner</th>
                                    <th>Due Date</th>
                                    <th>Project</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((task, i) => {
                                    const st = STATUS_CONFIG[task.status];
                                    const pr = PRIORITY_CONFIG[task.priority];
                                    return (
                                        <motion.tr key={task.id} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
                                            <td><span className="text-[10px] font-mono text-slate-400">{task.id}</span></td>
                                            <td><span className="text-xs font-medium text-slate-700">{task.title}</span></td>
                                            <td className="text-center"><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${st.bg} ${st.text}`}>{st.label}</span></td>
                                            <td className="text-center"><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${pr.bg} ${pr.text}`}>{pr.label}</span></td>
                                            <td><span className="text-xs text-slate-500">{task.owner}</span></td>
                                            <td><span className="text-xs text-slate-500">{task.dueDate}</span></td>
                                            <td><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{task.project}</span></td>
                                        </motion.tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
