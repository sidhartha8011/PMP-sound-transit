import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, RadarChart,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
    ScatterChart, Scatter, ZAxis, Treemap as RTreemap, ComposedChart,
    ReferenceLine, ReferenceArea,
} from 'recharts';

const tooltipStyle = {
    background: '#1e293b',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
    fontSize: '12px',
    padding: '12px 16px',
};

const axisStyle = { fill: '#94a3b8', fontSize: 11 };

// Chart height constant
const CH = 300;

// ═══════════════════════════════════════════════════════
// 1. AREA TREND WITH FORECAST BAND
// ═══════════════════════════════════════════════════════
function AreaTrendChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.18} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} fill={`url(#grad-${color})`} dot={{ r: 4, fill: '#fff', stroke: color, strokeWidth: 2 }} connectNulls={false} />
                <Area type="monotone" dataKey="forecast" stroke={color} strokeWidth={2} strokeDasharray="6 4" fill="none" connectNulls={false} dot={{ r: 3, fill: color, strokeWidth: 0 }} />
                <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 2. STACKED BAR WITH LABELS
// ═══════════════════════════════════════════════════════
function BarComparisonChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="open" fill={color} radius={[4, 4, 0, 0]} />
                <Bar dataKey="closed" fill={color + '55'} radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 3. DONUT WITH CENTER LABEL
