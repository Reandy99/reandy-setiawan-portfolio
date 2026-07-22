import { ImageResponse } from "next/og";

export const alt = "Reandy Setiawan — Creative Producer & AI Workflow Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(139,92,246,0.35), transparent 40%), radial-gradient(circle at 85% 80%, rgba(56,189,248,0.18), transparent 35%), #07070A",
          color: "#F4F1EA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              background: "#0E0E13",
            }}
          >
            RS
          </div>
          <div style={{ fontSize: 24, color: "#A4A4B0" }}>reandysetiawan.my.id</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#A78BFA",
            }}
          >
            Creative Producer & AI Workflow Builder
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Reandy Setiawan
          </div>
          <div style={{ fontSize: 28, color: "#A4A4B0", maxWidth: 860 }}>
            Photo, video, campaign production, and AI-assisted content systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            color: "#A4A4B0",
            fontSize: 22,
          }}
        >
          <span>Jakarta, Indonesia</span>
          <span>·</span>
          <span>Remote & APAC</span>
        </div>
      </div>
    ),
    size,
  );
}
