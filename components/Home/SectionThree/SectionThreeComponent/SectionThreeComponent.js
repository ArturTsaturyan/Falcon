export default function SectionThreeComponent({ title, text }) {
  return (
    <div className="" id="homePageSectionThreeComponent">
      <div className="hidden md:block">
        <div className="flex mt-10">
          <h1 className="font-medium text-xl">{title}</h1>
          <div className="ml-8 text-[#7F8182] flex mt-[8px]">
            <div className="bg-[#4C4F50] rounded-full w-[5px] h-[5px] mt-[15px]"></div>
            ............
          </div>
          <div className="border-l-2 border-b-2 border-[#7F8182] border-dotted pl-3  text-base font-normal mt-4">
            {text}
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <h1 className="font-medium text-xl mt-8">{title}</h1>
        <div className="flex mt-3">
          <div className=" text-[#7F8182] flex -mt-3">
            <div className="bg-[#4C4F50] rounded-full w-[5px] h-[5px] mt-[14px]"></div>
            ............
          </div>
          <div className="border-l-2 border-b-2 border-[#7F8182] border-dotted pl-2  text-base font-normal mt-1">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
