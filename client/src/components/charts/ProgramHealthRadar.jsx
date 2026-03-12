import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip
} from 'recharts';

const data = [
  { subject: 'Safety', A: 95, fullMark: 100 },
  { subject: 'Quality', A: 88, fullMark: 100 },
  { subject: 'Schedule', A: 75, fullMark: 100 },
  { subject: 'Cost', A: 82, fullMark: 100 },
  { subject: 'Risk', A: 90, fullMark: 100 },
  { subject: 'Stakeholder Alignment', A: 85, fullMark: 100 },
];

export default function ProgramHealthRadar() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <Radar
            name="Program Health"
            dataKey="A"
            stroke="#1E6BB8"
            fill="#1E6BB8"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Tooltip 
            contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
            }} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
