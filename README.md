# FH Residency — Private Studio

A cinematic, editorial property showcase for a specific studio at FH Residency, Jumeirah Village Triangle, Dubai.

## Experience structure

1. **Hero** — real apartment walkthrough with immediate WhatsApp access.
2. **01 / The Studio** — original user-supplied photographs only; no duplicate gallery.
3. **02 / The Possibility** — reality-to-AI reveal, followed by seven individual AI visualisations.
4. **Building at a Glance** — concise building facts.
5. **03 / The Building** — vertical/floor storytelling.
6. **04 / Life Inside** — official building amenities.
7. **05 / The Base** — interactive map, destination routes and published approximate drive times.
8. **06 / One Possible Day** — illustrative lifestyle sequence and sticky viewing card.
9. **07 / Your Visit** — See → Imagine → Understand → Visit.
10. **FAQ** — practical pre-viewing questions.
11. **08 / Come See It** — WhatsApp-first private viewing enquiry.

## Image truth model

- `real-*.jpg` = original property/building photographs supplied by the owner.
- `ai-*.jpg` = AI furnishing/design visualisations.
- The AI images are presented as concepts and are explicitly labelled as such.
- `real-studio-slider.jpg` is a crop of the original empty-studio photograph for the 16:9 reality-to-AI reveal. It is still a real photograph, not generated.

## Publishing

Upload the contents of this folder to the root of the GitHub repository. Do not upload the ZIP itself as the site source.


Building facts and published travel-time estimates are sourced from the official FH Residency website: https://www.fh-residency.ae/


## Contact flow
The viewing form is intentionally WhatsApp-first: name, WhatsApp number, and message. It opens a pre-filled WhatsApp chat to +971 56 787 4295. Contextual CTAs across the page use different pre-filled messages based on what the visitor has just explored.

The site does not include a separate email field or preferred-contact selector.

## Content separation
The real-photo section is the only source for current-property imagery. The AI concept section is explicitly labelled as AI visualisation. The duplicate “A CLOSER LOOK” section was removed so the real photographs are not presented twice.


## V7 experience update

This edition uses the Hansali redesign as an interaction reference while keeping FH Residency content and imagery separate. The experience now includes:

- Editorial hero with trust signals and contextual WhatsApp CTA
- Real-only apartment section; no duplicate closer-look gallery
- Real-to-AI furnishing reveal followed by seven individual AI concepts
- Building and amenity story
- Location story with Google Maps, destination route cards, and published approximate drive times
- “A day from here” lifestyle sequence, explicitly framed as illustrative
- Sticky decision card and persistent WhatsApp access
- Contextual WhatsApp messages at key emotional transition points
- Final form: name + WhatsApp number + message

WhatsApp destination: +971 56 787 4295 (digits-only value in `app.js`).

The Hansali project was used as a reference for experience architecture—hero CTA treatment, persistent WhatsApp, journey/timeline storytelling, sticky conversion card, and location/route presentation—not for FH imagery, claims, branding, or text.


## Media QA
- Hero video is the original supplied footage slowed to 0.75x; no AI generation or visual alteration was applied.
- AI concept assets are all normalized to 1600×900 (16:9).
- The real-to-AI comparison and AI concept carousel use 16:9 presentation so the AI frames are not forced into portrait/square crops on mobile.
- The hero video retains its original portrait framing rather than being forced into a wide crop.
