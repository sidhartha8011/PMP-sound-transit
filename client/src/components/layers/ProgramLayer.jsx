import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, GitBranch, HardHat } from 'lucide-react';
import { QPMO_COLORS } from '../../data/dashboardData';

import ScheduleConfidence from '../charts/ScheduleConfidence';
import DecisionVelocity from '../charts/DecisionVelocity';
import DeliveryPipeline from '../charts/DeliveryPipeline';

const kpis = [
  { label: 'Schedule Performance (SPI)', value: '0.96', target: '≥ 1.0', icon: TrendingUp, color: QPMO_COLORS.blue.primary },
  { label: 'Cost Performance (CPI)', value: '1.02', target: '≥ 1.0', icon: DollarSign, color: QPMO_COLORS.blue.primary },
  { label: 'Decision Approval Rate', value: '85%', target: '90%', icon: GitBranch, color: QPMO_COLORS.brown.primary },
  { label: 'First Time Right (FTR)', value: '92%', target: '95%', icon: HardHat, color: QPMO_COLORS.brown.primary },
];

export default function ProgramLayer() {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
        <div className="w-1 h-12 rounded-full" style={{ background: QPMO_COLORS.blue.primary }} />
        <div>
          <h1 className="text-xl font-bold text-slate-800">Program Delivery Control</h1>
          <p className="text-sm text-slate-400">Schedule adherence, cost control, construction quality, and decision governance</p>
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
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.blue.primary }} />
                  Schedule Confidence Index (S-Curve)
              </h3>
              <p className="text-xs text-slate-500 mb-2">Planned vs Actual progress — Early warning for schedule drift</p>
              <ScheduleConfidence />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.brown.primary }} />
                  Decision Velocity Dashboard
              </h3>
              <p className="text-xs text-slate-500 mb-2">Governance health — Pending vs Approved decisions over time</p>
              <DecisionVelocity />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6 lg:col-span-2" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.brown.primary }} />
                  Construction Quality — Delivery Pipeline
              </h3>
              <p className="text-xs text-slate-500 mb-2">Identify where projects are stuck in the lifecycle</p>
              <DeliveryPipeline />
          </motion.div>
      </div>
    </div>
  );
}
