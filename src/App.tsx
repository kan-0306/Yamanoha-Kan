import { motion, useScroll, useTransform } from 'motion/react';
import { 
  HardHat, 
  PlayCircle, 
  ArrowRight, 
  CheckCircle2, 
  Minus, 
  Focus, 
  ShieldCheck, 
  Brain, 
  Eye, 
  Landmark, 
  Video, 
  Plus,
  Building2,
  Menu
} from 'lucide-react';
import { cn } from './lib/utils';
import { useEffect, useState } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden">
      {/* TopAppBar */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-8 py-5 max-w-full border-b",
        isScrolled ? "bg-primary/95 backdrop-blur-xl border-white/10 py-4" : "bg-transparent border-transparent"
      )}>
        <div className="flex items-center gap-3">
          <Building2 className="text-secondary w-6 h-6" />
          <span className="text-lg font-bold tracking-ultra-wide text-white font-headline">AI recruit</span>
        </div>
        <div className="hidden md:flex items-center gap-8 mr-8">
          <a href="#" className="text-white/70 hover:text-white text-[10px] font-headline tracking-ultra-wide uppercase font-bold transition-colors">Expertise</a>
          <a href="#" className="text-white/70 hover:text-white text-[10px] font-headline tracking-ultra-wide uppercase font-bold transition-colors">Strategy</a>
          <a href="#" className="text-white/70 hover:text-white text-[10px] font-headline tracking-ultra-wide uppercase font-bold transition-colors">Projects</a>
        </div>
        <button className="bg-secondary text-on-secondary font-headline tracking-ultra-wide uppercase text-[10px] font-bold px-6 py-2.5 rounded-sm transition-all active:scale-[0.98] hover:bg-secondary/90">
          資料はこちら
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[100dvh] flex flex-col justify-center items-center text-center px-8 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            alt="POV Construction" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoSXjV2t_NhqZeBiRvpze7gm-6WKlTO_E8nhq5SaDeSaGzYm0c0R3SYksAJWUEw_zx_Hrxta9A0L7VlOllpgJDMAiLUqq20eiZH9Ipne4UOpZT5rU8hXKOVTFjMnHVre44_olZEfNEJIn0IVBQKAvCItAiSc8zhIjATr4LwFFW-JIkaklaRPTuI-p5gy4-Rgt9cE6s9hIG7G6RpadzExkoHc1Ot7xBjWEjT9lAjGzzn9ub5fflGodsxIrVDheSg6urpwxqXQTkDA" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-10 inline-block px-6 py-1.5 border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
            <span className="text-secondary font-headline text-[10px] tracking-ultra-wide font-bold uppercase">Redefining Architectural Recruitment</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight mb-8 tracking-tight">
            「条件」ではなく<br />「熱狂」で勝て
          </h1>
          <div className="max-w-md mx-auto mb-12">
            <p className="text-white/80 text-sm leading-relaxed tracking-premium border-l border-secondary/50 pl-6 text-left inline-block">
              現場のリアルを「体験」に変える、<br />次世代の動画リクルーティング。飾らない視点が、最高のマッチングを生む。
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-transparent border border-white/20 hover:border-secondary hover:text-secondary text-white font-headline text-xs tracking-ultra-wide transition-all uppercase group">
              Discover Our POV Strategy
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* What is POV? Section */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeIn}
          >
            <h2 className="font-headline text-[10px] tracking-ultra-wide text-secondary font-bold uppercase mb-4">Definition</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-6">POV（一人称視点）とは？</p>
            <p className="text-on-surface/70 text-sm font-medium tracking-premium">「他人の体験を、自分の体験として擬似的に味わえる視点」です。</p>
          </motion.div>

          <div className="mb-24">
            <h3 className="text-center font-headline text-[9px] tracking-ultra-wide text-outline font-bold uppercase mb-12">なぜ今、注目されているのか?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Focus, title: "圧倒的な没入感", desc: "視聴者は「見ている」のではなく、その場に「いる」感覚になります。" },
                { icon: ShieldCheck, title: "情報の信頼性", desc: "演出された綺麗すぎる映像よりも、等身大の「リアル」が伝わります。" },
                { icon: Brain, title: "心理的ハードルの低下", desc: "働く姿を自分の視界で見ることで、未知の環境への不安が解消されます。" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-8 border border-outline-variant/30 flex flex-col items-start hover:shadow-xl transition-shadow"
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                >
                  <item.icon className="text-secondary mb-6 w-8 h-8" />
                  <h4 className="font-bold text-primary mb-4 tracking-premium">{item.title}</h4>
                  <p className="text-on-surface/60 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Example 01", url: "https://www.tiktok.com/@bricktricks/video/7234082448303279387" },
              { label: "Example 02", url: "https://www.tiktok.com/@iwahayevi07/video/7594419034766986504" },
              { label: "Example 03", url: "https://www.tiktok.com/@kousei05808/video/7598751402587901201" }
            ].map((item, i) => (
              <motion.a 
                key={i}
                className="flex items-center justify-between p-6 bg-primary text-white hover:bg-primary/95 transition-all group"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <PlayCircle className="text-secondary w-5 h-5" />
                  <span className="text-[10px] font-headline tracking-ultra-wide uppercase font-bold">{item.label}</span>
                </div>
                <ArrowRight className="text-xs group-hover:translate-x-1 transition-transform w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Section */}
      <section className="py-32 px-6 bg-surface-container-lowest">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeIn}
          >
            <h2 className="font-headline text-[10px] tracking-ultra-wide text-secondary font-bold uppercase mb-4">Comparison Strategy</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary">文字より"動画"。リアルを視る新しい求人体験。</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Traditional Recruitment Card */}
            <motion.div 
              className="bg-surface p-10 border border-outline-variant/30 flex flex-col"
              {...fadeIn}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <h3 className="text-lg font-bold font-headline text-primary tracking-premium">従来の求人広告</h3>
              </div>
              <div className="flex-grow space-y-10">
                <div>
                  <p className="text-[9px] uppercase tracking-ultra-wide text-outline font-bold mb-6">Structure & Content</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-xs text-on-surface/70 font-medium">
                      <Minus className="w-3 h-3" /> 文字だけのシンプルな構成
                    </li>
                    <li className="flex items-center gap-3 text-xs text-on-surface/70 font-medium">
                      <Minus className="w-3 h-3" /> 業務内容・給与・福利厚生
                    </li>
                  </ul>
                </div>
                <div className="pt-10 border-t border-outline-variant/30">
                  <p className="text-[9px] uppercase tracking-ultra-wide text-primary/50 font-bold mb-6">Risks & Challenges</p>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      "高額な掲載費が「掛け捨て」になるリスクを徹底排除。",
                      "入社後のイメージギャップによる早期離職を未然に防ぐ。",
                      "給与や知名度だけで比較される絶望的な競争から脱却。",
                      "運用・改善が困難であり他社との差別化ができない。"
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-[10px] font-headline font-bold text-outline">0{i+1}</span>
                        <p className="text-xs text-on-surface/60 leading-relaxed line-clamp-2-exact">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* POV Video Recruitment Card */}
            <motion.div 
              className="bg-primary p-10 shadow-2xl flex flex-col relative overflow-hidden"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -right-8 -top-8 opacity-5">
                <Video className="w-[160px] h-[160px] text-white" />
              </div>
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <h3 className="text-lg font-bold font-headline text-white tracking-premium">POV業務理解型採用</h3>
              </div>
              <div className="flex-grow space-y-10 relative z-10">
                <div>
                  <p className="text-[9px] uppercase tracking-ultra-wide text-secondary font-bold mb-6">Strategic Content</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-xs text-white font-medium">
                      <CheckCircle2 className="w-3 h-3 text-secondary" /> 動画型の社内のリアルを発信
                    </li>
                    <li className="flex items-center gap-3 text-xs text-white font-medium">
                      <CheckCircle2 className="w-3 h-3 text-secondary" /> 業務内容の9割を可視化
                    </li>
                  </ul>
                </div>
                <div className="pt-10 border-t border-white/10">
                  <p className="text-[9px] uppercase tracking-ultra-wide text-secondary font-bold mb-6">Competitive Benefits</p>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      "「社風・雰囲気」の可視化によるミスマッチ防止を徹底する。",
                      "拡散性の高さ：いい会社ほど自律的に認知が拡大する。",
                      "情報の「透明性」を武器にして圧倒的な信頼感を構築する。",
                      "低コストでのPDCA運用により即時の改善対応を可能にする。"
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-[10px] font-headline font-bold text-secondary">0{i+1}</span>
                        <p className="text-xs text-slate-200 leading-relaxed line-clamp-2-exact">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points (Three Keys) */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { num: "01", title: "応募ゼロの壁", desc: "高額な掲載費が「掛け捨て」になるリスクを徹底排除。" },
              { num: "02", title: "深刻なミスマッチ", desc: "入社後のイメージギャップによる早期離職を未然に防ぐ。", offset: "md:mt-12" },
              { num: "03", title: "価値の無効化", desc: "給与や知名度だけで比較される絶望的な競争から脱却。", offset: "md:mt-24" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={item.offset}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-7xl font-headline font-extralight text-outline-variant mb-6 opacity-40">{item.num}</div>
                <h3 className="text-xl font-bold mb-6 tracking-premium">{item.title}</h3>
                <p className="text-on-surface/60 text-xs leading-relaxed line-clamp-2-exact">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-40 px-8 relative overflow-hidden bg-primary">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="relative z-10 max-w-screen-md mx-auto">
          <motion.h2 
            className="font-headline text-[10px] tracking-ultra-wide text-secondary font-bold uppercase mb-10"
            {...fadeIn}
          >
            The Solution
          </motion.h2>
          <div className="space-y-16">
            <motion.div 
              className="border-l-2 border-secondary/30 pl-10"
              {...fadeIn}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">POV（一人称視点）という<br />採用の新基準。</h3>
              <p className="text-slate-400 text-sm leading-relaxed tracking-premium mb-10">
                私たちは単なる動画制作会社ではありません。現場の空気を、職人の視線を、そして建築の鼓動をデジタル資産へと変換する「価値の翻訳者」です。
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Eye, label: "VISUALIZE 90%", desc: "日本の建設業界の魅力を、一人ひとりの眼差しから再定義。" },
                { icon: Landmark, label: "LONG-TERM ASSET", desc: "掲載して終わりではない、半永久的な採用資産の構築。" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/5 backdrop-blur-md p-10 border border-white/5 hover:border-secondary/30 transition-all"
                  {...fadeIn}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <item.icon className="text-secondary w-5 h-5" />
                    <span className="font-headline font-bold text-white tracking-ultra-wide text-[10px]">{item.label}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
          <motion.h2 
            className="font-headline text-[10px] tracking-ultra-wide text-primary/50 font-bold uppercase mb-16"
            {...fadeIn}
          >
            Track Record
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="font-headline text-8xl font-bold text-primary tracking-tighter mb-4">282<span className="text-xl ml-2 font-medium">件</span></div>
              <p className="text-[10px] font-bold tracking-ultra-wide text-outline">TOTAL APPLICATIONS</p>
            </motion.div>
            <div className="w-12 h-px bg-outline-variant md:w-px md:h-16"></div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="font-headline text-8xl font-bold text-primary tracking-tighter mb-4">4.2<span className="text-xl ml-2 font-medium">x</span></div>
              <p className="text-[10px] font-bold tracking-ultra-wide text-outline">CONVERSION LIFT</p>
            </motion.div>
          </div>
          <motion.div 
            className="mt-20 max-w-xl"
            {...fadeIn}
          >
            <p className="text-on-surface/70 text-sm italic leading-relaxed font-medium">
              「条件ではなく、この現場で働きたいという熱量の高い応募が増えた。」<br />
              <span className="not-italic text-[10px] text-outline mt-4 block tracking-premium">— 大手ゼネコン採用担当者</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-headline text-[10px] tracking-ultra-wide text-secondary font-bold uppercase mb-4">The Process</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary">最高の一枚を、現場から。</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { num: "01", title: "Shoot", desc: "プロフェッショナルによるPOV撮影。現場の日常を「非日常」の美しさへ。" },
              { num: "02", title: "Edit", desc: "建築の構造美を際立たせる、洗練されたエディトリアル・編集。" },
              { num: "03", title: "Share", desc: "最適なプラットフォームでの配信。潜在層へダイレクトに情報を届ける。" },
              { num: "04", title: "Recruit", desc: "共感ベースの応募。質の高いマッチングと早期離職を防ぐ定着率の向上を実現。" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-10 p-10 bg-white border border-outline-variant/20 transition-all hover:border-secondary/50 group"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-headline font-light text-5xl text-primary/10 group-hover:text-secondary/20 transition-colors">{step.num}</span>
                <div>
                  <h4 className="font-bold text-[11px] tracking-ultra-wide mb-2 uppercase text-primary">{step.title}</h4>
                  <p className="text-xs text-on-surface/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Document Request Section */}
      <section className="py-32 px-8 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-screen-lg mx-auto">
          <motion.div 
            className="bg-primary p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
            {...fadeIn}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <div className="relative z-10 flex-1">
              <h2 className="font-headline text-secondary text-[10px] tracking-ultra-wide font-bold uppercase mb-6">Service Overview</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                手法から事例、価格まで。<br />
                全てがわかる詳細資料。
              </h3>
              <ul className="space-y-4 mb-10">
                {[
                  "大手ゼネコンから地元工務店までの成功事例",
                  "撮影から配信までの具体的な価格・プラン",
                  "最短3週間で完了する導入・運用フロー"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-xs">
                    <CheckCircle2 className="text-secondary w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-secondary text-on-secondary font-headline font-bold tracking-ultra-wide text-[11px] rounded-sm shadow-[0_10px_40px_-10px_rgba(255,215,0,0.4)] transition-transform active:scale-95 uppercase hover:bg-secondary/90">
                【無料】資料をダウンロードする
              </button>
            </div>
            <div className="relative z-10 w-full md:w-1/3 flex justify-center">
              <div className="relative aspect-[3/4] w-48 bg-white/10 backdrop-blur-sm border border-white/20 p-4 shadow-2xl rotate-3">
                <div className="w-full h-full border border-white/10 bg-white/5 flex flex-col justify-end p-4">
                  <p className="text-[8px] text-secondary font-bold tracking-widest uppercase">CONSTRUCT ELITE</p>
                  <p className="text-[10px] text-white font-bold leading-tight">SERVICE GUIDE 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing & FAQ */}
      <section className="py-40 px-8 bg-primary relative overflow-hidden">
        <div className="max-w-xl mx-auto text-center mb-32">
          <motion.h2 
            className="text-4xl font-headline font-bold text-white mb-10 leading-tight tracking-tight"
            {...fadeIn}
          >
            新しい採用の形。
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-sm leading-relaxed tracking-premium mb-12"
            {...fadeIn}
          >
            私たちは、日本の建設業界の魅力を、<br />一人ひとりの眼差しから再定義します。
          </motion.p>
          <motion.button 
            className="w-full py-5 bg-secondary text-on-secondary font-headline font-bold tracking-ultra-wide text-[10px] rounded-sm shadow-2xl transition-transform active:scale-95 uppercase hover:bg-secondary/90"
            {...fadeIn}
          >
            Free Consultation Now
          </motion.button>
        </div>
        
        <div className="max-w-xl mx-auto space-y-10">
          {[
            { q: "費用感について知りたいです。", a: "建築の規模や撮影日数に応じた柔軟なプランをご用意しています。まずは無料診断にて最適なコスト感をご提案します。" },
            { q: "撮影による現場への支障は？", a: "最小限の機材と人員で、安全第一に撮影を行います。日常の業務を止めることなく、自然な姿を記録します。" }
          ].map((faq, i) => (
            <motion.div 
              key={i} 
              className="border-b border-white/5 pb-8"
              {...fadeIn}
            >
              <h4 className="text-white text-xs font-bold mb-4 flex justify-between items-center tracking-premium cursor-pointer group">
                {faq.q}
                <Plus className="text-secondary w-3 h-3 group-hover:rotate-90 transition-transform" />
              </h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/5 px-12 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
        <div className="space-y-8">
          <div className="text-sm font-headline text-secondary tracking-ultra-wide font-bold">CONSTRUCT ELITE</div>
          <p className="font-body text-[10px] tracking-premium leading-relaxed text-slate-500">
            専門特化型建築採用ブランディング。<br />映像と視覚戦略による、次世代のタレント獲得支援。
          </p>
        </div>
        <div className="space-y-6">
          <div className="text-[9px] uppercase tracking-ultra-wide text-white font-bold">Navigation</div>
          <ul className="space-y-4">
            <li><a className="font-body text-[10px] tracking-premium text-slate-500 hover:text-white transition-all" href="#">Expertise Strategy</a></li>
            <li><a className="font-body text-[10px] tracking-premium text-slate-500 hover:text-white transition-all" href="#">Visual Projects</a></li>
            <li><a className="font-body text-[10px] tracking-premium text-slate-500 hover:text-white transition-all" href="#">Corporate Privacy</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="text-[9px] uppercase tracking-ultra-wide text-white font-bold">Contact</div>
          <p className="font-body text-[10px] tracking-premium text-slate-500">
            TOKYO HEADQUARTER<br />
            <span className="text-slate-600">Minato-ku, Azabudai 1-2-3</span>
          </p>
        </div>
        <div className="md:col-span-2 lg:col-span-1 border-t border-white/5 pt-12 lg:border-t-0 lg:pt-0">
          <p className="font-body text-[9px] tracking-ultra-wide leading-loose text-slate-600 uppercase">
            © 2024 CONSTRUCT ELITE.<br />ARCHITECTURAL RECRUITMENT ASSETS.
          </p>
        </div>
      </footer>
    </div>
  );
}
