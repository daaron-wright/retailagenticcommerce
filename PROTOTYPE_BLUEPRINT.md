# Agentic Commerce Prototype — Narrative & Technical Blueprint

A complete reference document for the Kyndryl "Agentic Commerce" presentation prototype. This is structured to be portable into another codebase: the **story stays the same** (retail / supply chain / winter storm) but the **narrative skeleton is extracted explicitly** so the same pattern can be re-applied to any domain or rebuilt in a different framework.

---

## Part A — Narrative Skeleton (abstract pattern)

The whole prototype follows a reusable 3-act arc. Strip the retail story away and what's left is this skeleton:

### The arc
1. **Act 1 — Consumer urgency.** A normal end-user is going about their day when an external event creates urgency. They use a personalized app to make decisions. Their behavior creates demand signals.
2. **Act 1 close — Disruption reveal.** A macro-level shock is exposed (stockouts, delays, system failure) — visualized through impactful B-roll and a single bold headline.
3. **Act 2 — Operational pain.** A leader/executive sees the disruption through a *reactive* dashboard. The story makes the point that their tools are siloed, lagging, and human-dependent. This is the "before" state.
4. **Act 3 intro — The shift.** A title card introduces the "Agentic Orchestration Center" (or whatever the new system is called). This is the pivot from problem to solution.
5. **Act 3a — Proactive planning.** A planner persona receives proactive AI recommendations, reviews them, and approves. Voice-driven. Click-to-act.
6. **Act 3b — Operational execution.** An execution persona receives a downstream notification, drills into an incident, sees the AI's reasoning, and approves a multi-SKU/multi-supplier action. Includes fine-grained controls (approve, conditional, reject) and an auditable log.
7. **Act 3 close — Loop back to the consumer.** The end-user from Act 1 receives a confirmation — proving the agentic system delivered on the promise made in Act 1.
8. **Closing card** — a brand "tagline + logo" beat.

### The persona archetypes
| Archetype | Role in story | UI surface |
|---|---|---|
| **The Customer** | Triggers demand; appears at start and end | Mobile/consumer app |
| **The Executive** | Sees the macro problem; uses dashboards | Control tower / KPI dashboard |
| **The Planner** | Approves proactive recommendations | Glass card with checklist + agent recommendations |
| **The Operator/Approver** | Resolves the alert; takes the action | Notification → incident view → multi-step approval modal |

### The recurring slide types
| Type | Purpose |
|---|---|
| `opening` | Set tone, establish urgency |
| `chapterIntro` | Title slide for each act |
| `persona` | "Meet X" — large portrait, name, role |
| `narrative` | Persona small + body copy + companion UI (phone or glass card) |
| `notification` | Persona small + body copy + alert card |
| `dashboard` | Persona small + body copy + dashboard panel (KPIs, iframe, or custom panel) |
| `disruption` | Big headline over B-roll, with photo strip |
| `closing` / `closingLogo` | Brand close |
| `transition` | Optional empty beat for pacing |

### The recurring UI motifs
- **Voice command bar** — pulsing teal pill at top-right, tells the audience what the user just said
- **Red tooltip + explainer card** — click an inline marker to reveal an explainer overlay with extra context
- **Phone mockup** — wraps consumer app for a tactile feel
- **Glass card** — frosted dark panel for operator UIs (replaces "real" backend screens with simulated ones)
- **Custom panel** — full bordered modal pinned to the right side of the slide, used for the deeper alert/approval moments
- **Audit trail / event timeline** — proof-of-trace for the agentic actions

### Key narrative beats that must be present (regardless of domain)
1. The consumer's *individual* moment of urgency
2. A macro disruption headline
3. The "reactive dashboard fails" scene
4. The "Agentic Orchestration Center" reveal
5. A proactive recommendation being approved
6. A downstream alert with revenue/risk impact stated in concrete dollars and a hard time deadline
7. A multi-item approval where the user can apply *conditions* (not just yes/no)
8. An auditable submission with "what happens next" outcomes
9. A consumer payoff that closes the loop

---

## Part B — Story Script (slide-by-slide)

Total slides: **31**. Routes: `/opening`, `/chapter-1`, `/chapter-2`, `/chapter-3`, `/closing`.

Format per slide: **id · type · what's on screen · what the audience hears (narrator/voice command) · narrative purpose**.

