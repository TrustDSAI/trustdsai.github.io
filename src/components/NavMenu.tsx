import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex items-center w-full h-20">
      {/* Mobile menu button - visible only on small screens */}
      <div className="md:hidden absolute right-4 z-10">
        <button
          ref={buttonRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600 hover:text-primary focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Desktop Navigation - hidden on small screens */}
      <div className="flex-1 hidden md:flex justify-center">
        <nav className="flex items-center gap-8">
          {/* About dropdown */}
          <div className="dropdown-wrapper group relative">
            <button className="text-lg font-medium hover:text-primary focus:outline-none flex items-center gap-1">
              About
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="dropdown-content invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 transition-all duration-300 z-50">
              <div className="bg-popover rounded-md shadow-md border p-2 min-w-[150px]">
                <a
                  href="/about/team"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Team
                </a>
              </div>
            </div>
          </div>

          {/* Goals & Tasks link */}
          <a
            href="/goals-tasks"
            className="text-lg font-medium hover:text-primary"
          >
            Goals & Tasks
          </a>

          {/* Resources dropdown */}
          <div className="dropdown-wrapper group relative">
            <button className="text-lg font-medium hover:text-primary focus:outline-none flex items-center gap-1">
              Resources
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="dropdown-content invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 transition-all duration-300 z-50">
              <div className="bg-popover rounded-md shadow-md border p-2 min-w-[200px]">
                <a
                  href="/resources/publications"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Scientific Publications
                </a>
                <a
                  href="/resources/tools"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Tools
                </a>
                <a
                  href="/resources/acknowledgements"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Acknowledgements & Logos
                </a>
                <a
                  href="/resources/theses"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Student Theses
                </a>
              </div>
            </div>
          </div>

          {/* Opportunities link */}
          <a
            href="/opportunities"
            className="text-lg font-medium hover:text-primary"
          >
            Opportunities
          </a>

          {/* News and Events link */}
          <a
            href="/news-events"
            className="text-lg font-medium hover:text-primary"
          >
            News and Events
          </a>
        </nav>
      </div>

      {/* Empty div to balance the layout - only visible on desktop */}
      <div className="invisible md:flex items-center hidden">
        <span className="font-bold text-xl">AI-SSD</span>
      </div>

      {/* Mobile Navigation - dropdown positioned on the right */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-0 w-full md:hidden z-50"
        >
          <div className="bg-background border shadow-lg rounded-b-lg mx-4">
            <nav className="flex flex-col py-2">
              {/* About dropdown for mobile */}
              <div className="px-4 py-2">
                <button
                  className="w-full text-left flex items-center justify-between text-lg font-medium"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    if (content) {
                      content.classList.toggle("hidden");
                    }
                  }}
                >
                  About
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="hidden pl-4 mt-2 border-l-2 border-gray-200">
                  <a
                    href="/about/team"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </a>
                </div>
              </div>

              {/* Goals & Tasks link for mobile */}
              <a
                href="/goals-tasks"
                className="px-4 py-2 text-lg font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Goals & Tasks
              </a>

              {/* Resources dropdown for mobile */}
              <div className="px-4 py-2">
                <button
                  className="w-full text-left flex items-center justify-between text-lg font-medium"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    if (content) {
                      content.classList.toggle("hidden");
                    }
                  }}
                >
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="hidden pl-4 mt-2 border-l-2 border-gray-200">
                  <a
                    href="/resources/publications"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Scientific Publications
                  </a>
                  <a
                    href="/resources/tools"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tools
                  </a>
                </div>
              </div>

              {/* Opportunities link for mobile */}
              <a
                href="/opportunities"
                className="px-4 py-2 text-lg font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Opportunities
              </a>

              {/* News and Events link for mobile */}
              <a
                href="/news-events"
                className="px-4 py-2 text-lg font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                News and Events
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
