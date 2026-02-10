import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Users, AlertTriangle, CheckCircle2, TrendingUp,
    Award, Briefcase, BarChart3
} from 'lucide-react';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { resourcesData } from '../data/dashboardData';

const tooltipStyle = {
    background: '#1e293b', border: 'none', borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)', fontSize: '12px', padding: '12px 16px',
};

export default function ResourcesView() {
    const stats = useMemo(() => {
        const avg = Math.round(resourcesData.reduce((s, r) => s + r.utilization, 0) / resourcesData.length);
        const over = resourcesData.filter(r => r.utilization > 90).length;
        const avail = resourcesData.filter(r => r.utilization < 70).length;
        const certs = resourcesData.reduce((s, r) => s + r.certifications.length, 0);
        return { avg, over, avail, certs };
    }, []);

    const utilizationChartData = useMemo(() =>
        resourcesData.map(r => ({ name: r.name.split(' ')[1], utilization: r.utilization, fill: r.color })),
        []
    );

    // Aggregate skills for radar
    const skillCategories = useMemo(() => {
        const cats = { Technical: 0, Management: 0, Compliance: 0, Analytics: 0, Safety: 0, Design: 0 };
        resourcesData.forEach(r => {
            r.skills.forEach(s => {
                if (['BIM', 'Structural', 'AutoCAD', 'HVAC', 'Energy Systems', 'Concrete', 'SCADA'].includes(s)) cats.Technical++;
                else if (['NCR Management', 'Auditing', 'Stakeholder Mgmt', 'Asset Mgmt', 'Governance'].includes(s)) cats.Management++;
                else if (['Compliance', 'FTA Compliance', 'Permitting', 'Procurement', 'Reporting'].includes(s)) cats.Compliance++;
                else if (['Data Analytics', 'Power BI', 'Six Sigma', 'Predictive Maintenance'].includes(s)) cats.Analytics++;
                else if (['OSHA', 'Risk Assessment', 'Training', 'Safety'].includes(s)) cats.Safety++;
                else cats.Design++;
            });
        });
        return Object.entries(cats).map(([subject, value]) => ({ subject, value: Math.min(value * 15, 100) }));
    }, []);

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-orange-700 hidden sm:block" />
                <div>
                    <h1 className="text-lg sm:text-xl font-bold text-slate-800">Resource Allocation</h1>
                    <p className="text-xs sm:text-sm text-slate-400">Team utilization, skills, and project assignments</p>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                    { label: 'Team Members', value: resourcesData.length, icon: Users, color: '#E8772E' },
                    { label: 'Avg Utilization', value: `${stats.avg}%`, icon: BarChart3, color: '#1E6BB8' },
                    { label: 'Over-Allocated', value: stats.over, icon: AlertTriangle, color: '#C02C38' },
                    { label: 'Total Certifications', value: stats.certs, icon: Award, color: '#2E8B57' },
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

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Utilization Bar Chart */}
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <BarChart3 className="w-3.5 h-3.5 text-orange-500" />
                        Team Utilization
                    </h3>
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={utilizationChartData} layout="vertical" margin={{ left: 10, right: 20, top: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f5" horizontal={false} />
                            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                            <YAxis dataKey="name" type="category" width={70} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, 'Utilization']} />
                            <Bar dataKey="utilization" radius={[0, 6, 6, 0]} barSize={20}>
                                {utilizationChartData.map((entry, i) => (
                                    <motion.rect key={i} fill={entry.utilization > 90 ? '#C02C38' : entry.utilization > 75 ? '#E8772E' : '#2E8B57'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Skills Radar */}
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="clean-card p-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                        Team Skill Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={280}>
                        <RadarChart data={skillCategories} cx="50%" cy="50%" outerRadius="68%">
                            <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 9 }} tickCount={5} />
                            <Radar name="Skills" dataKey="value" stroke="#E8772E" fill="#E8772E" fillOpacity={0.15} strokeWidth={2} />
                            <Tooltip contentStyle={tooltipStyle} />
                        </RadarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resourcesData.map((person, i) => {
                    const utilColor = person.utilization > 90 ? '#C02C38' : person.utilization > 75 ? '#E8772E' : '#2E8B57';
                    const statusLabel = person.status === 'over-allocated' ? 'Over-Allocated' : person.status === 'available' ? 'Available' : 'Active';
                    const statusClass = person.status === 'over-allocated' ? 'bg-red-50 text-red-700' : person.status === 'available' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700';
                    return (
                        <motion.div key={person.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.04 }}
                            className="clean-card p-5 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: person.color }} />
                            {/* Avatar + Name */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: person.color }}>
                                    {person.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-800 truncate">{person.name}</p>
                                    <p className="text-[11px] text-slate-400">{person.role}</p>
                                </div>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${statusClass}`}>{statusLabel}</span>
                            </div>

                            {/* Utilization Bar */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] text-slate-400 font-medium">Utilization</span>
                                    <span className="text-xs font-extrabold" style={{ color: utilColor }}>{person.utilization}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${person.utilization}%` }} transition={{ duration: 1, ease: 'easeOut' }}
                                        className="h-full rounded-full" style={{ background: utilColor }} />
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="mb-3">
                                <span className="text-[10px] text-slate-400 font-medium">Projects</span>
                                <div className="flex gap-1.5 mt-1">
                                    {person.projects.map(p => (
                                        <span key={p} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{p}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-3">
                                <span className="text-[10px] text-slate-400 font-medium">Skills</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {person.skills.map(s => (
                                        <span key={s} className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: person.color + '12', color: person.color }}>{s}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="flex items-center gap-1 pt-3 border-t border-slate-100">
                                <Award className="w-3 h-3 text-amber-500" />
                                {person.certifications.map(c => (
                                    <span key={c} className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">{c}</span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
