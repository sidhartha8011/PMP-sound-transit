import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ZAxis, CartesianGrid } from 'recharts';

const roles = ['Elec Eng', 'Sig Eng', 'Const Mgr', 'Safety Off', 'QA Ins'];
const projects = ['Proj A', 'Proj B', 'Proj C', 'Proj D', 'Proj E'];

// Generate heat map data
const data = [];
roles.forEach((role, x) => {
  projects.forEach((proj, y) => {
    // Random utilization 0-100
    const util = Math.floor(Math.random() * 100);
    let color = '#2E8B57'; // Green
    if (util > 85) color = '#C02C38'; // Red (Overutilized)
    else if (util > 60) color = '#E8772E'; // Orange (High util)
    else if (util < 20) color = '#e2e8f0'; // Gray (Underutilized)

    data.push({ x: x + 1, y: y + 1, util, role, proj, color });
  });
});

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-2 rounded text-xs shadow-xl">
          <p className="font-bold">{data.role} on {data.proj}</p>
          <p>Utilization: {data.util}%</p>
        </div>
      );
    }
    return null;
};

export default function ResourceCapacityMap() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f5" vertical={false} horizontal={false} />
          <XAxis type="number" dataKey="x" domain={[1, roles.length]} hide />
          <YAxis type="number" dataKey="y" domain={[1, projects.length]} hide />
          
           {/* Custom Labels to fake the continuous axes into categorial axes for the heatmap grid */}
           {roles.map((r, i) => (
             <text key={`x-${i}`} x={(i+1) * 85 - 20} y={280} fontSize={11} fill="#64748b" textAnchor="middle">{r}</text>
           ))}
           {projects.map((p, i) => (
             <text key={`y-${i}`} x={10} y={260 - (i * 55)} fontSize={11} fill="#64748b" textAnchor="start">{p}</text>
           ))}

          <ZAxis type="number" dataKey="util" range={[400, 400]} /> {/* Fixed size squares */}
          <Tooltip content={<CustomTooltip />} cursor={false} />
          
          <Scatter name="Capacity" data={data} shape="square">
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
