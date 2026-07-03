# Decision Log

## Decision: Allow browsing before login

- Context: Founder wanted users forced to sign in.
- Options I considered:
  - Force login.
  - Allow browsing first.
- What I chose and why:
  - I allowed browsing because users should understand the product before creating an account.
- What I gave up:
  - Fewer email captures during the first visit.

---

## Decision: Prioritise booking flow

- Context:
  Time was limited.
- Options I considered:
  - Build messaging.
  - Build complete booking flow.
- What I chose and why:
  - Booking is the core feature of the marketplace.
- What I gave up:
  - Users cannot chat yet.

---

## Decision: Use mock data

- Context:
  No backend was provided.
- Options I considered:
  - Static mock data.
  - Build an API.
- What I chose and why:
  - Mock data allowed focus on frontend functionality.
- What I gave up:
  - Persistent data.

---

## Decision: Typed data model

- Context:
  Future backend integration.
- Options I considered:
  - Loose objects.
  - Shared TypeScript interfaces.
- What I chose and why:
  - Interfaces make future API integration easier.
- What I gave up:
  - Slightly more setup.

---

## Decision: Responsive layout

- Context:
  Users may browse on phones.
- Options I considered:
  - Desktop only.
  - Responsive design.
- What I chose and why:
  - Accessibility across devices.
- What I gave up:
  - Extra styling time.

---

## Decision: Skip fake activity counters

- Context:
  Founder requested urgency indicators.
- Options I considered:
  - Fake counters.
  - Honest interface.
- What I chose and why:
  - Honest data builds user trust.
- What I gave up:
  - Artificial urgency.

---

## Decision: Modern dark theme

- Context:
  Founder wanted a premium feel.
- Options I considered:
  - Light theme.
  - Dark modern interface.
- What I chose and why:
  - Dark styling highlights product cards and feels modern.
- What I gave up:
  - Some users may prefer light mode.

---

## Decision: MVP over feature overload

- Context:
  Sprint deadline.
- Options I considered:
  - Build every requested feature.
  - Build fewer features well.
- What I chose and why:
  - A polished MVP is more valuable than unfinished features.
- What I gave up:
  - Wishlist, maps, reviews and referrals.