import type { Metadata } from "next";
import "./globals.css";
import {appearanceBootstrap} from "@/lib/appearance";
import {ProfileBridge} from "@/components/ProfileControls";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "NEURO · Power Plant Foundations",
  description:
    "A textbook-style online course from electricity and gas-turbine generation to plant operations, grid delivery, and project decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-font="sans" data-reading="false" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html:appearanceBootstrap}}/></head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <ProfileBridge/>
        <SiteHeader />
        <main id="main">{children}</main>
        <footer className="site">
          NEURO · Power Plant Foundations · Technical understanding for project managers. Actual operation and hazardous work
          require site-specific training and authorization. Viper Power is an inherited anonymized example.
        </footer>
      </body>
    </html>
  );
}
