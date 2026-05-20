// @ts-nocheck
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  Plus,
  Clock3,
  Flame,
  Gift,
  LockKeyhole,
  MessageCircle,
  MousePointer2,
  Orbit,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const TELEGRAM_URL = "https://t.me/TM_vladosss";
const SPEC_PAY_URL = "https://t.me/TM_vladosss";
const PROSPEC_PAY_URL = "https://t.me/TM_vladosss";

const Section = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 46 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    className={`relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </motion.section>
);

const Badge = ({ children, className = "" }) => (
  <div className={`inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(0,194,255,0.12)] backdrop-blur-xl ${className}`}>
    <Sparkles className="h-4 w-4 text-cyan-300" />
    {children}
  </div>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_60px_rgba(0,194,255,0.16)] ${className}`}
  >
    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,194,255,0.18), transparent 42%)" }} />
    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/0 blur-3xl transition duration-500 group-hover:bg-cyan-300/14" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const Particles = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 52 }).map((_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: (i % 3) + 1,
        delay: (i % 9) * 0.35,
        duration: 5 + (i % 6),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_18px_rgba(0,194,255,0.45)]"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -26, 0], opacity: [0.2, 0.9, 0.2], scale: [1, 1.6, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const MagneticButton = ({ href, children, variant = "primary", className = "" }) => {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#0A3CFF] via-[#00C2FF] to-[#FF2E4D] text-white shadow-[0_0_44px_rgba(0,194,255,0.35)] hover:shadow-[0_0_70px_rgba(255,46,77,0.42)]"
      : "border border-white/15 bg-white/[0.06] text-white hover:border-cyan-300/45 hover:bg-white/[0.1]";

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-black transition duration-300 hover:-translate-y-1 ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
    </a>
  );
};

function useCountdown() {
  const [target, setTarget] = useState<number | null>(null);
  const [left, setLeft] = useState(3 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const saved = window.localStorage.getItem("tm_deadline");
    const deadline = saved
      ? Number(saved)
      : Date.now() + 3 * 24 * 60 * 60 * 1000;

    if (!saved) {
      window.localStorage.setItem("tm_deadline", String(deadline));
    }

    setTarget(deadline);
  }, []);

  useEffect(() => {
    if (!target) return;

    const t = setInterval(() => {
      setLeft(Math.max(0, target - Date.now()));
    }, 1000);

    return () => clearInterval(t);
  }, [target]);

  const total = Math.floor(left / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return { days, hours, minutes, seconds };
}

const Countdown = () => {
  const c = useCountdown();
  const items = [
    ["дні", c.days],
    ["год", c.hours],
    ["хв", c.minutes],
    ["сек", c.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-cyan-300/15 bg-[#050816]/70 p-3 text-center shadow-[inset_0_0_26px_rgba(0,194,255,0.08)] backdrop-blur-xl sm:p-4">
          <div className="font-mono text-2xl font-black text-white sm:text-4xl">{String(value).padStart(2, "0")}</div>
          <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</div>
        </div>
      ))}
    </div>
  );
};

