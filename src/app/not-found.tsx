export default function RootNotFound() {
  return (
    <html lang="en" className="dark">
      <body style={{ background: "#0a0a0c", color: "#e8e6e1", fontFamily: "sans-serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
          <p>Page not found</p>
          <a href="/" style={{ color: "#c9a84c", textDecoration: "underline" }}>Go home</a>
        </div>
      </body>
    </html>
  );
}
