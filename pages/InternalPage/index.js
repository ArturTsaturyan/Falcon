import Link from "next/link";
import FirmLogo from "../../components/FirmLogo/FirmLogo";
import FirmsMenu from "../../components/FirmsMenu/FirmsMenu";
import FirmsTitleBlock from "../../components/FirmsTitleBlock/FirmsTitleBlock";
import InternalPageFeatures from "../../components/InternalPageFeatures/InternalPageFeatures";
import InternalPageItem from "../../components/InternalPageItem/InternalPageItem";
import InternalPageLink from "../../components/InternalPageLink/InternalPageLink";
import InternalPageOtherModels from "../../components/InternalPageOtherModels/InternalPageOtherModels";
import InternalPageSpecification from "../../components/InternalPageSpecification/InternalPageSpecification";

export default function InternalPage() {
  const firmMenuItems = [
    {
      href: "#Excavators",
      item: "Excavators",
    },
    {
      href: "#WheelLoaders",
      item: "Wheel loaders",
    },
    {
      href: "#ArticulatedHaulers",
      item: "Articulated haulers",
    },
    {
      href: "#",
      item: "Rigid haulers",
    },
    {
      href: "#",
      item: "Asphalt pavers",
    },
    {
      href: "#",
      item: "Compactors",
    },
    {
      href: "#",
      item: "Pipelayers",
    },
  ];
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
  const itemExcavators = [
    {
      imgLogo: "volvo.svg",
      img: "csmVolvo.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmVolvo.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmVolvo.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmVolvo.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
  ];
  return (
    <div className="">
      <FirmsTitleBlock FirmsTitleLogo={"./Home/volvo.svg"} />
      <FirmsMenu
        firmMenuItems={firmMenuItems}
        FirmHamburgerMenuItem={firmMenuItems}
      />
      <div className="max-w-7xl m-auto py-6">
        <p className="text-[#7F8182] text-base font-normal px-4">{`Главная > Volvo >  Excavators > EC950E`}</p>
      </div>
      <div>
        <InternalPageItem />
      </div>
      <InternalPageLink />
      <InternalPageSpecification />
      <InternalPageFeatures />
      <InternalPageOtherModels cardBlockTitle={"Другие модели:"} itemPopular={itemExcavators} className="text-xl font-medium text-#000000 mt-16"/>
      <div className="shadow-[0_-5px_15px_rgba(0,0,0,0.1)] mt-10">
        <FirmLogo firmLOgo={firmLOgo} />
      </div>
    </div>
  );
}
