# Lock J Lab - Multi-Theme System Plan

## Overview
Build a theme switching system that allows instant transformation between completely different visual styles from the admin panel.

---

## Theme 1: "Neon Dark" (Current)
Our existing dark theme with tech-forward aesthetic.

```
Background:     #0B0F19 (deep navy)
Surface:        #111827 (card backgrounds)
Text Primary:   #ffffff
Text Secondary: #9ca3af
Accent:         #0ea5e9 (sky blue)
Accent Hover:   #38bdf8
Border:         rgba(255,255,255,0.1)
Gradient:       Sky blue to blue glows
```

**Characteristics:**
- Dark, immersive feel
- Neon blue accents
- Glowing effects
- Tech startup vibe
- Current rounded corners (1rem+)

---

## Theme 2: "Clean Bespoke" (GojiLabs-inspired)
Professional, light, agency-quality aesthetic.

```
Background:     #ffffff (pure white)
Surface:        #f9fafb (light gray cards)
Text Primary:   #1a1a2e (dark navy - NOT pure black)
Text Secondary: #6b7280 (medium gray)
Accent:         #FF4D6D (coral pink)
Accent Hover:   #ff3357
Border:         #e5e7eb (light gray)
Success:        #10b981 (green for stats)
```

**Characteristics:**
- Clean, lots of whitespace
- Serif headings (Playfair Display or similar)
- Sans-serif body (Inter)
- Subtle shadows instead of borders
- Pill-shaped buttons
- Professional agency feel
- Smaller border radius (0.5rem)

---

## Implementation Phases

### Phase 1: Foundation (~1 hour)

#### 1.1 Create Theme Configuration
```
app/config/themes.js
```

Contains all theme definitions:
- Colors (all variations)
- Typography (font families, sizes, weights)
- Spacing adjustments
- Border radius values
- Shadow definitions
- Gradient definitions

#### 1.2 Create/Update Theme Context
```
app/context/ThemeContext.jsx
```

- Store active theme in state
- Apply CSS variables to :root on theme change
- Persist selection to localStorage
- Provide theme switching function

#### 1.3 Update globals.css
```css
:root {
  /* Colors */
  --bg-primary: #0B0F19;
  --bg-secondary: #111827;
  --bg-tertiary: #1f2937;
  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
  --accent: #0ea5e9;
  --accent-hover: #38bdf8;
  --accent-muted: rgba(14, 165, 233, 0.1);
  --border: rgba(255,255,255,0.1);
  --border-strong: rgba(255,255,255,0.2);
  
  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  /* Spacing */
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

---

### Phase 2: Component Refactor (~2-3 hours)

Replace all hardcoded colors with CSS variables.

#### Components to Update:

**Layout Components:**
- [ ] Header.jsx
- [ ] Footer.jsx
- [ ] SideBarMegaMenu.jsx

**Homepage Sections:**
- [ ] Hero.jsx
- [ ] HeroVisuals.jsx
- [ ] TrustBar.jsx
- [ ] LogoCloud.jsx
- [ ] ProblemSolution.jsx
- [ ] HowItWorks.jsx
- [ ] CaseStudies.jsx
- [ ] WhyChooseUs.jsx
- [ ] Testimonials.jsx
- [ ] IsThisForYou.jsx
- [ ] Guarantees.jsx
- [ ] FinalCTA.jsx
- [ ] ServicesOverview.jsx

**Shared Components:**
- [ ] PageHero.jsx
- [ ] ContactForm.jsx
- [ ] AnimateOnScroll.jsx
- [ ] InteractiveProjectPoster.jsx

**Pattern for Refactoring:**

Before:
```jsx
<div className="bg-[#0B0F19] text-white border-white/10">
```

After:
```jsx
<div className="bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border)]">
```

---

### Phase 3: Theme Selector in Admin (~1 hour)

#### 3.1 Create ThemeSelector Component
```
app/components/ThemeSelector.jsx
```

Features:
- Visual preview cards for each theme
- Active theme indicator
- One-click switching
- Optional: Live preview before committing

#### 3.2 Add to Admin Settings Page
```
app/admin/settings/page.jsx
```

UI Layout:
```
┌─────────────────────────────────────────────────────────┐
│  Website Theme                                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐    ┌─────────────┐                   │
│  │ ░░░░░░░░░░░ │    │ ▓▓▓▓▓▓▓▓▓▓▓ │                   │
│  │ ░ Neon     ░ │    │ ▓ Clean    ▓ │                   │
│  │ ░ Dark     ░ │    │ ▓ Bespoke  ▓ │                   │
│  │ ░░░░░░░░░░░ │    │ ▓▓▓▓▓▓▓▓▓▓▓ │                   │
│  │     ✓       │    │             │                    │
│  └─────────────┘    └─────────────┘                   │
│                                                         │
│  Current: Neon Dark                                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 4: Polish & Additional Themes (Future)

