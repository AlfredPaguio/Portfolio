import { InputForm } from "@/components/InputForm";
import { MailOpen } from "lucide-react";

function Contact() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Contact</h1>
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

      <InputForm />
    </div>
  );
}

export default Contact;
