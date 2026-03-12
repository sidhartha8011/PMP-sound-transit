import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ZAxis } from 'recharts';

const data = [
  { id: 'R01', prob: 8, impact: 9, size: 400, name: 'Seismic Compliance Delay', color: '#C02C38' }, // Red
  { id: 'R02', prob: 7, impact: 8, size: 300, name: 'Vendor Insolvency', color: '#C02C38' },
  { id: 'R03', prob: 9, impact: 5, size: 250, name: 'Material Shortage', color: '#E8772E' }, // Yellow/Orange
  { id: 'R04', prob: 6, impact: 6, size: 200, name: 'Labor Strike', color: '#E8772E' },
  { id: 'R05', prob: 4, impact: 7, size: 150, name: 'Design Rework', color: '#E8772E' },
  { id: 'R06', prob: 3, impact: 4, size: 100, name: 'Permit Delay', color: '#2E8B57' }, // Green
  { id: 'R07', prob: 2, impact: 3, size: 80, name: 'Minor Spec Change', color: '#2E8B57' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-100 z-50">
        <p className="font-bold text-slate-800 text-sm mb-1">{data.name} ({data.id})</p>
        <div className="grid grid-cols-2 gap-x-4 text-xs text-slate-600">
           <p>Probability: <span className="font-semibold">{data.prob}/10</span></p>
           <p>Impact: <span className="font-semibold">{data.impact}/10</span></p>
        </div>
      </div>
    );
  }
  return null;
};

export default function RiskHeatMap() {
  return (
    <div className="w-full h-[300px] relative">
      {/* Background Quadrant Colors - Optional Visual Enhancement */}
      <div className="absolute inset-0 pl-10 pb-5 pointer-events-none opacity-10">
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
               <div className="bg-red-500 border border-white"></div>
               <div className="bg-orange-500 border border-white"></div>
               <div className="bg-yellow-500 border border-white"></div>
               <div className="bg-green-500 border border-white"></div>
          </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f5" />
          <XAxis type="number" dataKey="prob" name="Probability" domain={[0, 10]} tick={{ fill: '#64748b' }} label={{ value: 'Probability (1-10)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12 }} />
          <YAxis type="number" dataKey="impact" name="Impact" domain={[0, 10]} tick={{ fill: '#64748b' }} label={{ value: 'Impact (1-10)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }} />
          <ZAxis type="number" dataKey="size" range={[50, 400]} name="Score" />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Risks" data={data} fill="#8884d8" animationDuration={1500}>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))
            }
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
