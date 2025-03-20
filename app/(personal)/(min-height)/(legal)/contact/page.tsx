import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me for inquiries, collaborations, or opportunities",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <p className="text-xl mb-12">
        Have a question or want to work together? I'd love to hear from you. Fill out the form below
        and I'll get back to you as soon as possible.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p>
                <strong className="block">Email:</strong>
                <a href="mailto:hello@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  hello@example.com
                </a>
              </p>
              <p>
                <strong className="block">Location:</strong>
                San Francisco, CA
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-2">
              <p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  GitHub
                </a>
              </p>
              <p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 