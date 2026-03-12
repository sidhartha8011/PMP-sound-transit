import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { week: 'W1', docsCreated: 12, proceduresUpdated: 2, lessonsLearned: 5 },
  { week: 'W2', docsCreated: 18, proceduresUpdated: 4, lessonsLearned: 3 },
  { week: 'W3', docsCreated: 24, proceduresUpdated: 1, lessonsLearned: 8 },
  { week: 'W4', docsCreated: 15, proceduresUpdated: 5, lessonsLearned: 12 },
  { week: 'W5', docsCreated: 28, proceduresUpdated: 3, lessonsLearned: 6 },
  { week: 'W6', docsCreated: 22, proceduresUpdated: 8, lessonsLearned: 15 },
];

export default function KnowledgeFlow() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f2f5" />
          <XAxis dataKey="week" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Line type="monotone" dataKey="docsCreated" name="Docs Created" stroke="#1E6BB8" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="proceduresUpdated" name="Procedures Updated" stroke="#6A2586" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="lessonsLearned" name="Lessons Learned Captured" stroke="#2E8B57" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
