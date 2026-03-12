import React from 'react';
import { motion } from 'framer-motion';
import { qpmoIntelligenceData } from '../data/dashboardData';
import { Target, Activity, ShieldCheck, TrendingUp, AlertTriangle, Settings, Cpu } from 'lucide-react';

// Reusable animated card component for the 6 main sections
const SectionCard = ({ data, span = 1, icon: Icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, type: 'spring', damping: 20 }}
            className={`rounded-2xl overflow-hidden flex flex-col`}
            style={{
                gridColumn: span === 2 ? 'span 2' : 'span 1',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.04)'
            }}
        >
            {/* Header / Banner */}
            <div 
                className="p-4 text-white flex items-center justify-between"
                style={{ background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)` }}
            >
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2.5 tracking-tight">
                        {Icon && <Icon className="w-5 h-5 opacity-90" strokeWidth={2.5} />}
                        {data.title}
                    </h2>
                    <p className="text-[13px] opacity-90 mt-0.5 font-medium">{data.description}</p>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col gap-6">
                
                {/* KPIs Grid */}
                <div className="flex flex-wrap gap-3">
                    {data.kpis.map((kpi, idx) => (
                        <div key={idx} className="flex-1 min-w-[120px] bg-white rounded-xl border border-slate-100 p-3 flex flex-col justify-center shadow-sm">
                            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1 line-clamp-1 truncate" title={kpi.label}>{kpi.label}</span>
                            <div className="flex items-end gap-1.5">
                                <span className="text-xl font-extrabold text-slate-800 leading-none">{kpi.value}</span>
                                <span className="text-xs text-slate-400 font-medium mb-0.5 whitespace-nowrap">/ {kpi.target}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* OKR Block */}
                <div 
                    className="mt-auto bg-slate-50/80 p-4 rounded-xl border-l-4"
                    style={{ borderLeftColor: data.color }}
                >
                    <div className="flex items-start gap-2.5 mb-2.5 text-slate-800">
                        <Target className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: data.color }} strokeWidth={2.5} />
                        <p className="text-sm font-bold leading-tight">{data.okr.objective}</p>
                    </div>
                    <ul className="space-y-1.5 pl-6.5 ml-[26px]">
                        {data.okr.keyResults.map((kr, idx) => (
                            <li key={idx} className="text-[13px] text-slate-600 font-medium flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: data.color + '90' }} />
                                <span className="leading-tight">{kr}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default function QPMDIntelligenceView() {
    return (
        <div className="p-5 md:p-8 max-w-[1400px] mx-auto space-y-8">
            
            {/* Page Header */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold tracking-wide uppercase rounded-full mb-3 border border-red-100">
                    Oversight Framework
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">QPMO Intelligence Dashboard</h1>
                <p className="text-slate-500 font-medium mt-1">Facilities Solutions – Rail Infrastructure Programs</p>
            </motion.div>

            {/* Main CSS Grid layout: 1-4-1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                
                {/* 1. TOP: Facility Operational Excellence (Spans 2 columns) */}
                <SectionCard 
                    data={qpmoIntelligenceData.facilityExcellence} 
                    span={2} 
                    icon={Activity} 
                    delay={0.1}
                />

                {/* 2. MIDDLE ROW 1 */}
                <SectionCard 
                    data={qpmoIntelligenceData.constructionQuality} 
                    span={1} 
                    icon={ShieldCheck} 
                    delay={0.2}
                />
                <SectionCard 
                    data={qpmoIntelligenceData.projectPerformance} 
                    span={1} 
                    icon={TrendingUp} 
                    delay={0.3}
                />

                {/* 3. MIDDLE ROW 2 */}
                <SectionCard 
                    data={qpmoIntelligenceData.businessContinuity} 
                    span={1} 
                    icon={AlertTriangle} 
                    delay={0.4}
                />
                <SectionCard 
                    data={qpmoIntelligenceData.operationsMaintenance} 
                    span={1} 
                    icon={Settings} 
                    delay={0.5}
                />

                {/* 4. BOTTOM: QPMO Oversight & AI Intelligence (Spans 2 columns) */}
                <SectionCard 
                    data={qpmoIntelligenceData.qpmoOversight} 
                    span={2} 
                    icon={Cpu} 
                    delay={0.6}
                />

            </div>
        </div>
    );
}
