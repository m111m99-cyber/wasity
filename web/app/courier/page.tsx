import Shell from "../../components/Shell";

export default function CourierPage() {
  return (
    <Shell title="لوحة التوصيل" subtitle="مهام التوصيل وتتبع الشحنات">
      <div className="rounded-2xl glass-panel p-6">
        <h2 className="text-2xl font-semibold">مرحبا بشركة التوصيل</h2>
        <p className="mt-3 text-zinc-200/80">المهام • تحديث الحالة • إثبات التسليم • المسارات</p>
      </div>
    </Shell>
  );
}
