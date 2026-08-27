# Duds Beauty Spa — Design Direction

## Three initial approaches

### Theme Name: Quiet Luxury Ritual
Very soft, editorial spa design with warm ivory, blush, and ink, using oversized serif typography, tactile imagery, and an unhurried sense of space.
**Probability:** 0.06

### Theme Name: Botanical Atelier
A refined botanical direction pairing mineral neutrals with muted sage, asymmetrical collage layouts, and hand-drawn organic details to make wellness feel grounded and artisanal.
**Probability:** 0.03

### Theme Name: Rose Meridian
A more expressive fashion-beauty identity with inky plum, blush, and metallic accents, designed around confident editorial contrasts and a stronger appointment-led rhythm.
**Probability:** 0.08

## Chosen approach: Quiet Luxury Ritual

### Design Movement
Contemporary quiet luxury editorial, borrowing from boutique hotel print collateral, tactile beauty campaigns, and modernist European wellness spaces.

### Core Principles
1. Let whitespace signal confidence: the interface should feel composed rather than crowded.
2. Pair intimate, high-quality imagery with precise editorial typography.
3. Use soft structure instead of decorative noise: fine rules, subtle grain, pill-shaped status markers, and restrained shadows.
4. Make every primary action feel like an invitation, not a hard sell.

### Color Philosophy
The palette is anchored in warm ivory and oat so the experience feels calm, breathable, and premium. Duds blush `#EAC4CF` is reserved for moments of care and conversion—primary CTAs, selected states, and small brand signals—while deep cacao ink creates trust and legibility. A muted rosewood accent adds depth without turning the site into an all-pink surface. The malformed blush token in the brief is normalized to `#FFF0EE`.

### Layout Paradigm
Use an editorial, asymmetrical composition: a generous left rail for copy and controls, image-led right panels, offset section intros, and horizontal rhythm rather than a stack of centered cards. The admin area keeps a persistent sidebar and uses a calm dashboard canvas with a strong daily-summary rail.

### Signature Elements
1. A fine vertical “ritual line” motif that connects section labels, steps, and dashboard states.
2. Rounded image windows with soft crop offsets, often paired with a small blush caption tab.
3. Micro-labels in uppercase tracking with a tiny rose dot, used as a brand navigation cue.

### Interaction Philosophy
Interactions should feel tactile and reassuring. Buttons compress slightly on press, selected booking steps become visibly “held,” and mock system actions always produce a clear confirmation toast or state change. Navigation is direct, while secondary actions reveal themselves through soft border and color shifts rather than loud motion.

### Animation
Use 160–260ms ease-out transitions for buttons, tabs, dropdowns, and cards. Hero imagery can drift by a few pixels on hover; section content should reveal with short opacity/translate entrances only when reduced motion is not requested. Avoid looping animation and avoid scaling from zero. Booking confirmation and notification panels may use a calm fade-and-rise transition.

### Typography System
Use `Cormorant Garamond` for display headlines and high-emotion moments, with `DM Sans` for interface text, navigation, labels, and data. Headlines should use compact line-height and occasional italic emphasis; body copy should remain at 15–17px with generous line-height. Data labels use 10–11px uppercase tracking at 0.16em.

### Brand Essence
Duds Beauty Spa is a premium care studio in Reboleira for clients who want beauty and body rituals delivered with warmth, discretion, and professional attention. Personality: **composed, tender, assured**.

### Brand Voice
Headlines are intimate and confident. CTAs are specific and welcoming. Microcopy is concise, transparent, and reassuring—especially around mock booking and payment states.

Example lines:
- “O seu momento de cuidado começa aqui.”
- “Escolha o ritual. Nós cuidamos do resto.”

### Wordmark & Logo
The mark is a simple abstract “D” formed from two offset petal arcs, with a small central opening suggesting breath and movement. The wordmark uses a high-contrast serif for “Duds” and a small tracked sans treatment for “BEAUTY SPA”; never render the brand as a default system wordmark.

### Signature Brand Color
**Duds Blush — `#EAC4CF`**, used as a soft but ownable signal for care, selection, and invitation.

## Implementation reminders

- Portuguese is the default language; PT | EN is always visible in the header and app shell.
- This is frontend-only. All auth, bookings, payments, emails, and dashboards are mock simulations with clear UI states.
- Keep mock data behind service modules so future API calls can replace them without rewriting page components.
- No customer reviews, ratings, or testimonials will be fabricated.

## Style Decisions

- The petal D mark and serif/sans wordmark are deliberately oversized enough to read as a signature, not a utility icon, across public and internal routes.
- Booking and dashboard surfaces continue the same ritual language through rose-dot labels, fine rules, quiet sequencing, and cacao/blush hierarchy.
- The image system is treated as one campaign: repeated assets are varied through crop, scale, and role, with studio atmosphere reserved for spatial storytelling and treatment details reserved for service context.
