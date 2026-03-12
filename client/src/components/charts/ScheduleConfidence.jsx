import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jul', planned: 10, actual: 12 },
  { month: 'Aug', planned: 25, actual: 24 },
  { month: 'Sep', planned: 40, actual: 38 },
  { month: 'Oct', planned: 55, actual: 50 },
  { month: 'Nov', planned: 70, actual: 62 },
  { month: 'Dec', planned: 85, actual: 75 },
  { month: 'Jan', planned: 100, actual: 88 },
];

export default function ScheduleConfidence() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f2f5" />
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Area type="monotone" dataKey="planned" stroke="#94a3b8" fill="#e2e8f0" fillOpacity={0.5} strokeWidth={2} strokeDasharray="5 5" name="Planned Progress %" />
          <Area type="monotone" dataKey="actual" stroke="#1E6BB8" fill="#1E6BB8" fillOpacity={0.2} strokeWidth={3} name="Actual Progress %" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
