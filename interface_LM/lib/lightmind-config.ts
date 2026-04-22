export const lightmindContact = {
  email: "lightmind@lightmind.art",
  endpoint: "https://formsubmit.co/ajax/lightmind@lightmind.art",
  activationMessage:
    "Form delivery is pending activation in FormSubmit. Please open the activation email sent to lightmind@lightmind.art and click the Activate Form link once.",
  extraFields: {
    _captcha: "false",
    _template: "table",
  },
} as const

export const lightmindProducts = [
  {
    id: "o1",
    displayName: "O1",
    legacyCheckoutName: "LightMind O1",
    tagline: "Everyday Memory Wearable",
    description:
      "A low-power pendant/clip wearable built for all-day first-person context capture and semantic memory assistance.",
    image: "/images/o1.png",
    specs: ["12hr battery", "18g weight", "Always-on"],
    price: "HK$1,998",
    buyButtonId: "buy_btn_1ScgbSGVh9caREe4JMPWN5fI",
  },
  {
    id: "m1",
    displayName: "M1",
    legacyCheckoutName: "LightMind M1",
    tagline: "Smart Glasses for Recall",
    description:
      "A smart-glasses form factor powered by LightMind optical modules for always-ready capture and contextual recall.",
    image: "/images/m1-clean.png",
    specs: [
      "45g weight",
      "Sony IMX 8MP camera",
      "~7h music",
      ">1h video recording",
      "16GB storage",
      "IPX5 water resistance",
    ],
    price: "HK$1,998",
    buyButtonId: "buy_btn_1StlgAGVh9caREe49NkKzDRF",
  },
  {
    id: "m1-pro",
    displayName: "M1 Pro",
    legacyCheckoutName: "LightMind M1 Pro",
    tagline: "Extended Performance",
    description:
      "An enhanced sensing and compute pipeline for richer memory cues, faster retrieval, and longer intensive daily usage.",
    image: "/images/m1pro.jpg",
    specs: [
      "38g weight",
      "Sony IMX 12MP camera",
      "~8h music",
      ">1h video recording",
      "32GB storage",
      "IPX5 water resistance",
    ],
    price: "HK$2,698",
    buyButtonId: "buy_btn_1StkxHGVh9caREe4Ogo8qDRv",
  },
  {
    id: "display",
    displayName: "LightMind Display",
    legacyCheckoutName: "LightMind Display",
    tagline: "Glanceable AI Companion",
    description:
      "A lightweight display layer that surfaces names, translation cues, reminders, and next actions in real time.",
    image: "/images/display.png",
    specs: ["28g weight", "12h battery", "100 ms translation latency"],
    price: "HK$5,998",
    buyButtonId: "buy_btn_1Stn3UGVh9caREe4bpaBu69w",
  },
] as const

export const lightmindStripePublishableKey =
  "pk_live_51ScfvWGVh9caREe4RH298i9XHnbAhiDEgJ8fTYLZHAl0TkG7Yx9P7AvhWWTCmCugh8GuLUGq2dLX2RvVnZ3gyga500weVzgiWq"
