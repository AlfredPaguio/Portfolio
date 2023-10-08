import { Link } from "react-router-dom";
import pagesData from "../pages/pagesData";
import { routerType } from "../types/router.types";

export default function NoPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-48">
        <div className="flex flex-col">
          {/* Error */}
          <div className="flex flex-col items-center">
            <div className="text-7xl font-bold text-primary dark:text-primary-dark">
              404
            </div>

            <div className="mt-10 text-3xl font-bold text-text dark:text-text-dark md:text-5xl lg:text-6xl xl:text-7xl">
              You've landed on a wrong planet!
            </div>

            <div className="mt-8 text-sm font-medium text-gray-400 md:text-xl lg:text-2xl">
              The page you are looking for could not be found.
            </div>
          </div>

          {/* <!-- Continue With --> */}
          <div className="mt-48 flex flex-col">
            <div className="font-bold uppercase text-gray-400">
              Continue With
            </div>

            <div className="mt-5 flex flex-col items-stretch">
              {pagesData
                .filter((route: routerType) => route.path != "*")
                .map((route: routerType, key) => {
                  return (
                    <>
                      <Link
                        key={key}
                        to={`/${route.path}`}
                        className="pt-1 text-text transition-all duration-200 hover:text-accent dark:text-text-dark dark:hover:text-accent-dark"
                      >
                        <div
                          className="group flex flex-row border-t border-primary
                    px-4 py-8 transition-all duration-200
                    hover:cursor-pointer dark:border-primary-dark"
                        >
                          {/* <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                            <i
                              className="mx-auto 
                            text-2xl text-indigo-900 md:text-3xl"
                            ></i>
                          </div> */}

                          {/* Text */}
                          <div className="flex grow flex-col pl-5 pt-2">
                            <div className="text-sm font-bold text-text group-hover:underline dark:text-text-dark md:text-lg lg:text-xl">
                              {route.title}
                            </div>

                            <div
                              className="md:text-md text-sm font-semibold text-gray-600
                            transition-all delay-100
                            duration-200 group-hover:text-gray-500 lg:text-lg"
                            >
                              {route.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
