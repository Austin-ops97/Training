import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Two courses: Power Plant Fundamentals for Project Managers, and Peaking Power Plant Operator Fundamentals. Neither course qualifies anyone to operate a plant.",
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
          Training site. The project-manager course and the operator course are separate. Neither one qualifies a person
          to operate a plant. Viper Power is an anonymized worked example.
        </footer>
      </body>
    </html>
  );
}
