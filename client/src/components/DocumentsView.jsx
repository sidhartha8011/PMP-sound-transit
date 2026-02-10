import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Download, Eye, Clock, CheckCircle2,
    AlertCircle, Archive, LayoutGrid, List, Search
} from 'lucide-react';
import { documentsData } from '../data/dashboardData';

const STATUS_CONFIG = {
    draft: { label: 'Draft', bg: 'bg-slate-100', text: 'text-slate-600', icon: Clock },
    review: { label: 'In Review', bg: 'bg-amber-50', text: 'text-amber-700', icon: AlertCircle },
    approved: { label: 'Approved', bg: 'bg-emerald-50', text: 'text-emerald-700', icon: CheckCircle2 },
    superseded: { label: 'Superseded', bg: 'bg-red-50', text: 'text-red-600', icon: Archive },
};

const CATEGORY_CONFIG = {
    specification: { label: 'Specification', color: '#1E6BB8', icon: '📐' },
    report: { label: 'Report', color: '#2E8B57', icon: '📊' },
    procedure: { label: 'Procedure', color: '#6A2586', icon: '📋' },
    submittal: { label: 'Submittal', color: '#E8772E', icon: '📩' },
};

export default function DocumentsView() {
    const [viewMode, setViewMode] = useState('grid');
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = useMemo(() => {
        let result = documentsData;
        if (activeCategory !== 'all') result = result.filter(d => d.category === activeCategory);
        if (searchTerm) result = result.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return result;
    }, [activeCategory, searchTerm]);

    const stats = useMemo(() => ({
        total: documentsData.length,
        pendingReview: documentsData.filter(d => d.status === 'review').length,
        approved: documentsData.filter(d => d.status === 'approved').length,
        recent: documentsData.filter(d => d.lastUpdated >= '2025-02-08').length,
    }), []);

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700" />
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-slate-800">Document Registry</h1>
                    <p className="text-sm text-slate-400">Central repository for project documents, specs, and reports</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <List className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid grid-cols-4 gap-4">
                {[
                    { label: 'Total Documents', value: stats.total, icon: FileText, color: '#2E8B57' },
                    { label: 'Pending Review', value: stats.pendingReview, icon: Clock, color: '#E8772E' },
                    { label: 'Approved', value: stats.approved, icon: CheckCircle2, color: '#1E6BB8' },
                    { label: 'Updated This Week', value: stats.recent, icon: AlertCircle, color: '#6A2586' },
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

            {/* Filters Row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 flex-wrap">
                {/* Search */}
                <div className="relative flex-1 max-w-xs">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Search documents..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all" />
                </div>
                {/* Category Tabs */}
                <div className="flex items-center gap-1.5">
                    <button onClick={() => setActiveCategory('all')}
                        className={`text-[11px] font-medium px-3 py-1.5 rounded-full transition-all ${activeCategory === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                        All
                    </button>
                    {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => (
                        <button key={key} onClick={() => setActiveCategory(key)}
                            className={`text-[11px] font-medium px-3 py-1.5 rounded-full transition-all ${activeCategory === key ? 'text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                            style={activeCategory === key ? { background: cfg.color } : {}}>
                            {cfg.icon} {cfg.label}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Grid View */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((doc, i) => {
                        const cat = CATEGORY_CONFIG[doc.category];
                        const st = STATUS_CONFIG[doc.status];
                        return (
                            <motion.div key={doc.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.03 }}
                                className="clean-card p-5 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: cat.color }} />
                                {/* Category */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: cat.color }}>{cat.icon} {cat.label}</span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${st.bg} ${st.text}`}>{st.label}</span>
                                </div>
                                {/* Title */}
                                <h3 className="text-sm font-semibold text-slate-700 mb-3 leading-relaxed group-hover:text-slate-900 transition-colors">{doc.title}</h3>
                                {/* Meta */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-slate-400">Version</span>
                                        <span className="text-[10px] font-bold text-slate-600">v{doc.version}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-slate-400">Owner</span>
                                        <span className="text-[10px] font-medium text-slate-600">{doc.owner}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-slate-400">Size</span>
                                        <span className="text-[10px] text-slate-500">{doc.size}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-slate-400">Updated</span>
                                        <span className="text-[10px] text-slate-500">{doc.lastUpdated}</span>
                                    </div>
                                </div>
                                {/* Actions */}
                                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                        <Download className="w-3 h-3" />{doc.downloads}
                                    </div>
                                    <div className="flex-1" />
                                    <button className="text-[10px] font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors">
                                        <Eye className="w-3 h-3" /> View
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="clean-card overflow-hidden">
                    <table className="qpmo-table">
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th className="text-center">Category</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Version</th>
                                <th>Owner</th>
                                <th>Updated</th>
                                <th className="text-center">Downloads</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((doc, i) => {
                                const cat = CATEGORY_CONFIG[doc.category];
                                const st = STATUS_CONFIG[doc.status];
                                return (
                                    <motion.tr key={doc.id} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
                                        <td>
                                            <span className="text-xs font-medium text-slate-700">{doc.title}</span>
                                            <p className="text-[10px] text-slate-400 mt-0.5">{doc.size}</p>
                                        </td>
                                        <td className="text-center"><span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: cat.color + '15', color: cat.color }}>{cat.label}</span></td>
                                        <td className="text-center"><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${st.bg} ${st.text}`}>{st.label}</span></td>
                                        <td className="text-center"><span className="text-xs font-bold text-slate-600">v{doc.version}</span></td>
                                        <td><span className="text-xs text-slate-500">{doc.owner}</span></td>
                                        <td><span className="text-xs text-slate-500">{doc.lastUpdated}</span></td>
                                        <td className="text-center"><span className="text-xs text-slate-500">{doc.downloads}</span></td>
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                </motion.div>
            )}
        </div>
    );
}
