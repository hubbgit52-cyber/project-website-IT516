import Hero from '../components/Hero';
import Card from '../components/Card';

const features = [
  {
    title: 'Theme Toggle',
    description: 'Switch between light and dark modes with persistent preferences.',
    href: '#theme'
  },
  {
    title: 'Contact Form',
    description: 'Interactive form with validation and success feedback.',
    href: '/contact'
  },
  {
    title: 'Component Architecture',
    description: 'Built with reusable React components and hooks.',
    href: '#components'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Home"
        description="Welcome to the Project Website. This homepage demonstrates React component architecture with reusable Hero and Card components."
      />
      {features.map((feature, index) => (
        <Card
          key={index}
          title={feature.title}
          description={feature.description}
          href={feature.href}
        />
      ))}
    </>
  );
}
