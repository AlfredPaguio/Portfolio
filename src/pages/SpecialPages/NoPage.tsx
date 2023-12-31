import { Link } from "react-router-dom";
import pagesData, { routerType } from "@/routes/pagesData";
import { MoonIcon } from "lucide-react";

function NoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-48">
      <div className="flex flex-col">
        {/* Error */}
        <div className="flex flex-col items-center">
          <MoonIcon size={124} className="fill-accent text-accent-foreground" />
          <div className="text-7xl font-bold text-foreground">404</div>

          <div className="mt-10 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            You've landed on the wrong moon!
          </div>

          <div className="mt-8 text-sm font-medium text-muted-foreground md:text-xl lg:text-2xl">
            The page you are looking for could not be found.
          </div>
        </div>

        {/* Continue With */}
        <div className="mt-48 flex flex-col">
          <div className="font-bold uppercase text-muted-foreground">
            Continue With
          </div>

          <div className="mt-5 flex flex-col items-stretch">
            {pagesData
              .filter((route: routerType) => route.path !== "*")
              .map((route: routerType, key) => {
                return (
                  <Link
                    key={key}
                    to={`/${route.path}`}
                    className="pt-1 text-foreground transition-all duration-200 hover:text-accent-foreground"
                  >
                    <div
                      className="group flex flex-row border-t
                    border-primary px-4 py-8 transition-all
                    duration-200 hover:cursor-pointer"
                    >
                      {route.Icon && (
                        <div className="rounded-xl bg-accent px-3 py-2 md:py-4">
                          <route.Icon className="mx-auto text-2xl text-accent-foreground md:text-3xl" />
                        </div>
                      )}

                      {/* Text */}
                      <div className="flex grow flex-col pl-5 pt-2">
                        <div className="text-sm font-bold text-foreground group-hover:underline md:text-lg lg:text-xl">
                          {route.title}
                        </div>

                        <div className="md:text-md text-sm font-semibold text-popover transition-all duration-200 group-hover:text-popover-foreground lg:text-lg">
                          {route.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
