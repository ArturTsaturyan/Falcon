import ButtonContact from "../../ButtonContact/ButtonContact";
import FirmLogo from "../../FirmLogo/FirmLogo";

export default function SectionOne() {
  const firmLOgo = [
    {
      id: 1,
      src: "volvo.svg",
      alt: "Volvo",
      href: "/VolvoPage"
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
    <div className="h-auto w-full " id="homePageSectionOne">
      <div className="bg-cover bg-no-repeat bg-scroll p-24 bg-[url('/landscape-machinery.png')]  w-full ">

        <div className="max-w-lg px-2 sm:px-4 lg:w-2/5 lg:h-[320px] md:w-2/6  bg-[#FFFFFF] lg:p-10 md:p-6 p-4 ">

          <h1 className="xl:text-4xl lg:text-3xl md:text-lg font-medium uppercase leading-10">
            Продажа промышленной техники
          </h1>
          <p className="text-[#4C4F50] lg:text-2xl md:text-sm font-normal leading-8">
            от официального дистрибьютора
          </p>
          <ButtonContact buttonTitle={"Оставить заявку"}/>
        </div>
      </div>
     <FirmLogo firmLOgo={firmLOgo}/>
    </div>
  );
}
