import ButtonContact from "../../ButtonContact/ButtonContact";
import SectionThreeComponent from "./SectionThreeComponent/SectionThreeComponent";

export default function SectionThree() {
  const item = [
    {
      title: "Безотказная работа",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the...",
    },
    {
      title: "Минимум простоя",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the...",
    },
    {
      title: "Дистанционное управление",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the...",
    },
  ];
  return (
    <div className="h-auto w-full mt-24" id="homePageSectionThree">
      <div className="flex justify-center p-4 md:p-0 items-center bg-[length:100%_60%] md:bg-contain bg-no-repeat bg-[url('/construction-site-excavator.svg')] lg:h-[730px] h-auto w-full">
        <div className="xl:w-3/5 lg:w-4/5 w-11/12 h-auto bg-[#FFFFFF] shadow-[0_5px_15px_rgba(0,0,0,0.1)] rounded p-12 ">
          <h1 className="text-xl font-medium uppercase text-center">
            Наша техника - это
          </h1>
          {item.map((e) => (
            <SectionThreeComponent key={e.title} title={e.title} text={e.text} />
          ))}
          <div className="flex justify-center mt-12">
            <ButtonContact buttonTitle={"Связаться с нами"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
