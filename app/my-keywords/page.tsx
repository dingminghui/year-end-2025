"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Flame, Cpu, BookOpen } from "lucide-react";

export default function KeywordsPage() {
    const keywords = [
        {
            title: "高效协同",
            subtitle: "跨团队 · 交付保障",
            icon: <Shield className="w-8 h-8 text-cyan-400" />,
            desc: "与UI、产品、开发、业务和医学紧密合作，保证项目交付，确保最终产出结果。在高压环境下通过系统性策略思维驱动质量共识。",
            color: "border-cyan-500 shadow-cyan-500/50",
            text: "text-cyan-400",
            bg: "bg-gray-900/80",
        },
        {
            title: "人机协作",
            subtitle: "Cursor · 逻辑提效",
            icon: <Cpu className="w-8 h-8 text-purple-400" />,
            desc: "深度使用 Cursor 与 OpenCode 赋能开发。在百济项目中，通过与 AI 持续交互迭代，快速完成 2D 物理模型标签动画的逻辑构建与优化，实现高质产出。",
            color: "border-purple-500 shadow-purple-500/50",
            text: "text-purple-400",
            bg: "bg-gray-900/80",
        },
        {
            title: "解题思维",
            subtitle: "简约 · 架构",
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            desc: "坚持“思考重于编码”。在处理复杂需求时，先梳理底层逻辑，倾向于通过架构重构而非盲目堆砌代码来降低系统复杂度，从源头提升长期效益。",
            color: "border-yellow-500 shadow-yellow-500/50",
            text: "text-yellow-400",
            bg: "bg-gray-900/80",
        },
        {
            title: "项目经历",
            subtitle: "高光时刻 · 复盘",
            icon: <BookOpen className="w-8 h-8 text-red-400" />,
            desc: "在扬子江等核心项目中，通过逻辑穿透与深度复盘，解决复杂交付难题，实现技术与管理的双重突破。",
            color: "border-red-500 shadow-red-500/50",
            text: "text-red-400",
            bg: "bg-gray-900/80",
            href: "/my-story#highlights",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-gray-100 p-4 md:p-12 font-sans overflow-hidden relative selection:bg-cyan-500/30">
            {/* Background Gradients - The Soul of Cyberpunk */}
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
                        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
                            2025：务实与进化
                        </h1>
                        <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[0.2em]">前端开发工程师年度效能报告</p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {keywords.map((item, index) => {
                        const CardWrapper = item.href ? "a" : "div";
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ scale: 1.02, rotate: 0.5 }}
                                className={`relative bg-gray-900/80 backdrop-blur-sm border-l-4 p-6 md:p-8 rounded-r-xl border-t border-r border-b border-gray-800 ${item.color} shadow-lg group hover:shadow-xl transition-all duration-300 ${item.href ? 'cursor-pointer' : ''}`}
                            >
                                <CardWrapper href={item.href} className="block h-full">
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
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 text-center border-t border-gray-800 pt-10"
                >
                    <p className="text-xl md:text-2xl font-light italic text-gray-400">
                        "能自动绝不手动，每一行代码都不留坑。"
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
