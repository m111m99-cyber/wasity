export default function Shell({ title, children }) {
  return (
    <main style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{title}</h1>
      {children}
    </main>
  )
}
