# Git Commands to Publish Your Project

## Step 1: Initialize Git (if not already done)
```bash
git init
```

## Step 2: Add all files
```bash
git add .
```

## Step 3: Create initial commit
```bash
git commit -m "Initial commit: Alumni Association Platform

Features:
- Modern React + Tailwind CSS design
- Alumni directory with search/filter
- Events management system
- Job board functionality
- Mentorship program
- Donation platform
- Fully responsive design"
```

## Step 4: Create repository on GitHub
1. Go to https://github.com
2. Click "New repository"
3. Name it: `alumni-association-platform`
4. Make it public (for GitHub Pages)
5. Don't initialize with README (we already have one)

## Step 5: Connect to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/alumni-association-platform.git
git push -u origin main
```

## Step 6: Deploy to Vercel (Recommended)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Deploy!

## Alternative: Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## Alternative: Deploy to Netlify
1. Build: `npm run build`
2. Drag the `dist` folder to https://netlify.com

---
Replace YOURUSERNAME with your actual GitHub username!
