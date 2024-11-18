import FeatureCard from "./FeatureCard";

export default function FeaturesList() {
  const features = [
    {
      icon: "Package",
      title: "Free Shipping",
      description:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      icon: "Shield",
      title: "Satisfaction Guarantee",
      description:
        "Shop confidently with our Satisfaction Guarantee. Love it or get a refund.",
    },
    {
      icon: "CreditCard",
      title: "Secure Payment",
      description:
        "Your security is our priority. Your payments are secure with us.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
}