### OPENING

**1. `opening`** · `opening` · storm timelapse + "Agentic Orchestration Center" overlay
- Purpose: establish threat, tone, urgency before anyone appears.

### CHAPTER 1 — Elena (the customer)

**2. `ch1-s1`** · `persona`
- Image: Elena, large circle portrait
- Copy: "Meet Elena, Super Mom, Super Planner."

**3. `ch1-s2`** · `narrative` + Harvest splash
- Copy: "Elena is engaging in online searches and purchases for essential items required by her family and even her pets prior to a major winter storm. The urgency is due to several days of confinement to the family home."

**4. `ch1-s3`** · `narrative` + Harvest rewards
- Voice: "Welcome back, Elena!"
- Overlay tooltip: "Elena is using her phone and clicks into her Harvest House Loyalty App."

**5. `ch1-s4`** · `narrative` + flu shot screen
- Copy: "Elena opens her Harvest House application. The application is hyper-personalized and she is greeted with welcome back to Harvest. She is notified about her scheduled flu shot and upcoming paper towel subscription delivery."

**6. `ch1-s5`** · `narrative` + reschedule prompt
- Voice: "Reschedule due to storm?"
- Copy: "Due to the storm, the application asks if she'd like to delay and re-schedule the flu shot & paper towel delivery to next week."

**7. `ch1-s6`** · `narrative` + date picker (flip animation)
- Copy: "Elena picks a date & time for the following week to receive her flu shot and reschedules the delivery of her paper towels."

**8. `ch1-s8`** · `narrative` + shopping cart
- Copy: "Elena proceeds to add the items she and her family have identified into her online cart. Items include batteries, water, dog food, and pre-cooked meals."

**9. `ch1-s9`** · `narrative` + insulin refill prompt
- Copy: "Elena also needs to renew a prescription for her son's insulin, which she adds to her online shopping cart. She clicks refill for pickup tomorrow."

**10. `ch1-s9b`** · `narrative` + insulin confirm
- Copy: "The Harvest app confirms Elena's prescription order of $35 will be added to her cart at checkout."

**11. `ch1-s10`** · `narrative` + pickup-only screen
- Copy: "Elena looks at her list and is notified that home delivery is not likely, due to the weather. The alternative is pick-up in-store between the hours of 8 am & 10 pm the following day, which she selects."

**12. `ch1-s10a`** · `narrative` + order total
- Copy: "Elena reviews her order summary and places her order."

**13. `ch1-s10b`** · `narrative` + loading
- Copy: "Elena confirms her in-store pick-up selection. The Harvest House app processes her order."

**14. `ch1-close`** · `disruption`
- Headline: "Supply chain breakdown triggers stockouts across 1,200+ stores — critical SKUs unavailable at peak demand"
- B-roll grid: queue, empty shelves, warehouse

### CHAPTER 2 — Scott (the executive)

**15. `ch2-s1`** · `persona`
- Persona: Scott, VP Supply Chain Management, Harvest House.

**16. `ch2-s2`** · `narrative`
- Copy: "Scott reviews the weather emergency with other company leads, such as the Director of e-commerce, Director of Retail Operations, and Director of In-store Inventory Management. Challenges emerge rapidly and require swift action."

**17. `ch2-s3`** · `dashboard` + ControlTowerDashboard
- Copy: "Dashboard displays business indicators at critical lows, failing to meet overwhelming demand due to delayed 'reactive decision-making.'"
- Tooltip: "The dashboard aggregates reactive signals across inventory, logistics, and demand channels, showcasing critical disruptions in a siloed fashion."

### CHAPTER 3 INTRO

**18. `ch3-intro`** · `chapterIntro`
- Subtitle: "Agentic Orchestration Center"

### CHAPTER 3 — Johnathan (the planner)

**19. `ch3-s1`** · `persona`
- "Meet Johnathan, Director of Demand Planning at Harvest House."

**20. `ch3-s2`** · `narrative`
- Copy: "The demand planner approves inventory purchases recommended by the Agentic Orchestration Center."
- Tooltip: "The Agentic Orchestration Center analyzes inventory and forecast needs proactively based on integrated legacy systems, modern platforms, and third-party applications and data sources."

