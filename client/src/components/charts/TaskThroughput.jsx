import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { week: 'W1', created: 45, completed: 30, backlog: 15 },
  { week: 'W2', created: 52, completed: 48, backlog: 19 },
  { week: 'W3', created: 38, completed: 45, backlog: 12 },
  { week: 'W4', created: 65, completed: 50, backlog: 27 },
  { week: 'W5', created: 40, completed: 55, backlog: 12 },
  { week: 'W6', created: 35, completed: 42, backlog: 5 },
];

export default function TaskThroughput() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f2f5" />
          <XAxis dataKey="week" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Bar yAxisId="left" dataKey="created" name="Tasks Created" fill="#94a3b8" radius={[4, 4, 0, 0]} maxBarSize={30} />
          <Bar yAxisId="left" dataKey="completed" name="Tasks Completed" fill="#2E8B57" radius={[4, 4, 0, 0]} maxBarSize={30} />
          <Line yAxisId="right" type="monotone" dataKey="backlog" name="Backlog Growth" stroke="#C02C38" strokeWidth={3} dot={{ r: 4, fill: '#C02C38', strokeWidth: 0 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
