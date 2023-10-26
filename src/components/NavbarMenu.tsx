import pagesData from "@/routes/pagesData";
import { routerType } from "@/routes/types/router.types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type NavbarMenuProps = {
  showMenu: boolean;
};

export function NavbarMenu({ showMenu }: NavbarMenuProps) {
  return (
    <div className="md:hidden">
      <div
        className={twMerge(
          showMenu ? "flex" : "hidden",
          "absolute left-6 right-6 mt-1 flex-col divide-y-1 border-solid border-text items-center space-y-6 self-end bg-background py-8 font-bold drop-shadow-md sm:w-auto sm:self-center z-50",
        )}
      >
        {pagesData
          .filter((route: routerType) => route.path != "*")
          .map((route: routerType, key) => {
            return (
              <NavLink
                key={"MenuMobileView" + key}
                to={`/${route.path}`}
                className="pb-1 text-white transition-all duration-300 ease-in-out hover:text-accent"
              >
                {route.title}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
