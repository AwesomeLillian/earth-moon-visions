# Clean up image presentation

## Changes
- Remove the photo showing a person from Computer Peripherals, leaving the clean hardware image.
- Give Server Room Setup, Toners and Cartridges, and Paving and Kerbs category-specific image framing so each subject is larger, centered, and easier to understand without distortion.
- Crop the source logo into a wide, clean brand image and use compact fixed-size logo containers in the header and footer so neither area stretches.
- Make the landing image larger, remove its decorative frame on mobile, and extend it edge-to-edge while preserving the complete scene.
- Keep the existing text, service organization, colors, and overall page style unchanged.

## Verification
- Check the page at mobile and desktop sizes.
- Confirm the removed photo is gone, logos are clean, key images are readable, and no content overlaps.

## Technical details
- Create a cropped logo file under `/public/images/` so it deploys with the site.
- Add per-service image-position settings rather than applying one crop style to every photo.
