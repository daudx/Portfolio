import { ImageResponse } from "next/og";


export const alt = "Dawood Sajid — AI Developer & Full-Stack Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          color: "#F6F4EF",
          padding: "60px 80px",
          fontFamily: "monospace",
          border: "8px solid #1A1A18"
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#1A1A18",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid #2A2A28"
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#D96C3A"
              }}
            />
            <span
              style={{
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#F6F4EF"
              }}
            >
              DAWOOD SAJID // DEV_PROFILE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#9A968E",
              fontSize: "16px"
            }}
          >
            <span>AI DEVELOPER @ DEVNOZ</span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#FFFFFF"
            }}
          >
            BUILDING RESILIENT RAG &amp; FULL-STACK SYSTEMS.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#B4B0A6",
              maxWidth: "900px",
              lineHeight: 1.4
            }}
          >
            Next.js · FastAPI · PostgreSQL · Vector DBs · LangChain · Offline POS
          </div>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2A2A28",
            paddingTop: "32px"
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            {["Next.js", "FastAPI", "PostgreSQL", "RAG"].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "#1A1A18",
                  border: "1px solid #2A2A28",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "#D96C3A",
                  fontWeight: 600
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#D96C3A",
              fontWeight: 700
            }}
          >
            dawoodsajiddev.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
