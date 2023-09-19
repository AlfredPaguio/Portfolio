import { MailOpen } from "lucide-react";

export function Contact() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Contact</h1>
      <div className="p-6 max-w-sm mx-auto bg-slate-800 dark:bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <MailOpen className="dark:fill-slate-900 fill-white" />
        </div>
        <div>
          <div className="text-xl font-medium text-white dark:text-black">
            ChitChat
          </div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
}
