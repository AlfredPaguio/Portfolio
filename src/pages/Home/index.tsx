import { MailOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <div className="min-h-screen">
        <h4>Hello!</h4>
        <h1>I'm Alfred U. Paguio</h1>
        <h3>
          Junior Software Engineer / Web Developer | <span>Back-End</span>
        </h3>
        <Link to="/contact">Hire Me</Link>

        <div className="container mx-auto flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <div className=" flex max-w-sm items-center space-x-4 rounded-xl bg-slate-800 p-6 shadow-lg dark:bg-white">
            <div className="shrink-0">
              <MailOpen className="fill-white dark:fill-slate-900" />
            </div>
            <div>
              <div className="text-xl font-medium text-white dark:text-black">
                ChitChat
              </div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </div>

          <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-slate-800 p-6 shadow-lg dark:bg-white">
            <div className="shrink-0">
              <MailOpen className="fill-white dark:fill-slate-900" />
            </div>
            <div>
              <div className="text-xl font-medium text-white dark:text-black">
                ChitChat
              </div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </div>

          <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-slate-800 p-6 shadow-lg dark:bg-white">
            <div className="shrink-0">
              <MailOpen className="fill-white dark:fill-slate-900" />
            </div>
            <div>
              <div className="text-xl font-medium text-white dark:text-black">
                ChitChat
              </div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
