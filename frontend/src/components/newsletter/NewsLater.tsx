import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Newsletter() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Be first to surprise our subscribers with occasional gifts.
          </p>
          <div className="flex gap-2">
            <Input placeholder="Your email address" type="email" />
            <Button className="bg-rose-600 hover:bg-rose-700">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
