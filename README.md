# Walker OS Website Draft

This is a static draft website for Walker OS, a proposed downloadable operating system image with Walker preconfigured for Raspberry Pi OS or a lightweight Linux build.

The copy is intentionally framed as a concept and early-access product, not a finished OS or live checkout.

The visual direction is a polished corporate Jarvis-style HUD: amber/orange energy accents, cyan interface lines, black glass panels, clear product sections, and an open-source-friendly command-center feel.

## What is included

- Multi-page product site in `dist/`
- Home, System, Download, Roadmap, Hardware, and FAQ pages
- Custom Walker OS penguin logo, matching favicon, and a logo assets page
- Digital download and founder-kit pricing mockups
- Walker OS Lite and Walker OS Full product-positioning sections
- Detailed system blueprint based on the Walker OS diagrams and the prior Walker Pi image planning task
- Future roadmap for cars, AR glasses, text-to-speech, speech-to-text, devices, cloud, finance, mobile, and developer modules
- Static JavaScript for roadmap tabs, mocked checkout messaging, and an early-access form placeholder
- GitHub Pages workflow that publishes the `dist/` folder
- Sites-compatible `.openai/hosting.json` with `dist` as the static directory
- MIT license placeholder for an open-source-friendly repo

## Preview locally

Open `dist/index.html` directly in a browser, or run:

```bash
python3 -m http.server 4173 -d dist
```

Then visit:

```text
http://localhost:4173
```

## GitHub Pages

After pushing this repository to GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set the source to GitHub Actions.
4. Run the `Deploy static site to GitHub Pages` workflow.

## Next product steps

- Choose the first real OS base: Raspberry Pi OS, Linux Lite, or another lightweight Linux distribution.
- Decide exact Lite vs Full storage rules: local-only, personal cloud, business cloud, and hybrid sync behavior.
- Decide what part of Walker OS is fully open source and what paid convenience bundles include.
- Replace mock checkout buttons with Stripe, Gumroad, Lemon Squeezy, or another payment provider.
- Decide how signed downloads, checksums, license keys, and update channels should work.
- Add real screenshots once Walker OS has a first boot screen, settings page, or console.
- Keep car integrations read-only until safety, liability, and legal requirements are fully understood.
