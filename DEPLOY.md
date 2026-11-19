# Deployment to GitHub Pages

## Prerequisites

- Node.js 22+
- [Bun](https://bun.sh) installed
- A GitHub account

## Setup

### 1. Create a GitHub repository

Create a new repo on GitHub, e.g. `resume`.

### 2. Update the base path

In `vite.config.ts`, update the `base` value to match your repo name:

```ts
base: '/resume/',  // ← change to your repo name
```

If you're using a custom domain or deploying to `<username>.github.io` (user site), set `base: '/'`.

### 3. Install dependencies

```bash
bun install
```

### 4. Test locally

```bash
bun run dev
```

Open http://localhost:5173/cv/ in your browser (or your configured base path).

## Anonymous CV

With the current `/cv/` base path, the anonymous version is available at
`http://localhost:5173/cv/anonymous/` during development and at
`https://<USERNAME>.github.io/cv/anonymous/` after deployment. Both pages are
included in the production build.

The anonymous page uses the same layout, experience and skills, without personal
names, initials, location, contact details or personal GitHub links. Its HTML
metadata and loaded JavaScript also omit personal information. Keep identifying
data in `src/data/profileData.ts`, which only the main page imports.

Use either PDF button and select **Save as PDF** in the browser's print dialog.
The A4 print layout hides navigation and buttons and preserves selectable text.
Disable the browser's **Headers and footers** option to omit the page URL.

## Deploy

### Option A: Automatic via GitHub Actions (recommended)

1. Push the code to your repo's `main` branch:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:<USERNAME>/resume.git
git push -u origin main
```

2. Go to your repo **Settings > Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

Your site will be live at: `https://<USERNAME>.github.io/resume/`

### Option B: Manual deploy with gh-pages

```bash
bun run build
bun run deploy
```

Then go to repo **Settings > Pages** and set source to the `gh-pages` branch.

## Custom Domain (optional)

1. In repo **Settings > Pages**, enter your custom domain.
2. Add a `CNAME` record pointing to `<USERNAME>.github.io` in your DNS.
3. Update `vite.config.ts`:

```ts
base: '/',
```

4. Push and redeploy.
