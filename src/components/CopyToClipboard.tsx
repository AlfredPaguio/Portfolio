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
      toast.success("Code has been copied");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Uh oh! Something went wrong.", {
        description: "" + error,
      });
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
