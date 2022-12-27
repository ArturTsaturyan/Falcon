import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import MenuButton from "../MenuButton/MenuButton";

const HamburgerMenu = ({routerPathname,HamburgerLinks,dropDownItems,title,href}) => (
  <div className="relative ">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-0"
    >
      <Links routerPathname={routerPathname} HamburgerLinks={HamburgerLinks} dropDownItems={dropDownItems} title={title} href={href}/>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <svg
      className="w-8 h-8 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = ({routerPathname,HamburgerLinks,dropDownItems,title,href}) => (
  <>
    {HamburgerLinks?.map((item, index) =>
      item.item !== "MenuButton" ? (
        <div key={index} className="border-b-2 border-[#DDDDDD]">
          <Link
            href={item?.href}
            className={
              routerPathname == item?.href
                ? "inline-flex lg:items-center  border-indigo-500  pt-1 lg:text-sm xl:text-base text-base font-medium text-slate-400"
                : "inline-flex lg:items-center  border-indigo-500  pt-1 lg:text-sm xl:text-base text-base font-medium text-[#000000]"
            }
          >
            {item?.item}
          </Link>
        </div>
      ) : (
        <div key={index} className="border-b-2 border-[#DDDDDD]">
          <MenuButton dropDownItems={dropDownItems} title={title} href={href} routerPathname={routerPathname}/>
        </div>
      )
    )}
  </>
);

export default HamburgerMenu;
