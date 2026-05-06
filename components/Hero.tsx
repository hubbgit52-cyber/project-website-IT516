type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="page-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}