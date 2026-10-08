import { ImageResponse } from "next/og";

// Edge runtime: Next generates the PNG on demand (Node prerender trips on @vercel/og).
export const runtime = "edge";
export const alt = "Saveur | Seasonal fine dining on Alder Lane";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FBF7F0",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,164,93,0.35), transparent 55%), radial-gradient(circle at 85% 80%, rgba(180,137,74,0.3), transparent 50%)",
          color: "#1C1A16",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 96,
            fontFamily: "Georgia, serif",
            letterSpacing: 24,
            textTransform: "uppercase",
          }}
        >
          Saveur
          <div
            style={{
              width: 28,
              height: 28,
              backgroundColor: "#B4894A",
              transform: "rotate(45deg)",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 34,
            height: 3,
            width: 320,
            backgroundColor: "#B4894A",
            display: "flex",
          }}
        />

        <div
          style={{
            marginTop: 34,
            fontSize: 34,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "#4E4A40",
            display: "flex",
          }}
        >
          Seasonal fine dining, quietly done
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#8A6524",
            display: "flex",
          }}
        >
          148 Alder Lane · San Francisco
        </div>
      </div>
    ),
    { ...size }
  );
}
