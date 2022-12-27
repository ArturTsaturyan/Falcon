import CardBlock from "./CardBlock/CardBlock";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useRouter } from "next/router";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function SectionTwo() {
  const route = useRouter();
  const category = ()=>{
     route.push('./FilterPage')
  }
  const card = [
    {
      id: 1,
      icon: "volvo.svg",
      title: "Volvo",
      item: [
        "Excavators",
        "Wheel loaders",
        "Articulated haulers",
        "Rigid haulers",
        "Asphalt pavers",
        "Compactors",
        "Pipelayers",
      ],
    },
    {
      id: 2,
      icon: "Leica.svg",
      title: "Leica Geosystems",
      item: [
        "Robotic Total Stations",
        "Manual Total Stations",
        "Layout Tool",
        "Smart Antennas",
        "Controllers",
        "Receivers",
      ],
    },
    {
      id: 3,
      icon: "Kohler_logo.svg",
      title: "Kohler",
      item: [
        "Industrial generators",
        "Turnkey energy solutions",
        "Generators for rent",
        "Portable generators",
      ],
    },
    {
      id: 4,
      icon: "sdlgIcon.svg",
      title: "SDLG",
      item: ["Wheeled Loaders", "Backhoe Loaders", "Graders", "Compactors"],
    },
    {
      id: 5,
      icon: "wackerIcon.svg",
      title: "Wacker Neuson",
      item: [
        "Excavators",
        "Vibratory rammers",
        "Wheel loaders",
        "Vibratory plates",
        "Dumpers",
        "Concrete technology",
        "Telehandlers",
        "Rollers",
      ],
    },
  ];
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  };
  return (
    <div id="homePageSectionTwo">
      <div className="mt-24 lg:px-72 md:px-40 px-14">
        <h1 className="uppercase text-center text-xl font-medium leading-6 text-[#000000]">
          мы продаем только самую лучшую технику
        </h1>
        <p className="text-center text-[#4C4F50] mt-8 text-base font-normal leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="hidden md:block">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 columns-3 mt-24 gap-y-4 gap-x-4 justify-between mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8">
          {card.map((e) => (
            <CardBlock
              key={e.id}
              src={`./Home/${e.icon}`}
              title={e.title}
              item={e.item}
              onClick={category}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden block mobile">
        <div className="row no-gutters">
          <div
            className="col-md-12 col-sm-12 col-12 mt-16 pb-2 bg-white "
            id="owl-carousel-products"
          >
              <OwlCarousel
                className="owl-theme"
                loop
                margin={4}
                nav= {true}
                navText={[
                  '<i className="fa fa-chevron-left" aria-hidden="true"></i>',
                  '<img src="/images/Arrow_right.png" />',
                ]}
                animateIn={true}
                {...options}
              >
                {card.map((e) => {
                      return (
                        <>
                            <div key={e.title} className="h-[420px] p-3">                              
                                    <CardBlock
                                      key={e.id}
                                      src={`./Home/${e.icon}`}
                                      title={e.title}
                                      item={e.item}
                                      onClick={category}
                                    />
                            </div>
                        </>
                      );
                    })
                 }
              </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
