export default function Section({ title, children, ...props }) {
  return (
    <section {...props} className="py-10 container mx-auto">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
