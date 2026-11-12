import { siteConfig } from "@/lib/site.config";

export default function Home() {
  return (
    <main>
      <h1>{siteConfig.businessName}</h1>
      <p>{siteConfig.tagline}</p>
      <h2>Services</h2>
      <ul>
        {siteConfig.services.map((s) => (
          <li key={s.name}>
            {s.name}: ${s.price}. {s.description}
          </li>
        ))}
      </ul>
      <h2>Hours</h2>
      <ul>
        {siteConfig.hours.map((h) => (
          <li key={h.day}>
            {h.day}: {h.time}
          </li>
        ))}
      </ul>
      <p>
        {siteConfig.contact.address} | {siteConfig.contact.email} | {siteConfig.contact.phone}
      </p>
    </main>
  );
}
