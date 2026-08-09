import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./difficulty.css";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return {
    title: "Signal Drift — A Two-Minute Arcade Run",
    description: "Steer a fragile signal through a collapsing network in this original browser arcade game.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: "Signal Drift", description: "Carry the signal through a collapsing network.", images: [{ url: image, width: 1536, height: 1024 }] },
    twitter: { card: "summary_large_image", title: "Signal Drift", description: "Carry the signal through a collapsing network.", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
