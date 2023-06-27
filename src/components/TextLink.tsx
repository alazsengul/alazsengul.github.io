import { ReactNode } from "react";

interface TextLinkProps {
  url: string;
  children: ReactNode;
}

export default function TextLink({ url, children }: TextLinkProps) {
  return (
    <a href={url} target="_blank" className="underline">
      {children}
    </a>
  );
}
