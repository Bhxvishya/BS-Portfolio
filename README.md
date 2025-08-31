# Portfolio Website

A modern, responsive portfolio website for showcasing skills, certificates, and projects.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with beautiful gradients and animations
- **Visitor Tracking**: Basic visitor counting and IP detection
- **Skills Showcase**: Organized display of technical skills by category
- **Certificates Section**: Highlight your professional certifications
- **Contact Information**: Easy-to-find contact details and social links
- **Resume Download**: Direct link to download your resume

## Setup Instructions

1. **Customize Your Information**:
   - Replace `[Your Name]` with your actual name
   - Update `[your.email@example.com]` with your email
   - Replace `[+1234567890]` with your phone number
   - Update LinkedIn and GitHub URLs
   - Add your actual certificates and skills

2. **Add Your Resume**:
   - Place your resume PDF file in the root directory as `resume.pdf`
   - Or update the link in the HTML to point to your resume location

3. **Customize Skills and Certificates**:
   - Edit the skills section to match your expertise
   - Update the certificates section with your actual certifications
   - Add project cards as you complete new projects

## Free Hosting Options

### 1. GitHub Pages (Recommended)
- **Cost**: Free
- **Custom Domain**: Yes (with your own domain)
- **SSL**: Automatic
- **Setup**: 
  1. Create a GitHub repository
  2. Upload your files
  3. Enable GitHub Pages in repository settings
  4. Your site will be available at `username.github.io/repository-name`

### 2. Netlify
- **Cost**: Free tier available
- **Custom Domain**: Yes
- **SSL**: Automatic
- **Features**: Form handling, continuous deployment
- **Setup**: Connect your GitHub repository or drag & drop files

### 3. Vercel
- **Cost**: Free tier available
- **Custom Domain**: Yes
- **SSL**: Automatic
- **Features**: Excellent performance, easy deployment
- **Setup**: Connect GitHub repository for automatic deployments

### 4. Firebase Hosting
- **Cost**: Free tier (1GB storage, 10GB transfer/month)
- **Custom Domain**: Yes
- **SSL**: Automatic
- **Setup**: Use Firebase CLI to deploy

## Visitor Analytics

The website includes basic visitor tracking features:

### Built-in Features:
- **Visitor Counter**: Simple localStorage-based counter
- **Basic Info Logging**: Browser info, screen resolution, referrer
- **IP Detection**: Uses ipify.org API to get visitor IP

### Advanced Analytics (Optional):
For more detailed analytics, consider integrating:

1. **Google Analytics**: Free, comprehensive analytics
2. **Plausible**: Privacy-focused analytics
3. **Simple Analytics**: GDPR compliant, simple setup
4. **Umami**: Self-hosted, privacy-focused

### Implementation Example (Google Analytics):
```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (add this)
└── README.md           # This file
```

## Customization Tips

1. **Colors**: Update the CSS gradient colors to match your preference
2. **Fonts**: Change the Google Fonts import to use different typography
3. **Icons**: Add more Font Awesome icons or replace with custom ones
4. **Sections**: Add new sections like "Education" or "Experience"
5. **Animations**: Modify the scroll animations in script.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

The website is optimized for fast loading:
- Minimal external dependencies
- Optimized CSS and JavaScript
- Responsive images (when you add them)
- Clean, semantic HTML

## Next Steps

1. Replace all placeholder content with your actual information
2. Add your resume PDF file
3. Test the website locally by opening index.html in a browser
4. Deploy to your chosen hosting platform
5. Set up analytics if desired
6. Add more projects as you complete them

Good luck with your portfolio!