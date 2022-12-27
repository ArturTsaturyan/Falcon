import FirmLogo from "../FirmLogo/FirmLogo";
import AboutPageContent from "./AboutPageContent";

export default function AboutPage() {
  const firmLOgo = [
    {
      id: 1,
      title: "Смотрите также:",
    },
    {
      id: 2,
      src: "Leica.svg",
      alt: "Leica",
    },
    {
      id: 3,
      src: "Kohler_logo.svg",
      alt: "Kohler",
    },
    {
      id: 4,
      src: "sdlg-middle-east.svg",
      alt: "Sdlg-middle-east",
    },
    {
      id: 5,
      src: "wacker-neuson.svg",
      alt: "Wacker-neuson",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl m-auto">
        <div className="max-w-7xl m-auto py-6 flex justify-between pr-6">
          <p className="text-[#7F8182] text-base font-normal px-4">{`Главная > О нас`}</p>
        </div>
        <div>
          <h1 className="text-xl text-[#000000] font-medium mx-4 uppercase">
            Заголовок текстовой страницы
          </h1>
        </div>
        <AboutPageContent
          src="/AboutEx.svg"
          className="mx-4 lg:flex justify-between mt-12"
        />
        <AboutPageContent
          src="/AboutEx.svg"
          className="mx-4 lg:flex justify-between flex-row-reverse mt-10"
        />
      </div>
      <div className="shadow-[0_-5px_15px_rgba(0,0,0,0.1)] w-full mt-12">
        <FirmLogo firmLOgo={firmLOgo} />
      </div>
    </div>
  );
}
