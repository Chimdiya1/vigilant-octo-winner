import { ReactNode } from "react";
export default function NavItem({
  Icon,
  text,
}: {
  Icon: ReactNode;
  text: string;
}) {
  return (
    <a
      href={text}
      className="flex flex-col items-center gap-y-1 text-xs text-[#647995] px-3"
    >
      {Icon}
      {text}
    </a>
  );
}
