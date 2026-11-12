import { siteConfig } from "@/lib/site.config";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero title={siteConfig.businessName} tagline={siteConfig.tagline} />
      {siteConfig.sections.services && <Services />}
      {siteConfig.sections.hours && <Hours />}
      {siteConfig.sections.contact && (
        <Contact
          address={siteConfig.contact.address}
          email={siteConfig.contact.email}
          phone={siteConfig.contact.phone}
        />
      )}
    </main>
  );
}
