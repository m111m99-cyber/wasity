import Link from "next/link";

type ShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Shell({ title, subtitle, children }: ShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 shadow-lg">
              <span className="text-lg">🟦</span>
            </div>
            <div>
              <div className="text-lg font-semibold leading-tight">{title}</div>
              {subtitle ? (
                <div className="text-sm text-zinc-300/80">{subtitle}</div>
              ) : null}
            </div>
          </div>

          <Link
            href="/"
            className="rounded-2xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 transition hover:bg-white/15 hover:scale-[1.02]"
          >
            العودة للرئيسية
          </Link>
        </div>

        {/* Content */}
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
