# modern-interior-design-website
Luxury interior design website with responsive UI, smooth animations, and interactive user experience.


"# D'LIFE Interiors Enhanced Website - Complete Project Files

## 📦 Project Structure

```
dlife-interiors-project/
├── src/
│   ├── App.js                          # Main App component
│   ├── App.css                         # Custom global styles
│   ├── index.js                        # Entry point
│   ├── index.css                       # Tailwind + global CSS
│   ├── components/
│   │   ├── Navbar.jsx                  # Navigation component
│   │   ├── Hero.jsx                    # Hero section
│   │   ├── About.jsx                   # About section
│   │   ├── Packages.jsx                # Pricing packages
│   │   ├── Process.jsx                 # 4-step process
│   │   ├── Gallery.jsx                 # Image gallery with filters
│   │   ├── Testimonials.jsx            # Customer testimonials
│   │   ├── Contact.jsx                 # Contact form & FAQs
│   │   ├── Footer.jsx                  # Footer section
│   │   └── WhatsAppButton.jsx          # Floating WhatsApp button
│   ├── data/
│   │   └── mockData.js                 # All mock data
│   └── components/ui/                  # Shadcn UI components (pre-installed)
├── public/
│   └── index.html                      # HTML template
└── package.json                        # Dependencies
```

## 🚀 Installation Instructions

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Step 1: Extract the Project
```bash
unzip dlife-interiors-project.zip
cd dlife-interiors-project
```

### Step 2: Install Dependencies
```bash
# Using yarn (recommended)
yarn install

# OR using npm
npm install
```

### Step 3: Start Development Server
```bash
# Using yarn
yarn start

# OR using npm
npm start
```

The website will open at `http://localhost:3000`

## 📋 Complete File List

### 1. **src/App.js**
Main application component that imports and renders all sections.

### 2. **src/App.css**
Custom CSS for smooth scrolling and custom scrollbar styling.

### 3. **src/index.js**
React entry point (uses existing template).

### 4. **src/index.css**
Tailwind CSS imports and theme configuration.

### 5. **src/data/mockData.js**
Contains all mock data:
- `packages` - 3 pricing packages
- `processSteps` - 4-step process
- `testimonials` - 6 customer reviews
- `stats` - Company statistics
- `gallery` - 8 portfolio images
- `faqs` - 6 frequently asked questions

### 6. **src/components/Navbar.jsx**
Features:
- Sticky navigation with scroll effect
- Mobile responsive menu
- Top contact bar
- Smooth scroll to sections

### 7. **src/components/Hero.jsx**
Features:
- Full-screen hero with background image
- Animated entrance effects
- Stats cards
- Dual CTA buttons
- Scroll indicator

### 8. **src/components/About.jsx**
Features:
- Split layout with image/text
- 4 feature cards with icons
- Scroll-triggered animations
- Floating info card

### 9. **src/components/Packages.jsx**
Features:
- 3 pricing tiers
- \"Most Popular\" badge
- Feature lists with checkmarks
- Hover animations

### 10. **src/components/Process.jsx**
Features:
- 4-step timeline
- Alternating layout
- Step icons and images
- Connecting line (desktop)

### 11. **src/components/Gallery.jsx**
Features:
- Filterable image grid
- 4 categories
- Hover overlays
- Smooth transitions

### 12. **src/components/Testimonials.jsx**
Features:
- Animated counter stats
- 6 testimonial cards
- 5-star ratings
- Customer avatars

### 13. **src/components/Contact.jsx**
Features:
- Google Maps integration
- Contact form
- Contact info cards
- FAQ accordion

### 14. **src/components/Footer.jsx**
Features:
- 4-column layout
- Social media links
- Quick links
- Copyright info

### 15. **src/components/WhatsAppButton.jsx**
Features:
- Floating action button
- WhatsApp integration
- Animated entrance

## 🎨 Design Features

### Colors
- Primary: Purple (#9333ea to #7e22ce)
- Accent: Pink (#ec4899)
- Text: Gray scale
- Background: White with purple tints

### Animations
- Scroll-triggered fade-in animations
- Hover scale effects
- Smooth transitions
- Animated counters
- Floating elements

### Typography
- Font Family: Inter (via Google Fonts)
- Responsive font sizes
- Proper hierarchy

## 🔧 Technologies Used

- **React 19** - UI framework
- **Tailwind CSS 3** - Utility-first CSS
- **Shadcn/ui** - UI components
- **Lucide React** - Icons
- **React Hooks** - State management

## 📱 Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile navigation menu
- Touch-friendly interactions

### Performance
- Optimized images from Unsplash
- Lazy loading with IntersectionObserver
- Minimal dependencies
- Fast load times

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

## 🎯 Key Sections

1. **Hero** - Full-screen with stats and CTAs
2. **About** - Company info and features
3. **Packages** - Pricing tiers
4. **Process** - 4-step workflow
5. **Gallery** - Filterable portfolio
6. **Testimonials** - Customer reviews
7. **Contact** - Form, map, and FAQs
8. **Footer** - Links and info

## 🔗 External Resources

### Images (Unsplash)
All images are from Unsplash and freely usable:
- Hero: Modern kitchen interior
- About: Luxury interior
- Gallery: Various room designs
- Process: Design and installation photos

### Avatars (Pravatar)
Customer avatars from pravatar.cc

### Fonts (Google Fonts)
- Inter: 400, 500, 600, 700, 800, 900
- Playfair Display: 700, 900

## 🛠️ Customization

### Update Colors
Edit `tailwind.config.js` or CSS variables in `index.css`

### Change Content
Edit `src/data/mockData.js` to update:
- Packages and pricing
- Testimonials
- Gallery images
- FAQs
- Stats

### Modify Sections
Each section is a separate component in `src/components/`

## 📦 Build for Production

```bash
# Using yarn
yarn build

# OR using npm
npm run build
```

Output will be in `build/` directory.

## 🌐 Deploy

### Vercel
```bash
vercel deploy
```

### Netlify
Drag and drop the `build/` folder to Netlify

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts: \"deploy\": \"gh-pages -d build\"
npm run deploy
```

## 🐛 Common Issues

### Issue: Module not found errors
**Solution**: Run `yarn install` or `npm install`

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 yarn start
```

### Issue: Tailwind styles not working
**Solution**: Ensure `tailwind.config.js` has correct paths

## 📞 Support

For questions or issues:
- Check the code comments
- Review the mockData.js for content structure
- All components are well-commented

## 🎁 What's Included

✅ Fully functional frontend
✅ All animations and interactions
✅ Mobile responsive
✅ Mock data
✅ Clean, commented code
✅ Production-ready build
✅ No backend required for demo

## 🚫 What's NOT Included

❌ Backend API
❌ Database
❌ Form submission handling
❌ Email integration
❌ Admin panel
❌ User authentication

## 🔮 Future Enhancements

To make this production-ready, you would need:
1. Backend API (Node.js/Python)
2. Database (MongoDB/PostgreSQL)
3. Email service (SendGrid/Mailgun)
4. Contact form processing
5. CMS for content management
6. User reviews system
7. Project gallery admin

## 📄 License

Free to use for personal and commercial projects.
Images from Unsplash - Free to use under Unsplash License.

---

**Created with ❤️ using React + Tailwind CSS**

Last Updated: January 2026
"
