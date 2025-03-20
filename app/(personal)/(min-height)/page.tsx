import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A simple portfolio website",
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        This is a simplified static version of the portfolio website without external API dependencies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <ProjectCard 
          title="Project 1" 
          description="A sample project demonstrating my skills in web development." 
        />
        <ProjectCard 
          title="Project 2" 
          description="Another example of my work using modern frameworks." 
        />
        <ProjectCard 
          title="Project 3" 
          description="A mobile application developed with React Native." 
        />
        <ProjectCard 
          title="Project 4" 
          description="An e-commerce solution with a custom CMS." 
        />
      </div>
    </main>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
