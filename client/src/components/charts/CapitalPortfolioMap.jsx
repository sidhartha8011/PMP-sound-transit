import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell
} from 'recharts';

const data = [
  { name: 'Station A', phase: 1, risk: 2, value: 80, category: 'Station' },
  { name: 'Station B', phase: 2, risk: 4, value: 120, category: 'Station' },
  { name: 'Track Seg 1', phase: 3, risk: 3, value: 50, category: 'Track' },
  { name: 'Substation X', phase: 2, risk: 1, value: 30, category: 'Substation' },
  { name: 'Facility Y', phase: 4, risk: 5, value: 150, category: 'Facility' },
  { name: 'Station C', phase: 1, risk: 2, value: 90, category: 'Station' },
];

const COLORS = {
  Station: '#1E6BB8',
  Track: '#6A2586',
  Substation: '#E8772E',
  Facility: '#2E8B57'
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-100">
        <p className="font-bold text-slate-800">{data.name}</p>
        <p className="text-sm text-slate-600">Category: {data.category}</p>
        <p className="text-sm text-slate-600">Phase: {data.phase}</p>
        <p className="text-sm text-slate-600">Risk Level: {data.risk}</p>
        <p className="text-sm text-slate-600">Value: ${data.value}M</p>
      </div>
    );
  }
  return null;
};

export default function CapitalPortfolioMap() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f5" />
          <XAxis type="number" dataKey="phase" name="Phase" domain={[0, 5]} tick={{ fill: '#64748b' }} label={{ value: 'Project Phase (1-5)', position: 'insideBottom', offset: -10, fill: '#64748b' }} />
          <YAxis type="number" dataKey="risk" name="Risk Level" domain={[0, 6]} tick={{ fill: '#64748b' }} label={{ value: 'Risk Level (1-5)', angle: -90, position: 'insideLeft', fill: '#64748b' }} />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Projects" data={data} fill="#8884d8">
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.category] || '#1E6BB8'} />
              ))
            }
             <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fill: '#64748b' }} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2">
        {Object.entries(COLORS).map(([key, color]) => (
            <div key={key} className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                <span className="text-xs text-slate-600">{key}</span>
            </div>
        ))}
      </div>
    </div>
  );
}
