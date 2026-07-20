import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #080a14 0%, #17142a 55%, #0a1e2e 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8b5cf6",
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 12 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 40, color: "#94a0be", marginTop: 12 }}>
          {siteConfig.roles[1]} · DSA · AI
        </div>
      </div>
    ),
    { ...size },
  );
}
