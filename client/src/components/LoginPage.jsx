import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Users, HardHat, Sparkles, LayoutDashboard, ArrowRight, Shield } from 'lucide-react';

const directors = [
    {
        id: 'strategy',
        name: 'Alex Morgan',
        role: 'Principal & Strategy Lead',
        color: '#00A5D9',
        gradient: 'from-[#00A5D9] to-[#0ea5e9]',
        icon: LayoutDashboard,
        description: 'Strategic Planning, Economic Development & Stakeholder Engagement'
    },
    {
        id: 'controls',
        name: 'Jordan Chen',
        role: 'Project Controls Director',
        color: '#6A2586',
        gradient: 'from-[#6A2586] to-[#a855f7]',
        icon: Users,
        description: 'Cost Management, Scheduling & Risk Analysis'
    },
    {
        id: 'construction',
        name: 'Sam Williams',
        role: 'Construction & Safety Director',
        color: '#FF6A13',
        gradient: 'from-[#FF6A13] to-[#f97316]',
        icon: HardHat,
        description: 'Field Operations, Safety Compliance & Quality Control'
    },
    {
        id: 'qpmo',
        name: 'Dr. Taylor Reed',
        role: 'QPMO & Innovation Director',
        color: '#6A2586',
        gradient: 'from-[#6A2586] to-[#8b5cf6]',
        icon: Sparkles,
        description: 'Quality Assurance, Digital Transformation & Process Innovation'
    }
];

export default function LoginPage({ onLogin }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="min-h-screen animated-bg relative overflow-hidden flex items-center justify-center p-8">
            {/* Floating Orbs */}
            <div className="floating-orb orb-cyan"></div>
            <div className="floating-orb orb-purple"></div>
            <div className="floating-orb orb-orange"></div>

            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">
                        Metro Transit Authority
                    </h1>
                    <p className="text-lg text-slate-500">
                        QPMO Intelligence Dashboard
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                        Select your role to continue
                    </p>
                </motion.div>

                {/* Director Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {directors.map((director, index) => {
                        const Icon = director.icon;
                        const isHovered = hoveredCard === director.id;

                        return (
                            <motion.button
                                key={director.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -6 }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => setHoveredCard(director.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => onLogin(director.id)}
                                className="relative group"
                            >
                                {/* Card */}
                                <div
                                    className="relative p-8 rounded-2xl overflow-hidden transition-all duration-300 text-center"
                                    style={{
                                        background: isHovered
                                            ? `linear-gradient(135deg, ${director.color} 0%, ${director.color}DD 100%)`
                                            : 'rgba(255,255,255,0.8)',
                                        backdropFilter: 'blur(24px)',
                                        border: `1px solid ${isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.6)'}`,
                                        boxShadow: isHovered
                                            ? `0 25px 50px -12px ${director.color}40`
                                            : '0 10px 40px -10px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {/* Decorative circles */}
                                    <div
                                        className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4 transition-transform duration-300 group-hover:scale-125"
                                        style={{ background: director.color }}
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4"
                                        style={{ background: director.color }}
                                    />

                                    <div className="relative z-10 flex flex-col items-center">
                                        {/* Large Icon */}
                                        <motion.div
                                            className={`p-5 rounded-2xl mb-4 transition-all duration-300 ${isHovered
                                                    ? 'bg-white/20'
                                                    : `bg-gradient-to-br ${director.gradient}`
                                                }`}
                                            animate={{ scale: isHovered ? 1.1 : 1 }}
                                        >
                                            <Icon className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-white'}`} />
                                        </motion.div>

                                        {/* Role Title - Large */}
                                        <h3 className={`text-lg font-bold transition-colors duration-300 mb-1 ${isHovered ? 'text-white' : 'text-slate-800'
                                            }`}>
                                            {director.role}
                                        </h3>

                                        {/* Name - Smaller */}
                                        <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-slate-500'
                                            }`}>
                                            {director.name}
                                        </p>

                                        {/* Description */}
                                        <p className={`text-xs mt-3 transition-colors duration-300 max-w-[200px] ${isHovered ? 'text-white/70' : 'text-slate-400'
                                            }`}>
                                            {director.description}
                                        </p>

                                        {/* Arrow indicator */}
                                        <motion.div
                                            animate={{ y: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.5 }}
                                            className={`mt-4 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-300'
                                                }`}
                                        >
                                            <ArrowRight className="w-5 h-5 rotate-90" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12 text-sm text-slate-400"
                >
                    <p>Capital Program Management Office</p>
                    <p className="mt-1">© 2024 Metro Transit Authority</p>
                </motion.div>
            </div>
        </div>
    );
}
