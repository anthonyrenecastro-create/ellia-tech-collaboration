import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E.L.L.I.A. Tech Collaboration",
  description: "E.L.L.I.A. Tech Collaboration.",
  metadataBase: new URL("https://elliatechcollab.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
