import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Training — Power Plant Fundamentals",
  description: "Week 1 of Power Plant Fundamentals for Project Managers. Technical literacy for a project manager new to power generation.",
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
          Training site. Week 1 only. Viper Power is an anonymized worked example.
        </footer>
      </body>
    </html>
  );
}