// ═══════════════════════════════════════════════════════
function DonutChart({ data, centerLabel }) {
    const total = data.reduce((s, d) => s + d.value, 0);
    return (
        <div className="relative" style={{ height: CH }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" innerRadius="58%" outerRadius="82%" paddingAngle={3} dataKey="value" stroke="none">
                        {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }} />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-extrabold text-slate-800">{total.toLocaleString()}</span>
                {centerLabel && <span className="text-[10px] text-slate-400 font-semibold">{centerLabel}</span>}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 4. RADAR / SPIDER CHART
// ═══════════════════════════════════════════════════════
function QRadarChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
                <Radar dataKey="benchmark" fill="#94a3b8" fillOpacity={0.15} stroke="#94a3b8" strokeDasharray="4 3" />
                <Radar dataKey="value" fill={color} fillOpacity={0.25} stroke={color} strokeWidth={2} dot={{ r: 3, fill: color }} />
                <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 5. WATERFALL CHART
// ═══════════════════════════════════════════════════════
function WaterfallChart({ data, color }) {
    const processed = useMemo(() => {
        let cumulative = 0;
        return data.map(d => {
            if (d.isTotal) return { ...d, bottom: 0, top: cumulative, barValue: cumulative, fill: color };
            const prev = cumulative;
            cumulative += d.value;
            return {
                ...d,
                bottom: d.value >= 0 ? prev : cumulative,
                top: d.value >= 0 ? cumulative : prev,
                barValue: Math.abs(d.value),
                fill: d.value >= 0 ? color : '#ef4444',
            };
        });
    }, [data, color]);

    return (
        <ResponsiveContainer width="100%" height={CH}>
            <BarChart data={processed} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" tick={{ ...axisStyle, fontSize: 10 }} axisLine={false} tickLine={false} interval={0} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="bottom" stackId="a" fill="transparent" />
                <Bar dataKey="barValue" stackId="a" radius={[4, 4, 0, 0]}>
                    {processed.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 6. BULLET CHART
// ═══════════════════════════════════════════════════════
function BulletChart({ data, color }) {
    return (
        <div className="space-y-5 py-2">
            {data.map((item, i) => {
                const pctActual = (item.actual / item.max) * 100;
                const pctTarget = (item.target / item.max) * 100;
                return (
                    <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold text-slate-700">{item.name}</span>
                            <span className="text-xs font-bold" style={{ color }}>{item.actual}{item.unit} / {item.target}{item.unit}</span>
                        </div>
                        <div className="relative h-7 bg-slate-100 rounded-lg overflow-hidden">
                            <motion.div className="absolute inset-y-0 left-0 rounded-lg" style={{ background: color }} initial={{ width: 0 }} animate={{ width: `${pctActual}%` }} transition={{ duration: 0.8, delay: i * 0.08 }} />
                            <div className="absolute inset-y-0 flex items-center" style={{ left: `${pctTarget}%` }}>
                                <div className="w-0.5 h-full bg-slate-800 opacity-70" />
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 7. SCATTER QUADRANT (Risk/Impact Matrix)
// ═══════════════════════════════════════════════════════
function ScatterQuadrant({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <ScatterChart margin={{ top: 15, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" dataKey="likelihood" name="Likelihood" domain={[0, 10]} tick={axisStyle} axisLine={false} label={{ value: 'Likelihood →', position: 'insideBottomRight', style: { fill: '#94a3b8', fontSize: 10 } }} />
                <YAxis type="number" dataKey="impact" name="Impact" domain={[0, 10]} tick={axisStyle} axisLine={false} label={{ value: 'Impact →', angle: -90, position: 'insideLeft', style: { fill: '#94a3b8', fontSize: 10 } }} />
                <ZAxis type="number" dataKey="size" range={[60, 400]} />
                <ReferenceArea x1={5} x2={10} y1={5} y2={10} fill="#ef4444" fillOpacity={0.06} label={{ value: 'High Risk', position: 'insideTopRight', fill: '#ef4444', fontSize: 10 }} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={data} fill={color}>
                    {data.map((_, i) => <Cell key={i} fill={data[i].impact > 5 && data[i].likelihood > 5 ? '#ef4444' : color} fillOpacity={0.7} />)}
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 8. COMBO CHART (Bar + Line overlay)
// ═══════════════════════════════════════════════════════
function ComboChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <ComposedChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" tick={axisStyle} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar yAxisId="left" dataKey="volume" fill={color} fillOpacity={0.35} radius={[6, 6, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="rate" stroke={color} strokeWidth={2.5} dot={{ r: 4, fill: '#fff', stroke: color, strokeWidth: 2 }} />
                <Line yAxisId="right" type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 9. TREEMAP
// ═══════════════════════════════════════════════════════
const TREEMAP_COLORS = ['#1E6BB8', '#6A2586', '#2E8B57', '#E8772E', '#C02C38', '#14b8a6', '#8b5cf6', '#f43f5e'];

function TreemapContent({ x, y, width, height, name, value, index }) {
    if (width < 40 || height < 30) return null;
    return (
        <g>
            <rect x={x} y={y} width={width} height={height} rx={6} style={{ fill: TREEMAP_COLORS[index % TREEMAP_COLORS.length], opacity: 0.85, stroke: '#fff', strokeWidth: 2 }} />
            <text x={x + width / 2} y={y + height / 2 - 7} textAnchor="middle" fill="#fff" fontSize={11} fontWeight={700}>{name}</text>
            <text x={x + width / 2} y={y + height / 2 + 9} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize={10}>{value}</text>
        </g>
    );
}

function TreemapChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <RTreemap data={data} dataKey="value" aspectRatio={4 / 3} content={<TreemapContent />} />
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 10. MULTI-SERIES LINE
// ═══════════════════════════════════════════════════════
const SERIES_COLORS = ['#1E6BB8', '#6A2586', '#2E8B57', '#E8772E', '#C02C38'];

function MultiLineChart({ data, series }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }} />
                {series.map((s, i) => (
                    <Line key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={SERIES_COLORS[i % SERIES_COLORS.length]} strokeWidth={2} dot={{ r: 3 }} />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 11. SPARKLINE TABLE
// ═══════════════════════════════════════════════════════
function SparklineTable({ data, color }) {
    function MiniSparkline({ values, sparkColor }) {
        const w = 80, h = 24;
        const min = Math.min(...values), max = Math.max(...values);
        const range = max - min || 1;
        const points = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - ((v - min) / range) * h}`).join(' ');
        return (
            <svg width={w} height={h} className="flex-shrink-0">
                <polyline points={points} fill="none" stroke={sparkColor} strokeWidth={1.5} strokeLinejoin="round" />
                <circle cx={(values.length - 1) / (values.length - 1) * w} cy={h - ((values[values.length - 1] - min) / range) * h} r={2.5} fill={sparkColor} />
            </svg>
        );
    }

    const { categoryLabel = 'Category', rows } = data;

    return (
        <div className="overflow-hidden rounded-xl border border-slate-200/60">
            <table className="qpmo-table">
                <thead>
                    <tr>
                        <th className="text-left text-[10px]">{categoryLabel}</th>
                        <th className="text-center text-[10px]">Current</th>
                        <th className="text-center text-[10px]">Target</th>
                        <th className="text-center text-[10px]">Status</th>
                        <th className="text-center text-[10px]">Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => {
                        const good = row.higherIsBetter ? row.current >= row.target : row.current <= row.target;
                        const sparkColor = good ? '#2E8B57' : '#ef4444';
                        return (
                            <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                                <td className="text-xs font-semibold text-slate-700">{row.name}</td>
                                <td className="text-center text-xs font-bold text-slate-800">{row.current}{row.unit}</td>
                                <td className="text-center text-xs text-slate-400">{row.target}{row.unit}</td>
                                <td className="text-center">
                                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${good ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                </td>
                                <td className="flex justify-center"><MiniSparkline values={row.sparkline} sparkColor={sparkColor} /></td>
                            </motion.tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 12. GAUGE SEMICIRCLE
// ═══════════════════════════════════════════════════════
function GaugeSemicircle({ value, max = 100, label, zones, color }) {
    const pct = Math.min(value / max, 1);
    const size = 200;
    const cx = size / 2, cy = size / 2 + 10;
    const radius = 75;
    const startAngle = Math.PI;
    const endAngle = 0;
    const arcLength = Math.PI;

    const polarToCart = (angle, r) => ({ x: cx + r * Math.cos(angle), y: cy - r * Math.sin(angle) });

    // Background arc
    const bgStart = polarToCart(startAngle, radius);
    const bgEnd = polarToCart(endAngle, radius);
    const bgPath = `M ${bgStart.x} ${bgStart.y} A ${radius} ${radius} 0 1 1 ${bgEnd.x} ${bgEnd.y}`;

    // Value arc
    const valueAngle = startAngle - pct * arcLength;
    const valEnd = polarToCart(valueAngle, radius);
    const largeArc = pct > 0.5 ? 1 : 0;
    const valPath = `M ${bgStart.x} ${bgStart.y} A ${radius} ${radius} 0 ${largeArc} 1 ${valEnd.x} ${valEnd.y}`;

    const needleAngle = startAngle - pct * arcLength;
    const needleTip = polarToCart(needleAngle, radius - 12);

    return (
        <div className="flex flex-col items-center justify-center py-4">
            <svg width={size} height={size / 2 + 30} viewBox={`0 0 ${size} ${size / 2 + 30}`}>
                <path d={bgPath} fill="none" stroke="#e2e8f0" strokeWidth={14} strokeLinecap="round" />
                <motion.path d={valPath} fill="none" stroke={color} strokeWidth={14} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
                <motion.line x1={cx} y1={cy} x2={needleTip.x} y2={needleTip.y} stroke="#1e293b" strokeWidth={2.5} strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
                <circle cx={cx} cy={cy} r={5} fill="#1e293b" />
            </svg>
            <p className="text-3xl font-extrabold text-slate-800 -mt-2">{value}</p>
            {label && <p className="text-[11px] text-slate-400 font-semibold mt-1">{label}</p>}
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 13. HEATMAP TABLE
// ═══════════════════════════════════════════════════════
function HeatmapChart({ data, color }) {
    const getIntensity = (val) => {
        if (val >= 95) return { bg: '#059669', text: '#fff' };
        if (val >= 90) return { bg: '#10b981', text: '#fff' };
        if (val >= 80) return { bg: '#34d399', text: '#065f46' };
        if (val >= 70) return { bg: '#fbbf24', text: '#78350f' };
        if (val >= 60) return { bg: '#f97316', text: '#fff' };
        return { bg: '#ef4444', text: '#fff' };
    };
    const dimensions = Object.keys(data[0] || {}).filter(k => k !== 'name');
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200/60">
            <table className="qpmo-table">
                <thead>
                    <tr>
                        <th></th>
                        {dimensions.map(d => <th key={d} className="text-center capitalize text-[10px]">{d}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.06 }}>
                            <td className="font-semibold text-slate-700 text-xs">{row.name}</td>
                            {dimensions.map(d => {
                                const { bg, text } = getIntensity(row[d]);
                                return (
                                    <td key={d} className="text-center p-1.5">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 + i * 0.04 }} className="mx-auto rounded-lg px-3 py-2 text-xs font-bold" style={{ background: bg, color: text, minWidth: '48px' }}>
                                            {row[d]}%
                                        </motion.div>
                                    </td>
                                );
                            })}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 14. PROGRESS RINGS ROW
// ═══════════════════════════════════════════════════════
function ProgressRingsRow({ data, color }) {
    const size = 80, stroke = 7;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    return (
        <div className="flex flex-wrap justify-center gap-7 py-3">
            {data.map((item, i) => {
                const pct = Math.min(item.value / (item.max || 100), 1);
                const offset = circumference * (1 - pct);
                const statusColor = pct >= 0.9 ? '#2E8B57' : pct >= 0.75 ? '#E8772E' : '#C02C38';
                return (
                    <motion.div key={i} className="flex flex-col items-center gap-1.5" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}>
                        <div className="relative">
                            <svg width={size} height={size}>
                                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#f0f2f5" strokeWidth={stroke} />
                                <motion.circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={statusColor} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.2, delay: i * 0.1 }} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-sm font-bold text-slate-800">{item.value}%</span>
                            </div>
                        </div>
                        <span className="text-[10px] text-slate-500 text-center max-w-[80px] leading-tight font-medium">{item.label}</span>
                    </motion.div>
                );
            })}
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 15. FUNNEL CHART
// ═══════════════════════════════════════════════════════
function QFunnelChart({ data, color }) {
    const maxVal = Math.max(...data.map(d => d.value));
    return (
        <div className="space-y-3 py-3">
            {data.map((item, i) => {
                const pct = (item.value / maxVal) * 100;
                return (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-28 text-right flex-shrink-0 font-medium">{item.name}</span>
                        <div className="flex-1 h-9 bg-slate-50 rounded-lg overflow-hidden relative">
                            <motion.div className="h-full rounded-lg flex items-center justify-end pr-3" style={{ background: `linear-gradient(90deg, ${color}${90 - i * 12 > 20 ? 90 - i * 12 : 30}, ${color})` }} initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, delay: i * 0.1 }}>
                                <span className="text-[11px] font-bold text-white">{item.value.toLocaleString()}</span>
                            </motion.div>
                        </div>
                        <span className="text-[10px] text-slate-400 w-12 font-medium">{((item.value / maxVal) * 100).toFixed(0)}%</span>
                    </motion.div>
                );
            })}
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 16. PARETO CHART (Bar + Cumulative Line)
// ═══════════════════════════════════════════════════════
function ParetoChart({ data, color }) {
    const sorted = [...data].sort((a, b) => b.value - a.value);
    const total = sorted.reduce((s, d) => s + d.value, 0);
    let cumulative = 0;
    const processed = sorted.map(d => {
        cumulative += d.value;
        return { ...d, cumPct: Math.round((cumulative / total) * 100) };
    });
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <ComposedChart data={processed} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" tick={{ ...axisStyle, fontSize: 10 }} axisLine={false} tickLine={false} interval={0} />
                <YAxis yAxisId="left" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tick={axisStyle} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar yAxisId="left" dataKey="value" fill={color} fillOpacity={0.75} radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="cumPct" stroke="#ef4444" strokeWidth={2} dot={{ r: 3, fill: '#ef4444' }} />
                <ReferenceLine yAxisId="right" y={80} stroke="#94a3b8" strokeDasharray="4 4" label={{ value: '80%', position: 'right', fill: '#94a3b8', fontSize: 10 }} />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 17. LEADERBOARD BAR CHART (Ranked horizontal bars)
// ═══════════════════════════════════════════════════════
function LeaderboardChart({ data, color }) {
    const sorted = [...data].sort((a, b) => b.score - a.score);
    const maxScore = Math.max(...sorted.map(d => d.score));
    return (
        <div className="space-y-3 py-2">
            {sorted.map((item, i) => {
                const pct = (item.score / maxScore) * 100;
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;
                return (
                    <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                        <div className="flex items-center gap-3">
                            <span className="text-sm w-7 text-center font-semibold">{medal}</span>
                            <span className="text-xs font-semibold text-slate-700 w-36 truncate">{item.name}</span>
                            <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden relative">
                                <motion.div className="absolute inset-y-0 left-0 rounded-full" style={{ background: `linear-gradient(90deg, ${color}90, ${color})` }} initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, delay: 0.1 + i * 0.06 }} />
                            </div>
                            <span className="text-xs font-bold text-slate-800 w-14 text-right">{item.score}{item.unit || ''}</span>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 18. CONTROL LIMITS CHART (SPC — trend + UCL / LCL)
// ═══════════════════════════════════════════════════════
function ControlLimitsChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="ucl" stroke="none" fill="#ef4444" fillOpacity={0.06} />
                <Line type="monotone" dataKey="ucl" stroke="#ef4444" strokeWidth={1} strokeDasharray="5 3" dot={false} name="UCL" />
                <Line type="monotone" dataKey="lcl" stroke="#ef4444" strokeWidth={1} strokeDasharray="5 3" dot={false} name="LCL" />
                <Line type="monotone" dataKey="mean" stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 3" dot={false} name="Mean" />
                <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} dot={{ r: 4, fill: '#fff', stroke: color, strokeWidth: 2 }} name="Actual" />
            </LineChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 19. STACKED COLUMN CHART (e.g., PM vs CM)
// ═══════════════════════════════════════════════════════
function StackedColumnChart({ data, color, categories }) {
    const catColors = [color, color + '55', '#94a3b8', '#cbd5e1'];
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                {(categories || []).map((cat, i) => (
                    <Bar key={cat.key} dataKey={cat.key} name={cat.label} stackId="a" fill={catColors[i % catColors.length]} radius={i === (categories.length - 1) ? [4, 4, 0, 0] : [0, 0, 0, 0]} />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 20. HISTOGRAM
// ═══════════════════════════════════════════════════════
function HistogramChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="bin" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="count" fill={color} fillOpacity={0.7} radius={[4, 4, 0, 0]}>
                    {data.map((d, i) => <Cell key={i} fill={d.highlight ? '#ef4444' : color} fillOpacity={d.highlight ? 0.85 : 0.7} />)}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 21. SLOPE CHART (Year-over-Year comparison)
// ═══════════════════════════════════════════════════════
function SlopeChart({ data, color }) {
    const leftX = 60, rightX = 300, height = Math.max(CH, data.length * 50 + 40);
    const yPad = 30;
    const allValues = data.flatMap(d => [d.before, d.after]);
    const minV = Math.min(...allValues) - 5;
    const maxV = Math.max(...allValues) + 5;
    const scale = (v) => yPad + ((maxV - v) / (maxV - minV)) * (height - 2 * yPad);

    return (
        <svg width="100%" height={height} viewBox={`0 0 380 ${height}`}>
            {/* Axis labels */}
            <text x={leftX} y={15} textAnchor="middle" fontSize={11} fontWeight={700} fill="#64748b">{data[0]?.yearBefore || 'Before'}</text>
            <text x={rightX} y={15} textAnchor="middle" fontSize={11} fontWeight={700} fill="#64748b">{data[0]?.yearAfter || 'After'}</text>
            {data.map((d, i) => {
                const y1 = scale(d.before);
                const y2 = scale(d.after);
                const improved = d.after > d.before;
                const lineColor = improved ? '#2E8B57' : '#ef4444';
                return (
                    <g key={i}>
                        <motion.line x1={leftX} y1={y1} x2={rightX} y2={y2} stroke={lineColor} strokeWidth={2} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: i * 0.1 }} />
                        <circle cx={leftX} cy={y1} r={4} fill={lineColor} />
                        <circle cx={rightX} cy={y2} r={4} fill={lineColor} />
                        <text x={leftX - 8} y={y1 + 4} textAnchor="end" fontSize={10} fill="#64748b">{d.before}</text>
                        <text x={rightX + 8} y={y2 + 4} textAnchor="start" fontSize={10} fill="#64748b">{d.after}</text>
                        <text x={rightX + 35} y={y2 + 4} textAnchor="start" fontSize={10} fontWeight={600} fill={lineColor}>{d.label}</text>
                    </g>
                );
            })}
        </svg>
    );
}

// ═══════════════════════════════════════════════════════
// 22. SANKEY-STYLE FLOW (SVG-only — no dependency)
// ═══════════════════════════════════════════════════════
function SankeyFlow({ data, color }) {
    // data: [{ from, to, value, label? }]
    const froms = [...new Set(data.map(d => d.from))];
    const tos = [...new Set(data.map(d => d.to))];
    const maxVal = Math.max(...data.map(d => d.value));
    const nodeH = 44, gap = 18;
    const leftX = 30, rightX = 290, totalH = Math.max(froms.length, tos.length) * (nodeH + gap) + 30;

    const fromY = (i) => 20 + i * (nodeH + gap);
    const toY = (i) => 20 + i * (nodeH + gap);

    return (
        <div className="overflow-x-auto">
            <svg width="100%" height={totalH} viewBox={`0 0 380 ${totalH}`}>
                {/* From nodes */}
                {froms.map((f, i) => (
                    <g key={`f-${i}`}>
                        <rect x={leftX} y={fromY(i)} width={80} height={nodeH} rx={8} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={1} />
                        <text x={leftX + 40} y={fromY(i) + nodeH / 2 + 4} textAnchor="middle" fontSize={10} fontWeight={600} fill="#334155">{f}</text>
                    </g>
                ))}
                {/* To nodes */}
                {tos.map((t, i) => (
                    <g key={`t-${i}`}>
                        <rect x={rightX} y={toY(i)} width={80} height={nodeH} rx={8} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={1} />
                        <text x={rightX + 40} y={toY(i) + nodeH / 2 + 4} textAnchor="middle" fontSize={10} fontWeight={600} fill="#334155">{t}</text>
                    </g>
                ))}
                {/* Flows */}
                {data.map((d, i) => {
                    const fi = froms.indexOf(d.from);
                    const ti = tos.indexOf(d.to);
                    const sw = Math.max(3, (d.value / maxVal) * 18);
                    const x1 = leftX + 80, y1 = fromY(fi) + nodeH / 2;
                    const x2 = rightX, y2 = toY(ti) + nodeH / 2;
                    const cx1 = x1 + 60, cx2 = x2 - 60;
                    return (
                        <g key={i}>
                            <motion.path d={`M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`} fill="none" stroke={color} strokeWidth={sw} strokeOpacity={0.25} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: i * 0.1 }} />
                            <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 8} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>{d.value} issues</text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

// ═══════════════════════════════════════════════════════
// 23. FORECAST LINE WITH CONFIDENCE BAND
// ═══════════════════════════════════════════════════════
function ForecastBandChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="forecastBand" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.12} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="upper" stroke="none" fill={color} fillOpacity={0.08} />
                <Area type="monotone" dataKey="lower" stroke="none" fill="#fff" fillOpacity={1} />
                <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} dot={{ r: 4, fill: '#fff', stroke: color, strokeWidth: 2 }} connectNulls={false} />
                <Line type="monotone" dataKey="forecast" stroke={color} strokeWidth={2} strokeDasharray="6 4" dot={{ r: 3, fill: color }} connectNulls={false} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// 24. CUMULATIVE AREA CHART
// ═══════════════════════════════════════════════════════
function CumulativeAreaChart({ data, color }) {
    return (
        <ResponsiveContainer width="100%" height={CH}>
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id={`cumGrad-${color}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.03} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="value" stroke={color} strokeWidth={2} fill={`url(#cumGrad-${color})`} dot={{ r: 3, fill: '#fff', stroke: color, strokeWidth: 2 }} />
                {data[0]?.benchmark !== undefined && (
                    <Line type="monotone" dataKey="benchmark" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5 4" dot={false} name="Benchmark" />
                )}
            </AreaChart>
        </ResponsiveContainer>
    );
}

// ═══════════════════════════════════════════════════════
// MAIN WIDGET RENDERER
// ═══════════════════════════════════════════════════════
export default function WidgetRenderer({ widget, color, theme }) {
    const { type, data } = widget;

    switch (type) {
        case 'areaTrend': return <AreaTrendChart data={data} color={color} />;
        case 'barComparison': return <BarComparisonChart data={data} color={color} />;
        case 'donut': return <DonutChart data={data} centerLabel={widget.centerLabel} />;
        case 'radarChart': return <QRadarChart data={data} color={color} />;
        case 'waterfall': return <WaterfallChart data={data} color={color} />;
        case 'bullet': return <BulletChart data={data} color={color} />;
        case 'scatterQuadrant': return <ScatterQuadrant data={data} color={color} />;
        case 'combo': return <ComboChart data={data} color={color} />;
        case 'treemap': return <TreemapChart data={data} />;
        case 'multiLine': return <MultiLineChart data={data} series={widget.series} />;
        case 'sparklineTable': return <SparklineTable data={data} color={color} />;
        case 'gaugeSemicircle': return <GaugeSemicircle value={widget.value} max={widget.max} label={widget.label} zones={widget.zones} color={color} />;
        case 'heatmap': return <HeatmapChart data={data} color={color} />;
        case 'progressRings': return <ProgressRingsRow data={data} color={color} />;
        case 'funnel': return <QFunnelChart data={data} color={color} />;
        // NEW chart types
        case 'pareto': return <ParetoChart data={data} color={color} />;
        case 'leaderboard': return <LeaderboardChart data={data} color={color} />;
        case 'controlLimits': return <ControlLimitsChart data={data} color={color} />;
        case 'stackedColumn': return <StackedColumnChart data={data} color={color} categories={widget.categories} />;
        case 'histogram': return <HistogramChart data={data} color={color} />;
        case 'slopeChart': return <SlopeChart data={data} color={color} />;
        case 'sankeyFlow': return <SankeyFlow data={data} color={color} />;
        case 'forecastBand': return <ForecastBandChart data={data} color={color} />;
        case 'cumulativeArea': return <CumulativeAreaChart data={data} color={color} />;
        default:
            return (
                <div className="p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <p className="text-xs">Widget: {type}</p>
                </div>
            );
    }
}
