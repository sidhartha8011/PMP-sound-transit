import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, ShieldCheck, Timer } from 'lucide-react';
import { QPMO_COLORS } from '../../data/dashboardData';

import AssetLifecycle from '../charts/AssetLifecycle';
import ResourceCapacity from '../charts/ResourceCapacity';
import TaskThroughput from '../charts/TaskThroughput';

const kpis = [
  { label: 'Asset Availability', value: '97.5%', target: '>96%', icon: Settings, color: QPMO_COLORS.orange.primary },
  { label: 'MTBF (Mean Time Between Failures)', value: '42d', target: '>30d', icon: Timer, color: QPMO_COLORS.orange.primary },
  { label: 'Emergency Response Time', value: '12 min', target: '<15 min', icon: ShieldCheck, color: QPMO_COLORS.purple.primary },
  { label: 'Active Personnel', value: '48', target: '45', icon: Users, color: QPMO_COLORS.purple.primary },
];

export default function OperationsLayer() {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
        <div className="w-1 h-12 rounded-full" style={{ background: QPMO_COLORS.orange.primary }} />
        <div>
          <h1 className="text-xl font-bold text-slate-800">Asset & Operations Control</h1>
          <p className="text-sm text-slate-400">Asset lifecycle, maintenance, capacity, and team utilization</p>
        </div>
      </motion.div>

      {/* KPIs */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                  <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-4 relative overflow-hidden group hover:shadow-lg transition-shadow" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
                      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${kpi.color}, ${kpi.color}80)` }} />
                      <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4" style={{ color: kpi.color }} />
                          <span className="text-[10px] text-slate-500 font-medium">{kpi.label}</span>
                      </div>
                      <p className="text-2xl font-extrabold text-slate-800">{kpi.value}</p>
                      <p className="text-[9px] text-slate-400 mt-1">Target: {kpi.target}</p>
                  </div>
              )
          })}
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.orange.primary }} />
                  Asset Lifecycle Dashboard
              </h3>
              <p className="text-xs text-slate-500 mb-2">Design → Installed → Tested → Commissioned → Operational</p>
              <AssetLifecycle />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.purple.primary }} />
                  Resource Capacity Map
              </h3>
              <p className="text-xs text-slate-500 mb-2">Utilization across Engineers, Safety Officers, BIM leads</p>
              <ResourceCapacity />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6 lg:col-span-2" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.orange.primary }} />
                  Task Throughput Flow
              </h3>
              <p className="text-xs text-slate-500 mb-2">Kanban flow — Tasks Created vs Completed vs Backlog growth</p>
              <TaskThroughput />
          </motion.div>
      </div>
    </div>
  );
}
