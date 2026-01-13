import Shell from "../../components/Shell";

export default function BuyerPage() {
  return (
    <Shell title="لوحة المشتري" subtitle="طلباتك، الدفعات، والنزاعات">
      <div className="rounded-2xl glass-panel p-6">
        <h2 className="text-2xl font-semibold">مرحبا بالمشتري</h2>
        <p className="mt-3 text-zinc-200/80">عرض الطلبات • متابعة الشحن • المدفوعات • فتح نزاع</p>
      </div>
    </Shell>
  );
}
