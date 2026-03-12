import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Sep', pending: 15, avgTime: 8, overdue: 3 },
  { month: 'Oct', pending: 18, avgTime: 9, overdue: 4 },
  { month: 'Nov', pending: 12, avgTime: 6, overdue: 2 },
  { month: 'Dec', pending: 8, avgTime: 5, overdue: 1 },
  { month: 'Jan', pending: 10, avgTime: 4, overdue: 2 },
  { month: 'Feb', pending: 6, avgTime: 3, overdue: 0 },
];

export default function DecisionVelocity() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f2f5" />
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Bar yAxisId="left" dataKey="pending" name="Pending Decisions" fill="#6A2586" radius={[4, 4, 0, 0]} maxBarSize={40} />
          <Bar yAxisId="left" dataKey="overdue" name="Overdue Decisions" fill="#C02C38" radius={[4, 4, 0, 0]} maxBarSize={40} />
          <Line yAxisId="right" type="monotone" dataKey="avgTime" name="Avg Time (Days)" stroke="#1E6BB8" strokeWidth={3} dot={{ r: 4, fill: '#1E6BB8', strokeWidth: 0 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
