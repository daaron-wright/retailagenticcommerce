import chicagoTripsVideo from "../../imports/chicago_trips.mp4";
import chapter2Video from "../../imports/chapter_2_Intro-1.mp4";
import chapter1Video from "../../imports/AdobeStock_1909972656_Video_4K_Preview.mp4";
import chapter3Video from "../../imports/Adobe_Express_-_AdobeStock_1681926270_Video_HD_Preview.mp4";
import annaScreenRecording from "../../imports/Screen_Recording_2026-04-09_at_12.57.31 PM.mp4";
import scene13Video from "../../imports/Scene 13.mp4";
import chp3IntroVideo from "../../imports/chp 3 intro_1.mp4";
import chp1IntroVideo from "../../imports/chp 1 intro.mp4";
import scottImgFile from "../../imports/image-5.png";
import johnathanImgFile from "../../imports/image-6.png";
import annaImgFile from "../../imports/image-7.png";

export interface Screen {
  id: string;
  chapter: number;
  type: "opening" | "chapterCard" | "chapterIntro" | "persona" | "narrative" | "notification" | "appUI" | "overlay" | "disruption" | "dashboard" | "closing" | "closingLogo" | "transition";
  background: "dark" | "storm" | "red" | "scene";
  backgroundImage?: string;
  backgroundVideo?: string;
  personaImage?: string;
  secondaryPersonaImage?: string;
  personaName?: string;
  personaSmall?: boolean;
  title?: string;
  subtitle?: string;
  body?: string;
  notificationCard?: {
    icon?: string;
    title: string;
    message: string;
    action: string;
  };
  overlayCard?: {
    text: string;
  };
  voiceCommand?: string;
  appUIType?: string;
  disruptionImages?: string[];
  dashboardData?: any;
  iframeUrl?: string;
  iframeTitle?: string;
  iframeZoom?: number;
  overlayIframeUrl?: string;
  demoLink?: string;
}

const STORM_IMG = "https://images.unsplash.com/photo-1774703299597-05e0e19de41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3Rvcm0lMjBjbG91ZHMlMjBsaWdodG5pbmclMjBjaXR5JTIwc2t5bGluZSUyMGRyYW1hdGljfGVufDF8fHx8MTc3NTY2OTA4N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const TRANQUIL_HOME_IMG = "https://images.unsplash.com/photo-1771680968896-cfd9b8f7244e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFucXVpbCUyMGhvbWUlMjBtb2Rlcm4lMjBleHRlcmlvcnxlbnwxfHx8fDE3NzU2ODIzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const ELENA_IMG = "https://cdn.builder.io/api/v1/image/assets%2F4f55495a54b1427b9bd40ba1c8f3c8aa%2F52d805490b27464bbb1c58f7878030d7?format=webp&width=800&height=1200";
const ELENA_PHONE = "https://images.unsplash.com/photo-1765817444955-fcd53dcdfd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHVzaW5nJTIwc21hcnRwaG9uZSUyMGhvbWUlMjBjb3p5JTIwd2ludGVyfGVufDF8fHx8MTc3NTY2OTA4OHww&ixlib=rb-4.1.0&q=80&w=1080";
const SCOTT_IMG = scottImgFile;
const WAR_ROOM_IMG = "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NzYxMDY3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const MEETING_VIDEO = chapter2Video;
const CHAPTER3_VIDEO = chapter3Video;
const ANNA_VIDEO = annaScreenRecording;
const ANNA_BG_VIDEO = scene13Video;
const JOHNATHAN_BG_VIDEO = chp3IntroVideo;
const JOHNATHAN_IMG = johnathanImgFile;
const ANNA_IMG = annaImgFile;

const EMPTY_SHELVES = "https://images.unsplash.com/photo-1584568694778-54df24a3a7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHN0b3JlJTIwc2hlbHZlcyUyMHNob3J0YWdlfGVufDF8fHx8MTc3NTY2OTA4OXww&ixlib=rb-4.1.0&q=80&w=1080";
const QUEUE = "https://images.unsplash.com/photo-1616573814871-6d9c7eb7c571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3YWl0aW5nJTIwbGluZSUyMHN0b3JlJTIwcXVldWUlMjB3aW50ZXJ8ZW58MXx8fHwxNzc1NjY5MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const WAREHOUSE = "https://images.unsplash.com/photo-1729161632263-a0e0da501895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBwYWxsZXRzJTIwc3BhcnNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3NTY2OTA5MHww&ixlib=rb-4.1.0&q=80&w=1080";

