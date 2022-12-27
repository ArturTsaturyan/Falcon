import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const FirmHamburgerMenu = ({ FirmHamburgerMenuItem }) => (
  <div className="p-2 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
    <Menu customBurgerIcon={<HamburgerIcon />} width={"auto"} className="">
      <Links FirmHamburgerMenuItem={FirmHamburgerMenuItem} />
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2 pl-4">
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

export const Links = ({ FirmHamburgerMenuItem }) => (
  <>
    <div className="grid  grid-cols-1 sm:grid-cols-3 px-12 py-10">
      {FirmHamburgerMenuItem?.map((item, id) => (
        <Link
          key={id}
          href={item?.href}
          className="border-transparent  pt-1 text-base font-medium text-[#000000] hover:border-gray-300 hover:text-gray-700"
        >
          {item?.item}
        </Link>
      ))}
    </div>
  </>
);

export default FirmHamburgerMenu;
