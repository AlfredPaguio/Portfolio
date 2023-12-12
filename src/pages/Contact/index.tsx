// import { InputForm } from "@/components/InputForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <Card>
        <CardContent className="flex h-full w-full flex-col items-center justify-center gap-8 p-14">
          <Button variant={"link"} className="group" asChild>
            <Link to="https://www.facebook.com/FleetingComet/">
              <Facebook className="mr-1 h-8 w-8" />
              <h1 className="text-2xl">Facebook</h1>
            </Link>
          </Button>

          <Button variant={"link"} className="group" asChild>
            <Link to="https://github.com/AlfredPaguio">
              <Github className="mr-1 h-8 w-8" />
              <h1 className="text-2xl">Github</h1>
            </Link>
          </Button>

          <Button variant={"link"} className="group" asChild>
            <Link to="https://www.linkedin.com/in/alfredpaguio">
              <Linkedin className="mr-1 h-8 w-8" />
              <h1 className="text-2xl">LinkedIn</h1>
            </Link>
          </Button>
          <Button variant={"link"} className="group" asChild>
            <Link to="mailto:alfredpaguio36@gmail.com">
              <Mail className="mr-1 h-8 w-8" />
              <h1 className="text-2xl">alfredpaguio36@gmail.com</h1>
            </Link>
          </Button>
        </CardContent>
      </Card>
      <h1>There's no form fully functioning yet. (╥﹏╥)</h1>
      {/* <InputForm /> */}
    </div>
  );
}

export default Contact;
