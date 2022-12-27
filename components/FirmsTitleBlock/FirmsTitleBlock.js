export default function FirmsTitleBlock({ FirmsTitleLogo, FirmsTexts }) {
  return (
    <div className="bg-[#F0F3F4] w-full z-4">
      <div className="py-10 px-4 flex sm:justify-between flex-col sm:flex-row max-w-7xl m-auto">
        <div className="w-1/5 mt-2">
          <img src={FirmsTitleLogo} />
        </div>
        <div className="w-3/4 max-w-4xl">
          <p className="text-base font-normal">{FirmsTexts}</p>
        </div>
      </div>
    </div>
  );
}
