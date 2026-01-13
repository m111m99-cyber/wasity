import Shell from "../components/Shell";

export default function Home() {
  return (
    <Shell title="WASITY ✅">
      <p>If you see this, Shell component is working.</p>
      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a href="/buyer">Buyer</a>
        <a href="/seller">Seller</a>
        <a href="/courier">Courier</a>
        <a href="/admin">Admin</a>
      </div>
    </Shell>
  );
}
