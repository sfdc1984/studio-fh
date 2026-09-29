# FH Residency — Unit 404

Cinematic static property showcase for a studio at FH Residency, Jumeirah Village Triangle, Dubai.

## Included
- Actual apartment photos and walkthrough video
- Actual vs furnished concept slider
- FH Residency building / amenities story
- JVT / Dubai location layer
- Market Evidence section linking to current DXB Interact JVT market data and the official Dubai Land Department Rental Index
- Private viewing mailto enquiry

## Important market-data note
The site intentionally does not hard-code a single "JVT average rent". DXB Interact's public JVT page exposes market/rental trend views, while some property-level numbers require RERA access. The site therefore links to the live source and to DLD's official Rental Index rather than implying that one community-wide number represents this specific studio.

## Before publishing
1. Replace `YOUR-EMAIL@example.com` in `app.js` with the preferred enquiry email.
2. Upload the extracted contents to the GitHub repository root.
3. Connect the repository to Vercel.


## V3 asset correction
The `01 / THE STUDIO` gallery uses only user-supplied real photographs. The AI furnishing montage is used only in `02 / THE POSSIBILITY`.


## Final image separation

This final package deliberately separates the truth layer from the concept layer:

- `real-*.jpg` = user-supplied original property/building photographs only.
- `apartment-walkthrough.mp4` = user-supplied real apartment walkthrough.
- `ai-*.jpg` = AI furnishing visualisations only.
- The `01 / THE STUDIO` section uses only the real assets.
- The `02 / THE POSSIBILITY` section uses only the AI assets in a swipe/drag carousel.
- The previous composite `vision-montage.png` is intentionally excluded from this package to prevent accidental mixing.

The AI carousel is labelled `AI VISUALISATION` on every slide and explicitly states that it is not a photograph of the current apartment.

## Final AI interaction
The `02 / THE POSSIBILITY` section now uses a reality-to-AI reveal directly on the image. It opens on the real empty studio photograph. The vertical drag handle sits on the image itself; dragging it reveals the AI furnished living/bedroom concept. Below that reveal is a separate full-frame AI concept gallery for kitchen, entry, wardrobe, bathroom, shower, kitchen storage, and balcony. AI images use `object-fit: contain` so their original compositions are not cropped or cramped.

Image rule: `real-*` assets are original photographs; `ai-*` assets are AI visualisations. They are not mixed in the real-photo section.
