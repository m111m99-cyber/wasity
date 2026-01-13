import Shell from "../../components/Shell";

export default function AdminPage() {
  return (
    <Shell title="لوحة الإدارة" subtitle="أدوات المراقبة والإدارة">
      <div className="rounded-2xl glass-panel p-6">
        <h2 className="text-2xl font-semibold">لوحة المشرف</h2>
        <p className="mt-3 text-zinc-200/80">المستخدمون • الصفقات • النزاعات • سجل التدقيق</p>
      </div>
    </Shell>
  );
}
