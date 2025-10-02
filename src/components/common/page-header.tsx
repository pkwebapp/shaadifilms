export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <section className="py-16 md:py-24 bg-card text-center">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );
}
