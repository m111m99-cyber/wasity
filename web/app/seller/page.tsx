export default function SellerPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Seller Dashboard</h1>
          <a className="rounded-2xl border px-4 py-2 text-sm hover:bg-zinc-50" href="/">Home</a>
        </div>
        <p className="mt-2 text-sm text-zinc-600">Listings • Orders • Payouts • Analytics</p>
      </div>
    </main>
  );
}
