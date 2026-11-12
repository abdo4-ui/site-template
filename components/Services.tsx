import { siteConfig } from "@/lib/site.config";

export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <ul>
        {siteConfig.services.map((s) => (
          <li key={s.name}>
            {s.name}: ${s.price}. {s.description}
          </li>
        ))}
      </ul>
    </section>
  );
}