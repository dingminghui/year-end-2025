"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Coffee, Code, AlertTriangle, CheckCircle } from "lucide-react";

export default function StoryPage() {
    const scenes = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "坐标：武汉",
            time: "2025.未知",
            content: "不是樱花烂漫的季节，而是封闭开发的寒冬。为了那个传说中的“重点项目”，我们被空投到了这里。没人知道即将面对什么，只知道“必须交付”。",
            highlight: false,
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
            title: "深坑开局",
            time: "第 01 天",
            content: "代码拉下来的那一刻，心凉了半截。历史包袱重得像山，后端接口还在“薛定谔的状态”——文档仅供参考，报错全靠猜。这不是开发，这是考古加排雷。",
            highlight: true,
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "极限生存",
            time: "第 07 天",
            content: "生理时钟彻底紊乱。“抬起手就是写代码，张嘴就是吃饭，躺着就是睡觉。” 甚至梦里都在此时调试 undefined 的报错。睁眼闭眼，只有屏幕的幽光。",
            highlight: false,
        },
        {
            icon: <Code className="w-6 h-6 text-cyan-400" />,
            title: "觉醒时刻",
            time: "关键节点",
            content: "抱怨没有意义。愤怒过后，我进入了一种奇怪的平静——“自动驾驶模式”。既然队友靠不住，那就自己兜底。用 Mock 数据隔离依赖，用 AI 快速生成类型定义，每一个字符都是对混乱的反击。",
            highlight: true,
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            title: "突围成功",
            time: "第 30 天",
            content: "上线的那一刻，看着平稳运行的监控大盘，没有狂喜，只有一种虚脱后的释然。这不是一个人的胜利，是意志力对混乱的胜利。我们从泥潭里，跳出了一支舞。",
            highlight: false,
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-900/50 pb-32">
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-black z-50"></div>

            <header className="h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/80 to-neutral-950"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center px-4"
                >
                    <div className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4">绝密档案 // 2025</div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
                        武汉<br />突围战
                    </h1>
                    <p className="text-neutral-500 text-lg max-w-lg mx-auto">一场代码与意志的较量</p>
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
                        className={`relative mb-24 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0 items-start md:items-center`}
                    >
                        {/* Time/Icon Marker */}
                        <div className="absolute left-6 md:left-[50%] transform -translate-x-1/2 md:-translate-x-1/2 top-0 md:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 z-10">
                            {scene.icon}
                        </div>

                        {/* Content */}
                        <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-20 md:text-left' : 'md:pr-20 md:text-right'}`}>
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
                    <h4 className="text-xl text-neutral-300 font-bold mb-4">RE: 思考</h4>
                    <p className="text-neutral-400">
                        “与其抱怨环境，不如锻炼自己在泥潭中跳舞的能力。但明年，我们一定要把舞台修好。”
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
