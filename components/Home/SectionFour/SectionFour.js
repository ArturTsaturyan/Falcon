import CardBlockOwlCarousel from "../../CardBlockOwlCarousel/CardBlockOwlCarousel";

export default function SectionFour() {
  const itemPopular = [
    {
      imgLogo: "volvo.svg",
      img: "csmVolvo.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "Leica.svg",
      img: "csmLeica.svg",
      title: "Leica iCON CC200",
      text: "Rugged 10’’ field controller for longer operating times and use cases requiring large amounts of data. For specific applications, use...",
    },
    {
      imgLogo: "sdlgIcon.svg",
      img: "csmW.svg",
      title: "L350H",
      text: "Параметр: 6.2 - 12.7 m³ <br/> Параметр: 50,000 - 56,000 kg <br/> Параметр: 34,780 kg",
    },
    {
      imgLogo: "Kohler_logo.svg",
      img: "csmKohler.svg",
      title: "K6M, 50 Hz",
      text: "Fuel type: Diesel Fuel/HVO <br/> Certification: Fuel consumption optimization kVA: 1 - 75",
    },
    {
      imgLogo: "Kohler_logo.svg",
      img: "csmKohler.svg",
      title: "K6M, 50 Hz",
      text: "Fuel type: Diesel Fuel/HVO <br/> Certification: Fuel consumption optimization kVA: 1 - 75",
    },
    {
      imgLogo: "sdlgIcon.svg",
      img: "csmW.svg",
      title: "L350H",
      text: "Параметр: 6.2 - 12.7 m³ <br/> Параметр: 50,000 - 56,000 kg <br/> Параметр: 34,780 kg",
    },
    {
      imgLogo: "volvo.svg",
      img: "csmVolvo.svg",
      title: "EC950E",
      text: "Параметр: 89,960 - 91,840kg <br/>  Параметр: 450 kW <br/>  Параметр: 3.9 - 6 m³",
    },
    {
      imgLogo: "Leica.svg",
      img: "csmLeica.svg",
      title: "Leica iCON CC200",
      text: "Rugged 10’’ field controller for longer operating times and use cases requiring large amounts of data. For specific applications, use...",
    },
  ];

  return (
    <div className="mt-20" id="homePageSectionFour">
      <CardBlockOwlCarousel
        itemPopular={itemPopular}
        cardBlockTitle={`Популярные товары`}
        className="text-xl font-medium text-center uppercase"
      />
    </div>
  );
}
