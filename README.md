# Personal Portfolio — Full-Stack

A full-stack personal portfolio site:

- **Frontend** — Plain HTML, CSS, and JavaScript (no build step required)
- **Backend** — Node.js + Express REST API
- **Database** — MongoDB (via Mongoose) for projects, skills, and contact messages

```
portfolio-app/
├── backend/          Express API (projects, skills, contact)
│   ├── config/db.js
│   ├── middleware/requireAdmin.js
│   ├── models/        Project, Skill, Message
│   ├── routes/        projects, skills, contact
│   ├── seed.js         sample data loader
│   ├── server.js
│   └── package.json
└── frontend/         Static site
    ├── index.html
    ├── css/style.css
    └── js/ (config.js, main.js)
```

The frontend fetches `/api/projects` and `/api/skills` from the backend and
renders them dynamically. The contact form posts to `/api/contact`, which
saves messages in MongoDB.

---

## 1. Prerequisites

- [Node.js](https://nodejs.org/) 18+
- A MongoDB database — either:
  - **Local MongoDB** (`mongod` running on `localhost:27017`), or
  - **MongoDB Atlas** free tier (recommended — https://www.mongodb.com/cloud/atlas)

---

## 2. Backend setup (local)

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

```
MONGO_URI=mongodb://localhost:27017/portfolio   # or your Atlas connection string
PORT=5000
CLIENT_ORIGINS=http://localhost:5500,http://127.0.0.1:5500
ADMIN_KEY=pick-a-long-random-string
```

Load sample projects and skills into the database:

```bash
npm run seed
```

Start the API:

```bash
npm run dev     # with nodemon (auto-restart)
# or
npm start
```

Visit `http://localhost:5000/` — you should see `{"status":"ok", ...}`.
Try `http://localhost:5000/api/projects` to see the seeded projects as JSON.

### API reference

| Method | Route                  | Auth        | Description                          |
|--------|------------------------|-------------|---------------------------------------|
| GET    | `/api/projects`        | public      | List all projects                     |
| GET    | `/api/projects/:id`    | public      | Get one project                       |
| POST   | `/api/projects`        | admin key   | Create a project                      |
| PUT    | `/api/projects/:id`    | admin key   | Update a project                      |
| DELETE | `/api/projects/:id`    | admin key   | Delete a project                      |
| GET    | `/api/skills`          | public      | List all skills                       |
| POST   | `/api/skills`          | admin key   | Create a skill                        |
| PUT    | `/api/skills/:id`      | admin key   | Update a skill                        |
| DELETE | `/api/skills/:id`      | admin key   | Delete a skill                        |
| POST   | `/api/contact`         | public      | Submit the contact form               |
| GET    | `/api/contact`         | admin key   | List contact messages                 |
| PUT    | `/api/contact/:id/read`| admin key   | Mark a message as read                |
| DELETE | `/api/contact/:id`     | admin key   | Delete a message                      |

"Admin key" routes require a header: `x-admin-key: <ADMIN_KEY from .env>`.

Example — add a project with `curl`:

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "x-admin-key: YOUR_ADMIN_KEY" \
  -d '{
    "title": "My New Project",
    "description": "What it does and why it is interesting.",
    "tech": ["React", "Express", "MongoDB"],
    "liveUrl": "https://example.com",
    "repoUrl": "https://github.com/you/project",
    "featured": true,
    "order": 0
  }'
```

---

## 3. Frontend setup (local)

The frontend is static — no build step. Open `frontend/js/config.js` and
confirm the API URL points at your backend:

```js
window.API_BASE_URL = 'http://localhost:5000';
```

Then serve the folder with any static server, e.g.:

```bash
cd frontend
npx serve .          # or: python3 -m http.server 5500
```

Open the printed URL in your browser. Projects and skills should load from
the API, and the contact form should save messages to MongoDB.

> If you open `index.html` directly via `file://`, CORS may block API
> requests. Always use a local server (`npx serve`, `http-server`, the
> VS Code "Live Server" extension, etc.) — and make sure that origin is
> listed in the backend's `CLIENT_ORIGINS`.

---

## 4. Customizing content

- **Your name, title, and bio**: edit the text directly in `frontend/index.html`
  (hero section, `#about`, footer links).
- **Projects & skills**: edit `backend/seed.js` and re-run `npm run seed`,
  or use the API with your `ADMIN_KEY` (see curl example above) to add,
  update, or delete entries without re-seeding.
- **Styling**: colors, fonts, and spacing are controlled by CSS variables at
  the top of `frontend/css/style.css` (`:root` and `[data-theme='light']`).

---

## 5. Deployment

A common, free-tier-friendly setup: **backend on Render**, **database on
MongoDB Atlas**, **frontend on Netlify or Vercel**.

### 5.1 Database — MongoDB Atlas

1. Create a free cluster at https://cloud.mongodb.com.
2. Create a database user (username/password).
3. Under **Network Access**, allow access from anywhere (`0.0.0.0/0`) or
   your hosting provider's IPs.
4. Copy the connection string, e.g.
   `mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`.

### 5.2 Backend — Render (or Railway / Heroku)

1. Push this repo to GitHub.
2. In Render, create a **New Web Service** from your repo, root directory
   `backend/`.
3. Build command: `npm install`. Start command: `npm start`.
4. Add environment variables (from your `.env`):
   - `MONGO_URI` — your Atlas connection string
   - `PORT` — Render sets this automatically, but the app falls back to 5000
   - `CLIENT_ORIGINS` — your deployed frontend URL(s), e.g.
     `https://your-portfolio.vercel.app`
   - `ADMIN_KEY` — a long random string
5. Deploy. Note the resulting API URL, e.g.
   `https://your-portfolio-api.onrender.com`.
6. Run the seed script once against production data, either by temporarily
   setting `MONGO_URI` to the Atlas string locally and running
   `npm run seed`, or by adding projects/skills via the API with your
   `ADMIN_KEY`.

### 5.3 Frontend — Netlify or Vercel

1. Update `frontend/js/config.js`:
   ```js
   window.API_BASE_URL = 'https://your-portfolio-api.onrender.com';
   ```
2. **Netlify**: drag-and-drop the `frontend/` folder into Netlify, or connect
   the repo and set the publish directory to `frontend`.
3. **Vercel**: import the repo, set the root directory to `frontend`, and
   leave the build command empty (it's a static site).
4. Once deployed, copy your frontend URL (e.g.
   `https://your-portfolio.vercel.app`) and add it to the backend's
   `CLIENT_ORIGINS` environment variable on Render, then redeploy the
   backend so CORS allows it.

### 5.4 Verify

- Visit your frontend URL — projects and skills should load.
- Submit the contact form — check MongoDB Atlas (`messages` collection) for
  the new document, or call `GET /api/contact` with your `ADMIN_KEY`.

---

## 6. Tech stack summary

| Layer     | Technology                          |
|-----------|--------------------------------------|
| Frontend  | HTML5, CSS3 (custom properties), vanilla JS (fetch API) |
| Backend   | Node.js, Express, express-validator |
| Database  | MongoDB + Mongoose                  |
| Hosting   | Render/Railway (API), Netlify/Vercel (static site), MongoDB Atlas (DB) |
