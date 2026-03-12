import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const data = [
  { stage: 'Planning', count: 45, color: '#e2e8f0' },
  { stage: 'Design', count: 32, color: '#1E6BB8' },
  { stage: 'Procurement', count: 18, color: '#E8772E' },
  { stage: 'Construction', count: 56, color: '#6A2586' },
  { stage: 'Commissioning', count: 12, color: '#2E8B57' },
  { stage: 'Operations', count: 110, color: '#94a3b8' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-md border border-slate-100">
        <p className="font-semibold text-slate-800">{payload[0].payload.stage}</p>
        <p className="text-sm text-slate-600">{payload[0].value} Projects</p>
      </div>
    );
  }
  return null;
};

export default function DeliveryPipeline() {
  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f2f5" />
          <XAxis type="number" hide />
          <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 11, fontWeight: 500 }} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
          <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={24}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
