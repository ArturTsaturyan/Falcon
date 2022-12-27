import ButtonContact from "../ButtonContact/ButtonContact";
import FooterMobile from "./FooterMobile/FooterMobile";

const navigation = {
  solutions: [
    { name: "Главная", href: "#" },
    { name: " О нас", href: "#" },
    { name: "Наши партнеры", href: "#" },
    { name: "Б/у техника", href: "#" },
    { name: "Контакты", href: "#" },
  ],
  support: [
    { name: "Volvo", href: "#" },
    { name: "Leica Geosystems", href: "#" },
    { name: " Kohler", href: "#" },
    { name: "SDLG", href: "#" },
    { name: "Wacker Neuson", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div>
      <footer
        className="bg-[#F0F3F4] hidden md:block"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div
          className="flex mx-auto max-w-7xl py-8 flex-wrap px-4 sm:px-6 lg:py-8 lg:px-8 
       flex-col md:flex-row"
        >
          <div className="flex-2">
            <img
              src="./Home/FalconLogo.svg"
              alt="Falcon"
              className="xl:w-28 lg:w-20"
            />

            <p className="text-xs text-[#000000] font-normal mt-12">
              © Copyright Falcon 2022
            </p>
            <p className="text-xs text-[#000000] font-normal mt-4">
              Политика конфиденциальности
            </p>
            <p className="text-xs text-[#000000] font-normal">
              Политика обработки персональных данных
            </p>
            <div className="flex mt-3">
              <h1 className="text-xs font-normal">Developed By</h1>
              <img src="/Serious.svg" alt="Serious" className="ml-2" />
            </div>
          </div>
          <div className="flex-2 lg:ml-24 md:ml-8 ml-0 mt-6 lg:mt-0">
            <ul role="list" className="space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-[#000000] font-normal hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-2 lg:ml-20 md:ml-8 ml-0 mt-6 lg:mt-0">
            <ul role="list" className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-[#000000] font-normal hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 md:ml-0">
            <div className="text-right">
              <ButtonContact buttonTitle={"Связаться с нами"}/>
            </div>
            <p className="mt-7 text-right">Мы в соц.сетях:</p>
            <div className="flex space-x-4 mt-4 float-right">
              <img src="/Home/Telegram.svg" alt="" />
              <img src="/Home/VK.svg" alt="" />
              <img src="/Home/Fac.svg" alt="" />
              <img src="/Home/Instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
      <FooterMobile navigation={navigation}/>
    </div>
  );
}
