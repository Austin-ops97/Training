import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Power Plant Foundations · Training",
  description:
    "A textbook-style online course from electricity and gas-turbine generation to plant operations, grid delivery, and project decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <footer className="site">
          Power Plant Foundations · Technical understanding for project managers. Actual operation and hazardous work
          require site-specific training and authorization. Viper Power is an inherited anonymized example.
        </footer>
      </body>
    </html>
  );
}
