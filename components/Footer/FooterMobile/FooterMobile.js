import ButtonContact from "../../ButtonContact/ButtonContact";

export default function FooterMobile({navigation}){
    return(
        <footer
        className="bg-[#F0F3F4] md:hidden block p-2 px-4 pt-9 pb-9"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex justify-between">
          <img
            src="./Home/FalconLogo.svg"
            alt="Falcon"
            className=""
          />
          <ButtonContact buttonTitle={"Связаться с нами"}/>
        </div>
        <div className="flex justify-between">
          <div className="flex-2 mt-6">
            <ul role="list" className="space-y-2 pl-0">
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

          <div className="flex-2 ml-0 mt-6">
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
        </div>
        <div className="text-center">
          <div className="flex justify-center space-x-4 mt-6">
            <img src="/Home/Telegram.svg" alt="" />
            <img src="/Home/VK.svg" alt="" />
            <img src="/Home/Fac.svg" alt="" />
            <img src="/Home/Instagram.svg" alt="" />
          </div>
          <p className="text-xs text-[#000000] font-normal mt-8">
            © Copyright Falcon 2022
          </p>
          <p className="text-xs text-[#000000] font-normal mt-4">
            Политика конфиденциальности
          </p>
          <p className="text-xs text-[#000000] font-normal">
            Политика обработки персональных данных
          </p>
          <div className="flex justify-center mt-3">
            <h1 className="text-xs font-normal">Developed By</h1>
            <img src="/Serious.svg" alt="Serious" className="ml-2" />
          </div>
        </div>
      </footer>
    )
}