
<img width="1915" alt="Screenshot 2025-04-09 at 00 07 46" src="https://github.com/user-attachments/assets/34bf1a09-654a-4ae0-9542-dad733d6c8ff" />

# ContentForge
> Inspired Landing Page
A clean, modern landing page built with Astro, inspired by the ContentForge headless CMS website.

📝 Project Description
This is a simple landing page implementation that recreates the design and layout of the ContentForge website. The page features a clean, professional appearance with a hero section, feature highlights, and call-to-action elements.

📁 Project Structure
```text
/
├── public/
│   ├── images/
│   │   ├── dashboard.png
│   │   └── content-editor.png
├── src/
│   ├── components/
│   │   ├── CTA.astro
│   │   ├── Features.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Footer.astro
│   │   └── Pricing.astro
│   │   └── Script.tsx
│   │   └── Testimonials.astro
│   │   └── Workflow.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│   └── styles/
│       └── global.css
├── package.json
└── astro.config.mjs
└── tailwind.config.mjs
```
🧞 Commands
All commands are run from the root of the project, from a terminal:

## Command	Action<img width="1915" alt="Screenshot 2025-04-09 at 00 07 28" src="https://github.com/user-attachments/assets/301011c6-a435-4b61-acac-c182fbfd11a5" />

```text
| Command               | Description                               |
|-----------------------|-------------------------------------------|
| `pnpm install`        | Installs dependencies                     |
| `pnpm dev`            | Starts local dev server at `localhost:4321` |
| `pnpm build`          | Builds your production site to `./dist/`  |
| `pnpm astro -- --help`| Get help using the Astro CLI              |
```

🎨 Implementation Details
The landing page includes the following sections:

## 🚀 Getting Started

# Create a new project with the minimal Astro template
```bash
git clone git@github.com:persona25/simplecms-lp.git
```

# Navigate to the project directory
```bash
cd simplecms-lp
```
# Install dependencies
```bash
pnpm install
```

# Add TailwindCSS (optional)
```bash
pnpm astro add tailwind
```

# Start the development server
```bash
pnpm dev
```
## 📝 Implementation Notes

The design uses a dark theme for the dashboard preview section
The page is fully responsive for mobile and desktop viewing
Minimal animations can be added for improved user experience
The installation command section uses a monospace font with copy button functionality
