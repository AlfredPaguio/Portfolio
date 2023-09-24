import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { ModeToggle } from "@/components/mode-toggle";
import pagesData from "../pages/pagesData";
import { routerType } from "../types/router.types";




export function NavBar() {
  
  return (
    <>
      <NavigationMenu className="dark:bg-white bg-black w-screen">
        <NavigationMenuList>


        {pagesData.map((route: routerType) => {
          return <NavigationMenuItem className="dark:text-black text-white">
            <Link to={`/${route.path}`}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {route.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        })}
          
          <ModeToggle />

        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
