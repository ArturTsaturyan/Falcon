import CardBlockOwlCarousel from "../CardBlockOwlCarousel/CardBlockOwlCarousel";
import FilterItem from "./FilterItem/FilterItem";

export default function FilterContent() {
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
  ];
  return (
    <div className="px-4 max-w-7xl m-auto flex flex-col md:flex-row">
      <FilterItem />
      <div className="ml-8" id="filterExcavater">
        <div id="Excavators">
          <CardBlockOwlCarousel
            itemPopular={itemExcavators}
            cardBlockTitle={"Excavators"}
            className={"uppercase text-xl font-medium"}
          />
        </div>
        <div id="WheelLoaders">
          <CardBlockOwlCarousel
            itemPopular={itemWheelLoaders}
            cardBlockTitle={"Wheel loaders"}
            className={"uppercase text-xl font-medium"}
          />
        </div>
      </div>
    </div>
  );
}
