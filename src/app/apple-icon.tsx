import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070A",
          color: "#34C3DD",
          fontSize: 96,
          fontWeight: 500,
          letterSpacing: "-0.04em",
        }}
      >
        F
      </div>
    ),
    size,
  );
}
