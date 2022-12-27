import { useRouter } from "next/router";
import CardBlockOwlCarousel from "../../components/CardBlockOwlCarousel/CardBlockOwlCarousel";
import FirmLogo from "../../components/FirmLogo/FirmLogo";
import FirmsMenu from "../../components/FirmsMenu/FirmsMenu";
import FirmsTitleBlock from "../../components/FirmsTitleBlock/FirmsTitleBlock";

export default function VolvoPage() {
  const route = useRouter()
  const InternalPage = ()=>{
      route.push('/InternalPage')
  }
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
  const itemWheelLoaders = [
    {
      imgLogo: "volvo.svg",
      img: "csmW.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmW.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmW.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmW.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmW.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmW.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
  ];
  const itemArticulatedHaulers = [
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "volvo.svg",
      img: "ArticulatedHaulers.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
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
  return (
    <div className=" m-auto">
      <FirmsTitleBlock
        FirmsTitleLogo={"./Home/volvo.svg"}
        FirmsTexts={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"
        }
      />
      <FirmsMenu
        firmMenuItems={firmMenuItems}
        FirmHamburgerMenuItem={firmMenuItems}
      />
      <div className="max-w-7xl m-auto py-6">
        <p className="text-[#7F8182] text-base font-normal px-4">{`Главная > Volvo`}</p>
      </div>
      <div id="Excavators">
        <CardBlockOwlCarousel
          onClick={InternalPage}
          itemPopular={itemExcavators}
          cardBlockTitle={`Excavators`}
          className="text-xl font-medium max-w-7xl m-auto pl-4 uppercase"
        />
      </div>
      <div id="WheelLoaders">
        <CardBlockOwlCarousel
          onClick={InternalPage}
          itemPopular={itemWheelLoaders}
          cardBlockTitle={`Wheel loaders`}
          className="text-xl font-medium max-w-7xl m-auto pl-4 uppercase"
        />
      </div>
      <div id="ArticulatedHaulers">
        <CardBlockOwlCarousel
          onClick={InternalPage}
          itemPopular={itemArticulatedHaulers}
          cardBlockTitle={`Articulated haulers`}
          className="text-xl font-medium max-w-7xl m-auto pl-4 uppercase"
        />
      </div>
      <div className="shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        <FirmLogo firmLOgo={firmLOgo} />
      </div>
    </div>
  );
}
