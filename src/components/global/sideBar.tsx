import { ReactNode } from "react";
import { IconUser } from "../icons/IconUser";
import { IconLock } from "../icons/IconLock";
import { IconBellsimple } from "../icons/IconBellsimple";
import { IconMoney } from "../icons/IconMoney";
import { IconTag } from "../icons/IconTag";
import { IconUsers } from "../icons/IconUsers";
import { IconCloud } from "../icons/IconCloud";
import { IconSignout } from "../icons/IconSignout";
import { cn } from "@/lib/utils";
export default function SideBar() {
  return (
    <div className="pt-4 bg-white w-44 px-2 lg:px-0 lg:w-56 rounded pb-6 hidden md:flex flex-col justify-between ">
      <div>
        <p className="mb-2 pl-4 font-bold text-xs">Settings</p>
        <div className="flex flex-col gap-y-3 px-2 pb-3 border-b mb-3">
          <SideBarItem Icon={<IconUser />} text="Account" />
          <SideBarItem Icon={<IconLock />} text="Security" />
          <SideBarItem Icon={<IconBellsimple />} text="Notifications" />
          <SideBarItem Icon={<IconMoney />} text="Pricing" />
          <SideBarItem Icon={<IconTag />} text="Sales" />
          <SideBarItem
            selected={true}
            Icon={<IconUsers />}
            text="Users & Roles"
          />
          <SideBarItem Icon={<IconCloud />} text="Backups" />
        </div>
      </div>
      <button className="flex gap-3 items-center border text-sm rounded-md mx-auto px-4 py-3 text-neutral-600 border-neutral-600">
        <IconSignout size={20} /> Back to Dashboard
      </button>
    </div>
  );
}

function SideBarItem({
  Icon,
  text,
  selected,
}: {
  Icon: ReactNode;
  text: string;
  selected?: boolean;
}) {
  return (
    <a
      href={text}
      className={cn(
        "px-4 py-3 rounded-md text-neutral-400 flex gap-x-2 cursor-pointer hover:bg-primary-50",
        {
          "text-primary-600 bg-primary-50": selected,
        }
      )}
    >
      {Icon}
      <span>{text}</span>
    </a>
  );
}
