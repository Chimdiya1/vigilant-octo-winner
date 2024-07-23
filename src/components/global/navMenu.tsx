import logo from "../../assets/logo.png";
import userPicture from "../../assets/userPicture.png";
import { IconBellsimple } from "../icons/IconBellsimple";
import NavItem from "../global/navItem";
import { IconWallet } from "../icons/IconWallet";
import { IconQuestion } from "../icons/IconQuestion";
import { IconGear } from "../icons/IconGear";
import { IconCaretdown } from "../icons/IconCaretdown";
import { IconSearch } from "../icons/IconSearch";
import Input from "./input";

function NavMenu() {
  return (
    <>
      <nav className="px-9 py-5 flex items-center justify-between">
        <div className="flex ">
          <img src={logo} />
          <div className="relative  ml-6 rounded-md pl-3 bg-[#F0F2F5]">
            <IconSearch className="absolute left-2 top-1/3 z-30 text-[#475367]" />
            <Input
              name="search"
              placeholder="Search here..."
              title=""
              className="my-0 border-0 outline-0 md:w-[320px] xl:w-[620px] bg-[#F0F2F5]"
            />
          </div>
        </div>
        <div className="lg:flex gap-2 hidden ">
          <NavItem
            Icon={<IconBellsimple size={24} className="icon" />}
            text="Notifications"
          />
          <NavItem
            Icon={<IconWallet size={24} className="icon" />}
            text="Wallet"
          />
          <NavItem
            Icon={<IconQuestion size={24} className="icon" />}
            text="Inquiries"
          />
          <NavItem
            Icon={<IconGear size={24} className="icon" />}
            text="Settings"
          />
          <div className="flex items-center gap-2">
            <img src={userPicture} className="w-9 h-9" />
            <IconCaretdown className="text-[#667185] w-4" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
