# 🎯 EventBot — AI Voice Event Discovery Agent

EventBot is an AI-powered voice agent that helps you discover events, find the shortest route, and automatically registers you — all through voice commands.

## 🚀 Live Demo
[eventbot-tau.vercel.app](https://eventbot-tau.vercel.app)

## 🎥 What It Does

1. **Voice Interaction** — Speak your preferences, EventBot listens
2. **Smart Event Discovery** — Scrapes Eventbrite, Meetup, Devfolio using Apify
3. **Shortest Route** — Google Maps integration shows distance & time
4. **Auto Registration** — Agent fills and submits event forms for you
5. **Email Monitoring** — Get alerts for event updates via Superplane

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **Zynd AI** | Voice conversation engine |
| **Apify** | Web scraping + form automation |
| **Google Maps API** | Route calculation |
| **Superplane** | Email pipeline & alerts |
| **GitHub Copilot** | AI-assisted development |
| **Node.js + Express** | Backend server |
| **Vercel** | Deployment |

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/deepaknailwal/eventbot.git
cd eventbot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in root directory:

### 4. Run Locally
```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000)

## 🎮 How To Use

1. Open the app
2. Click the **mic button** 🎤
3. Say your event preferences:
   - Category (Tech, Fintech, Startup, Hackathon)
   - City name
   - Date or day
   - Budget (free or paid)
4. EventBot shows top 5 matching events
5. Click **"Register Me"** — agent auto-fills and submits the form
6. Get confirmation instantly!

## 🏆 Sponsor Integrations

### Apify
- Scrapes event platforms (Eventbrite, Meetup, Devfolio)
- Browser automation for auto-registration
- Handles form filling with user details

### GitHub Copilot
- Used throughout development for AI-assisted coding
- Helped generate boilerplate, routes, and API integrations

### Zynd AI
- Core voice conversation engine
- Asks user preferences through natural dialogue
- Reads out event results and confirmations

### Superplane
- Monitors confirmation emails
- Triggers alerts for event updates, cancellations, venue changes

## 📁 Project Structure

eventbot/
├── public/
│   └── index.html      # Voice UI frontend
├── src/
│   ├── scraper.js      # Apify event scraping
│   ├── maps.js         # Google Maps routing
│   └── register.js     # Auto registration bot
├── server.js           # Express backend
├── vercel.json         # Vercel deployment config
└── .env                # API keys (not committed)

## 🔗 Links
- **Live App:** [eventbot-tau.vercel.app](https://eventbot-tau.vercel.app)
- **GitHub:** [github.com/deepaknailwal/eventbot](https://github.com/deepaknailwal/eventbot)
