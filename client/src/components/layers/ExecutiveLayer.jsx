import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, MapPin, AlertTriangle, Cpu } from 'lucide-react';
import { QPMO_COLORS } from '../../data/dashboardData';

import ProgramHealthRadar from '../charts/ProgramHealthRadar';
import CapitalPortfolioMap from '../charts/CapitalPortfolioMap';
import DeliveryPipeline from '../charts/DeliveryPipeline';
import RiskHeatMap from '../charts/RiskHeatMap';

const kpis = [
  { label: 'System Health Index', value: '91%', target: '90%', icon: Activity, color: QPMO_COLORS.green.primary },
  { label: 'Portfolio Value at Risk', value: '$120M', target: '<$150M', icon: Shield, color: QPMO_COLORS.red.primary },
  { label: 'TDLE Budget Status', value: '$3.4B', target: 'On Track', icon: MapPin, color: QPMO_COLORS.blue.primary },
  { label: 'WSLE Budget Status', value: '$2.8B', target: 'On Track', icon: MapPin, color: QPMO_COLORS.blue.primary },
];

export default function ExecutiveLayer() {
  return (
    <div className="space-y-6">
      {/* AI Predictive Alert Banner */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-4 flex items-start gap-3"
        style={{ 
          background: 'linear-gradient(135deg, rgba(220,53,69,0.08), rgba(220,53,69,0.03))',
          border: '1px solid rgba(220,53,69,0.15)'
        }}
      >
        <Cpu className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: QPMO_COLORS.red.primary }} />
        <div>
          <p className="text-sm font-bold text-slate-800">AI Insight</p>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            Predictive Schedule Risk triggered for <strong>WSLE</strong>. A pattern of RFI delays in the Knowledge Hub 
            correlates with an <strong>8% chance of schedule slippage</strong> next month. Recommend escalating MEP coordination review.
          </p>
        </div>
      </motion.div>

      {/* Banner */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
        <div className="w-1 h-12 rounded-full" style={{ background: QPMO_COLORS.green.primary }} />
        <div>
          <h1 className="text-xl font-bold text-slate-800">Executive Command Center</h1>
          <p className="text-sm text-slate-400">System health, strategic oversight, and portfolio intelligence</p>
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
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.green.primary }} />
                  Program Health Radar
              </h3>
              <p className="text-xs text-slate-500 mb-2">Safety, Quality, Schedule, Cost, Risk, Stakeholder</p>
              <ProgramHealthRadar />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.blue.primary }} />
                  Capital Portfolio Map
              </h3>
              <p className="text-xs text-slate-500 mb-2">TDLE, WSLE, ELE — Sized by budget, colored by risk</p>
              <CapitalPortfolioMap />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.brown.primary }} />
                  Delivery Pipeline (Stage Gate)
              </h3>
              <p className="text-xs text-slate-500 mb-2">Planning → Design → Procurement → Construction → Commissioning → Operations</p>
              <DeliveryPipeline />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.04)' }}>
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: QPMO_COLORS.red.primary }} />
                  Risk Heat Map
              </h3>
              <p className="text-xs text-slate-500 mb-2">Critical program threats (Probability × Impact)</p>
              <RiskHeatMap />
          </motion.div>
      </div>
    </div>
  );
}
