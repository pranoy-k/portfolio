import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({
  params,
}: BlogPostPageProps): Metadata {
  // Normally we would fetch this data from a CMS
  const blog = getStaticBlogPost(params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = getStaticBlogPost(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/blog" className="text-blue-600 dark:text-blue-400 mb-6 inline-block hover:underline">
        ← Back to all posts
      </Link>
      
      <div className="mt-6 mb-12">
        <time className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</time>
        <h1 className="text-4xl font-bold mt-2 mb-6">{blog.title}</h1>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        {blog.content.map((paragraph, index) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

// This would normally come from a CMS or API
function getStaticBlogPost(slug: string) {
  const posts: Record<string, {
    title: string;
    date: string;
    description: string;
    content: string[];
  }> = {
    "getting-started-with-nextjs": {
      title: "Getting Started with Next.js",
      date: "April 15, 2023",
      description: "Learn how to set up your first Next.js project with TypeScript and Tailwind CSS.",
      content: [
        "Next.js is a powerful React framework that enables you to build fast, SEO-friendly websites with server-side rendering and static site generation capabilities.",
        "In this tutorial, we'll walk through setting up a new Next.js project from scratch, configure TypeScript for type safety, and integrate Tailwind CSS for styling.",
        "First, let's create a new Next.js project using the official starter template. Open your terminal and run the following command:",
        "npx create-next-app@latest my-nextjs-app --typescript --tailwind --eslint",
        "This command creates a new Next.js project with TypeScript, Tailwind CSS, and ESLint pre-configured. Next.js 13 introduces the new App Router, which provides enhanced routing capabilities and improved performance.",
        "Once the installation is complete, navigate to your project directory and start the development server with: npm run dev",
        "Congratulations! You now have a Next.js project up and running with TypeScript and Tailwind CSS."
      ]
    },
    "building-a-portfolio-website": {
      title: "Building a Portfolio Website",
      date: "March 10, 2023",
      description: "A step-by-step guide to creating a modern portfolio website to showcase your work.",
      content: [
        "A well-designed portfolio website is essential for showcasing your skills and attracting potential clients or employers.",
        "In this guide, we'll go through the process of building a modern portfolio website using Next.js, Tailwind CSS, and other modern web technologies.",
        "We'll cover the most important sections to include in your portfolio, such as an about section, project showcase, skills list, and contact information.",
        "The key to a successful portfolio is highlighting your unique skills and accomplishments while maintaining a clean, professional design that's easy to navigate.",
        "Remember to include case studies or detailed descriptions of your most significant projects, explaining the challenges you faced and how you overcame them.",
        "Make your portfolio website responsive to ensure it looks great on all devices, from desktop computers to mobile phones.",
        "Finally, deploy your portfolio using a platform like Vercel or Netlify for free hosting with automatic deployments from your Git repository."
      ]
    },
    "modern-css-techniques": {
      title: "Modern CSS Techniques",
      date: "February 22, 2023",
      description: "Explore the latest CSS features and how they can improve your web development workflow.",
      content: [
        "CSS has evolved significantly in recent years, with new features and capabilities that make web development more efficient and enjoyable.",
        "In this article, we'll explore some of the most powerful modern CSS techniques that you can start using in your projects today.",
        "CSS Grid and Flexbox provide powerful layout capabilities that simplify complex designs and responsive layouts.",
        "CSS Variables (Custom Properties) enable more maintainable and dynamic styling by allowing you to define reusable values that can be updated programmatically.",
        "Container Queries extend the power of media queries by allowing you to style elements based on their container's size rather than just the viewport size.",
        "Modern CSS also includes powerful selectors like :is(), :where(), and :has() that simplify complex selector patterns and reduce repetition.",
        "By embracing these modern CSS techniques, you can write more maintainable, flexible, and powerful stylesheets for your web projects."
      ]
    },
    "introduction-to-typescript": {
      title: "Introduction to TypeScript",
      date: "January 5, 2023",
      description: "Why TypeScript is becoming the standard for JavaScript development and how to get started.",
      content: [
        "TypeScript has gained immense popularity in the web development community, and for good reason. It adds static typing to JavaScript, catching errors during development rather than at runtime.",
        "In this introduction, we'll cover the basics of TypeScript and how it can improve your development workflow.",
        "To get started with TypeScript, you'll need to install it via npm: npm install -g typescript",
        "TypeScript allows you to define types for variables, function parameters, and return values, making your code more predictable and easier to understand.",
        "One of TypeScript's most powerful features is its interface system, which allows you to define complex object shapes and ensure consistency throughout your codebase.",
        "TypeScript also supports generics, which enable you to create reusable components that work with a variety of types while maintaining type safety.",
        "While there is a learning curve, the benefits of TypeScript—including better tooling, improved code quality, and enhanced team collaboration—make it well worth the investment for most projects."
      ]
    },
    "state-management-in-react": {
      title: "State Management in React",
      date: "December 12, 2022",
      description: "Comparing different state management solutions for React applications.",
      content: [
        "Effective state management is crucial for building scalable and maintainable React applications.",
        "In this article, we'll compare various state management solutions for React, from built-in options like useState and useContext to third-party libraries.",
        "For simple components, React's useState hook is often sufficient, allowing you to add state to functional components with minimal boilerplate.",
        "As your application grows, you might utilize useContext and useReducer for managing more complex state that needs to be shared across multiple components.",
        "For larger applications, libraries like Redux provide a predictable state container with a strict unidirectional data flow, though they add complexity.",
        "Newer alternatives like Zustand and Jotai offer simpler APIs while maintaining many of Redux's benefits, making them increasingly popular choices.",
        "The best state management solution depends on your project's specific needs—consider factors like application size, team familiarity, and performance requirements when making your decision."
      ]
    },
    "responsive-design-principles": {
      title: "Responsive Design Principles",
      date: "November 8, 2022",
      description: "Best practices for creating websites that work on all devices and screen sizes.",
      content: [
        "Responsive design ensures your websites look and function well on devices of all sizes, from desktop computers to smartphones.",
        "In this guide, we'll cover key principles and best practices for implementing effective responsive design.",
        "The foundation of responsive design is the flexible grid, which allows content to resize fluidly based on viewport dimensions.",
        "Media queries enable you to apply different styles at various screen sizes, ensuring optimal presentation across devices.",
        "Responsive images are crucial for performance—use techniques like srcset and sizes attributes to serve appropriately sized images for different devices.",
        "Touch-friendly interfaces are essential for mobile users; ensure interactive elements are large enough and properly spaced for touch input.",
        "Finally, always test your responsive designs on real devices to ensure a good user experience across the full range of devices your audience might use."
      ]
    }
  };

  return posts[slug] || null;
}
