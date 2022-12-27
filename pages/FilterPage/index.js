import { useState } from "react";
import FilterContent from "../../components/FilterContent/FilterContent";
import FilterItemMobile from "../../components/FilterContent/FilterItem/FilterItemMobile";
import FirmLogo from "../../components/FirmLogo/FirmLogo";
import FirmsMenu from "../../components/FirmsMenu/FirmsMenu";
import FirmsTitleBlock from "../../components/FirmsTitleBlock/FirmsTitleBlock";

export default function FilterPage() {
  const [filterActive, setFilterActive] = useState(false);
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
  return (
    <div>
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
      <div className="max-w-7xl m-auto py-6 flex justify-between pr-6">
        <p className="text-[#7F8182] text-base font-normal px-4">{`Главная > Volvo`}</p>
        <div className="md:hidden block bg-[#F0F3F4] rounded  p-3 cursor-pointer" onClick={()=>setFilterActive((e)=>!e)}>
          <img src="FilterButton.svg" />
        </div>
      </div>
      {filterActive && <FilterItemMobile onClick={()=>setFilterActive((e)=>!e)}/>}
      <FilterContent />
      <div className="shadow-[0_-5px_15px_rgba(0,0,0,0.1)] mt-10">
        <FirmLogo firmLOgo={firmLOgo} />
      </div>
    </div>
  );
}