**21. `ch3-s3`** · `dashboard` (planning view)
- Title: "Local Weather Event"
- Metric tiles: SKU 1243 Water (1,200, critical), SKU 6789 Batteries (850, warning), SKU 9012 Generators (420, critical), Impact on SKUs % (68%, critical)

**22. `ch3-s4`** · `narrative` + approve-order glass card
- Voice: "Approve order"
- Card content: red header "Demand Planning Alert: SKU Reorder Required", overview bullets, 3 SKUs with reorder qty, "Approve Demand" button

### CHAPTER 3 — Anna (the operator)

**23. `ch3-s5`** · `persona`
- "Meet SCM Manager Anna."

**24. `ch3-s6`** · `narrative`
- Copy: "Anna is the Manager of Harvest's House Supply Chain. She is tasked with overseeing the flow of products from suppliers to stores or fulfillment centers."

**25. `ch3-s7`** · `notification`
- Glass alert card: "Supply Chain Agent" / "Approve immediate re-order of critical SKUs from relevant suppliers." / "View details"
- Copy: "Anna receives a notification from the Agentic Orchestration Center..."

**26. `ch3-s8`** · `dashboard` (incident view)
- Voice: "View incident details"
- Metric tiles: Root Cause (Winter Storm), Impacted SKUs (3), Risk Window (Closes 2PM), Revenue at Risk ($2.4M)

**27. `ch3-s9`** · `dashboard` + SKUAlertPanel custom panel
- Panel header: "Critical : Revenue Impact Due to Understock of SKUs"
- Body: "3 Critical SKUs at Southeast DC are understocked due to severe weather disruptions at key suppliers, combined with fuel price spikes."
- Highlight: "Projected revenue impact: $2.4M per day · Ordering window closes at 2:00 PM today."

**28. `ch3-s10`** · `dashboard` + ReorderApprovalPanel custom panel
- Voice: "Approve recommendation"
- Full multi-step approval modal with overview, 3 SKU rows (approve / set conditions / reject), conditions chooser, and a "Confirm & Submit" footer that flips to a "Decisions Submitted" view with audit timeline

**29. `ch3-s10b`** · `narrative` + loading glass card
- Copy: "The system processes Anna's approved recommendation. Emergency reorder is being dispatched to suppliers."

### CHAPTER 3 CLOSE — Elena returns

**30. `ch3-s11`** · `narrative` + thank-you phone screen
- Voice: "Order confirmed!"
- Copy: "The Harvest House app confirms and thanks Elena for her purchase and confirms her order will be ready for in-store pick-up between 8AM-10 PM (the following day)."

### CLOSING

**31. `closing-logo`** · `closingLogo`
- Red full-bleed slide with white Kyndryl logo + "The Heart of Progress"

---

## Part C — Technical Blueprint

### Tech stack
- **React 18 + TypeScript**
- **Vite** for dev/build
- **react-router** (data router) for chapter routing
- **motion (Framer Motion)** for slide transitions
- **Tailwind CSS** (with arbitrary class values) + per-component CSS files
- **lucide-react** for icons
- Static media assets imported directly from `src/imports/`

### Project layout
```
src/
  app/
    App.tsx                       # RouterProvider entry
    routes.tsx                    # createBrowserRouter, 5 chapter routes
    components/
      SlideViewer.tsx             # Main slide rendering engine; reads chapter from path
      chapterRoutes.ts            # Chapter route config (filter functions)
      screens.ts                  # The 31-screen array (single source of truth for the story)
      UpdatedNav.tsx              # Bottom-left chapter pagination + demo link
      DemoTooltip.tsx             # Monitor icon → external interactive demo
      VoiceCommandBar.tsx         # Pulsing teal voice pill
      RedTooltip.tsx              # Inline red marker that opens explainer
      PhoneMockup.tsx             # Phone shell wrapper
      HarvestAppUI.tsx            # All Elena phone screens (16 variants)
      DashboardUI.tsx             # KPI dashboards (planning + incident modes)
      ControlTowerDashboard.tsx   # Chapter 2 live dashboard
      SKUAlertPanel.tsx           # ch3-s9 alert modal
      ReorderApprovalPanel.tsx    # ch3-s10 approval modal (most complex piece)
      GlassNotification.tsx       # Phone notification (chapter 1 reusable)
      NotificationCard.tsx        # Generic red-header notification (legacy/reusable)
      TimelapseBackground.tsx     # Storm video fallback
  imports/                        # Figma-exported assets and videos
  styles/
    index.css                     # Tailwind + global styles
```

