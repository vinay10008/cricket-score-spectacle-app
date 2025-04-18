
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-ipl-dark/80 text-white shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-ipl-orange">IPL</span>
              <span className="ml-1 text-2xl font-bold">Score</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="#" isActive>Matches</NavLink>
              <NavLink href="#">Points Table</NavLink>
              <NavLink href="#">Teams</NavLink>
              <NavLink href="#">News</NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-ipl-purple/20"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <MobileNavLink href="#" isActive>Matches</MobileNavLink>
          <MobileNavLink href="#">Points Table</MobileNavLink>
          <MobileNavLink href="#">Teams</MobileNavLink>
          <MobileNavLink href="#">News</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const NavLink = ({ href, children, isActive = false }: NavLinkProps) => (
  <a
    href={href}
    className={cn(
      "rounded-md px-3 py-2 text-sm font-medium",
      isActive
        ? "bg-ipl-blue text-white"
        : "text-gray-200 hover:bg-ipl-purple/20 hover:text-white"
    )}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, isActive = false }: NavLinkProps) => (
  <a
    href={href}
    className={cn(
      "block rounded-md px-3 py-2 text-base font-medium",
      isActive
        ? "bg-ipl-blue text-white"
        : "text-gray-200 hover:bg-ipl-purple/20 hover:text-white"
    )}
  >
    {children}
  </a>
);

export default Navbar;
