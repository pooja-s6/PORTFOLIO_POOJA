# Pooja S - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a light pastel color theme and smooth animations.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Light pastel color theme with smooth animations
- **Contact Form**: Integrated with EmailJS for direct email communication
- **Performance**: Built with Vite for fast loading and optimal performance
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 with custom pastel theme
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Build Tool**: Vite 7
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS:
   - Go to [EmailJS](https://www.emailjs.com/) and create a free account
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Get your credentials:
     - Service ID
     - Template ID
     - Public Key

4. Update EmailJS credentials in `src/components/Contact.tsx`:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

## 🚀 Running the Project

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🎨 Color Theme

The portfolio uses a custom pastel color palette:

- **Pastel Blue**: `#E0F2FE`, `#F0F9FF`, `#BAE6FD`
- **Pastel Pink**: `#FCE7F3`, `#FDF2F8`, `#FBCFE8`
- **Pastel Lavender**: `#EDE9FE`, `#F5F3FF`, `#DDD6FE`
- **Pastel Peach**: `#FED7AA`, `#FEF3C7`, `#FDE68A`
- **Pastel Mint**: `#D1FAE5`, `#ECFDF5`

## 📂 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About section with education
│   │   ├── Skills.tsx       # Technical skills grid
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── Contact.tsx      # Contact form with EmailJS
│   │   └── Footer.tsx       # Footer with social links
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

4. Deploy:
```bash
npm run deploy
```

## 📧 Contact

- **Email**: poojasuku0606@gmail.com
- **Phone**: +91-9840737246
- **LinkedIn**: [linkedin.com/in/pooja-s2006](https://linkedin.com/in/pooja-s2006)
- **GitHub**: [github.com/pooja-s6](https://github.com/pooja-s6)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

Made with ❤️ by Pooja S
