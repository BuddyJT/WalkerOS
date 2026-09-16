# Walker OS Website Draft

This is a static draft website for Walker OS, a proposed downloadable operating system image with Walker preconfigured for Raspberry Pi OS, a lightweight Linux build, or future PC-class builds.

The copy is intentionally framed as a project preview and future release page, not a finished OS, public download, or sales site.

The visual direction is a polished corporate Jarvis-style HUD: amber/orange energy accents, cyan interface lines, black glass panels, clear product sections, and an open-source-friendly command-center feel.

## What is included

- Multi-page product site in `dist/`
- Home, System, Download, Roadmap, Hardware, and FAQ pages
- Custom Walker OS penguin logo, matching favicon, transparent WOS logo export, and a logo assets page
- Future download and release-readiness pages without commerce controls
- Walker OS Lite and Walker OS Full product-positioning sections
- Floating hardware hero artwork with Pi Zero-style boards, Orange/RK-style alternatives, and a laptop running Linux-style Walker OS software
- Start-page AI runtime section covering API-key primary models such as OpenAI or Gemini, plus Ollama local fallback
- Walker voice preview audio sample in `dist/assets/walker-voice-sample.mp3`
- Voice roadmap copy covering offline/free Piper TTS plus optional API voice providers such as ElevenLabs or MiniMax
- Detailed system blueprint based on the Walker OS diagrams and the prior Walker Pi image planning task
- Future roadmap for cars, AR glasses, text-to-speech, speech-to-text, devices, cloud, finance, mobile, and developer modules
- Static JavaScript for roadmap tabs and scroll-floating hardware motion
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
- Decide what part of Walker OS is fully open source and how community contributions should work.
- Add the real contact address in the footer placeholder.
- Decide how image downloads, checksums, release notes, and update channels should work.
- Add real screenshots once Walker OS has a first boot screen, settings page, or console.
- Keep car integrations read-only until safety, liability, and legal requirements are fully understood.
