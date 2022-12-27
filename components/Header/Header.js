import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ButtonContact from "../ButtonContact/ButtonContact";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Request from "../Request/Request";
import HamburgerMenu, { Links } from "../Hamburger/hamburger";
import MenuButton from "../MenuButton/MenuButton";
import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [activeRequest, setActiveRequest] = useState(false);
  const clickPartners = () => {
    setActive((e) => !e);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const dropDownItems = [
    {
      title: "Volvo",
      href: "/VolvoPage",
    },
    {
      title: "Leica Geosystems",
      href: "",
    },
    {
      title: "Kohler",
      href: "",
    },
    {
      title: "SDLG",
      href: "",
    },
    {
      title: "Wacker Neuson",
      href: "",
    },
  ];
  const ClickRequest = () => {
    setActiveRequest((e) => !e);
  };
  const HamburgerLinks = [
    {
      href: "/",
      item: "Главная",
    },
    {
      href: "/About",
      item: "О нас",
    },
    {
      item: "MenuButton",
      href: "#",
    },
    {
      href: "#",
      item: "Б/у техника",
    },
    {
      href: "#",
      item: "Контакты",
    },
  ];
  return (
    <div className=" shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="flex h-16 justify-between">
          <div className="flex lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex items-center lg:hidden z-20 sm:mr-5">
                <div className="flex lg:hidden" id="HamburgerMenuHeader">
                  <HamburgerMenu
                    HamburgerLinks={HamburgerLinks}
                    routerPathname={router.pathname}
                    dropDownItems={dropDownItems}
                    title={"Наши партнеры"}
                    href={"#"}
                  />
                </div>
                <div className="hidden lg:flex">
                  <Links />
                </div>
              </div>
              <a href="/" className="cursor-pointer">
                <img
                  src="../../Home/FalconLogo.svg"
                  alt="Falcon"
                  className="xl:w-28 lg:w-20 w-14"
                />
              </a>
            </div>
            <div className="hidden lg:ml-20 lg:flex lg:space-x-2 xl:space-x-4 xl:ml-24 ">
              {HamburgerLinks?.map((item, index) =>
                item.item !== "MenuButton" ? (
                  <Link
                    href={item?.href}
                    key={index}
                    className={
                      router.pathname == item?.href
                        ? "inline-flex lg:items-center  border-indigo-500  pt-1 lg:text-sm xl:text-base text-base font-medium text-slate-400"
                        : "inline-flex lg:items-center  border-indigo-500  pt-1 lg:text-sm xl:text-base text-base font-medium text-[#000000]"
                    }
                  >
                    {item?.item}
                  </Link>
                ) : (
                  <MenuButton
                    key={index}
                    dropDownItems={dropDownItems}
                    title={"Наши партнеры"}
                    href={item?.href}
                  />
                )
              )}
            </div>
          </div>
          <div className="ml-4 flex items-center">
            <select
              id="location"
              name="location"
              className="mt-1 block w-1/4 text-[#7F8182] rounded-md py-2 lg:text-sm xl:text-base focus:outline-none border-none focus:border-none dark:focus:border-none dark:border-none sm:text-sm"
              defaultValue="RU"
            >
              <option className="text-[#7F8182]">RU</option>
              <option className="text-[#7F8182]">EN</option>
              <option className="text-[#7F8182]">FR</option>
              <option className="text-[#7F8182]">DE</option>
            </select>
            <ButtonContact
              onClick={ClickRequest}
              buttonTitle={"Связаться с нами"}
            />
          </div>
        </div>
        {activeRequest && <Request onClick={ClickRequest} />}
      </div>
  </div>
  );
}
