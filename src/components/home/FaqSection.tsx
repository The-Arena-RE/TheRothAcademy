import { HelpCircle } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/home-content";

export function FaqSection() {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-20">
      <div className="container-brand max-w-3xl">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
          <HelpCircle size={18} aria-hidden />
        </span>
        <Eyebrow className="mt-6">Before your next move</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Good Questions.
          <br />
          <span className="text-r-gold">Clear Answers.</span>
        </h2>

        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
