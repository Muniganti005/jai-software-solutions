# JAI Software Solutions - Premium AI SaaS Landing Page

A modern, futuristic landing page for JAI Software Solutions built with Next.js, Framer Motion, and Tailwind CSS.

## Features

✨ **Premium Glassmorphism Design**
- Frosted glass cards with elegant transparency
- Soft glowing golden accents
- Cinematic dark luxury theme

🎬 **Rich Animations**
- Animated particle orb in hero section
- Smooth scroll animations
- Interactive hover effects
- Floating UI elements

📱 **Fully Responsive**
- Mobile-first design
- Optimized for all devices
- Smooth mobile navigation

⚡ **High Performance**
- Optimized Next.js setup
- Framer Motion for smooth animations
- Tailwind CSS for styling
- Fast load times

🔍 **SEO Optimized**
- Meta tags configured
- Open Graph support
- Semantic HTML

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Muniganti005/jai-software-solutions.git
cd jai-software-solutions
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── Stats.tsx           # Statistics section
│   ├── Process.tsx         # Process section
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer
├── public/                 # Static files
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
└── README.md               # This file
```

## Build and Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployment on push

[Learn more about Vercel deployment](https://vercel.com/docs)

## Customization

### Colors
Edit `tailwind.config.js` to change colors:
```javascript
colors: {
  gold: {
    400: '#ffd700',
    500: '#ffcb3d',
    600: '#ffa500',
  },
}
```

### Content
Edit component files in `components/` to update text and content.

### Fonts
Edit `app/layout.tsx` to change fonts from Google Fonts.

## Performance Tips

1. Use production build: `npm run build`
2. Optimize images with Next.js Image component
3. Use dynamic imports for heavy components
4. Monitor Core Web Vitals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your projects.

## Support

For questions or issues, create a GitHub issue or contact: hello@jaisoftware.com

---

Made with ❤️ by JAI Software Solutions
