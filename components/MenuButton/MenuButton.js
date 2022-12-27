import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function MenuButton({
  dropDownItems,
  title,
  href,
  routerPathname,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu
      as="div"
      className="relative lg:inline-flex lg:items-center border-transparent  pt-1 lg:text-sm xl:text-base text-base font-medium text-[#000000] hover:border-gray-300 hover:text-gray-700"
    >
      <div>
        <Menu.Button
          href={href}
          className={
            routerPathname == href
              ? "lg:inline-flex lg:w-full lg:justify-center border-none lg:px-4 lg:py-2 lg:text-sm text-base font-medium focus:outline-none text-slate-400"
              : "lg:inline-flex lg:w-full lg:justify-center border-none lg:px-4 lg:py-2 lg:text-sm text-base font-medium text-[#000000] focus:outline-none"
          }
        >
          {title}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="lg:absolute -right-5 z-10 lg:mt-52 w-40 origin-top-right rounded-md bg-white  ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">
            {dropDownItems?.map((e, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <a
                    href={e?.href}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {e?.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
