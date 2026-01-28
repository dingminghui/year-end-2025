"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight, Server, ShieldCheck, FileWarning, GitMerge, Users } from "lucide-react";

export default function SolutionPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-12 flex flex-col items-center justify-center">
            <header className="mb-12 text-center max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                        思考与展望 2025 &rarr; 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        从“无序”到“规范”
                    </h1>
                    <p className="text-slate-600 text-lg">
                        协作痛点复盘与改进提案
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
                            <h2 className="text-2xl font-bold">当前的痛点</h2>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-800 mb-4">接口交付标准不统一</h3>
                        <p className="text-slate-500 leading-relaxed mb-8">
                            文档维护力度不足，常出现文档与代码不一致。前端需花费大量精力确认字段和防御性编码，影响整体交付效率。
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <span>文档定义滞后，依赖口头沟通</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <span>变更缺乏通知机制，联调成本高</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <span>重复的数据清洗工作</span>
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

                        <h3 className="text-3xl font-bold text-white mb-4">引入自动化契约测试</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            通过工具化手段保障“文档即代码”。建立流程卡点，确保接口变更可被感知、可被校验，降低沟通成本。
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                                    <Server className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-100">自动化原本 (单一信源)</h4>
                                    <p className="text-sm text-slate-400">强制 Swagger/Apifox 为唯一真理，代码自动生成。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-100">思维同步 (逻辑护航)</h4>
                                    <p className="text-sm text-slate-400">在开发初期进行深度的逻辑对齐，确保代码实现与业务需求高度一致。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