export const screens: Screen[] = [
  // === OPENING ===
  {
    id: "opening",
    chapter: 1,
    type: "opening",
    background: "storm",
    title: "PROTOTYPE",
    subtitle: "Agentic Commerce",
    body: "Establish threat, tone, and urgency before personas appear",
  },

  // === CHAPTER 1 SCREENS ===
  {
    id: "ch1-s1",
    chapter: 1,
    type: "persona",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaName: "Elena",
    body: "Meet Elena, Super Mom, Super Planner.",
  },
  {
    id: "ch1-s2",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena is engaging in online searches and purchases for essential items required by her family, individual needs, even her pets prior to a major winter storm. The urgency is due to several days of confinement to the family home.",
    appUIType: "harvest-splash",
  },
  {
    id: "ch1-s3",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    voiceCommand: "Welcome back, Elena!",
    body: "Elena will be utilizing websites and retail applications on her mobile device.",
    overlayCard: {
      text: "Elena is using her phone and clicks into her Harvest House Loyalty App.",
    },
    appUIType: "harvest-rewards",
  },
  {
    id: "ch1-s4",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena opens her Harvest House application. The application is hyper-personalized and she is greeted with welcome back to Harvest & notified that she has a flu shot scheduled and a scheduled delivery per her subscription for paper towels are upcoming.",
    appUIType: "flu-shot",
  },
  {
    id: "ch1-s4b",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena also sees her paper towel subscription delivery is upcoming.",
    appUIType: "subscription",
  },
  {
    id: "ch1-s5",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    voiceCommand: "Reschedule due to storm?",
    body: "Due to the storm, the application asks if she\u2019d like to delay and re-schedule the flu shot & paper towel delivery to next week due to the storm.",
    appUIType: "reschedule-storm",
  },
  {
    id: "ch1-s6",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena clicks yes to re-schedule both her flu shot & subscription delivery of Paper Towels for next week.",
    appUIType: "reschedule-confirm",
  },
  {
    id: "ch1-s7",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena picks a date & time for the following week to receive her flu shot and reschedules the delivery of her paper towels.",
    appUIType: "date-picker",
  },
  {
    id: "ch1-s8",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena proceeds to add the necessity items she and her family have identified into her online application shopping cart. Items can include: batteries, water, dog food, and pre-cooked meals as per her list of necessities.",
    appUIType: "shopping-cart",
  },
  {
    id: "ch1-s9",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena also needs to renew a prescription for her son\u2019s insulin, which she adds to her online shopping cart using the Harvest House pharmacy applications and clicks refill for pick-up tomorrow.",
    appUIType: "insulin",
  },
  {
    id: "ch1-s9b",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "The Harvest app confirms Elena's prescription order of $35 will be added to her cart at checkout.",
    appUIType: "insulin-confirm",
  },
  {
    id: "ch1-s10",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena looks at her list and is notified that home delivery is not likely, due to the weather. The alternative is pick-up in-store between the hours of 8 am & 10 pm the following day, which she selects.",
    appUIType: "pickup-select",
  },
  {
    id: "ch1-s10a",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena reviews her order summary — subtotal $122.28 with free shipping and $4.17 in taxes for a total of $126.45 — and places her order.",
    appUIType: "order-total",
  },
  // === Processing / Loading beat ===
  {
    id: "ch1-s10b",
    chapter: 1,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    body: "Elena confirms her in-store pick-up selection. The Harvest House app processes her order.",
    appUIType: "loading",
  },

  // === CHAPTER 1 CLOSE ===
  {
    id: "ch1-close-transition",
    chapter: 1,
    type: "transition",
    background: "red",
  },
  {
    id: "ch1-close",
    chapter: 1,
    type: "disruption",
    background: "scene",
    backgroundVideo: chicagoTripsVideo,
    title: "Supply chain breakdown triggers stockouts across 1,200+ stores — critical SKUs unavailable at peak demand",
    disruptionImages: [QUEUE, EMPTY_SHELVES, WAREHOUSE],
  },

  // === CHAPTER 2 SCREENS ===
  {
    id: "ch2-s1",
    chapter: 2,
    type: "persona",
    background: "scene",
    backgroundVideo: MEETING_VIDEO,
    personaImage: SCOTT_IMG,
    secondaryPersonaImage: WAR_ROOM_IMG,
    personaName: "Scott",
    body: "Meet Scott the Vice President of Supply Chain Management (SCM), visually situated in a meeting room using a laptop or projecting information.",
  },
  {
    id: "ch2-s2",
    chapter: 2,
    type: "narrative",
    background: "scene",
    backgroundVideo: MEETING_VIDEO,
    personaImage: SCOTT_IMG,
    personaSmall: true,
    body: "The VP of SCM leads a team meeting, reviewing the dashboard situation with other key personas impacted by a weather emergency\u2014such as the Director of e-commerce, Director of Retail Operations, and Director of In-store Inventory Management. Challenges emerge rapidly and require swift action.",
  },
  {
    id: "ch2-s3",
    chapter: 2,
    type: "dashboard",
    background: "scene",
    backgroundVideo: MEETING_VIDEO,
    personaImage: SCOTT_IMG,
    personaSmall: true,
    body: "Dashboard displays business indicators at critical lows, failing to meet overwhelming demand due to delayed \u201creactive decision-making.\u201d",
    iframeUrl: "https://unifiedaicontroltowerforretail.replit.app",
    overlayCard: {
      text: "The Unified Control Tower aggregates real-time signals across inventory, logistics, and demand channels — surfacing critical disruptions and enabling rapid, coordinated decision-making across the supply chain.",
    },
  },

  // === CHAPTER 3 INTRO ===
  {
    id: "ch3-intro",
    chapter: 3,
    type: "chapterIntro",
    background: "dark",
    backgroundVideo: JOHNATHAN_BG_VIDEO,
    subtitle: "Agentic Orchestration Center",
  },

  // === CHAPTER 3: Johnathan ===
  {
    id: "ch3-s1",
    chapter: 3,
    type: "persona",
    background: "scene",
    backgroundVideo: JOHNATHAN_BG_VIDEO,
    personaImage: JOHNATHAN_IMG,
    personaName: "Johnathan",
    body: "Meet Johnathan, Director of Demand Planning at Harvest House.",
  },
  {
    id: "ch3-s2",
    chapter: 3,
    type: "narrative",
    background: "scene",
    backgroundVideo: JOHNATHAN_BG_VIDEO,
    personaImage: JOHNATHAN_IMG,
    personaSmall: true,
    body: "The Demand Planner approves inventory purchases recommended by Agentic AI e-commerce tools and agents analyzing inventory and forecast needs based on data sources.",
    overlayCard: {
      text: "The Demand Planning Agent uses real-time data from weather APIs, historical sales patterns, and current inventory levels to generate predictive demand forecasts for critical SKUs.",
    },
  },
  {
    id: "ch3-s3",
    chapter: 3,
    type: "dashboard",
    background: "scene",
    backgroundVideo: JOHNATHAN_BG_VIDEO,
    personaImage: JOHNATHAN_IMG,
    personaSmall: true,
    body: "Johnathan is reviewing a dashboard forecasting the inventory demands powered by the planning agent. The agentic solution is providing real-time stock levels needed to meet the current demand variance of necessity products from both online and in-store channels.",
    dashboardData: {
      title: "Local Weather Event",
      type: "planning",
      metrics: [
        { label: "SKU 1243 (Water)", value: "1,200", status: "critical" },
        { label: "SKU 6789 (Batteries)", value: "850", status: "warning" },
        { label: "SKU 9012 (Generators)", value: "420", status: "critical" },
        { label: "Impact on SKUs %", value: "68%", status: "critical" },
      ],
    },
  },
  {
    id: "ch3-s4",
    chapter: 3,
    type: "narrative",
    background: "scene",
    backgroundVideo: JOHNATHAN_BG_VIDEO,
    personaImage: JOHNATHAN_IMG,
    personaSmall: true,
    voiceCommand: "Approve order",
    body: "Johnathon approves the planning agent\u2019s recommendation for the required levels of necessity items with a click to order. The system confirms and notifies the next persona in the business workflow (SCM Manager) who will notify the suppliers to meet the required inventory related to the critical SKUs.",
    appUIType: "approve-order",
  },

  // === CHAPTER 3: Anna ===
  {
    id: "ch3-s5",
    chapter: 3,
    type: "persona",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaName: "Anna",
    body: "Meet SCM Manager Anna.",
  },
  {
    id: "ch3-s6",
    chapter: 3,
    type: "narrative",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaSmall: true,
    body: "Anna is the Manager of Harvest\u2019s House Supply Chain. She is tasked with overseeing the flow of products from suppliers to stores or fulfillment centers.",
  },
  {
    id: "ch3-s7",
    chapter: 3,
    type: "notification",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaSmall: true,
    body: "Anna receives a notification from her SCM dashboard. The notification is an alert mechanism coming from the Supply Chain Agent to approve immediate re-order of critical SKUs from relevant suppliers.",
    notificationCard: {
      icon: "alert",
      title: "Supply Chain Agent",
      message: "Approve immediate re-order of critical SKUs from relevant suppliers.",
      action: "View details",
    },
  },
  {
    id: "ch3-s8",
    chapter: 3,
    type: "dashboard",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaSmall: true,
    voiceCommand: "View incident details",
    body: "Anna clicks \u201cview details\u201d to drill in. Now she sees a consolidated incident overview. It highlights the root cause and shows the in-demand high priority impacted SKUs. It also highlights the risk window which closes at 2pm.",
    dashboardData: {
      type: "incident",
      metrics: [
        { label: "Root Cause", value: "Winter Storm", status: "critical" },
        { label: "Impacted SKUs", value: "847", status: "critical" },
        { label: "Risk Window", value: "Closes 2PM", status: "critical" },
        { label: "Revenue at Risk", value: "$2.4M", status: "critical" },
      ],
    },
  },
  {
    id: "ch3-s9",
    chapter: 3,
    type: "dashboard",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaSmall: true,
    body: "Now Anna clicks the resolve button. The supply risk and inventory analysis agents have already calculated the revenue at risk and the current stock across DCs and stores.",
    iframeUrl: "https://unifiedaicontroltowerforretail.replit.app/dashboard/supply-chain",
    iframeTitle: "Supply chain AI Orchestration Center",
    iframeZoom: 1.5,
    demoLink: "https://lg-kyn-unified-cdp.lemonriver-6b4673f8.centralindia.azurecontainerapps.io",
    overlayCard: {
      text: "The Supply Risk Agent and Inventory Analysis Agent work in tandem, calculating revenue exposure and mapping current stock levels across distribution centers and retail locations in real time.",
    },
  },
  {
    id: "ch3-s10",
    chapter: 3,
    type: "dashboard",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaSmall: true,
    voiceCommand: "Approve recommendation",
    body: "Next, Anna scrolls down to the agent\u2019s recommendation panel where the inventory analysis agent and logistics agent have worked together to propose an emergency reorder plan with the appropriate suppliers who can fulfill on time and on budget. Anna approves the recommendation which triggers the appropriate inventory levels arriving in the DC and stores.",
    iframeUrl: "https://unifiedaicontroltowerforretail.replit.app/dashboard/supply-chain",
    iframeTitle: "Supply chain AI Orchestration Center",
    iframeZoom: 1.5,
    demoLink: "https://lg-kyn-unified-cdp.lemonriver-6b4673f8.centralindia.azurecontainerapps.io",
  },
  // === Processing beat ===
  {
    id: "ch3-s10b",
    chapter: 3,
    type: "narrative",
    background: "scene",
    backgroundVideo: ANNA_BG_VIDEO,
    personaImage: ANNA_IMG,
    personaSmall: true,
    body: "The system processes Anna\u2019s approved recommendation. Emergency reorder is being dispatched to suppliers.",
    appUIType: "loading",
  },

  // === CHAPTER 3: Elena Finale ===
  {
    id: "ch3-s11",
    chapter: 3,
    type: "narrative",
    background: "scene",
    backgroundVideo: chp1IntroVideo,
    personaImage: ELENA_IMG,
    personaSmall: true,
    voiceCommand: "Order confirmed!",
    body: "The Harvest House app confirms and thanks Elena for her purchase and confirms her order will be ready for in-store pick-up between 8AM-10 PM (the following day).",
    appUIType: "thank-you",
  },

  // === CLOSING ===
  {
    id: "closing",
    chapter: 3,
    type: "closing",
    background: "red",
    title: "Why Kyndryl?",
    subtitle: "Modernize for today. Innovate for tomorrow. Secure everywhere.",
  },

  // === FINAL LOGO SLIDE ===
  {
    id: "closing-logo",
    chapter: 3,
    type: "closingLogo",
    background: "red",
  },
];
