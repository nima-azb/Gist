# Gist — AI-Powered PDF Summarization

Gist AI is a SaaS web application that transforms lengthy PDF documents into concise, easy-to-read summaries using AI. Users can upload PDF files, generate structured summaries, manage their documents through a personal dashboard, and export generated content in Markdown format.

---

## Features

- 📝 GPT-4 summaries with key points and insights from any PDF
- 📊 User dashboard to manage and revisit all summaries
- 🗂️ Markdown export ready to publish as a blog post
- 💰 Basic and Pro subscription plans via Stripe
- 🔒 Protected routes, secure uploads, and authenticated API endpoints

---

## Tech Stack

- 🚀 **Next.js 15** — App Router, Server Components, and Server Actions
- 🔑 **Clerk** — Authentication with Passkeys
- 🤖 **GPT-4 (Llama) + Langchain** — AI summarization and PDF parsing
- 💾 **NeonDB** — Serverless PostgreSQL for summaries and user data
- 📤 **UploadThing** — Secure PDF uploads up to 32MB
- 💳 **Stripe** — Subscription and payment management and webhook handling
- 🎨 **TailwindCSS v4 + ShadcN UI** — Responsive, utility-first styling
- 🚀 **Vercel** — Production deployment

---

## Running Locally

```bash
git clone https://github.com/nima-azb/Gist
cd Gist
```

Create a `.env.local` file and fill in the following:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=


# AI
OPENAI_API_KEY=
Llama_API_KEY=

# NeonDB
DATABASE_URL=

# UploadThing
UPLOADTHING_TOKEN=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Install Dependencies

```bash
  npm install
```

start the dev server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```
