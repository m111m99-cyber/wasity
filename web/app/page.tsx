"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Shell from "../components/Shell";

type RoleCardProps = {
  href: string;
  title: string;
  desc: string;
  icon: string;
  pill: string;
};

function RoleCard({ href, title, desc, icon, pill }: RoleCardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 14; // left/right
    const rotateX = (0.5 - py) * 8; // up/down
    setTilt({ x: rotateX, y: rotateY });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group relative overflow-hidden rounded-3xl bg-white/8 p-8 ring-1 ring-white/12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:bg-white/12 hover:-translate-y-2 hover:shadow-[0_40px_100px_-45px_rgba(0,0,0,0.9)] role-card-large"
    >
      <Link href={href} className="absolute inset-0 z-10" aria-label={title} />

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-indigo-400/25 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="relative z-0">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/12 shadow-sm">
            <span className="text-3xl">{icon}</span>
          </div>

          <span className="rounded-full bg-black/18 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/8">
            {pill}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-base leading-7 text-zinc-200/85">{desc}</p>

        <div className="mt-6 inline-flex items-center gap-3 text-sm font-semibold">
          <span className="rounded-2xl bg-emerald-600/10 px-4 py-2 ring-1 ring-emerald-600/20 transition group-hover:bg-emerald-600/15">
            فتح لوحة التحكم
          </span>
          <span className="opacity-70 transition">←</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Shell title="وسيطي" subtitle="وسيط آمن يربط المشتري، البائع، وشركات التوصيل">
      {/* Hero */}
      <div className="rounded-[32px] glass-panel p-8 ring-1 ring-white/10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-2 text-sm ring-1 ring-emerald-600/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              عرض تجريبي
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              وسيطي
            </h1>

            <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-200/85">
              بوابة موحّدة لإدارة الطلبات، الشحن، والدفع — لكلٍّ من المشتري، البائع،
              وشركات التوصيل.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white/6 px-4 py-2 text-xs ring-1 ring-white/10">
              دعم العربية
            </span>
            <span className="rounded-full bg-white/6 px-4 py-2 text-xs ring-1 ring-white/10">
              تأثيرات Hover
            </span>
            <span className="rounded-full bg-white/6 px-4 py-2 text-xs ring-1 ring-white/10">
              خلفية حيوية
            </span>
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
        <RoleCard
          href="/buyer"
          title="المشتري"
          desc="استعراض الطلبات، متابعة الشحن، الدفع، فتح نزاع، ومركز الرسائل."
          icon="🛒"
          pill="Buyer"
        />
        <RoleCard
          href="/seller"
          title="البائع / التاجر"
          desc="إدارة المنتجات والطلبات، التحصيلات، تقارير الأداء، والنزاعات."
          icon="🏷️"
          pill="Seller"
        />
        <RoleCard
          href="/courier"
          title="شركة التوصيل"
          desc="استلام المهام، تحديث حالة التسليم، إثبات التسليم، وسجل الحركات."
          icon="🚚"
          pill="Courier"
        />
        <RoleCard
          href="/admin"
          title="الأدمن"
          desc="إدارة المستخدمين، المراقبة، وتقرير النزاعات وسجل التدقيق."
          icon="🛡️"
          pill="Admin"
        />
      </div>

      {/* Footer note */}
      <div className="mt-8 rounded-3xl bg-black/25 p-6 ring-1 ring-white/10">
        <p className="text-sm leading-7 text-zinc-200/80">
          ملاحظة: بنحافظ على هذا الأسلوب كـ “ثيم موحّد”، وبعدها نبدأ نطوّر كل دور
          صفحة صفحة بنفس الهوية البصرية.
        </p>
      </div>
    </Shell>
  );
}