#### Potential Additional Themes:

**Theme 3: "Midnight Premium"**
- Deep purple/indigo dark theme
- Gold/amber accents
- Luxury feel

**Theme 4: "Bold Contrast"**
- Pure black and white
- Bright accent colors
- Strong typography
- High impact

**Theme 5: "Warm Neutral"**
- Cream/tan backgrounds
- Brown/terracotta accents
- Organic, approachable

---

## File Structure After Implementation

```
app/
├── config/
│   └── themes.js              # All theme definitions
├── context/
│   └── ThemeContext.jsx       # Theme state management
├── components/
│   ├── ThemeSelector.jsx      # Admin theme picker
│   └── ... (updated components)
├── globals.css                 # CSS variables
└── admin/
    └── settings/
        └── page.jsx           # Theme selector UI
```

---

## CSS Variables Reference

### Colors
```css
--bg-primary       /* Main background */
--bg-secondary     /* Card/surface background */
--bg-tertiary      /* Nested elements */
--text-primary     /* Main text */
--text-secondary   /* Secondary text */
--text-muted       /* Subtle text */
--accent           /* Primary accent (buttons, links) */
--accent-hover     /* Accent hover state */
--accent-muted     /* Accent with transparency */
--border           /* Default borders */
--border-strong    /* Emphasized borders */
--success          /* Success states */
--warning          /* Warning states */
--error            /* Error states */
```

### Typography
```css
--font-heading     /* Heading font family */
--font-body        /* Body font family */
```

### Spacing & Shape
```css
--radius-sm        /* Small border radius */
--radius-md        /* Medium border radius */
--radius-lg        /* Large border radius */
--radius-full      /* Pill shape */
```

### Shadows
```css
--shadow-sm        /* Subtle shadow */
--shadow-md        /* Medium shadow */
--shadow-lg        /* Large shadow */
```

---

## Theme-Specific Overrides

Some components may need layout/structure changes between themes, not just colors.

### Clean Bespoke Specifics:
- Buttons: More pill-shaped (radius-full)
- Cards: Subtle shadow instead of border
- Hero: More whitespace
- CTA sections: Gradient backgrounds (pink→purple)
- Stats: Green accent color for numbers
- Headings: Serif font (Playfair Display)

### Implementation Options:
1. **CSS-only:** Use CSS variables for everything possible
2. **Conditional classes:** `className={theme === 'clean' ? 'shadow-md' : 'border'}`
3. **Theme-aware components:** Check theme context and render differently

---

## Google Fonts to Add

For Clean Bespoke theme:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Testing Checklist

- [ ] Theme persists on page refresh
- [ ] Theme applies to all pages
- [ ] No flash of wrong theme on load
- [ ] Smooth transition between themes (optional)
- [ ] All components respect theme variables
- [ ] Admin panel theme selector works
- [ ] Mobile responsive in both themes
- [ ] Accessibility (contrast ratios) in both themes

---

## Time Estimate

| Phase | Task | Time |
|-------|------|------|
| 1 | Foundation (config, context, CSS vars) | 1 hour |
| 2 | Refactor all components | 2-3 hours |
| 3 | Admin theme selector | 1 hour |
| 4 | Testing & polish | 30 min |
| **Total** | | **4.5-5.5 hours** |

---

## Tomorrow's Session Start

1. Begin with Phase 1 - create theme config and context
2. Update globals.css with CSS variables
3. Start refactoring components (Header first as test)
4. Continue through all components
5. Build admin theme selector
6. Test thoroughly

---

## Reference: GojiLabs Design Elements

From the screenshots provided:

**Hero Section:**
- Large serif headline with accent color on key phrase
- Subtext in lighter weight
- Two CTA buttons (filled coral + outlined)
- Browser mockup on right
- Stats bar below (400+, 10M+, $1B+)

**Case Studies:**
- Cards with colored backgrounds (each project has unique color)
- Client logo at top
- Bold headline
- Description text
- "Read the case study →" link
- Device mockups (phones, tablets, desktops)

**Process Section:**
- Dark gradient background (pink→purple→blue)
- White text
- Icon cards for each step

**Testimonials:**
- Grid layout
- Quote text
- Author photo + name + title
- Clutch rating badge

**Awards Section:**
- Clean grid of badge images
- Simple labels below each

**Footer:**
- Dark background
- Newsletter signup with gradient button
- "Let's develop something awesome together" CTA
- Multi-column link layout
