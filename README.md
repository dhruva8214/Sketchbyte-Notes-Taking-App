<div align="center">

# ✦ Sketchbyte

### The Visual Workspace for Every Student

**Whiteboard · Code Diagrams · AI Study Planner — 100% Free Forever**

[![Live App](https://img.shields.io/badge/Live%20App-sketchbyte.vercel.app-7c3aed?style=for-the-badge&logo=vercel)](https://sketchbyte.vercel.app)
[![Download](https://img.shields.io/badge/Download-Android%20APK-86efac?style=for-the-badge&logo=android)](https://github.com/dhruva8214/-Antigravity-Notes-Taking-App/releases)
[![License](https://img.shields.io/badge/License-MIT-67e8f9?style=for-the-badge)](LICENSE)

</div>

---

## 📸 Features

| Feature | Description |
|---|---|
| 🎨 **Infinite Canvas** | Pan, zoom, draw on an infinite dark canvas with no size limits |
| ✏️ **9 Drawing Tools** | Rectangle, circle, arrow, pencil, text, eraser, select & pan |
| 💾 **Auto-Save** | Everything saved instantly in your browser, no account needed |
| 📤 **Export Anywhere** | Export as PNG, SVG, PDF or `.antigravity` JSON files |
| 🗂️ **Multiple Boards** | Unlimited canvas boards — create, name and switch in one click |
| 🧩 **Dev Templates** | Flowcharts, DB schemas, DSA visualizations ready to go |
| ⌨️ **Keyboard Shortcuts** | Every tool has a hotkey — Ctrl+Z undo, Delete, Ctrl+A select all |
| 💻 **Code → Diagram** | Paste code and get an instant class diagram — 12+ languages |
| 📅 **AI Study Planner** | Smart timetable, spaced repetition, streak tracker, 100% offline |
| 🔒 **Firebase Auth** | Google & email sign-in to protect your boards |

---

## 📱 Install on Any Device

Sketchbyte is a **PWA (Progressive Web App)** — install it like a native app on any platform in under 60 seconds. No App Store required.

| Platform | Method |
|---|---|
| 🤖 **Android** | Chrome → Menu (⋮) → Add to Home Screen |
| 🍎 **iPhone / iPad** | Safari → Share → Add to Home Screen |
| 🪟 **Windows** | Chrome/Edge → Install icon in address bar |
| 🍏 **macOS** | Chrome → Install icon in address bar |

👉 **Full install guide:** [sketchbyte.vercel.app/download](https://sketchbyte.vercel.app/download)

---

## 📦 Download APK

### Option 1 — GitHub Releases (Automated, Signed)

Every version tag automatically builds a signed `.apk` via GitHub Actions (Bubblewrap TWA):

```bash
git tag v1.0.0
git push origin v1.0.0
```

The APK will appear under [**Releases**](https://github.com/dhruva8214/-Antigravity-Notes-Taking-App/releases) within ~5 minutes.

### Option 2 — PWABuilder (Quick, No Setup)

1. Go to [pwabuilder.com](https://www.pwabuilder.com/)
2. Paste `https://sketchbyte.vercel.app`
3. Select **Android** → Generate → Download `.apk`

### App Stores

| Store | Link | Status |
|---|---|---|
| 🐙 GitHub Releases | [View Releases](https://github.com/dhruva8214/-Antigravity-Notes-Taking-App/releases) | ✅ Auto-published |
| 🟠 Aptoide | [Developer Portal](https://www.aptoide.com/developer) | Upload APK |
| 🔵 APKPure | [Developer Portal](https://developer.apkpure.com) | Upload APK |

---

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Run Locally

```bash
# Clone the repo
git clone https://github.com/dhruva8214/-Antigravity-Notes-Taking-App.git
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

## 📦 Setting Up APK Builds (GitHub Actions)

The workflow in `.github/workflows/release.yml` automatically builds a signed APK on every `v*` tag push.

### One-time Setup

**1. Generate your signing keystore:**
```powershell
# Run this script (requires Java)
.\scripts\generate-keystore.ps1
```

**2. Add 4 GitHub Secrets** (repo → Settings → Secrets → Actions):

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

> ⚠️ Never commit `*.keystore` or `keystore-base64.txt` to Git — they are in `.gitignore`.

---

## 🏗️ Tech Stack

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

## 📁 Project Structure

```
src/
├── pages/
│   ├── Landing.tsx        # Home page
│   ├── DownloadPage.tsx   # Download + install guide
│   ├── CanvasApp.tsx      # Whiteboard app
│   ├── CodeToDiagramPage  # Code → Class Diagram
│   ├── StudyPlannerPage   # AI Study Planner
│   └── AuthPage.tsx       # Login / Register
├── canvas/                # Konva canvas components
├── components/            # Shared UI components
├── store/                 # Zustand state stores
├── utils/                 # Diagram generator, code parser
└── firebase/              # Firebase config & auth

.github/workflows/
└── release.yml            # Auto APK build + GitHub Release

scripts/
└── generate-keystore.ps1  # Android signing key generator

twa-manifest.json          # Bubblewrap TWA configuration
```

---

## 🚀 Deploy

Sketchbyte is deployed on **Vercel** with automatic deployments from `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dhruva8214/-Antigravity-Notes-Taking-App)

---

## 👤 Author

Built with ❤️ by **Dhruva M** — Think Without Limits.

> Sketchbyte is 100% free, forever. No paywalls, no subscriptions. Built for students, by a student.
