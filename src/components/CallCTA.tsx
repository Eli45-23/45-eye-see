import { business } from "@/src/content/business";
import { Button } from "./Button";

type CallCtaProps = {
  label?: string;
  className?: string;
};

export function CallCTA({ label = `Call ${business.phone}`, className }: CallCtaProps) {
  const phoneHref = `tel:+1${business.phone.replace(/\D/g, "")}`;

  return (
    <Button href={phoneHref} className={className} aria-label={`Call ${business.phone}`}>
      {label}
    </Button>
  );
}