### The screen schema
This single TypeScript interface (`screens.ts`) drives the entire deck. Every story beat is a row in the `screens: Screen[]` array:

```ts
interface Screen {
  id: string;                                                      // unique key
  chapter: number;                                                 // 1, 2, or 3
  type: "opening" | "chapterCard" | "chapterIntro" | "persona"
      | "narrative" | "notification" | "appUI" | "overlay"
      | "disruption" | "dashboard" | "closing" | "closingLogo"
      | "transition";
  background: "dark" | "storm" | "red" | "scene";
  backgroundImage?: string;
  backgroundVideo?: string;
  personaImage?: string;
  secondaryPersonaImage?: string;
  personaName?: string;
  personaSmall?: boolean;                                          // toggle small portrait vs large
  title?: string;
  subtitle?: string;
  body?: string;
  notificationCard?: { icon?: string; title: string; message: string; action: string };
  overlayCard?: { text: string };
  voiceCommand?: string;
  appUIType?: string;                                              // chooses HarvestAppUI/AppUI variant
  disruptionImages?: string[];
  dashboardData?: { type: string; title?: string; metrics: { label: string; value: string; status: "good"|"warning"|"critical" }[] };
  iframeUrl?: string;
  iframeTitle?: string;
  iframeZoom?: number;
  overlayIframeUrl?: string;
  demoLink?: string;
  customPanel?: "sku-alert" | "reorder-approval";
}
```

To rebuild this in a new app:
1. Recreate the `Screen` type
2. Build a `<SlideViewer>` that switches on `screen.type`
3. Keep one `screens.ts` file as the entire source of truth for the story
4. Wire up the per-type renderers below

### The renderer dispatch (inside `SlideViewer`)
Pseudocode for the central conditional:
```tsx
{screen.type === "opening"     && <OpeningSlide />}
{screen.type === "chapterCard" && <ChapterCardSlide screen={screen} />}
{screen.type === "chapterIntro"&& <ChapterIntroSlide screen={screen} />}
{screen.type === "persona"     && <PersonaSlide screen={screen} />}
{screen.type === "narrative"   && <NarrativeSlide screen={screen} />}
{screen.type === "notification"&& <NotificationSlide screen={screen} />}
{screen.type === "dashboard"   && <DashboardSlide screen={screen} />}
{screen.type === "disruption"  && <DisruptionSlide screen={screen} />}
{screen.type === "closing"     && <ClosingSlide screen={screen} />}
{screen.type === "closingLogo" && <ClosingLogoSlide />}
```

For `narrative` slides:
- If `screen.appUIType` exists and `chapter === 1`: render inside `<PhoneMockup><HarvestAppUI/></PhoneMockup>`
- Else if `screen.appUIType` exists: render `<AppUI/>` glass card
- Else if `screen.overlayCard`: render `<RedTooltip/>` + `<ExplainerCard/>`

For `dashboard` slides:
- If `customPanel === "sku-alert"` → `<SKUAlertPanel/>` inside the floating panel container
- Else if `customPanel === "reorder-approval"` → `<ReorderApprovalPanel/>`
- Else if `iframeUrl` (and id matches `ch2-s3`) → `<ControlTowerDashboard/>`
- Else if `iframeUrl` → live iframe with chrome
- Else → `<DashboardUI/>` from `dashboardData`

### Routing
```ts
// routes.tsx
[
  { path: "/", element: <Navigate to="/opening" /> },
  { path: "/opening",   element: <SlideViewer chapterPath="opening" /> },
  { path: "/chapter-1", element: <SlideViewer chapterPath="chapter-1" /> },
  { path: "/chapter-2", element: <SlideViewer chapterPath="chapter-2" /> },
  { path: "/chapter-3", element: <SlideViewer chapterPath="chapter-3" /> },
  { path: "/closing",   element: <SlideViewer chapterPath="closing" /> },
  { path: "*",          element: <Navigate to="/opening" /> },
]
```

`chapterRoutes.ts` provides per-chapter `chapterFilter`s that are applied to the global `screens` array to derive what the current chapter shows.