const DashboardVisual = () => {
  const metrics = [
    ["Spend", "$1,240", "+18%"],
    ["Profit", "$2,180", "+$940"],
    ["ROI", "76%", "active"],
    ["CTR", "3.8%", "+0.9%"],
    ["CPA", "$7.40", "stable"],
    ["Leads", "294", "+61"],
  ];

  const campaigns = [
    ["FB / Gamble / PL", "$420", "$738", "75%", "ON"],
    ["FB / Crypto / CZ", "$310", "$515", "66%", "ON"],
    ["FB / Nutra / DE", "$260", "$418", "61%", "ON"],
  ];

  return (
    <Section id="dashboard" className="pt-6">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge>Real arbitration feeling</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Побач, як виглядає
            <span className="block bg-gradient-to-r from-cyan-200 to-[#00C2FF] bg-clip-text text-transparent">
              реальна логіка арбітражу
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            В курсі ти розбираєш не теорію, а цифри: spend, profit, ROI, CTR, CPA, зв’язки, кампанії та рішення - лити далі чи стопати.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-[#071024]/80 p-4 shadow-[0_0_120px_rgba(0,194,255,0.18)] backdrop-blur-2xl sm:p-6"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#FF2E4D]/12 blur-3xl" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Traffic BM Dashboard</div>
                <div className="mt-1 text-xs text-slate-400">Campaign performance / today</div>
              </div>
              <motion.div
                animate={{ opacity: [1, 0.45, 1], boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 18px rgba(16,185,129,.45)", "0 0 0px rgba(16,185,129,0)"] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-300"
              >
                LIVE
              </motion.div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map(([label, value, sub]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-[0_0_25px_rgba(0,194,255,0.05)] transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_0_35px_rgba(0,194,255,0.12)]"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                  <motion.div
                    animate={{ opacity: [0.92, 1, 0.92] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="mt-2 text-2xl font-black text-white"
                  >
                    {value}
                  </motion.div>
                  <div className={`mt-1 flex items-center gap-1 text-xs font-bold ${String(sub).includes("-") ? "text-[#FF8FA0]" : "text-emerald-300"}`}>
                    {!String(sub).includes("-") && <TrendingUp className="h-3.5 w-3.5" />}
                    {sub}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-[#050816]/70 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="font-black text-white">Profit curve</div>
                <div className="text-sm font-bold text-cyan-300">+$940 net</div>
              </div>
              <svg viewBox="0 0 520 180" className="h-44 w-full overflow-visible drop-shadow-[0_0_18px_rgba(0,194,255,0.25)]">
                <defs>
                  <linearGradient id="profitGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#0A3CFF" />
                    <stop offset="55%" stopColor="#00C2FF" />
                    <stop offset="100%" stopColor="#FF2E4D" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[30, 70, 110, 150].map((y) => (
                  <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />
                ))}
                <path d="M0 150 C45 140 65 118 100 126 C140 138 160 80 205 92 C250 105 270 55 315 62 C365 70 380 38 425 42 C470 46 495 24 520 18 L520 180 L0 180 Z" fill="url(#areaGradient)" />
                <motion.path
                  d="M0 150 C45 140 65 118 100 126 C140 138 160 80 205 92 C250 105 270 55 315 62 C365 70 380 38 425 42 C470 46 495 24 520 18"
                  fill="none"
                  stroke="url(#profitGradient)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease: "easeOut" }}
                />
                {[100, 205, 315, 425, 520].map((x, i) => (
                  <motion.circle
                    key={x}
                    cx={x}
                    cy={[126, 92, 62, 42, 18][i]}
                    r="5"
                    fill="#00C2FF"
                    filter="drop-shadow(0 0 14px rgba(0,194,255,.95))"
                    animate={{ r: [5, 7, 5], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </svg>
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className="grid grid-cols-5 gap-2 border-b border-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
                <div>Campaign</div><div>Spend</div><div>Revenue</div><div>ROI</div><div>Status</div>
              </div>
              {campaigns.map(([name, spend, revenue, roi, status], idx) => (
                <div key={name} className={`grid grid-cols-5 gap-2 px-4 py-3 text-sm text-slate-300 transition-all duration-300 hover:bg-cyan-300/[0.06] ${idx % 2 === 0 ? "bg-white/[0.025]" : "bg-transparent"}`}>
                  <div className="font-bold text-white">{name}</div>
                  <div>{spend}</div>
                  <div>{revenue}</div>
                  <div className={roi.includes("-") ? "font-black text-[#FF8FA0]" : "font-black text-cyan-300 drop-shadow-[0_0_10px_rgba(0,194,255,0.55)]"}>{roi}</div>
                  <div>
                    <span className={`rounded-full px-2 py-1 text-[10px] font-black shadow-[0_0_16px_rgba(16,185,129,0.25)] ${status === "ON" ? "bg-emerald-300/10 text-emerald-300" : "bg-[#FF2E4D]/10 text-[#FF8FA0]"}`}>
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const problems = [
  [Target, "Немає системи", "Немає чіткої системи. Дивишся купу роликів, але не розумієш, з чого почати і в якій послідовності йти."],
  [Flame, "Злив бюджету", "Гроші зливаються на хаос. Перший бюджет летить не на тест, а на неправильний офер, крео, гео або зв’язку."],
  [MousePointer2, "Слабкі креативи", "Слабкі креативи. Є картинка і текст, але немає розуміння, що реально чіпляє аудиторію."],
  [BarChart3, "Не читають цифри", "Ігнорують цифри. Не розуміють CTR, CR, EPC, ROI - приймають рішення на емоціях і «інтуїції»."],
  [LockKeyhole, "Страх технічки", "Страх техніки. Не знаєш, як правильно налаштувати трекер, преленд, клоаку - тому постійно відкладаєш запуск."],
  [Clock3, "Місяці без старту", "Параліч аналізу. Місяцями вчиш і збираєш інформацію, але так і не запускаєш перший нормальний тест."],
];

const modules = [
  ["01", "База арбітражу", "Що таке арбітраж, як влаштована модель, хто платить гроші і де реальний профіт."],
  ["02", "Вертикалі: гембла, нутра, крипта", "Які вертикалі найвигідніші для новачків і чому гембла часто дає швидший результат."],
  ["03", "Пошук та вибір офера", "Як знаходити та перевіряти офери, на що дивитись у CPA-сітці і як не взяти мертвий продукт."],
  ["04", "Сетап і зв’язка", "Офер + гео + креатив + преленд + акаунти - як зібрати все в прибуткову систему."],
  ["05", "Запуск у Facebook", "Покрокова логіка запуску, структура кампанії, базові помилки новачків."],
  ["06", "Аналитика та масштаб", "Як читати статистику, коли зупиняти, коли масштабувати і як не злити профіт."],
];

const calculatorDefaults = {
  budget: 500,
  days: 20,
  roi: 80,
};

const bonuses = [
  [Gift, "Чек-лист першого запуску", "Покроковий план на 7 днів - щоб не злити бюджет."],
  [Zap, "Збірка креативів + розбір", "50+ прикладів робочих креативів для гембли, нутри та крипти."],
  [TrendingUp, "Шаблони аналізу реклами", "Таблиці, які допомагають швидко вирішувати: лити далі чи стоп."],
  [MessageCircle, "Telegram-підтримка", "Можливість ставити питання протягом 30/60 днів."],
];

const sliderSettings = {
  autoplay: true,
  speed: 4500,
};

const liveActivities = [
  "🔥 Владислав щойно забрав ProSpec",
  "⚡ 12 людей дивляться курс зараз",
  "🚀 Максим запустив першу зв’язку",
  "💸 Андрій окупив курс за 3 дні",
  "📈 Зараз 18 людей на сторінці тарифів",
  "🔥 Катерина щойно оформила ProSpec",
];

const testimonials = [
  {
    name: "Андрій",
    result: "+$520 за перший тиждень",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Пройшов курс за 2 дні. Нарешті зрозумів, що таке зв’язка і чому раніше я просто лив бюджет в хаос. Зараз запускаю перші тести вже з чітким планом.",
  },
  {
    name: "Максим",
    result: "Окупив курс за 3 дні",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "Курс без води - це реально. Особливо зайшов блок по оферах і першому запуску. Зрозумів, на що дивитись у статистиці. Вже окупив курс на третьому тесті.",
  },
  {
    name: "Денис",
    result: "+$740 за перший місяць",
    avatar: "https://i.pravatar.cc/150?img=20",
    text: "ProSpec - однозначно вартий. Бонуси і таблиці аналізу зекономили мені купу часу. Тепер не гадаю, а приймаю рішення по цифрах.",
  },
  {
    name: "Владислав",
    result: "Окупив курс за 4 дні",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "До курсу арбітраж здавався магією. Після - чіткою системою. Топ для новачка. Немає зайвої теорії, тільки те, що реально потрібно на старті.",
  },
  {
    name: "Ілля",
    result: "+\$340 на 4-й день",
    avatar: "https://i.pravatar.cc/150?img=18",
    text: "Я не з арбітражу, а після курсу нарешті стало зрозуміло, з чого починати і як аналізувати рекламу. Дуже структуровано.",
  },
  {
    name: "Роман",
    result: "+$290 на перших тестах",
    avatar: "https://i.pravatar.cc/150?img=22",
    text: "Найкраще, що я бачив для новачків. Все зібрано в одну систему. Зрозумів, чому в мене раніше все зливалося.",
  },
  {
    name: "Олег",
    result: "ROI 61% на зв’язці",
    avatar: "https://i.pravatar.cc/150?img=24",
    text: "За 3 дні розібрався в тому, на що раніше витрачав місяці. Особливо сподобались приклади креативів і шаблони.",
  },
  {
    name: "Катерина",
    result: "+$410 за 2 тижні",
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "Дівчатам теж заходить 👍 Думала, що арбітраж - це тільки для хлопців. Курс все розкладає по поличках, без складної термінології.",
  },
  {
    name: "Єгор",
    result: "+870$ за перший місяць",
    avatar: "https://i.pravatar.cc/150?img=41",
    text: "Найбільше допомогло те, що все показано по кроках. До цього постійно плутався в інформації і боявся запускатись.",
  },
  {
    name: "Марк",
    result: "ROI 73% на тестах",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "Після блоку по креативах і аналітиці почав зовсім по-іншому дивитись на рекламу. Вже на перших тестах отримав плюс.",
  },
];

const faqs = [
  ["Я повний новачок. Мені підійде?", "Так. Навіть якщо ти ніколи не запускав рекламу - розберешся з нуля."],
  ["Скільки часу треба на проходження?", "1–3 дні, щоб пройти базу і запустити перші тести."],
  ["Чим ProSpec кращий?", "ProSpec = шаблони, бонуси, підтримка і готові зв’язки для старту."],
  ["Чи потрібен великий бюджет?", "Для старту достатньо мінімального бюджету. Головне - зрозуміти систему запуску."],
  ["Доступ буде одразу?", "Так. Доступ відкривається автоматично одразу після оплати."],
];

const PriceCard = ({ pro = false }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.015 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className={`relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-2xl sm:p-8 ${
      pro
        ? "border-cyan-300/35 bg-gradient-to-b from-cyan-300/[0.16] to-white/[0.055] shadow-[0_0_90px_rgba(0,194,255,0.22)]"
        : "border-white/10 bg-white/[0.055]"
    }`}
  >
    {pro && (
      <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-[#FF2E4D] to-[#7B5EFF] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_40px_rgba(255,46,77,0.35)]">
        Найкращий вибір
      </div>
    )}
    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="relative">
      <h3 className="text-3xl font-black text-white">{pro ? "ProSpec" : "Spec"}</h3>
      <p className="mt-3 min-h-12 text-slate-300">{pro ? "Максимальний старт: повний курс + бонуси + практичні шаблони + підтримка." : "База для швидкого старту. Всі ключові модулі курсу."}</p>
      <div className="mt-8 flex items-end gap-3">
        <span className="text-5xl font-black text-white">{pro ? "879" : "579"}</span>
        <span className="pb-2 text-lg font-bold text-slate-300">грн</span>
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
        <span className="line-through">{pro ? "2690 грн" : "1790 грн"}</span>
        <span className="rounded-full bg-[#FF2E4D]/15 px-3 py-1 font-bold text-[#FF8FA0]">{pro ? "Економія 1811 грн" : "Економія 1211 грн"}</span>
      </div>

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <ul className="space-y-4">
        {[
          ...(pro
            ? [
                "Все з тарифу Spec",
                "Додатковий модуль по креативам",
                "Готові шаблони та чек-листи",
                "Приклади робочих зв’язок",
                "Готові приклади зв’язок з ROI від 40%",
                "Таблиці аналізу реклами",
                "Telegram-підтримка",
                "Доступ 60 днів",
                "Пріоритетні оновлення",
              ]
            : [
                "Доступ до всіх 6 модулів міні-курсу",
                "База арбітражу з нуля",
                "Блок по оферах і зв’язках",
                "Facebook + гембла, нутра, крипта",
                "Базові матеріали",
                "Доступ 30 днів",
              ])
        ].map((item) => (
          <li key={item} className="flex gap-3 text-slate-200">
            <Check className={`mt-0.5 h-5 w-5 flex-none ${pro ? "text-cyan-300" : "text-slate-400"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <MagneticButton href={pro ? PROSPEC_PAY_URL : SPEC_PAY_URL} className="mt-8 w-full" variant={pro ? "primary" : "secondary"}>
        Забрати {pro ? "ProSpec" : "Spec"}
      </MagneticButton>
    </div>
  </motion.div>
);

const FAQItem = ({ q, a, i }) => {
  const [open, setOpen] = useState(i === 0);
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-[1.75rem] border backdrop-blur-xl transition-all duration-300 ${
        open
          ? "border-cyan-300/35 bg-cyan-300/[0.07] shadow-[0_0_25px_rgba(0,194,255,0.12)]"
          : "border-white/10 bg-white/[0.055] hover:border-cyan-300/25 hover:bg-white/[0.075]"
      }`}
    >
      {open && (
        <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-2/3 -translate-x-1/2 rounded-full bg-[#00C2FF]/20 blur-3xl" />
      )}

      <button
        onClick={() => setOpen(!open)}
        className="relative z-10 flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[15px] font-black text-white sm:px-5 sm:py-5 sm:text-base"
      >
        <span>{q}</span>
        <span
          className={`flex h-8 w-8 flex-none items-center justify-center rounded-xl border transition-all duration-300 ${
            open
              ? "rotate-45 border-cyan-300/35 bg-cyan-300/15 text-white shadow-[0_0_22px_rgba(0,194,255,0.25)]"
              : "border-white/10 bg-white/[0.06] text-cyan-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 px-4 pb-5 text-[13px] leading-5 text-slate-300 sm:px-5 sm:pb-6 sm:text-sm"
        >
          {a}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function TrafficMastersLanding() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [slideStep, setSlideStep] = useState(100);
  const [budget, setBudget] = useState(calculatorDefaults.budget);
  const [liveIndex, setLiveIndex] = useState(0);
  const [days, setDays] = useState(calculatorDefaults.days);
  const [roi, setRoi] = useState(calculatorDefaults.roi);

  const dailyProfit = (budget * (roi / 100)).toFixed(0);
  const monthlyProfit = ((budget * (roi / 100)) * days).toFixed(0);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };

    const resize = () => {
      if (window.innerWidth >= 1024) setSlideStep(33.333);
      else if (window.innerWidth >= 768) setSlideStep(50);
      else setSlideStep(100);
    };

    resize();
    window.addEventListener("mousemove", move);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const live = setInterval(() => {
      setLiveIndex((prev) => (prev + 1) % liveActivities.length);
    }, 3200);

    return () => clearInterval(live);
  }, []);

  useEffect(() => {
    if (!sliderSettings.autoplay) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, sliderSettings.speed);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] font-sans text-white selection:bg-cyan-300 selection:text-black">
      <style>{`
        html { scroll-behavior: smooth; }
        body { background: #050816; }
        @keyframes starsMove { from { transform: translate3d(0,0,0); } to { transform: translate3d(-220px, 180px, 0); } }
        @keyframes orbPulse { 0%, 100% { transform: scale(1); opacity: .65; } 50% { transform: scale(1.1); opacity: 1; } }
        @keyframes beamMove { 0%, 100% { opacity: .25; transform: translateX(-18px) rotate(8deg); } 50% { opacity: .75; transform: translateX(18px) rotate(8deg); } }
        @keyframes floatSlow { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-24px,0); } }
        .starfield:before, .starfield:after {
          content: ""; position: absolute; inset: -200px; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,.85) 1px, transparent 1px), radial-gradient(circle, rgba(0,194,255,.55) 1px, transparent 1px);
          background-size: 90px 90px, 140px 140px; animation: starsMove 34s linear infinite;
        }
        .starfield:after { opacity: .35; filter: blur(.5px); animation-duration: 58s; }
      `}</style>

      <div className="starfield fixed inset-0 overflow-hidden" />
      <Particles />
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-70"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(0,194,255,0.16), rgba(123,94,255,0.06) 18%, transparent 38%)`,
        }}
      />
      <motion.div className="fixed left-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#0A3CFF]/25 blur-[120px]" animate={{ x: mouse.x * 0.08, y: mouse.y * 0.06 }} transition={{ type: "spring", stiffness: 35, damping: 20 }} style={{ animation: "orbPulse 8s ease-in-out infinite" }} />
      <motion.div className="fixed right-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#FF2E4D]/20 blur-[130px]" animate={{ x: mouse.x * -0.07, y: mouse.y * 0.05 }} transition={{ type: "spring", stiffness: 35, damping: 20 }} style={{ animation: "orbPulse 10s ease-in-out infinite" }} />
      <motion.div className="fixed bottom-[-15%] left-[30%] h-[560px] w-[560px] rounded-full bg-[#7B5EFF]/20 blur-[130px]" animate={{ x: mouse.x * 0.05, y: mouse.y * -0.06 }} transition={{ type: "spring", stiffness: 35, damping: 20 }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[70] hidden max-w-[340px] overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#071024]/80 p-4 shadow-[0_0_60px_rgba(0,194,255,0.18)] backdrop-blur-2xl md:block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/[0.08] to-[#7B5EFF]/[0.06]" />
        <div className="absolute -inset-8 rounded-[3rem] bg-cyan-300/[0.10] blur-3xl opacity-70" />
        <motion.div
          key={liveIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="relative flex items-center gap-3"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 20px rgba(0,194,255,0.12)", "0 0 34px rgba(0,194,255,0.24)", "0 0 20px rgba(0,194,255,0.12)"] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 shadow-[0_0_25px_rgba(0,194,255,0.15)]"
          >
            <Zap className="h-5 w-5 text-cyan-300" />
          </motion.div>
          <div>
            <div className="text-sm font-black text-white">
              {liveActivities[liveIndex]}
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              <motion.span
                animate={{ opacity: [1, 0.35, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.9)]"
              />
              LIVE ACTIVITY
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-white/5">
        <motion.div className="h-full bg-gradient-to-r from-[#0A3CFF] via-[#00C2FF] to-[#FF2E4D]" initial={{ width: "0%" }} animate={{ width: "72%" }} transition={{ duration: 1.2 }} />
      </div>

      <header className="fixed left-0 right-0 top-3 z-40 mx-auto w-[calc(100%-24px)] max-w-7xl rounded-3xl border border-white/10 bg-[#050816]/55 px-4 py-3 shadow-2xl backdrop-blur-2xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#FF2E4D] shadow-[0_0_34px_rgba(0,194,255,0.35)]">
              <Orbit className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-black tracking-tight">Traffic Masters</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Academy</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#program" className="hover:text-white">Програма</a>
            <a href="#prices" className="hover:text-white">Тарифи</a>
            <a href="#reviews" className="hover:text-white">Відгуки</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href={TELEGRAM_URL} className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-white transition hover:border-cyan-300/40 md:flex">
            <MessageCircle className="h-4 w-4 text-cyan-300" /> Telegram
          </a>
        </div>
      </header>

      <Section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[12%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00C2FF]/18 blur-[140px]" />
          <div className="absolute left-[12%] top-[28%] h-[280px] w-[280px] rounded-full bg-[#7B5EFF]/18 blur-[110px]" />
          <div className="absolute right-[10%] top-[18%] h-[340px] w-[340px] rounded-full bg-[#FF2E4D]/14 blur-[120px]" />

          <div className="absolute left-1/2 top-[6%] h-[700px] w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-300/40 via-cyan-300/10 to-transparent blur-sm opacity-70" style={{ animation: "beamMove 7s ease-in-out infinite" }} />

          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/70"
              style={{
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                left: `${(i * 41) % 100}%`,
                top: `${(i * 67) % 100}%`,
                boxShadow: "0 0 18px rgba(0,194,255,0.35)",
              }}
              animate={{ y: [0, -20, 0], opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.12 }}
            />
          ))}
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="text-center lg:text-left">
            <Badge>Запускова ціна - 72 години</Badge>
            <h1 className="mx-auto mt-6 max-w-5xl text-[42px] font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:mx-0 lg:text-7xl">
              Запусти першу прибуткову зв’язку
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-[#00C2FF] bg-clip-text text-transparent">
                і почни заробляти
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8 lg:mx-0">
              Короткий практичний міні-курс, який дасть тобі чітку систему: офер, гео, креативи, запуск і аналіз.
            </p>

            <div className="mx-auto mt-7 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3 lg:mx-0">
              {[
                [Users, "487+", "вже почали заробляти"],
                [Clock3, "1-3", "дні"],
                [ShieldCheck, "24/7", "доступ"],
              ].map(([Icon, value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-left backdrop-blur-xl sm:rounded-3xl sm:p-4">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <div className="mt-3 text-xl font-black sm:text-2xl">{value}</div>
                  <div className="text-xs text-slate-400 sm:text-sm">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <div>
                <MagneticButton href={PROSPEC_PAY_URL} className="w-full text-lg sm:w-auto">Отримати доступ до ProSpec за 879 грн</MagneticButton>
                <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-cyan-100 lg:justify-start">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.9)]"
                  />
                  ⚡ Доступ відкривається автоматично
                </div>
              </div>
              <MagneticButton href="#program" variant="secondary" className="w-full sm:w-auto">Подивитись програму</MagneticButton>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} transition={{ duration: 0.85, delay: 0.15 }} className="relative mx-auto w-full max-w-xl lg:max-w-none" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#00C2FF]/30 via-[#7B5EFF]/16 to-[#FF2E4D]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-gradient-to-b from-cyan-300/[0.14] via-white/[0.07] to-white/[0.035] p-5 shadow-[0_0_130px_rgba(0,194,255,0.24)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-7">
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#00C2FF]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#FF2E4D]/16 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-full bg-gradient-to-r from-[#FF2E4D] to-[#7B5EFF] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_40px_rgba(255,46,77,0.35)]">
                    Найвигідніший вибір
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-100">
                    ProSpec
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#050816]/62 p-5 sm:p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Запускова ціна</div>
                  <div className="mt-3 flex flex-wrap items-end gap-4">
                    <div className="text-6xl font-black leading-none tracking-[-0.06em] text-white sm:text-7xl">879</div>
                    <div className="pb-2 text-2xl font-black text-white">грн</div>
                    <div className="pb-2 text-xl font-black text-slate-500 line-through sm:text-2xl">2690 грн</div>
                  </div>
                  <div className="mt-3 inline-flex rounded-full bg-[#FF2E4D]/15 px-4 py-2 text-sm font-black text-[#FF8FA0]">
                    Економія 1811 грн тільки під запуск
                  </div>
                </div>

                <div className="mt-5">
                  <Countdown />
                </div>

                <MagneticButton href={PROSPEC_PAY_URL} className="mt-6 w-full text-lg">
                  Отримати доступ до ProSpec за 879 грн
                </MagneticButton>

                <div className="mt-5 rounded-3xl border border-white/10 bg-[#050816]/55 p-5">
                  <div className="flex items-center gap-3">
                    <Rocket className="h-6 w-6 text-cyan-300" />
                    <div className="font-black">Не інфоголуп - а чіткий digital-продукт</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Офер, гео, креативи, запуск, аналіз і база по Facebook/гемблі/нутрі/крипті - без хаосу і води.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <DashboardVisual />

      <Section id="problem">
        <div className="text-center">
          <Badge>Біль новачка</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Чому ти, швидше за все, зіллєш свій перший бюджет?</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map(([Icon, title, text]) => (
            <Card key={title}>
              <Icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="program">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Badge>Рішення</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Отримай повну систему арбітражу за 1-3 дні</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Короткий практичний курс без води. Тільки те, що потрібно новачку, щоб зібрати першу прибуткову зв’язку і не злити бюджет.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {modules.map(([num, title, text]) => (
              <Card key={num}>
                <div className="text-sm font-black text-cyan-300">MODULE {num}</div>
                <h3 className="mt-3 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </Card>
            ))}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-3 text-sm font-black text-cyan-100 shadow-[0_0_40px_rgba(0,194,255,0.12)] backdrop-blur-xl sm:text-base">
              <Flame className="h-5 w-5 text-[#FF2E4D]" />
              847+ людей вже почали заробляти
            </div>
          </div>
        </div>
      </Section>

      <Section id="calculator">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>Калькулятор доходу</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Від 0 до перших
              <span className="block bg-gradient-to-r from-cyan-200 to-[#00C2FF] bg-clip-text text-transparent">
                50–100к+ грн на місяць
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Подивись, як може виглядати потенційний результат залежно від бюджету, ROI і кількості днів заливу.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <div className="mb-3 flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span>Бюджет</span>
                  <span className="text-cyan-300">${budget}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="10000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"
                />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span>Днів заливу в місяць</span>
                  <span className="text-cyan-300">{days} днів</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="31"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"
                />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span>ROI</span>
                  <span className="text-cyan-300">{roi}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  value={roi}
                  onChange={(e) => setRoi(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"
                />
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-b from-cyan-300/[0.12] to-white/[0.04] p-6 shadow-[0_0_120px_rgba(0,194,255,0.16)] backdrop-blur-2xl sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#00C2FF]/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex rounded-full bg-[#00C2FF]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                Потенційний результат
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#050816]/60 p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    Прибуток / день
                  </div>
                  <div className="mt-3 text-5xl font-black tracking-[-0.05em] text-white">
                    ${dailyProfit}
                  </div>
                </div>

                <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.08] p-5 shadow-[0_0_50px_rgba(0,194,255,0.12)]">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
                    Потенційно / місяць
                  </div>
                  <div className="mt-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-5xl font-black tracking-[-0.05em] text-transparent">
                    ${monthlyProfit}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-[#050816]/50 p-5 text-sm leading-7 text-slate-300">
                Приклад розрахунку на основі середнього ROI в арбітражі. Головне - не гроші на старті, а правильна система і аналіз.
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="prices">
        <div className="text-center">
          <Badge>Тарифи</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Обери свій старт</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">ProSpec - найкращий вибір для швидкого старту. Отримуєш не тільки курс, а й усі практичні інструменти.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <PriceCard />
          <PriceCard pro />
        </div>
      </Section>

      <Section id="bonuses">
        <div className="text-center">
          <Badge>Бонуси</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Бонуси, які реально економлять час і гроші</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bonuses.map(([Icon, title, text]) => (
            <Card key={title}>
              <Icon className="h-8 w-8 text-[#FF2E4D]" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="proof">
        <div className="text-center">
          <Badge>Strong proof</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Реальні цифри,
            <span className="block bg-gradient-to-r from-cyan-200 to-[#00C2FF] bg-clip-text text-transparent">
              ROI і логіка запуску
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-b from-cyan-300/[0.10] to-white/[0.04] p-6 shadow-[0_0_90px_rgba(0,194,255,0.14)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Case study</div>
                <div className="mt-2 text-3xl font-black text-white">Кейс студента</div>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-300 shadow-[0_0_28px_rgba(16,185,129,0.28)]">
                ↑ ROI +76%
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#050816]/60 p-5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  <span>Spend</span>
                  <span className="rounded-full bg-[#FF2E4D]/10 px-2 py-0.5 text-[10px] text-[#FF8FA0]">tests</span>
                </div>
                <div className="mt-3 text-4xl font-black text-white">$1,240</div>
              </div>

              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.08] p-5 shadow-[0_0_40px_rgba(0,194,255,0.12)]">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  <span>Revenue</span>
                  <span className="inline-flex items-center rounded-full bg-cyan-300/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-cyan-200 shadow-[0_0_12px_rgba(0,194,255,0.35)]">
  ↑ Growth
</span>
                </div>
                <div className="mt-3 text-4xl font-black text-white">$2,180</div>
              </div>

              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.08] p-5 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  <span>Net Profit</span>
                 <span className="inline-flex items-center rounded-full bg-emerald-300/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.4)]">
  ↑ +76%
</span>
                </div>
                <div className="mt-3 text-4xl font-black text-white">+$940</div>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#050816]/55 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-white">Telegram / Results</div>
                  <div className="mt-1 text-xs text-slate-500">Приклад результатів студента</div>
                </div>
                <div className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">
                  LIVE
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {["ROI 61% на першій зв’язці", "+$340 на 4 день тестів", "Перший профіт після запуску"].map((msg) => (
                  <div key={msg} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Campaign metrics</div>
                  <div className="mt-2 text-2xl font-black text-white">Performance widgets</div>
                </div>
                <TrendingUp className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[["CTR", "3.8%"],["CPA", "$7.40"],["ROI", "+76%"],["EPC", "$1.84"]].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-[#050816]/60 p-4">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{k}</div>
                    <div className="mt-2 text-3xl font-black text-white">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.10] to-white/[0.04] p-6 shadow-[0_0_70px_rgba(0,194,255,0.12)] backdrop-blur-2xl">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Quick result</div>
              <div className="mt-4 text-5xl font-black tracking-[-0.05em] text-white">+$2,740</div>
              <div className="mt-3 text-lg font-bold text-cyan-100">за перший місяць роботи</div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#050816]/60 p-4 text-sm leading-7 text-slate-300">
                Навіть базове розуміння офера, зв’язки і цифр вже дає перевагу над більшістю новачків.
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="reviews">
        <div className="text-center">
          <Badge>Social proof</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Реальні результати наших студентів</h2>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <motion.div
            animate={{ x: `-${activeSlide * slideStep}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex w-full gap-4"
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="min-w-full md:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-12px)] flex-1"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_60px_rgba(0,194,255,0.08)] backdrop-blur-2xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-14 w-14 rounded-full border border-cyan-300/30 object-cover"
                    />

                    <div>
                      <div className="text-lg font-black text-white">{item.name}</div>
                      <div className="mt-1 text-sm font-bold text-cyan-300">{item.result}</div>
                      <div className="mt-1 flex gap-1 text-cyan-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-[15px] leading-7 text-slate-300">
                    “{item.text}”
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-10 bg-cyan-300 shadow-[0_0_20px_rgba(0,194,255,0.7)]"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>FAQ</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Питання перед стартом</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[900px] gap-3 sm:gap-4">
          {faqs.map(([q, a], i) => <FAQItem key={q} q={q} a={a} i={i} />)}
        </div>
      </Section>

      <Section id="final" className="pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-8 text-center shadow-[0_0_120px_rgba(0,194,255,0.18)] backdrop-blur-2xl sm:p-12">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00C2FF]/20 blur-3xl" />
          <div className="relative">
            <Badge>Фінальний крок</Badge>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              3 дні → перший запуск → перші тести → перший профіт.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Короткий практичний курс, який допоможе швидко зрозуміти систему арбітражу і перестати зливати бюджет навмання.
            </p>
            <div className="mx-auto mt-8 max-w-xl"><Countdown /></div>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <div className="rounded-[1.8rem] border border-cyan-300/20 bg-cyan-300/[0.08] p-5 shadow-[0_0_50px_rgba(0,194,255,0.12)] backdrop-blur-xl">
                <div className="text-left">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                    ProSpec
                  </div>
                  <div className="mt-3 flex items-end gap-3">
                    <div className="text-5xl font-black tracking-[-0.05em] text-white">
                      879
                    </div>
                    <div className="pb-1 text-xl font-black text-white">грн</div>
                  </div>
                  <div className="mt-2 text-base font-bold text-slate-500 line-through">
                    3400 грн
                  </div>
                </div>

                <MagneticButton href={PROSPEC_PAY_URL} className="mt-5 w-full">
                  Отримати доступ до ProSpec
                </MagneticButton>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <div className="text-left">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">
                    Spec
                  </div>
                  <div className="mt-3 flex items-end gap-3">
                    <div className="text-5xl font-black tracking-[-0.05em] text-white">
                      579
                    </div>
                    <div className="pb-1 text-xl font-black text-white">грн</div>
                  </div>
                  <div className="mt-2 text-base font-bold text-slate-500 line-through">
                    1790 грн
                  </div>
                </div>

                <MagneticButton href={SPEC_PAY_URL} variant="secondary" className="mt-5 w-full">
                  Стартувати зі Spec
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a href={PROSPEC_PAY_URL} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0A3CFF] via-[#00C2FF] to-[#FF2E4D] px-5 py-4 text-center text-base font-black text-white shadow-[0_0_50px_rgba(0,194,255,0.42)]">
          <BadgeCheck className="h-5 w-5" /> Отримати доступ до ProSpec за 879 грн
        </a>
      </div>

      <footer className="flex justify-center gap-6 py-10 text-sm text-slate-500 border-t border-white/10">
  <a href="/terms.html">Terms</a>
  <a href="/refund.html">Refund</a>
  <a href="/privacy.html">Privacy</a>
  <a href="/contacts.html">Contacts</a>
</footer>

    </main>
  );
}
