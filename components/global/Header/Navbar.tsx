"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600 dark:text-blue-400" : "text-gray-800 dark:text-gray-200";
  };

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Portfolio
            </Link>
          </div>
          
          <nav className="flex gap-8">
            <Link 
              href="/" 
              className={`${isActive("/")} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`${isActive("/blog")} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`${isActive("/about")} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive("/contact")} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 