### Navigation behavior
- `ArrowRight` / `Space` advance, `ArrowLeft` go back
- Bottom-right pill arrows do the same
- Bottom-left circles (1/2/3) jump chapters
- On the very last slide, the next-arrow becomes a `MonitorPlay` icon linking to the external demo
- `sessionStorage.slideIndex` preserves position when navigating *back* across a chapter boundary

### Slide canvas
- Fixed aspect ratio: `1194 × 834`
- Centered in viewport with black/white letterboxing depending on background
- `motion.div` + `AnimatePresence` for fade transitions between screens
- Background video lives *outside* `AnimatePresence` so it never restarts mid-chapter

### Design tokens
| Token | Value | Use |
|---|---|---|
| Kyndryl red | `#ff462d` | brand background, chapter cards, closing |
| Alert red | `#dc2626` | critical alerts, destructive states |
| Teal headers | `#2d6a6a` | reorder modal header, audit dots |
| Harvest green | `#2C4A3E` | Harvest app primary color |
| Success green | `#16a34a` / `#22c55e` | confirmation states |
| Body font | Open Sans | nearly all UI |
| Headline font | TWK Everett (+ Light) | closing card |
| Glass card | `bg-white/10` + `backdrop-blur-md` + `border border-white/10` | operator UIs |

---

## Part D — Story Data Bible (preserve when porting)

If you keep the same story, these specifics MUST stay consistent:

### Core 3 SKUs
| SKU | Product | Supplier | Days cover | Stock | Reorder | Unit cost | Total | Priority |
|---|---|---|---|---|---|---|---|---|
| SKU-3371 | Yankee Candle: Large Jar Candles | Newell Brands | 2.0 | 320 cases | 8,000 cases | $6.50 | $52,000 | High |
| SKU-4482 | Fancy Feast Wet Cat Food: 12pk | Purina Direct | 2.1 | 180 cases | 6,000 cases | $9.80 | $58,800 | High |
| SKU-5590 | Dannon Greek Yogurt: 12pk | Danone North America | 1.9 | 95 cases | 5,000 cases | $7.20 | $36,000 | Critical |

### Planning dashboard SKUs (Johnathan view)
- SKU 1243 — Water — 1,200 — Critical
- SKU 6789 — Batteries — 850 — Warning
- SKU 9012 — Generators — 420 — Critical
- Impact on SKUs % — 68% — Critical

### Locations
- **Southeast DC** — primary distribution center
- FL Southeast — 142 stores, 89 at-risk, 38% coverage
- FL Central — 96 stores, 41 at-risk, 57% coverage
- GA South — 64 stores, 12 at-risk, 81% coverage

### Key figures
- Revenue at risk: **$2.4M** per day
- Projected loss if unapproved: **$576k**
- Online channel: $1.4M · In-store: $680K · Pharmacy: $320K
- Ordering deadline: **2:00 PM**
- Auto-escalation: 1:30 PM
- Avg supplier fulfilment: **12 days**
- Reorder target: restore **20 days cover**
- Reference number: **REPR-1775**
- Submission timestamp: 21:36

### Currency / units rule
- All currency in **USD ($)** — never £
- All temperatures in **Fahrenheit (°F)** — never Celsius (e.g. `≤39°F` for chilled transport)
- Times in 12-hour format with PM (never 14:00)

### Reorder conditions per SKU
- **SKU-3371 (Yankee Candle)**
  - Approve only if warehouse humidity ≤60% confirmed for storage
  - Auto-cancel if delivery packaging inspection fails on arrival
  - Reduce to 4,000 cases if confirmed delivery ETA exceeds 18 days
- **SKU-4482 (Fancy Feast)**
  - Approve only if chilled transport (≤39°F) is confirmed by supplier
  - Auto-cancel if temperature log is not attached on delivery
  - Reduce to 3,000 cases if confirmed delivery ETA exceeds 18 days
- **SKU-5590 (Dannon Greek Yogurt)**
  - Approve only if chilled transport (≤39°F) is confirmed by supplier
  - Auto-cancel if temperature log is not attached on delivery
  - Reduce to 2,500 cases if confirmed delivery ETA exceeds 18 days

