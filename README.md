# Sindh Govt Job Eligibility Checker

A single-page web app that lets a Sindh graduate check whether they are eligible for
real government posts — before spending time and money on an application.

Built by **Tasleem Bibi** (final-year BSCS, Sukkur, Sindh, Pakistan) as a unique,
practical project: it encodes the actual domicile, qualification, age and certificate
rules of real Sindh posts, instead of being another generic tutorial clone.

## How to run

No build step and no server needed:

1. Open `index.html` in any modern browser (double-click it, or serve the folder).
2. The form comes pre-filled with the demo example: domicile **Ghotki**, qualification
   **ADS (14-year graduation)**, age **24**, no MS Office certificate.
3. Press **Check Eligibility** to see the result for each of the 6 posts.
4. Change the domicile, qualification, age or certificates and check again.
   Use **Reset to demo example** to go back to the pre-filled profile.

## Features

- Domicile dropdown with Sindh districts (Ghotki, Sukkur, Karachi, Hyderabad,
  Larkana, Khairpur, Shikarpur, Jacobabad, Dadu, and more).
- Highest qualification: Matric, Intermediate, ADS 14-year graduation, BSCS final-year,
  BSCS completed, Masters.
- Age input plus checkboxes for MS Office certificate and 40 WPM typing.
- For each post, a clear **Eligible / Not eligible** result with the single reason
  it failed (for example domicile mismatch, qualification, age, or a missing
  MS Office certificate).
- ADS counts as graduation for graduation-required posts; a final-year BSCS does
  **not** count as a completed degree yet — the checker handles that correctly.
- Clean, professional design in dark navy and teal (TB branding), mobile-responsive.
  No personal photo, no fake logos.

## The 6 sample posts

Sample data checked November 2026. Always verify on the official advertisement
before applying.

| # | Post | Requirements | Last date | Fee |
|---|------|--------------|-----------|-----|
| 1 | Ghotki District Court Junior Clerk BPS-11 | Intermediate+, Ghotki domicile, age 18–28, MS Office + 40 WPM typing | 25 Nov 2026 | Rs 2,000 (challan) |
| 2 | Ghotki District Court Clerk of the Court BPS-11 | Intermediate+, Ghotki domicile, age 18–28, MS Office + 40 WPM typing | 25 Nov 2026 | Rs 2,000 (challan) |
| 3 | Ghotki District Court English Clerk BPS-11 | Intermediate+, Ghotki domicile, age 18–28, MS Office + 40 WPM typing | 25 Nov 2026 | Rs 2,000 (challan) |
| 4 | Ghotki District Court Assistant Record Keeper BPS-11 | Intermediate, Ghotki domicile, age 21–25, MS Office + 40 WPM typing | 25 Nov 2026 | Rs 2,000 (challan) |
| 5 | SPSC Ad 07/2026 Assistant BS-16 (Sr 8, 23, 33) | Graduation (ADS counts), Sindh domicile | 14 Dec 2026 | Rs 500 per post |
| 6 | HBL Cash Officer (Sukkur region) | Graduation, no experience required | 15 Nov 2026 | No fee |

## Demo result (pre-filled profile)

With the demo profile — Ghotki domicile, ADS graduation, age 24, no MS Office
certificate — the checker shows:

- **Eligible (2):** SPSC Assistant BS-16; HBL Cash Officer.
- **Not eligible (4):** the four Ghotki District Court posts, all failing on the
  missing MS Office certificate (and 40 WPM typing). Tick both certificate boxes
  and they turn eligible.

## Files

- `index.html` — page structure and the profile form
- `style.css` — dark navy / teal styling, mobile-responsive
- `script.js` — the 6 posts and the eligibility rules
- `README.md` — this file

## Note

This is a demo checker. Eligibility data was checked in November 2026, but rules,
last dates and fees can change. Always verify on the official advertisement or
portal (STS / SPSC / the bank's official careers page) before applying.
