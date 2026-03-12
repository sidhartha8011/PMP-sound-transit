import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { category: 'Stations', design: 15, installed: 8, tested: 4, commissioned: 2, op: 1 },
  { category: 'Substations', design: 8, installed: 12, tested: 6, commissioned: 4, op: 5 },
  { category: 'Track (mi)', design: 25, installed: 15, tested: 8, commissioned: 5, op: 2 },
  { category: 'Facilities', design: 4, installed: 2, tested: 3, commissioned: 1, op: 2 },
  { category: 'Vehicles', design: 10, installed: 5, tested: 5, commissioned: 2, op: 8 },
];

export default function AssetLifecycle() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data} margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#f0f2f5" />
          <XAxis type="number" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="category" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
             cursor={{fill: 'rgba(0,0,0,0.02)'}}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Bar dataKey="design" name="Design" stackId="a" fill="#e2e8f0" barSize={20} />
          <Bar dataKey="installed" name="Installed" stackId="a" fill="#E8772E" />
          <Bar dataKey="tested" name="Tested" stackId="a" fill="#1E6BB8" />
          <Bar dataKey="commissioned" name="Commissioned" stackId="a" fill="#6A2586" />
          <Bar dataKey="op" name="Operational" stackId="a" fill="#2E8B57" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
