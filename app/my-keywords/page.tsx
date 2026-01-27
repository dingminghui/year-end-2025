"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Flame, Cpu } from "lucide-react";

export default function KeywordsPage() {
    const keywords = [
        {
            title: "破壁者",
            subtitle: "Wall Breaker",
            icon: <Shield className="w-8 h-8 text-cyan-400" />,
            desc: "不惧烂代码与技术天坑。在武汉的高压封闭开发中，用极强的韧性与兜底能力杀出重围，化不可能为可能。",
            color: "border-cyan-500 shadow-cyan-500/50",
            text: "text-cyan-400",
        },
        {
            title: "智械同频",
            subtitle: "Sync with AI",
            icon: <Cpu className="w-8 h-8 text-purple-400" />,
            desc: "进化为“懂 AI 的工程师”。深度驾驭 MCP Skill，让 AI 成为外挂大脑，编码速度与思维同频，实现指数级加速。",
            color: "border-purple-500 shadow-purple-500/50",
            text: "text-purple-400",
        },
        {
            title: "降维打击",
            subtitle: "Dimensional Strike",
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            desc: "在极速节奏中保持冷静。利用 AI 快速拆解复杂需求，对技术难点进行降维打击，实现“抬手即代码”的心流状态。",
            color: "border-yellow-500 shadow-yellow-500/50",
            text: "text-yellow-400",
        },
        {
            title: "传火者",
            subtitle: "Fire Keeper",
            icon: <Flame className="w-8 h-8 text-red-400" />,
            desc: "冲锋陷阵亦不忘转身传火。将高效开发模式与 AI 最佳实践传递给新人，点燃团队战斗力。",
            color: "border-red-500 shadow-red-500/50",
            text: "text-red-400",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-gray-100 p-6 md:p-12 font-sans overflow-hidden relative selection:bg-cyan-500/30">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-1/3 w-full h-64 bg-slate-900/50 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <header className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
                            2025: CODE &amp; CHAOS
                        </h1>
                        <p className="text-gray-400 text-lg uppercase tracking-[0.2em]">Frontend Developer Year-End Report</p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {keywords.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ scale: 1.02, rotate: 0.5 }}
                            className={`relative bg-gray-900/80 backdrop-blur-sm border-l-4 p-8 rounded-r-xl border-t border-r border-b border-gray-800 ${item.color} shadow-lg group hover:shadow-xl transition-all duration-300`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                {item.icon}
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-lg bg-gray-800/50 ${item.text}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h2 className={`text-2xl font-bold ${item.text}`}>{item.title}</h2>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">{item.subtitle}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed relative z-10">
                                {item.desc}
                            </p>

                            {/* Decorative elements */}
                            <div className="absolute bottom-4 right-4 text-[10px] text-gray-700 font-mono">
                                SYS.LOG.00{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 text-center border-t border-gray-800 pt-10"
                >
                    <p className="text-xl md:text-2xl font-light italic text-gray-400">
                        "在混乱中建立秩序，用代码重构现实。"
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-75" />
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-150" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
