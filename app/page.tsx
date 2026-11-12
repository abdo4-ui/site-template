import type { CSSProperties } from "react";
import { siteConfig } from "@/lib/site.config";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  // Colors come from the config, so one edit restyles the whole site.
  const themeStyle = {
    "--primary": siteConfig.colors.primary,
    "--accent": siteConfig.colors.accent,
  } as CSSProperties;

  return (
    <div style={themeStyle}>
      <main>
        <Hero title={siteConfig.businessName} tagline={siteConfig.tagline} />
        {siteConfig.sections.services && <Services />}
        {siteConfig.sections.hours && <Hours />}
        {siteConfig.sections.gallery && <Gallery images={siteConfig.images} />}
        {siteConfig.sections.contact && (
          <Contact
            address={siteConfig.contact.address}
            email={siteConfig.contact.email}
            phone={siteConfig.contact.phone}
          />
        )}
      </main>
    </div>
  );
}
