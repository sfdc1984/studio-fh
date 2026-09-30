# QA report — take-charge pass

## Asset audit
- Replaced the previous real-property gallery assets with the newer original 4032×2268 photographs supplied in the Replit project.
- Original photos used: IMG_7890, IMG_7887, IMG_7888, IMG_7895, IMG_7892, IMG_7893, IMG_7894, IMG_7886.
- AI assets remain separate and unchanged.
- Replaced the previous hero video with the supplied original Unit 404 kitchen footage and changed the label so it no longer describes an exterior view as a Unit 404 view.

## Source checks
- No Day-in-Your-Life section.
- AI carousel contains AI assets only.
- Real gallery contains original property/building photographs only.
- CTA immediately below AI carousel remains the primary WhatsApp-green rectangular action.
- Address signal numbers are explicitly styled and cannot fall back to browser-default blue links.
- Icon sizes are explicitly constrained.
- WhatsApp icons are constrained to 18px.
- Existing WhatsApp number remains 971567874295.

## Automated checks
- `node --check app.js`: run before packaging.
- Asset-reference audit: all referenced local files must exist.
- HTML duplicate-ID audit: no duplicates expected.
- ZIP integrity: run before delivery.

## Visual browser note
The available headless Chromium runtime in this environment hangs before producing a screenshot, so no claim of successful automated visual-browser validation is made. The package was instead checked structurally and against the supplied reference screenshots.


### Balcony-view update
- Added `#balcony-view` between the real studio gallery and AI possibility section.
- Uses `images/balcony-view-real.mp4`, a 1600x900 web-optimized crop from the supplied original Unit 404 video.
- Uses `images/balcony-view-poster.jpg` for poster/loading state.
- Keeps the video explicitly in the REAL media layer; AI assets remain separate.
- Added desktop/mobile responsive styling and a `View` navigation link.
- Hero video label remains `REAL WALKTHROUGH · UNIT 404`; the balcony film is separately labelled `REAL VIEW · BALCONY`.
