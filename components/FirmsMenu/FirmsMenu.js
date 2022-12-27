import Link from "next/link";
import FirmHamburgerMenu from "../FirmHamburgerMenu/FirmHamburgerMenu";

export default function FirmsMenu({ firmMenuItems, FirmHamburgerMenuItem }) {
  return (
    <div>
      <div className="w-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] lg:block hidden">
        <div className="w-full max-w-7xl px-4 py-5 m-auto ">
          <div className="flex justify-between">
            {firmMenuItems?.map((e, i) => (
              <Link
                key={i}
                href={`${e.href}`}
                className="text-[#000000] text-sm font-medium uppercase"
              >
                {e?.item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="block lg:hidden" id="FirmHamburgerMenu">
        <FirmHamburgerMenu FirmHamburgerMenuItem={FirmHamburgerMenuItem} />
      </div>
    </div>
  );
}
