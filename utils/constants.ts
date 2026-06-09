import { isDev } from "./helpers";

export const pricingPlans = [
  {
    id: "basic",
    name: "basic",
    description: "Perfect for occasional use",
    price: 9,
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    paymentLink: isDev
      ? "https://buy.stripe.com/test_bJecN4bgagP20Hr4mL1sQ00"
      : "",
    priceId: isDev ? "price_1TdUYPAPUPSQPcdo32rlenZA" : "",
  },
  {
    id: "pro",
    name: "pro",
    description: "For professionals and teams",
    price: 19,
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: isDev
      ? "https://buy.stripe.com/test_7sY7sK0BwfKYbm56uT1sQ01"
      : "",
    priceId: isDev ? "price_1TdUYPAPUPSQPcdoFPsrlvoS" : "",
  },
];
