import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { ModeToggle } from "@/components/mode-toggle";

export function NavBar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="text-slate-900 dark:text-white">
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-slate-900 dark:text-white">
            <Link to="/projects">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-slate-900 dark:text-white">
            <Link to="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* ModeToggle */}
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
