import Link from "next/link";
import { User, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  const links = [
    {
      href: "/my-keywords",
      title: "关于我：四维密码",
      desc: "2025 核心关键词与年度格言",
      icon: <User className="w-6 h-6" />,
      color: "bg-cyan-500",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      href: "/my-story",
      title: "年度时刻：武汉突围",
      desc: "一段关于代码、意志与填坑的故事",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-red-500",
      gradient: "from-red-500 to-orange-600",
    },
    {
      href: "/my-solution",
      title: "困惑解法：AI 守门员",
      desc: "针对后端交付质量的破局之道",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-neutral-900 mb-4 tracking-tight">
            2025 YEAR-END SUMMARY
          </h1>
          <p className="text-neutral-500 text-lg">
            Frontend Developer Review // Ding Minghui
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 p-6 flex flex-col justify-between h-64"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${link.gradient}`}></div>
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${link.gradient} opacity-5 group-hover:opacity-10 rounded-full transition-opacity transform group-hover:scale-110`}></div>

              <div>
                <div className={`${link.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h2 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-black">{link.title}</h2>
                <p className="text-neutral-500 text-sm leading-relaxed">{link.desc}</p>
              </div>

              <div className="flex items-center text-sm font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors mt-4">
                View Page <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
