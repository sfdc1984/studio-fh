# FH Residency — Private Studio

A cinematic, editorial property showcase for a specific studio at FH Residency, Jumeirah Village Triangle, Dubai.

## Experience structure

1. **Hero** — real apartment walkthrough.
2. **01 / The Studio** — original user-supplied photographs only.
3. **A Closer Look** — real-photo explorer with lightbox.
4. **02 / The Possibility** — reality-to-AI reveal. The first state is the real empty studio; dragging the handle reveals an AI furnished concept.
5. **AI concept carousel** — individual, clean 16:9 AI visualisations only; no real photos mixed into the AI sequence.
6. **Building at a Glance** — concise building facts.
7. **03 / The Building** — vertical/floor storytelling.
8. **04 / Life Inside** — amenities.
9. **05 / The Base** — JVT and published approximate drive times.
10. **06 / Your Visit** — See → Imagine → Understand → Visit.
11. **FAQ** — practical pre-viewing questions.
12. **07 / Come See It** — private viewing enquiry.

## Image truth model

- `real-*.jpg` = original property/building photographs supplied by the owner.
- `ai-*.jpg` = AI furnishing/design visualisations.
- The AI images are presented as concepts and are explicitly labelled as such.
- `real-studio-slider.jpg` is a crop of the original empty-studio photograph for the 16:9 reality-to-AI reveal. It is still a real photograph, not generated.

## Publishing

Upload the contents of this folder to the root of the GitHub repository. Do not upload the ZIP itself as the site source.

Before publishing, replace `YOUR-EMAIL@example.com` in `app.js` with the preferred enquiry email.

Building facts and published travel-time estimates are sourced from the official FH Residency website: https://www.fh-residency.ae/


## Contact flow
The viewing form is intentionally WhatsApp-first: name, WhatsApp number, and message. It opens a pre-filled WhatsApp chat using the destination configured at the top of `app.js`. Replace `971XXXXXXXXX` with the listing contact's WhatsApp number (digits only) before publishing.

The site does not include a separate email field or preferred-contact selector.

## Content separation
The real-photo section is the only source for current-property imagery. The AI concept section is explicitly labelled as AI visualisation. The duplicate “A CLOSER LOOK” section was removed so the real photographs are not presented twice.
