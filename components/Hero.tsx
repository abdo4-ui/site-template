type HeroProps = {
  title: string;
  tagline: string;
};

export default function Hero({ title, tagline }: HeroProps) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{tagline}</p>
    </section>
  );
}