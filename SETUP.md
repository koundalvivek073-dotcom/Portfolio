# Vivek Koundal - Portfolio Website Setup Guide

## 🎉 Your Portfolio is Ready!

I've created a modern, professional portfolio website featuring:
- ✨ Stunning Tokyo Skyline Hero component with scroll animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Beautiful gradient effects and modern UI
- 💼 About, Projects, Skills, and Contact sections
- 🔗 GitHub integration ready
- ⚡ Next.js 14 with TypeScript and Tailwind CSS

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main portfolio page
├── components/
│   └── ui/
│       └── sunset-skyline-hero.tsx  # Hero component
├── public/
│   └── profile.jpg          # Profile photo
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
cd portfolio-website
npm install
```

### Step 2: Add Your Profile Photo

Copy your profile photo to `public/profile.jpg`.

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## ✏️ Customization Guide

### Update Personal Information

Edit `app/page.tsx`:

**Hero Section** (Lines 7-17):
```tsx
<TokyoSkylineHero
  title="Vivek Koundal"          // Your name
  brandMark="VK"                  // Your initials
  navItems={[
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]}
/>
```

**About Section** (Lines 20-60):
- Update your bio and description
- Modify social links:
  - GitHub: `https://github.com/koundalvivek073-dotcom`
  - Email: `koundalvivek073@gmail.com`
  - LinkedIn: Add your LinkedIn URL

**Projects Section** (Lines 62-120):
Replace the sample projects with your real projects:
```tsx
{
  title: "Your Project Name",
  description: "Project description",
  tech: ["React", "Node.js", "MongoDB"],
  image: "https://images.unsplash.com/photo-xxx",
}
```

**Skills Section** (Lines 122-180):
Update the skills arrays with your actual tech stack.

**Contact Section** (Lines 182-230):
Update your contact information and social media URLs.

## 🎨 Color Customization

### Hero Component Colors
Edit `components/ui/sunset-skyline-hero.tsx`:
```tsx
const COL_BG = "#1a0f0a"    // Background color
const COL_TEXT = "#fff4e8"   // Text color
```

### Main Page Colors
Edit `app/page.tsx` - Search for:
- `from-blue-400 to-purple-500` - Gradient colors
- `bg-slate-900` - Background colors
- `text-slate-300` - Text colors

## 📸 Adding Project Images

Use Unsplash for high-quality stock images:
```tsx
image: "https://images.unsplash.com/photo-[ID]?w=500&h=300&fit=crop"
```

Or add your own images to the `public/` folder:
```tsx
image: "/project1.jpg"
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your portfolio will be live in minutes!

### Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Click "Deploy site"

### Deploy to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Follow the deployment wizard

## 🛠️ Troubleshooting

### Profile Photo Not Showing

✅ **Solution:**
1. Ensure the file is named exactly `profile.jpg`
2. Place it in the `public/` folder (not `public/images`)
3. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Development Server Won't Start

✅ **Solution:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Build Errors

✅ **Solution:**
1. Check Node.js version: `node --version` (should be 18.x or higher)
2. Run lint check: `npm run lint`
3. Check for TypeScript errors: Files should have no red squiggles

### Video Not Loading in Hero

The default video is hosted on CDN and should work automatically. If it doesn't load:
1. Check your internet connection
2. Try a different browser
3. The component gracefully handles video loading failures

## 📝 Additional Customization

### Change Hero Video

Replace the video URL in `components/ui/sunset-skyline-hero.tsx`:
```tsx
const DEFAULT_VIDEO = "YOUR_VIDEO_URL.mp4"
```

### Add More Sections

Add new sections in `app/page.tsx` following this pattern:
```tsx
<section id="new-section" className="min-h-screen bg-slate-950 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12">Section Title</h2>
    {/* Your content */}
  </div>
</section>
```

### Install Additional Icons

```bash
npm install lucide-react
```

Use in your code:
```tsx
import { Code, Heart, Star } from "lucide-react"
```

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance Optimization

Your portfolio is already optimized with:
- ✅ Next.js Image optimization
- ✅ Tailwind CSS purging
- ✅ Code splitting
- ✅ Fast refresh in development

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Add your profile photo to `public/profile.jpg`
3. ✅ Update personal information in `app/page.tsx`
4. ✅ Add your real projects
5. ✅ Test on mobile devices
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share your portfolio URL!

## 📞 Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎨 Component Features

### Tokyo Skyline Hero Component

This premium component features:
- **Scroll-driven video** - Video plays as you scroll
- **Smooth animations** - Blur, fade, and scale effects
- **Responsive design** - Works on all screen sizes
- **Accessibility** - Respects prefers-reduced-motion
- **Touch support** - Works on mobile devices
- **Progress indicator** - Shows scroll progress

### Customizing the Hero

```tsx
<TokyoSkylineHero
  title="Your Name"                    // Main title
  brandMark="VK"                       // Large brand mark
  scrollHint="EXPLORE"                 // Scroll hint text
  navItems={[...]}                     // Navigation items
  signature={{ name: "...", url: "..." }}  // Footer signature
  scrubDistance={3200}                 // Scroll sensitivity
/>
```

## 🚀 Your GitHub Profile

I've set up the portfolio to link to your GitHub:
`https://github.com/koundalvivek073-dotcom`

Make sure your GitHub profile has:
- ✅ Professional README
- ✅ Pinned repositories
- ✅ Updated bio
- ✅ Profile picture

## 💡 Pro Tips

1. **Use Real Project Data**: Replace sample projects with your actual work
2. **Add Live Demos**: Link to deployed versions of your projects
3. **Keep It Updated**: Regularly add new projects and skills
4. **Mobile First**: Test on mobile devices - most visitors use phones
5. **Fast Loading**: Keep images optimized (use Next.js Image component)
6. **SEO**: Update metadata in `app/layout.tsx` for better search rankings

## 📦 What's Included

### Dependencies
- ✅ Next.js 14.2.5
- ✅ React 18.3.1
- ✅ TypeScript 5.5.4
- ✅ Tailwind CSS 3.4.6
- ✅ Lucide React (icons)

### Features
- ✅ Dark theme design
- ✅ Gradient effects
- ✅ Glassmorphism effects
- ✅ Smooth scrolling
- ✅ Hover animations
- ✅ Responsive grid layouts
- ✅ Professional typography

## 🎓 Learn More

### Resources
- Next.js: [nextjs.org/learn](https://nextjs.org/learn)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- TypeScript: [typescriptlang.org/docs](https://typescriptlang.org/docs)
- React: [react.dev](https://react.dev)

---

**Built with ❤️ for Vivek Koundal**

Your portfolio is ready to impress recruiters and showcase your skills! 🎉
