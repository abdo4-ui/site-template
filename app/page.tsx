import { siteConfig } from "@/lib/site.config";
import Services from "@/components/Services";
import Hours from "@/components/Hours";

export default function Home() {
  return (
    <main>
      <h1>{siteConfig.businessName}</h1>
      <p>{siteConfig.tagline}</p>
      <Services />
      <Hours />
      <p>
        {siteConfig.contact.address} | {siteConfig.contact.email} | {siteConfig.contact.phone}
      </p>
    </main>
  );
}
