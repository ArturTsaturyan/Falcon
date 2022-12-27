import Link from "next/link";

export default function FirmLogo({ firmLOgo }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 px-10 py-4 lg:px-20 lg:py-6 w-full bg-[#FFFFFF] flex justify-between justify-center shadow-[0_5px_15px_-15px_rgba(0,0,0,0.3)]">
      {firmLOgo.map((e, id) => {
        return (
          <div className="flex items-center">
            {e?.title ? (
              <h1 className="lg:text-xl text-sm font-medium text-[#000000]">{e?.title}</h1>
            ) : (
              <Link href={`${e?.href}`}>
                <img
                  key={id}
                  src={`./Home/${e?.src}`}
                  alt={e?.alt}
                  className="w-16 h-6 lg:w-40 lg:h-20 md:w-24 md:h-10 hover:lg:w-44 hover:lg:h-24 duration-300 cursor-pointer"
                />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
