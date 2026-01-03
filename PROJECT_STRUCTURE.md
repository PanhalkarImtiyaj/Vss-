# VSS Software Solutions - Project Structure

## 📂 Complete Folder Structure

```
vss/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │   └── Button/
│   │   │       ├── Button.jsx
│   │   │       └── Button.css
│   │   └── home/
│   │       ├── Hero/
│   │       │   ├── Hero.jsx
│   │       │   └── Hero.css
│   │       ├── ServicesPreview/
│   │       │   ├── ServicesPreview.jsx
│   │       │   └── ServicesPreview.css
│   │       ├── AboutPreview/
│   │       │   ├── AboutPreview.jsx
│   │       │   └── AboutPreview.css
│   │       └── ContactCTA/
│   │           ├── ContactCTA.jsx
│   │           └── ContactCTA.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.jsx
│   │   │   └── Portfolio.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.css
│   ├── layouts/
│   │   └── MainLayout/
│   │       ├── MainLayout.jsx
│   │       └── MainLayout.css
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── data/
│   │   ├── servicesData.js
│   │   └── portfolioData.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary:** #2563eb (Blue)
- **Secondary:** #7c3aed (Purple)
- **Gradient:** Linear gradient from blue to purple
- **Text Primary:** #1f2937 (Dark Gray)
- **Text Secondary:** #6b7280 (Medium Gray)
- **Background:** #ffffff (White) / #f9fafb (Light Gray)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Sizes:** 
  - xs: 0.75rem
  - sm: 0.875rem
  - base: 1rem
  - lg: 1.125rem
  - xl: 1.25rem
  - 2xl: 1.5rem
  - 3xl: 1.875rem
  - 4xl: 2.25rem
  - 5xl: 3rem

### Spacing
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem

## 🧩 Component Architecture

### Common Components
1. **Navbar** - Fixed navigation with mobile menu
2. **Footer** - Multi-column footer with links and contact info
3. **Button** - Reusable button with variants (primary, secondary, outline)

### Home Page Sections
1. **Hero** - Main landing section with CTA buttons
2. **ServicesPreview** - Grid of service cards
3. **AboutPreview** - Company stats and information
4. **ContactCTA** - Call-to-action section

### Pages
1. **Home** - Combines all home sections
2. **About** - Company information, mission, values
3. **Services** - Detailed service listings and process
4. **Portfolio** - Project showcase with filtering
5. **Contact** - Contact form and information

## 🛣️ Routing Structure

```
/ (Home)
├── /about
├── /services
├── /portfolio
└── /contact
```

## 📊 Data Structure

### Services Data
- id
- title
- description
- icon
- features[]

### Portfolio Data
- id
- title
- category
- description
- technologies[]
- image

## 🎯 Key Features

✅ Modern React 19 with functional components
✅ React Router for navigation
✅ Fully responsive design
✅ External CSS files (no inline styles)
✅ Clean folder structure
✅ Reusable components
✅ Professional blue/purple gradient theme
✅ Smooth animations
✅ SEO optimized
✅ Production ready

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production: `npm run preview`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

## 🎨 Animation Classes

- fade-in
- fade-in-up
- fade-in-down
- slide-in-left
- slide-in-right
- scale-in
- float

## 🔧 Technologies

- React 19.2.0
- React Router DOM 7.x
- Vite 7.2.4
- CSS3
- ES6+ JavaScript
