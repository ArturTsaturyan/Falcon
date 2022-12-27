import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardBlockPopular from "../CardBlockPopular/CardBlockPopular";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function CardBlockOwlCarousel({itemPopular,cardBlockTitle,className,onClick}) {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
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
    <div className="">
      <h1 className={className}>
        {cardBlockTitle}
      </h1>
      <div className="hidden md:block">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 columns-3 gap-2 justify-around mx-auto mt-14  max-w-7xl px-2 mr-6 mb-24 sm:px-4 lg:px-8">
          {itemPopular?.map((e, i) => (
            <CardBlockPopular
              key={i}
              imgLogo={`./Home/${e.imgLogo}`}
              img={`./Home/${e.img}`}
              title={e.title}
              text={e.text}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden block mobile mb-60">
        <div className="row no-gutters">
          <div
            className="col-md-12 col-sm-12 col-12 mt-16 pb-2 bg-white "
            id="owl-carousel-products"
          >
            <OwlCarousel
              className="owl-theme"
              loop
              margin={4}
              nav={true}
              navText={[
                '<i className="fa fa-chevron-left" aria-hidden="true"></i>',
                '<img src="/images/Arrow_right.png" />',
              ]}
              animateIn={true}
              {...options}
            >
              {itemPopular?.map((e, i) => {
                return (
                  <>
                    <div key={e.title} className="h-[480px] p-3">
                      <CardBlockPopular
                        key={i}
                        imgLogo={`./Home/${e.imgLogo}`}
                        img={`./Home/${e.img}`}
                        title={e.title}
                        text={e.text}
                        onClick={onClick}
                      />
                    </div>
                  </>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
