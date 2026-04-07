# 🎓 College Event Intelligence & Calendar Dashboard

A smart, AI-powered dashboard designed for college students to aggregate, summarize, and sync university events from official websites to their personal calendars.

## 🚀 Features

- **Smart Scraper**: Automatically extracts academic, social, and deadline events from university pages (e.g., `case.edu`) using Playwright.
- **AI Intelligence Layer**: A provider-agnostic LLM wrapper supporting **OpenAI**, **Gemini**, and **Ollama** to transform raw web text into structured JSON events and comprehensive reports.
- **Timezone Normalization**: Automatically converts scraped UTC dates to the user's local timezone.
- **Google Calendar Sync**: One-click synchronization of scraped events to Google Calendar with default 30-minute reminders.
- **Command Center UI**: A responsive, mobile-first React dashboard featuring:
  - **FullCalendar Integration**: Monthly, weekly, and daily views of all events.
  - **AI Report Section**: High-level executive summaries of the event landscape.
  - **Custom Reminders**: Ability to add personal events and deadlines.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons, FullCalendar.js, TanStack Query.
- **Backend**: Node.js, Express, TypeScript.
- **Database**: PostgreSQL via Prisma ORM.
- **AI/ML**: OpenAI / Google Gemini / Ollama.
- **Integration**: Playwright (Scraping), Google OAuth2, Google Calendar API.

## ⚙️ Setup & Installation

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/rohitvijapure/college-event-dashboard.git
cd college-event-dashboard
\`\`\`

### 2. Backend Configuration
Navigate to the backend folder and install dependencies:
\`\`\`bash
cd backend
npm install
\`\`\`

Create a \`.env\` file in the \`backend/\` directory:
\`\`\`env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_REDIRECT_URI="http://localhost:5000/auth/google/callback"
LLM_PROVIDER="openai" # options: openai, gemini, ollama
OPENAI_API_KEY="your_openai_key"
GEMINI_API_KEY="your_gemini_key"
OLLAMA_BASE_URL="http://localhost:11434"
FRONTEND_URL="http://localhost:5173"
SESSION_SECRET="your_random_secret"
ADMIN_EMAIL="rohitvijapure@gmail.com"
\`\`\`

Initialize the database:
\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

Start the server:
\`\`\`bash
npm run dev
\`\`\`

### 3. Frontend Configuration
Navigate to the frontend folder and install dependencies:
\`\`\`bash
cd ../frontend
npm install
\`\`\`

Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## 📁 Project Structure
\`\`\`
.
├── backend/
│   ├── src/
│   │   ├── config/      # DB & Passport config
│   │   ├── controllers/ # Request handlers
│   │   ├── middleware/   # Auth & Validation
│   │   ├── routes/       # API Endpoints
│   │   ├── services/     # AI, Scraper, Calendar logic
│   │   └── types/        # TypeScript interfaces
│   └── prisma/           # Database schema
└── frontend/
    ├── src/
    │   ├── components/   # UI Components (Calendar, Report, etc.)
    │   ├── services/      # API interaction layer
    │   ├── types/         # Frontend interfaces
    │   └── App.tsx        # Main Application Entry
\`\`\`

## 📜 License
MIT
