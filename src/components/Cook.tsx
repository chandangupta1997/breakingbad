import React from 'react';
import { GlitchText } from './GlitchText';
import { TestTubes, Flame, Truck } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

function ProjectCard({ title, description, image, icon }: ProjectCardProps) {
  return (
    <div className="bg-zinc-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-500/20" />
        <div className="absolute top-4 right-4 bg-zinc-900 p-2 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-blue-400 mb-3">{title}</h3>
      <p className="text-blue-300/80">{description}</p>
    </div>
  );
}

export function Cook() {
  const projects = [
    {
      title: "Blue Crystal - 99.1% Pure",
      description: "The purest product you've ever seen. No more Chili P, this is the real deal.",
      image: "https://www.vice.com/wp-content/uploads/sites/2/2017/04/1491919892314-Blue-Sky-Candy-1.jpeg",
      icon: <TestTubes className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Crystal Palace",
      description: "Where magic happens. State-of-the-art facilities for maximum efficiency.",
      image: "https://www.irishtimes.com/resizer/v2/J7MJSHTP74UIHQ2L2DPMXUVB5M.jpg?auth=009a2d8fafcb394a5c3bea0de15aeb4c2537495c713b8f336b1ed1cf88b9a06c&smart=true&width=1024&height=576",
      icon: <Flame className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Distribution Network",
      description: "From ABQ to the Czech Republic. We handle business coast to coast.",
      image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/12/gus-fring-and-mike-ehrmantraut-from-breaking-bad-better-call-saul.jpg",
      icon: <Truck className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section id="cook" className="py-20">
      <div className="container mx-auto px-4">
        <GlitchText className="text-3xl md:text-4xl font-bold mb-12">
          My Cooks & Recipes
        </GlitchText>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}