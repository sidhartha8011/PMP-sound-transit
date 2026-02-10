import { useState } from 'react';
import { motion } from 'framer-motion';
import { directors } from '../data/dashboardData';
import {
    Compass, HardHat, Building2, Wrench, Layers,
    ArrowRight, LayoutGrid
} from 'lucide-react';

const iconMap = { Compass, HardHat, Building2, Wrench, Layers };

export default function LoginPage({ onLogin }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="login-page flex items-center justify-center p-8">
            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center shadow-xl">
                            <LayoutGrid className="w-7 h-7 text-white" />
                        </div>
                    </motion.div>
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">
                        QPMO Intelligence
                    </h1>
                    <p className="text-base text-slate-500 font-medium">
                        Sound Transit Capital Program
                    </p>
                    <p className="text-sm text-slate-400 mt-4 max-w-md mx-auto">
                        Select your role to access the quality management dashboard
                    </p>
                </motion.div>

                {/* Director Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {directors.filter(d => d.id !== 'qpmoIntegrated').map((director, index) => {
                        const Icon = iconMap[director.icon] || Layers;
                        const isHovered = hoveredCard === director.id;

                        return (
                            <motion.button
                                key={director.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                whileHover={{ y: -8 }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => setHoveredCard(director.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => onLogin(director.id)}
                                className="login-card text-left group"
                                style={{
                                    borderColor: isHovered ? director.color.primary + '30' : '#e8ecf0',
                                    boxShadow: isHovered
                                        ? `0 24px 48px -12px ${director.color.primary}20`
                                        : '0 2px 8px rgba(0,0,0,0.04)',
                                }}
                            >
                                {/* Color accent bar */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(90deg, ${director.color.primary}, ${director.color.light})`,
                                        opacity: isHovered ? 1 : 0.15,
                                    }}
                                />

                                <div className="relative z-10 flex items-start gap-4">
                                    {/* Icon */}
                                    <motion.div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                        style={{
                                            background: isHovered
                                                ? `linear-gradient(135deg, ${director.color.primary}, ${director.color.light})`
                                                : director.color.ultraLight,
                                        }}
                                        animate={{ scale: isHovered ? 1.08 : 1 }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? '#ffffff' : director.color.primary }}
                                        />
                                    </motion.div>

                                    <div className="flex-1">
                                        <h3 className="text-[15px] font-bold text-slate-800 mb-1 leading-tight">
                                            {director.role}
                                        </h3>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            {director.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <motion.div
                                        animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.25 }}
                                        className="mt-2"
                                    >
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </motion.div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* QPMO Integrated Card - Full Width */}
                {(() => {
                    const qpmo = directors.find(d => d.id === 'qpmoIntegrated');
                    const Icon = iconMap[qpmo.icon] || Layers;
                    const isHovered = hoveredCard === qpmo.id;

                    return (
                        <motion.button
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.99 }}
                            onMouseEnter={() => setHoveredCard(qpmo.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => onLogin(qpmo.id)}
                            className="login-card w-full text-left group"
                            style={{
                                borderColor: isHovered ? qpmo.color.primary + '30' : '#e8ecf0',
                                boxShadow: isHovered
                                    ? `0 24px 48px -12px ${qpmo.color.primary}20`
                                    : '0 2px 8px rgba(0,0,0,0.04)',
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                                style={{
                                    background: `linear-gradient(90deg, ${qpmo.color.primary}, ${qpmo.color.light})`,
                                    opacity: isHovered ? 1 : 0.15,
                                }}
                            />
                            <div className="relative z-10 flex items-center gap-4">
                                <motion.div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                    style={{
                                        background: isHovered
                                            ? `linear-gradient(135deg, ${qpmo.color.primary}, ${qpmo.color.light})`
                                            : qpmo.color.ultraLight,
                                    }}
                                    animate={{ scale: isHovered ? 1.08 : 1 }}
                                >
                                    <Icon
                                        className="w-6 h-6 transition-colors duration-300"
                                        style={{ color: isHovered ? '#ffffff' : qpmo.color.primary }}
                                    />
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-[15px] font-bold text-slate-800 mb-0.5">{qpmo.role}</h3>
                                    <p className="text-xs text-slate-400">{qpmo.description}</p>
                                </div>
                                <motion.div animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.25 }}>
                                    <ArrowRight className="w-4 h-4 text-slate-400" />
                                </motion.div>
                            </div>
                        </motion.button>
                    );
                })()}

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 text-xs text-slate-400"
                >
                    <p className="font-medium">Sound Transit Authority · Capital Program Management Office</p>
                    <p className="mt-1 text-slate-300">© 2025 QPMO System</p>
                </motion.div>
            </div>
        </div>
    );
}
