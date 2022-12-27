import Link from "next/link";
import ButtonContact from "../ButtonContact/ButtonContact";

export default function InternalPageItem() {
  return (
    <div className="flex md:pl-10 pl-4 pb-10 pr-4 md:justify-around flex-col md:flex-row md:items-center max-w-7xl m-auto">
      <div className="md:w-1/3  md:h-auto">
        <h1 className="text-2xl font-medium text-[#000000] block md:hidden">
          VOLVO EC950E
        </h1>
        <p className="text-[#7F8182] text-sm font-normal block md:hidden mb-0">
          LARGE CRAWLER EXCAVATORS
        </p>
        <img
          src="Home/volvo-find-crawler-excavator.svg"
          className="w-full h-72"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl font-medium text-[#000000] md:block hidden">
          VOLVO EC950E
        </h1>
        <p className="text-[#7F8182] text-sm font-normal md:block hidden">
          LARGE CRAWLER EXCAVATORS
        </p>
        <p className="text-base text-[#4C4F50] mb-0 font-medium">
          Параметр: 89,960 - 91,840 kg
        </p>
        <p className="text-base text-[#4C4F50] mb-0 font-medium">
          Параметр: 450 kW
        </p>
        <p className="text-base text-[#4C4F50] mb-0 font-medium">
          Параметр: 3.9 - 6 m³
        </p>
        <p className="text-base text-[#4C4F50] mb-0 mt-10 font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex items-center">
          <ButtonContact buttonTitle={"Оставить заявку"} />
          <Link href={"#"} className="sm:ml-10 ml-4 text-[#000000] hover:text-[#000000] text-base font-normal border-b-2 border-[#000000]">Скачать документацию</Link>
        </div>
      </div>
    </div>
  );
}
