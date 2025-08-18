# MC3 Summit 2025 - Project Rules & Standards

## 🎯 Core Design Requirements

### Navigation Bar Standards
- **Size**: Must be compact and minimal
- **Height**: Maximum 70px total height including all elements
- **Positioning**: Fixed to top, moves smoothly with scroll
- **Font Sizes**: 
  - Header title: 1.2rem max
  - Tagline: 0.7rem max
  - Navigation links: 0.75rem max
  - Header info: 0.65rem max
- **Padding**: Minimal spacing (4px-6px max) for all elements

### Visualization Standards

#### Size Requirements
- **Container Height**: Maximum 220px for normal charts
- **Small Charts**: 180px max height
- **Large Charts**: 280px max height (only when absolutely necessary)
- **Grid Layout**: Use `repeat(auto-fit, minmax(300px, 1fr))` for responsive grid
- **Mobile**: 180px max height on mobile devices

#### Visual Requirements
- **Background**: White backgrounds ONLY for all visualizations
- **Colors**: Use professional color palette (defined in CSS variables)
- **Borders**: Light gray borders (1px solid #e0e0e0)
- **Padding**: 12px container padding, reduce to 8px on mobile
- **Margins**: 8px vertical margins between visualizations

#### Performance Requirements
- **Loading**: Charts must load within 2 seconds
- **Responsiveness**: No lag or delays in interactions
- **Animations**: Smooth, fast transitions (0.2s max)
- **Memory**: Efficient rendering, no memory leaks

### Data Quality Standards
- **Accuracy**: All data must be verified and up-to-date
- **Sources**: Clearly cited data sources required
- **Metadata**: Include data quality badges and last updated info
- **Validation**: Data validation checks before display

### Testing Requirements

#### Pre-Deployment Checklist
1. **Visual Testing**:
   - Check all visualizations fit in designated small boxes
   - Verify white backgrounds with colorful data
   - Test responsive behavior on mobile/tablet/desktop
   - Ensure no stretched or oversized visualizations

2. **Performance Testing**:
   - Page load time under 3 seconds
   - Chart rendering under 2 seconds
   - Smooth scrolling and navigation
   - No lag in user interactions

3. **Functionality Testing**:
   - All buttons and links working
   - Export functionality operational
   - Navigation between pages smooth
   - Error handling for missing data

4. **Cross-Browser Testing**:
   - Chrome, Firefox, Safari, Edge compatibility
   - Mobile browser testing (iOS Safari, Chrome Mobile)
   - Responsive design verification

#### Code Quality Standards
- **CSS**: Clean, organized stylesheets with comments
- **JavaScript**: Error handling and performance optimization
- **HTML**: Semantic markup with accessibility features
- **Git Commits**: Concise, clear commit messages without emojis

### Content Standards
- **Professional Tone**: Government-standard professional language
- **Accessibility**: WCAG 2.1 AA compliance minimum
- **Monroe County Branding**: Consistent color scheme and styling
- **Data Presentation**: Clear, actionable insights with context

### Deployment Rules
1. **Local Testing**: Always test locally before pushing to GitHub
2. **Branch Updates**: Keep all specialized branches synchronized
3. **Documentation**: Update README files for any major changes
4. **Performance**: Verify no performance regression
5. **Mobile Optimization**: Test on actual mobile devices

### Error Prevention
- **Visualization Sizing**: Never exceed 220px height for charts
- **Navigation**: Keep navbar compact and responsive
- **Data Loading**: Implement proper loading states and error handling
- **Color Consistency**: Stick to defined professional color palette
- **Performance**: Monitor and optimize for fast loading

### Team Collaboration
- **Branch Naming**: Use descriptive branch names for features
- **Code Reviews**: Review visualization sizing and performance
- **Testing**: Each developer tests their visualizations thoroughly
- **Documentation**: Update project documentation for any rule changes

## 🚫 Prohibited Practices
- Black or dark backgrounds for visualizations
- Oversized charts that don't fit on screen
- Large, bloated navigation bars
- Slow loading or laggy interactions
- Unstandardized color schemes
- Missing data sources or metadata
- Untested visualizations
- Emoji in git commit messages 