"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Coffee, Code, AlertTriangle, CheckCircle, FileText, Users, Eye, Anchor } from "lucide-react";

export default function StoryPage() {
    const scenes = [
        {
            icon: <Users className="w-6 h-6 text-red-500" />,
            title: "第一次带人",
            time: "扬子江项目 · 初期",
            content: "在带教扬子江项目时，我最初认为管理就是“下发任务”。以为只要把指令传达到位，就可以等待成果产出。这是我作为管理者的第一个思维盲区。",
            highlight: false,
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
            title: "逻辑崩塌与被掩埋",
            time: "发展阶段",
            content: "由于缺乏对执行层思维逻辑的深度同步，成员的理解偏差导致开发质量严重不达标。大量逻辑漏洞被掩埋在前端表现层之下，导致流程受阻，甚至危及项目正常发版。",
            highlight: true,
        },
        {
            icon: <Eye className="w-6 h-6 text-cyan-400" />,
            title: "开启逻辑穿透",
            time: "转折时刻",
            content: "我立即调整策略，由单纯的任务派发转为深度“逻辑复盘”。我开始透视每一行代码背后的思考路径，在思维层面上与团队达成高度对齐，消弭信息差。",
            highlight: true,
        },
        {
            icon: <Anchor className="w-6 h-6 text-green-500" />,
            title: "“悲观者永远正确”",
            time: "深刻领悟",
            content: "这次经历让我明白，管理不仅是知道他们在做什么，更要透视他们的思维逻辑。正如那句话所说：“悲观者永远正确”。只有基于深度验证而非盲目乐观，才能确保交付结果的稳固。",
            highlight: false,
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-900/50 pb-32">
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-black z-50"></div>

            <header id="highlights" className="h-[50vh] md:h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/80 to-neutral-950"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center px-4"
                >
                    <div className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4">LEADER LOG // 2025</div>
                    <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase text-center">
                        扬子江<br />项目复盘
                    </h1>
                    <p className="text-neutral-500 text-lg max-w-lg mx-auto">从“指令分发”到“深度护航”的转变</p>
                </motion.div>
            </header>

            <div className="max-w-3xl mx-auto px-6 relative">
                <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-neutral-800 transform md:-translate-x-1/2 ml-[3px] md:ml-0"></div>

                {scenes.map((scene, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`relative mb-16 md:mb-24 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-4 md:gap-0 items-start md:items-center`}
                    >
                        <div className="absolute left-6 md:left-[50%] transform -translate-x-1/2 md:-translate-x-1/2 top-0 md:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 z-10">
                            {scene.icon}
                        </div>

                        <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-20 md:text-left' : 'md:pr-20 md:text-right'} w-full`}>
                            <div className="font-mono text-xs text-red-500 mb-2">{scene.time}</div>
                            <h3 className={`text-2xl font-bold mb-3 ${scene.highlight ? 'text-white' : 'text-neutral-400'}`}>
                                {scene.title}
                            </h3>
                            <p className={`text-lg leading-relaxed ${scene.highlight ? 'text-neutral-200 font-medium' : 'text-neutral-500'}`}>
                                {scene.content}
                            </p>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center py-20 relative z-10 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-8 backdrop-blur sm:mx-10"
                >
                    <h4 className="text-xl text-neutral-300 font-bold mb-4">RE: 管理思考</h4>
                    <p className="text-neutral-400">
                        “永远不要相信自己的判断是正确的。开发任务不是布置下去就结束了，而是你要真正知道他们在做什么，他们的思维逻辑是什么。”
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
