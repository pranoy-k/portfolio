import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest articles on web development and technology",
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-xl mb-12 max-w-2xl">
        Thoughts, ideas, and tutorials on web development and technology.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogPostCard
          title="Getting Started with Next.js"
          date="April 15, 2023"
          description="Learn how to set up your first Next.js project with TypeScript and Tailwind CSS."
          slug="getting-started-with-nextjs"
        />
        <BlogPostCard
          title="Building a Portfolio Website"
          date="March 10, 2023"
          description="A step-by-step guide to creating a modern portfolio website to showcase your work."
          slug="building-a-portfolio-website"
        />
        <BlogPostCard
          title="Modern CSS Techniques"
          date="February 22, 2023"
          description="Explore the latest CSS features and how they can improve your web development workflow."
          slug="modern-css-techniques"
        />
        <BlogPostCard
          title="Introduction to TypeScript"
          date="January 5, 2023"
          description="Why TypeScript is becoming the standard for JavaScript development and how to get started."
          slug="introduction-to-typescript"
        />
        <BlogPostCard
          title="State Management in React"
          date="December 12, 2022"
          description="Comparing different state management solutions for React applications."
          slug="state-management-in-react"
        />
        <BlogPostCard
          title="Responsive Design Principles"
          date="November 8, 2022"
          description="Best practices for creating websites that work on all devices and screen sizes."
          slug="responsive-design-principles"
        />
      </div>
    </main>
  );
}

function BlogPostCard({ 
  title, 
  date, 
  description, 
  slug 
}: { 
  title: string; 
  date: string; 
  description: string; 
  slug: string;
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
      <h2 className="text-2xl font-semibold mt-2 mb-3">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link 
        href={`/blog/${slug}`}
        className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        Read more
      </Link>
    </div>
  );
}
