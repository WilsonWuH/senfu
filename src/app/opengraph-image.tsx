import { ImageResponse } from "next/og";

export const alt = "SENFU Technology — Precision Positioning & Micro/Nano Fabrication";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#0b1d35", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}><div style={{ width: 52, height: 52, borderRadius: "50% 50% 50% 15%", background: "#1769aa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700 }}>S</div><div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 3 }}>SENFU</span><span style={{ fontSize: 11, letterSpacing: 5, color: "#8fa4b8" }}>TECHNOLOGY</span></div></div>
        <span style={{ color: "#79c9ea", fontSize: 14, letterSpacing: 3 }}>ENGINEERING SYSTEMS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: 1000 }}><span style={{ color: "#79c9ea", fontSize: 18, letterSpacing: 4, marginBottom: 25 }}>POSITION FEEDBACK · MICRO/NANO FABRICATION</span><span style={{ fontSize: 70, lineHeight: 1.03, letterSpacing: -3, fontWeight: 600 }}>Precision systems.<br />Source-backed decisions.</span></div>
      <div style={{ display: "flex", gap: 12 }}>{["OPTICAL ENCODERS", "DMD LITHOGRAPHY", "ELECTRON BEAM"].map((label) => <span key={label} style={{ padding: "12px 16px", border: "1px solid #3b5268", fontSize: 12, letterSpacing: 2 }}>{label}</span>)}</div>
    </div>,
    size,
  );
}
