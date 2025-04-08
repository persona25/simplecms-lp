import { useState } from "react";
import { Button } from "./ui/button";
import { CheckIcon, Clipboard } from "lucide-react";

export default function CommandClipboard({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-4 flex items-center ">
      <code className="border border-gray-200 py-2 px-3 rounded-md">
        {command}
      </code>
      <Button
        onClick={handleCopy}
        variant={"outline"}
        className={`ml-2 px-2 h-10 py-3 rounded-md text-black`}
      >
        {!copied ? (
          <Clipboard className="h-3 w-4 text-black" />
        ) : (
          <CheckIcon className="h-5 w-5 text-green-500" />
        )}
      </Button>
    </div>
  );
}
