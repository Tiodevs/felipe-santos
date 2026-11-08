import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2F5F6",
          color: "#0B1216",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ fontSize: 44, letterSpacing: "-0.02em" }}>
          {SITE.name}
        </span>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            AI Engineer
          </span>
          <span
            style={{
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#0F9BB8",
            }}
          >
            Sênior
          </span>
        </div>

        <span style={{ fontSize: 26, color: "#5A6B73", maxWidth: 900 }}>
          RAG, agentes com tools e plataformas de LLM. Aberto a novos projetos,
          a partir de Curitiba.
        </span>
      </div>
    ),
    size,
  );
}
