# CoreScene Product Page

A modern, responsive promotional + product showcase page built with Next.js 15 and Tailwind CSS.

## Features

- **Hero Section**: Bold brand statement with clear value proposition
- **Product Showcase**: Modular grid layout displaying all AI tools
- **Why CoreScene Section**: Ecosystem-level benefits and audience targeting
- **Call to Action**: Strong bottom-of-page conversion elements
- **Dark Mode Support**: Automatic dark/light theme switching
- **Mobile Responsive**: Optimized for all device sizes

## Project Structure

```
src/app/
├── components/
│   ├── Navigation.tsx          # Top navigation bar
│   ├── HeroSection.tsx         # Hero/brand statement section
│   ├── ProductShowcase.tsx     # Product grid and cards
│   ├── WhyCoreSceneSection.tsx # Benefits and audience section
│   └── CallToActionSection.tsx # Bottom CTA section
├── data/
│   └── products.ts            # Product configuration and data
├── globals.css               # Global styles
├── layout.tsx               # Root layout
└── page.tsx                 # Main page component
```

## Product Management

### Adding New Products

Edit `src/app/data/products.ts` to add new products:

```typescript
{
  id: 'new-product',
  name: 'AI Plugin for Platform',
  tagline: 'Your compelling tagline',
  description: 'One-liner benefit description',
  status: 'available' | 'coming-soon',
  visible: true,
  actionText: 'Try Now',
  actionUrl: '#link',
  platform: 'Platform Name'
}
```

### Controlling Product Visibility

Toggle product visibility without removing the configuration:

```typescript
visible: false  // Hide the product
visible: true   // Show the product
```

### Product Status

- `available`: Shows green badge and active "Try Now" button
- `coming-soon`: Shows yellow badge and disabled "Coming Soon" button

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Brand Colors
The primary brand color (blue) can be customized in the Tailwind CSS classes throughout the components.

### Content Updates
- **Hero messaging**: Edit `HeroSection.tsx`
- **Benefits**: Modify the benefits array in `WhyCoreSceneSection.tsx`
- **CTAs**: Update button text and actions in `CallToActionSection.tsx`

### Styling
The project uses Tailwind CSS with automatic dark mode support. Styles are applied using utility classes throughout the components.

## Build and Deployment

```bash
npm run build
npm start
```

## Scalability Features

- **Modular Design**: Each section is a separate component
- **Configuration-Driven**: Products managed through a simple TypeScript configuration
- **Visibility Controls**: Easy show/hide without code changes
- **Responsive Layout**: Automatically adapts to different screen sizes
- **Performance Optimized**: Built on Next.js 15 with modern React patterns

---

Built with ❤️ using Next.js, React, and Tailwind CSS
