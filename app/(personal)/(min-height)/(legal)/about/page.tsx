import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background, skills, and experience",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl mb-8">
          Hi, I'm a web developer passionate about creating beautiful, functional websites 
          and applications using modern technologies.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">My Background</h2>
        <p>
          With over 5 years of experience in web development, I've worked on a variety of projects 
          ranging from small business websites to complex web applications. I have a strong 
          foundation in front-end development, with expertise in HTML, CSS, JavaScript, React, 
          and Next.js.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>JavaScript (ES6+) / TypeScript</li>
          <li>React / Next.js</li>
          <li>HTML5 / CSS3 / Tailwind CSS</li>
          <li>Node.js / Express</li>
          <li>MongoDB / PostgreSQL</li>
          <li>Git / GitHub</li>
          <li>Responsive Design</li>
          <li>UI/UX Principles</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
        <p>
          I hold a Bachelor's degree in Computer Science from XYZ University, where I developed 
          a strong foundation in algorithm design, data structures, and software engineering principles.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">My Approach</h2>
        <p>
          I believe in writing clean, maintainable code that follows best practices and industry 
          standards. I'm committed to continuous learning and staying up-to-date with the latest 
          web technologies and trends.
        </p>
        <p className="mt-4">
          My goal is to create web experiences that are not only visually appealing but also 
          accessible, performant, and user-friendly. I pay close attention to details and always 
          strive to deliver high-quality work that exceeds expectations.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Let's Connect</h2>
        <p>
          I'm always open to new opportunities and collaborations. Whether you have a project 
          in mind or just want to chat about web development, feel free to reach out to me.
        </p>
      </div>
    </main>
  );
} 