### Audit timeline (must be kept in this exact sequence)
1. **06:15 — Supplier Risk Monitoring Agent** — Severe weather event detected; primary regional supplier affected. 2 backup suppliers flagged due to tariffs and rising oil prices. 3 suppliers suspended.
2. **06:18 — Inventory Analysis Agent** — 3 critical SKUs at Southeast DC identified below threshold. Avg supplier fulfilment: 12 days.
3. **06:19 — Inventory Analysis Agent** — Emergency reorder quantities calculated to restore 20-day cover. Projected revenue loss if unapproved: $576k.
4. **06:20 — Alert Dispatch Agent** — Alert dispatched to Supply Chain Manager dashboard. Ordering window closes 2:00 PM.
5. **11:05 — Supply Chain Manager** — Notification viewed.
6. **11:08 — Supply Chain Manager** — Emergency Reorder Approval modal opened.
7. **11:12 — Supply Chain Manager** — Decisions submitted: 3 of 3 approved. Ref: REPR-1775.

### Voice command lines (in order)
1. "Welcome back, Elena!"
2. "Reschedule due to storm?"
3. "Approve order"
4. "View incident details"
5. "Approve recommendation"
6. "Order confirmed!"

### Agent name palette
- Supplier Risk Monitoring Agent
- Inventory Analysis Agent
- Alert Dispatch Agent
- Supply Chain Agent
- Planning Agent
- Logistics Agent

### Personas (full)
| Name | Role | Company | Appears in |
|---|---|---|---|
| Elena | Customer / "Super Mom, Super Planner" | (consumer) | Ch1, Ch3 finale |
| Scott | VP Supply Chain Management | Harvest House | Ch2 |
| Johnathan | Director of Demand Planning | Harvest House | Ch3 |
| Anna | SCM Manager | Harvest House | Ch3 |

---

## Part E — Porting Guide (how to reapply this in another codebase)

### If the new app is also React/Vite
1. Copy `src/app/components/screens.ts` and `chapterRoutes.ts` as-is
2. Recreate `SlideViewer.tsx` and the type-dispatch
3. Reimplement each slide-type renderer (the smallest set you need: persona, narrative, notification, dashboard, disruption, opening, chapterIntro, closingLogo)
4. Wire each `appUIType` to the right `HarvestAppUI` or `AppUI` variant
5. Carry over the two custom panels (`SKUAlertPanel`, `ReorderApprovalPanel`) — they are the centerpiece
6. Reuse design tokens from Part C

### If the new app is a different framework
- Treat `screens.ts` as a portable JSON-like manifest. Translate to the target framework's component model.
- The narrative skeleton (Part A) is what survives — type names, props, and CSS classes are incidental.
- Mandatory components in the new app: a slide engine, a persona slide, a glass card pattern, a custom approval modal pattern, a phone mockup, and a voice command pill.

### If the new app reuses the *story* but a different domain
- Keep all 31 slide ids and their `type`s
- Replace `screens.ts` body copy with the new domain
- Replace persona images, SKU table, and the three custom panels' content
- Keep the structure of: notification → incident view → multi-row approval with conditions → submitted view with audit
- Keep voice command lines as 6 short phrases that mirror the user's actions

---

## Caveats / Known inconsistencies (worth fixing on port)
1. There is no `closing` screen object — the route resolves only to `closing-logo`
2. Slide id `ch1-s7` is skipped (jump from `ch1-s6` to `ch1-s8`)
3. Some imported Figma panels in `SlideViewer` and the legacy `NotificationCard` are unused
4. `ControlTowerDashboard` uses Florida/Georgia data but the rest of the story centers on "Southeast DC" — normalize if precision matters
5. Body copy uses both "Jonathan" and "Johnathan" — pick one when porting

---

## Files to recreate, ranked by importance
1. `src/app/components/screens.ts` — the entire story
2. `src/app/components/SlideViewer.tsx` — the engine
3. `src/app/components/ReorderApprovalPanel.tsx` — the most complex interaction
4. `src/app/components/SKUAlertPanel.tsx` — the secondary modal
5. `src/app/components/HarvestAppUI.tsx` — Elena's app
6. `src/app/components/DashboardUI.tsx` — KPI dashboard
7. `src/app/components/ControlTowerDashboard.tsx` — Chapter 2 live dashboard
8. `src/app/components/PhoneMockup.tsx` — phone shell
9. `src/app/components/VoiceCommandBar.tsx` — voice pill
10. `src/app/components/UpdatedNav.tsx` + `chapterRoutes.ts` — chapter navigation
