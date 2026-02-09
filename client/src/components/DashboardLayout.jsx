import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
    Cpu, LayoutDashboard, Briefcase, HardHat, Sparkles,
    ChevronRight, Calendar, User, LogOut
} from 'lucide-react';
import DirectorView from './DirectorView';

const directorIcons = {
    strategy: LayoutDashboard,
    controls: Briefcase,
    construction: HardHat,
    qpmo: Sparkles
};

export default function DashboardLayout({ initialDirectorId, onLogout }) {
    const { theme } = useTheme();
    const [directors, setDirectors] = useState([]);
    const [activeDirectorId, setActiveDirectorId] = useState(initialDirectorId || 'strategy');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch('/api/dashboard/init')
            .then(res => res.json())
            .then(data => {
                setDirectors(data.directors);
                // Set logged-in director as current user
                const loggedInDirector = data.directors.find(d => d.id === initialDirectorId);
                if (loggedInDirector) {
                    setCurrentUser({
                        name: loggedInDirector.name,
                        role: loggedInDirector.role
                    });
                }
                if (initialDirectorId) {
                    setActiveDirectorId(initialDirectorId);
                }
            })
            .catch(console.error);
    }, [initialDirectorId]);

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Get logged-in director info for header
    const loggedInDirector = directors.find(d => d.id === initialDirectorId);
    const LoggedInIcon = loggedInDirector ? directorIcons[loggedInDirector.id] : User;

    return (
        <div className="flex min-h-screen animated-bg relative overflow-hidden">
            {/* Floating Orbs for ambient effect */}
            <div className="floating-orb orb-cyan"></div>
            <div className="floating-orb orb-purple"></div>
            <div className="floating-orb orb-orange"></div>

            {/* Sidebar */}
            <aside className="w-72 glass-sidebar fixed left-0 top-0 bottom-0 flex flex-col p-6 z-50">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${theme.gradient}`}>
                        <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-800 tracking-tight">Metro Transit</h1>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">QPMO Intelligence</p>
                    </div>
                </div>

                {/* Navigation - logged-in director first */}
                <nav className="flex-1 space-y-1">
                    {[...directors].sort((a, b) => {
                        if (a.id === initialDirectorId) return -1;
                        if (b.id === initialDirectorId) return 1;
                        return 0;
                    }).map((director) => {
                        const Icon = directorIcons[director.id] || LayoutDashboard;
                        const isActive = activeDirectorId === director.id;
                        const colorClass = director.pmiColor === '#00A5D9' ? 'from-[#00A5D9] to-[#0087B3]' :
                            director.pmiColor === '#FF6A13' ? 'from-[#FF6A13] to-[#E55A00]' :
                                'from-[#6A2586] to-[#521C68]';

                        return (
                            <motion.button
                                key={director.id}
                                onClick={() => setActiveDirectorId(director.id)}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className={`nav-item w-full text-left ${isActive ? `active bg-gradient-to-r ${colorClass}` : ''}`}
                            >
                                <Icon className="w-5 h-5" />
                                <div className="flex-1">
                                    <div className="font-medium text-sm">{director.name}</div>
                                    <div className={`text-xs ${isActive ? 'text-white/70' : 'text-slate-400'}`}>{director.role}</div>
                                </div>
                                {isActive && <ChevronRight className="w-4 h-4" />}
                            </motion.button>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onLogout}
                    className="flex items-center gap-3 p-3 mt-4 rounded-xl bg-slate-100/70 hover:bg-slate-200/70 text-slate-600 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium text-sm">Sign Out</span>
                </motion.button>

                {/* Footer */}
                <div className="pt-4 mt-4 border-t border-slate-200/50">
                    <div className="text-xs text-slate-400 text-center">
                        Metro Transit Authority<br />
                        © 2024 Capital Program
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-72 p-8">
                {/* Header with Director Tab */}
                <header className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Metro Transit QPMO</h1>
                        <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span>{dateStr}</span>
                            <span className="mx-2">•</span>
                            <span>{timeStr}</span>
                        </div>
                    </div>

                    {/* Logged-in Director Tab */}
                    {currentUser && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 glass-card py-2 px-4 cursor-pointer hover:shadow-lg transition-shadow"
                            style={{
                                borderLeft: `4px solid ${loggedInDirector?.pmiColor || '#6A2586'}`
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, ${loggedInDirector?.pmiColor || '#6A2586'} 0%, ${loggedInDirector?.pmiColor || '#6A2586'}CC 100%)`
                                }}
                            >
                                <LoggedInIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="font-medium text-sm text-slate-800">{currentUser.name}</div>
                                <div className="text-xs text-slate-400">{currentUser.role}</div>
                            </div>
                        </motion.div>
                    )}
                </header>

                {/* Director View */}
                <DirectorView directorId={activeDirectorId} />
            </main>
        </div>
    );
}
