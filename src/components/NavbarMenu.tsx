import { pageInformation, PageInformationType } from "@/pages/routes";
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
          "divide-y-1 absolute left-6 right-6 z-50 mt-1 flex-col items-center space-y-6 self-end border-solid border-border bg-background py-8 font-bold drop-shadow-md sm:w-auto sm:self-center",
        )}
      >
        {pageInformation
          .filter((route: PageInformationType) => route.path != "*")
          .map((route: PageInformationType, key) => {
            return (
              <NavLink
                key={"MenuMobileView" + key}
                to={`/${route.path}`}
                className="pb-1 text-foreground transition-all duration-300 ease-in-out hover:text-accent"
              >
                {route.title}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
