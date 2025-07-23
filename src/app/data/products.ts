export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'available' | 'coming-soon';
  visible: boolean;
  actionText?: string;
  actionUrl?: string;
  platform: string;
}

export const products: Product[] = [
  {
    id: 'figma-plugin',
    name: 'AI Plugin for Figma',
    tagline: 'Design smarter, not harder',
    description: 'Streamline your design workflow with intelligent automation and AI-powered suggestions directly in Figma.',
    status: 'available',
    visible: true,
    actionText: 'Try Now',
    actionUrl: '#figma-plugin',
    platform: 'Figma'
  },
  {
    id: 'wordpress-plugin',
    name: 'AI Plugin for WordPress',
    tagline: 'Content creation, supercharged',
    description: 'Generate, optimize, and manage your WordPress content with AI assistance that understands your brand voice.',
    status: 'available',
    visible: true,
    actionText: 'Try Now',
    actionUrl: '#wordpress-plugin',
    platform: 'WordPress'
  },
  {
    id: 'hubspot-plugin',
    name: 'AI Plugin for HubSpot',
    tagline: 'Marketing automation reimagined',
    description: 'Transform your marketing campaigns with intelligent insights and automated content generation for HubSpot.',
    status: 'coming-soon',
    visible: true,
    actionText: 'Coming Soon',
    platform: 'HubSpot'
  }
];

export const getVisibleProducts = () => products.filter(product => product.visible);
