import Shell from "../../components/Shell";

export default function SellerPage() {
  return (
    <Shell title="لوحة البائع" subtitle="إدارة المنتجات والطلبات">
      <div className="rounded-2xl glass-panel p-6">
        <h2 className="text-2xl font-semibold">مرحبا بالبائع</h2>
        <p className="mt-3 text-zinc-200/80">قوائم المنتجات • الطلبات • التحصيلات • التقارير</p>
      </div>
    </Shell>
  );
}
