# Deployment to GitHub Pages

## Prerequisites

- Node.js 22+
- [Bun](https://bun.sh) installed
- Python 3.12+ with the PDF dependencies below
- A GitHub account

## Setup

### 1. Create a GitHub repository

The canonical repository is `GarageInc/cv` and the site is
`https://garageinc.github.io/cv/`.

### 2. Update the base path

In `vite.config.ts`, update the `base` value to match your repo name:

```ts
base: '/cv/',
```

If you're using a custom domain or deploying to `<username>.github.io` (user site), set `base: '/'`.

### 3. Install dependencies

```bash
bun install
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r scripts/requirements-pdf.txt
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

The header's **PDF** link downloads the generated file directly. Use the
in-document **Export Resume in PDF** button and select **Save as PDF** in the
browser's print dialog for a browser-generated copy.
The A4 print layout hides navigation and buttons and preserves selectable text.
Disable the browser's **Headers and footers** option to omit the page URL.

## Generated PDFs

`bun run build` generates the website and selectable-text PDFs from
`src/data/resumeData.ts` and `src/data/profileData.ts`. It refreshes the tracked
`resume.pdf`, copies it to `dist/resume.pdf`, and writes the anonymous version to
`dist/anonymous/resume.pdf`. The anonymous export omits personal details and
personal code links. The existing files under `output/` are not build inputs.

Run `bun run export:pdf` to refresh the PDF after a content edit without rebuilding
the website. Keep the Python virtual environment active for either command.
GitHub Actions installs these dependencies and regenerates the downloads on every
deployment, so the deployed PDFs use the same content as the site.

## Compatibility URL

Both `https://garageinc.github.io/cv/` and
`https://garageinc.github.io/cv-template/` are supported. `/cv/` is canonical.
The companion `GarageInc/cv-template` repository serves the redirect in
`legacy/index.html` as both `index.html` and `404.html`, with a `.nojekyll` file.
GitHub Pages publishes its `main` branch root. No credentials or second copy of
the CV data are needed.

The redirect preserves the path suffix, query string and section fragment, so
`/cv-template/anonymous/` and `/cv-template/#experience` reach the corresponding
current pages. Without JavaScript, the fallback link opens the main CV.
If the redirect changes, copy `legacy/index.html` to both files in that repository
and push its `main` branch.

## Deploy

### Option A: Automatic via GitHub Actions (recommended)

1. Commit the intended changes and push to `main`:

```bash
git add <changed-files>
git commit -m "Update CV"
git push origin main
```

2. Go to your repo **Settings > Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

Your site will be live at: `https://garageinc.github.io/cv/`

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
