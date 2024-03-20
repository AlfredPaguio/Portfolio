"use client";
import React, { useState } from "react";
import { Badge, BadgeProps } from "./ui/badge";
import { ClipboardCheckIcon, ClipboardIcon } from "lucide-react";
import { toast } from "sonner";

interface CopyToClipboardProps extends BadgeProps {
  toCopy: string;
}

function CopyToClipboard({
  className = "hover:cursor-pointer",
  variant,
  toCopy,
  ...props
}: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(toCopy);
      setIsCopied(true);
      toast("Code has been copied", {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white text-balance">{toCopy}</code>
          </pre>
        ),
      });
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Badge
      variant={variant}
      className={className}
      onClick={() => handleCopy()}
      {...props}
    >
      {isCopied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
    </Badge>
  );
}

export default CopyToClipboard;
