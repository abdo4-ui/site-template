import { siteConfig } from "@/lib/site.config";

export default function Hours() {
  return (
    <section>
      <h2>Hours</h2>
      <ul>
        {siteConfig.hours.map((h) => (
          <li key={h.day}>
            {h.day}: {h.time}
          </li>
        ))}
      </ul>
    </section>
  );
}