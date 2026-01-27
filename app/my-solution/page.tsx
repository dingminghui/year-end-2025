"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight, Server, ShieldCheck, FileWarning, GitMerge } from "lucide-react";

export default function SolutionPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12 flex flex-col items-center justify-center">
            <header className="mb-12 text-center max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                        复盘与展望 2025 &rarr; 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        从“无序”到“契约”
                    </h1>
                    <p className="text-slate-600 text-lg">
                        针对前后端协作痛点的复盘与提案
                    </p>
                </motion.div>
            </header>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
                {/* Left Card: Confusion */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex-1 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:bg-red-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 text-red-500">
                            <FileWarning className="w-8 h-8" />
                            <h2 className="text-2xl font-bold">2025 之惑</h2>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-800 mb-4">后端交付是个“黑盒”</h3>
                        <p className="text-slate-500 leading-relaxed mb-8">
                            接口文档常年“仅供参考”，字段定义随心情变更。前端工程师被迫沦为“数据清洗工”和“逻辑兜底人”，消耗大量精力在防御性编程上，而非业务价值创造。
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <span>文档与代码不一致</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <span>无通知的 Breaking Change</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <span>联调成本极高</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Arrow Connector */}
                <div className="hidden md:flex flex-col justify-center items-center text-slate-300">
                    <ArrowRight className="w-12 h-12" />
                </div>

                {/* Right Card: Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex-1 bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-white"
                >
                    <div className="absolute top-0 right-0 p-32 bg-blue-900/20 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 text-blue-400">
                            <ShieldCheck className="w-8 h-8" />
                            <h2 className="text-2xl font-bold">2026 之解</h2>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4">AI 契约守门员</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            拒绝人治，走向智治。引入 AI 作为流水线的“守门员”，强制执行契约测试。让工具的冷酷来弥补人性的懒惰，确保交付质量。
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                                    <Server className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-100">自动化原本 (Single Source)</h4>
                                    <p className="text-sm text-slate-400">强制 Swagger/YAPI 为唯一真理，代码自动生成。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1">
                                    <GitMerge className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-100">流水线卡点 (CI Gatekeeper)</h4>
                                    <p className="text-sm text-slate-400">CI 阶段 AI 自动比对变更，发现 Breaking Change 阻断合并。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
