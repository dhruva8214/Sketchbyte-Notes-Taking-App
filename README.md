<div align="center">

# âœ¦ Sketchbyte

### The Visual Workspace for Every Student

**Whiteboard Â· Code Diagrams Â· AI Study Planner â€” 100% Free Forever**

[![Live App](https://img.shields.io/badge/Live%20App-sketchbyte.vercel.app-7c3aed?style=for-the-badge&logo=vercel)](https://sketchbyte.vercel.app)
[![Download](https://img.shields.io/badge/Download-Android%20APK-86efac?style=for-the-badge&logo=android)](https://github.com/dhruva8214/Sketchbyte-Notes-Taking-App/releases)
[![License](https://img.shields.io/badge/License-MIT-67e8f9?style=for-the-badge)](LICENSE)

</div>

---

## ðŸ“¸ Features

| Feature | Description |
|---|---|
| ðŸŽ¨ **Infinite Canvas** | Pan, zoom, draw on an infinite dark canvas with no size limits |
| âœï¸ **9 Drawing Tools** | Rectangle, circle, arrow, pencil, text, eraser, select & pan |
| ðŸ’¾ **Auto-Save** | Everything saved instantly in your browser, no account needed |
| ðŸ“¤ **Export Anywhere** | Export as PNG, SVG, PDF or `.antigravity` JSON files |
| ðŸ—‚ï¸ **Multiple Boards** | Unlimited canvas boards â€” create, name and switch in one click |
| ðŸ§© **Dev Templates** | Flowcharts, DB schemas, DSA visualizations ready to go |
| âŒ¨ï¸ **Keyboard Shortcuts** | Every tool has a hotkey â€” Ctrl+Z undo, Delete, Ctrl+A select all |
| ðŸ’» **Code â†’ Diagram** | Paste code and get an instant class diagram â€” 12+ languages |
| ðŸ“… **AI Study Planner** | Smart timetable, spaced repetition, streak tracker, 100% offline |
| ðŸ”’ **Firebase Auth** | Google & email sign-in to protect your boards |

---

## ðŸ“± Install on Any Device

Sketchbyte is a **PWA (Progressive Web App)** â€” install it like a native app on any platform in under 60 seconds. No App Store required.

| Platform | Method |
|---|---|
| ðŸ¤– **Android** | Chrome â†’ Menu (â‹®) â†’ Add to Home Screen |
| ðŸŽ **iPhone / iPad** | Safari â†’ Share â†’ Add to Home Screen |
| ðŸªŸ **Windows** | Chrome/Edge â†’ Install icon in address bar |
| ðŸ **macOS** | Chrome â†’ Install icon in address bar |

ðŸ‘‰ **Full install guide:** [sketchbyte.vercel.app/download](https://sketchbyte.vercel.app/download)

---

## ðŸ“¦ Download APK

### Option 1 â€” GitHub Releases (Automated, Signed)

Every version tag automatically builds a signed `.apk` via GitHub Actions (Bubblewrap TWA):

```bash
git tag v1.0.0
git push origin v1.0.0
```

The APK will appear under [**Releases**](https://github.com/dhruva8214/Sketchbyte-Notes-Taking-App/releases) within ~5 minutes.

### Option 2 â€” PWABuilder (Quick, No Setup)

1. Go to [pwabuilder.com](https://www.pwabuilder.com/)
2. Paste `https://sketchbyte.vercel.app`
3. Select **Android** â†’ Generate â†’ Download `.apk`

### App Stores

| Store | Link | Status |
|---|---|---|
| ðŸ™ GitHub Releases | [View Releases](https://github.com/dhruva8214/Sketchbyte-Notes-Taking-App/releases) | âœ… Auto-published |
| ðŸŸ  Aptoide | [Developer Portal](https://www.aptoide.com/developer) | Upload APK |
| ðŸ”µ APKPure | [Developer Portal](https://developer.apkpure.com) | Upload APK |

---

## ðŸ› ï¸ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Run Locally

```bash
# Clone the repo
git clone https://github.com/dhruva8214/Sketchbyte-Notes-Taking-App.git
cd Sketchbyte

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Output is in `dist/`. Ready to deploy on Vercel, Netlify, or any static host.

---

## ðŸ“¦ Setting Up APK Builds (GitHub Actions)

The workflow in `.github/workflows/release.yml` automatically builds a signed APK on every `v*` tag push.

### One-time Setup

**1. Generate your signing keystore:**
```powershell
# Run this script (requires Java)
.\scripts\generate-keystore.ps1
```

**2. Add 4 GitHub Secrets** (repo â†’ Settings â†’ Secrets â†’ Actions):

| Secret | Value |
|---|---|
| `KEYSTORE_BASE64` | Contents of `keystore-base64.txt` |
| `KEY_ALIAS` | `sketchbyte` |
| `KEYSTORE_PASSWORD` | Your chosen password |
| `KEY_PASSWORD` | Your chosen key password |

**3. Publish a release:**
```bash
git tag v1.0.0
git push origin v1.0.0
```

> âš ï¸ Never commit `*.keystore` or `keystore-base64.txt` to Git â€” they are in `.gitignore`.

---

## ðŸ—ï¸ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Canvas | Konva / React-Konva |
| Styling | Vanilla CSS + CSS-in-JS |
| Auth | Firebase (Google + Email) |
| PWA | vite-plugin-pwa + Workbox |
| Android | Bubblewrap TWA (GitHub Actions) |
| State | Zustand |
| Router | React Router v7 |
| Deploy | Vercel |

---

## ðŸ“ Project Structure

```
src/
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ Landing.tsx        # Home page
â”‚   â”œâ”€â”€ DownloadPage.tsx   # Download + install guide
â”‚   â”œâ”€â”€ CanvasApp.tsx      # Whiteboard app
â”‚   â”œâ”€â”€ CodeToDiagramPage  # Code â†’ Class Diagram
â”‚   â”œâ”€â”€ StudyPlannerPage   # AI Study Planner
â”‚   â””â”€â”€ AuthPage.tsx       # Login / Register
â”œâ”€â”€ canvas/                # Konva canvas components
â”œâ”€â”€ components/            # Shared UI components
â”œâ”€â”€ store/                 # Zustand state stores
â”œâ”€â”€ utils/                 # Diagram generator, code parser
â””â”€â”€ firebase/              # Firebase config & auth

.github/workflows/
â””â”€â”€ release.yml            # Auto APK build + GitHub Release

scripts/
â””â”€â”€ generate-keystore.ps1  # Android signing key generator

twa-manifest.json          # Bubblewrap TWA configuration
```

---

## ðŸš€ Deploy

Sketchbyte is deployed on **Vercel** with automatic deployments from `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dhruva8214/Sketchbyte-Notes-Taking-App)

---

## ðŸ‘¤ Author

Built with â¤ï¸ by **Dhruva M** â€” Think Without Limits.

> Sketchbyte is 100% free, forever. No paywalls, no subscriptions. Built for students, by a student.

