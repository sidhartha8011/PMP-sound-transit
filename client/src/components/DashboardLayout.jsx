import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { directors, toolItems } from '../data/dashboardData';
import {
    Compass, HardHat, Building2, Wrench, Layers,
    ChevronRight, CheckSquare, GitBranch, FileText, Bookmark,
    LogOut, LayoutGrid, Activity
} from 'lucide-react';
import DirectorView from './DirectorView';
import QPMOIntegratedView from './QPMOIntegratedView';
import TasksView from './TasksView';
import DecisionsView from './DecisionsView';
import DocumentsView from './DocumentsView';
import ResourcesView from './ResourcesView';

const directorIcons = {
    Compass, HardHat, Building2, Wrench, Layers,
};

const toolIcons = {
    CheckSquare, GitBranch, FileText, Bookmark,
};

const TOOL_META = {
    tasks: { title: 'Task Management', description: 'Track and manage quality program tasks across all projects', color: '#1E6BB8' },
    decisions: { title: 'Decision Log', description: 'Track decisions, rationale, and stakeholder alignment', color: '#6A2586' },
    documents: { title: 'Document Registry', description: 'Central repository for project documents, specs, and reports', color: '#2E8B57' },
    resources: { title: 'Resource Allocation', description: 'Team utilization, skills, and project assignments', color: '#E8772E' },
};

const TOOL_VIEWS = {
    tasks: TasksView,
    decisions: DecisionsView,
    documents: DocumentsView,
    resources: ResourcesView,
};

export default function DashboardLayout({ initialDirectorId, onLogout }) {
    const { theme, setActiveTheme } = useTheme();
    const [activeDirectorId, setActiveDirectorId] = useState(initialDirectorId || 'designQuality');
    const [activeTool, setActiveTool] = useState(null);

    const handleDirectorSelect = (directorId) => {
        setActiveDirectorId(directorId);
        setActiveTheme(directorId);
        setActiveTool(null);
    };

    const handleToolSelect = (toolId) => {
        setActiveTool(toolId);
    };

    const activeDirector = directors.find(d => d.id === activeDirectorId);

    // Sort directors so the active one is on top
    const sortedDirectors = useMemo(() => {
        const active = directors.find(d => d.id === activeDirectorId);
        const rest = directors.filter(d => d.id !== activeDirectorId);
        return active ? [active, ...rest] : directors;
    }, [activeDirectorId]);

    // Determine header info based on active view
    const headerInfo = activeTool
        ? { title: TOOL_META[activeTool].title, description: TOOL_META[activeTool].description, color: TOOL_META[activeTool].color }
        : { title: activeDirector?.role || 'Dashboard', description: activeDirector?.description, color: activeDirector?.color.primary };

    const ToolView = activeTool ? TOOL_VIEWS[activeTool] : null;

    return (
        <div className="app-layout">
            {/* ═══ LEFT Sidebar (Dark) ═══ */}
            <aside className="left-sidebar">
                {/* Brand */}
                <div className="sidebar-brand">
                    <div
                        className="sidebar-brand-icon"
                        style={{
                            background: activeTool
                                ? `linear-gradient(135deg, ${TOOL_META[activeTool].color}, ${TOOL_META[activeTool].color}dd)`
                                : `linear-gradient(135deg, ${activeDirector?.color.primary}, ${activeDirector?.color.light})`
                        }}
                    >
                        <LayoutGrid className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2>QPMO</h2>
                        <p>Intelligence</p>
                    </div>
                </div>

                {/* Dashboard Navigation */}
                <div className="nav-section-label" style={{ color: '#64748b' }}>Dashboards</div>
                <nav className="space-y-1 mb-1">
                    <AnimatePresence mode="popLayout">
                        {sortedDirectors.map((director) => {
                            const Icon = directorIcons[director.icon] || Layers;
                            const isActive = activeDirectorId === director.id && !activeTool;

                            return (
                                <motion.button
                                    key={director.id}
                                    layout
                                    onClick={() => handleDirectorSelect(director.id)}
                                    whileHover={{ x: 3 }}
                                    whileTap={{ scale: 0.97 }}
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                    className={`nav-item w-full text-left ${isActive ? 'active' : ''}`}
                                    style={
                                        isActive
                                            ? { background: `linear-gradient(135deg, ${director.color.primary}, ${director.color.dark})` }
                                            : {}
                                    }
                                >
                                    <Icon className="w-4 h-4 flex-shrink-0" />
                                    <span className="flex-1 text-[13px] leading-tight">{director.shortRole}</span>
                                    {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </nav>

                {/* Divider */}
                <div className="nav-divider" />

                {/* Tools Section */}
                <div className="nav-section-label" style={{ color: '#64748b' }}>Tools</div>
                <nav className="space-y-1">
                    {toolItems.map((tool) => {
                        const Icon = toolIcons[tool.icon] || FileText;
                        const isActive = activeTool === tool.id;
                        const meta = TOOL_META[tool.id];
                        return (
                            <motion.button
                                key={tool.id}
                                onClick={() => handleToolSelect(tool.id)}
                                whileHover={{ x: 3 }}
                                whileTap={{ scale: 0.97 }}
                                className={`nav-item w-full text-left ${isActive ? 'active' : ''}`}
                                style={isActive ? { background: `linear-gradient(135deg, ${meta.color}, ${meta.color}cc)` } : {}}
                            >
                                <Icon className="w-4 h-4 flex-shrink-0" />
                                <span className="flex-1 text-[13px]">{tool.label}</span>
                                {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
                            </motion.button>
                        );
                    })}
                </nav>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Logout */}
                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onLogout}
                    className="flex items-center gap-2.5 p-3 mt-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors text-sm"
                >
                    <LogOut className="w-4 h-4" />
                    <span className="font-medium">Sign Out</span>
                </motion.button>

                {/* Footer */}
                <div className="pt-3 mt-3 border-t border-white/6">
                    <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                        Sound Transit Authority<br />
                        © 2025 Capital Program
                    </p>
                </div>
            </aside>

            {/* ═══ Main Content ═══ */}
            <main className="main-content">
                {/* Header */}
                {!activeTool && (
                    <header className="dashboard-header">
                        <div>
                            <h1>{headerInfo.title}</h1>
                            <p>{headerInfo.description}</p>
                        </div>
                        <div
                            className="header-badge"
                            style={{ background: `linear-gradient(135deg, ${activeDirector?.color.primary}, ${activeDirector?.color.dark})` }}
                        >
                            {activeDirector?.shortRole}
                        </div>
                    </header>
                )}

                {/* View */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTool || activeDirectorId}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTool ? (
                            <ToolView />
                        ) : activeDirectorId === 'qpmoIntegrated' ? (
                            <QPMOIntegratedView />
                        ) : (
                            <DirectorView directorId={activeDirectorId} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
