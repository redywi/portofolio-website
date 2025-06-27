# 🌟 Made Redy Wijaya - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Software Developer and AI Engineer. Built with Bootstrap 5 and enhanced with smooth animations and optimal performance.

## 🚀 Features

### ✨ Design & UX
- **Responsive Design** - Fully responsive across all devices
- **Modern Glass Morphism** - Beautiful glassmorphism navbar
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Interactive Elements** - Hover effects and smooth transitions
- **Accessibility** - WCAG compliant with proper ARIA labels

### 🔧 Technical Features
- **SEO Optimized** - Complete meta tags and Open Graph support
- **Performance Optimized** - Lazy loading, image optimization, preloading
- **Cross-browser Compatible** - Works on all modern browsers
- **PWA Ready** - Service worker ready for offline functionality
- **Fast Loading** - Optimized assets and efficient code

### 📱 Sections
- **Hero Section** - Eye-catching introduction with call-to-action
- **About** - Professional background and downloadable CV
- **Skills** - Core competencies with beautiful cards
- **Projects** - Portfolio showcase with live demos
- **FAQ** - Interactive accordion with common questions
- **Contact** - Working contact form with validation
- **Footer** - Complete contact information and social links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **Bootstrap 5** - Responsive framework
- **JavaScript (ES6+)** - Interactive functionality
- **AOS Library** - Scroll animations
- **Animate.css** - CSS animations

## 📋 Project Structure

```
bootstrap-project/
├── index.html              # Main HTML file
├── package.json           # Project dependencies
├── README.md             # Project documentation
├── assets/               # Images and media files
│   ├── bg-*.png         # Background images
│   ├── i-*.png          # Icon images
│   ├── logo*.png        # Logo files
│   ├── portrait.png     # Profile picture
│   └── project-*.png    # Project screenshots
└── src/                 # Source files
    ├── main.css         # Custom styles
    ├── main.scss        # SCSS source (if needed)
    ├── performance.js   # Performance optimizations
    ├── animate.min.css  # Animation library
    ├── aos.css         # AOS library styles
    ├── aos.js          # AOS library script
    └── bootstrap.bundle.min.js # Bootstrap JavaScript
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic understanding of HTML/CSS/JavaScript (for modifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/redywi/portofolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   ```bash
   # Simply open index.html in your browser, or
   # Use a local server for better development experience
   python -m http.server 8000
   # Or use Live Server extension in VS Code
   ```

3. **Customize the content**
   - Replace images in `assets/` folder with your own
   - Update personal information in `index.html`
   - Modify colors and styles in `src/main.css`

## 🎨 Customization Guide

### Changing Colors
The website uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #198754;    /* Green theme */
  --secondary-color: #6c757d;  /* Gray */
  --accent-color: #ffc107;     /* Yellow */
}
```

### Adding New Sections
1. Add the section in HTML
2. Update navigation links
3. Add corresponding styles in CSS
4. Include in the scroll spy functionality

### Modifying Animations
- AOS animations can be customized with data attributes
- CSS animations are in the `animate.min.css` file
- Custom animations can be added to `main.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🔧 Performance Optimizations

- **Lazy Loading** - Images load as they come into view
- **Critical Resource Preloading** - Important assets load first
- **Optimized Images** - Compressed for faster loading
- **Minified Assets** - CSS and JS files are minified
- **Efficient Animations** - GPU-accelerated transforms

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## 📊 SEO Features

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Fast loading speeds

## 🔐 Security Features

- Content Security Policy ready
- No inline scripts (except initialization)
- Sanitized user inputs
- HTTPS ready

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Set build command (if needed): leave empty for static sites
3. Set publish directory: `/` (root)
4. Deploy!

### Vercel
1. Import GitHub repository
2. Configure build settings (usually auto-detected)
3. Deploy with one click

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Made Redy Wijaya**
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/made-redy-wijaya)
- GitHub: [Your GitHub](https://github.com/redywi)
- Email: redy.wijaya@gmail.com
- Portfolio: [Your Website](https://redywi.github.io/portofolio-website)

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- AOS library for smooth animations
- Animate.css for additional animations
- All the open-source contributors

## 📞 Support

If you have any questions or need help with setup, feel free to:
- Open an issue on GitHub
- Contact me directly via email
- Connect with me on LinkedIn

---

⭐ **If you found this project helpful, please give it a star on GitHub!** ⭐
