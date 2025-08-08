// Footer.tsx
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section: Logo/Name and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-medium tracking-wide text-zinc-50">
                Aleksy Szłapa
              </span>
            </div>
            <p className="text-sm text-zinc-400 font-light">
              © {new Date().getFullYear()} Aleksy Szłapa. All rights reserved.
            </p>
          </div>

          {/* Middle Section: Social Links */}
          <div className="flex items-start gap-2 flex-col">
            <h4 className="text-white font-bold">
                Contact
            </h4>
            <Separator className="my-0 bg-zinc-600"/>
            <a
              href="https://github.com/a-szlapa"
              aria-label="My GitHub profile"
              className="text-zinc-400 hover:text-green-400 transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="mailto:szlapaalesy@gmail.com"
              aria-label="Email Aleksy Szłapa"
              className="text-zinc-400 hover:text-green-400 transition-colors duration-300"
            >
              szlapaalesy@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/aleksy-szłapa-603580379"
              aria-label="My LinkedIn profile"
              className="text-zinc-400 hover:text-green-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            
            
          </div>

          {/* Right Section: Crafted with message */}
          <p className="text-xs text-zinc-500 font-mono bg-gradient-to-r from-green-900/20 to-zinc-800/30 px-4 py-2 rounded-full border border-zinc-800">
            Designed & developed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
