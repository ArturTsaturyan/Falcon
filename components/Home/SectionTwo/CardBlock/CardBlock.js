export default function CardBlock({ src, title, item, onClick }) {
  return (
    <div
      className="md:flex-1 cursor-pointer lg:w-64 xl:w-[250px] md:w-54 xs:w-86 m-auto sm:w-64 h-[340px] bg-[#FFFFFF] shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-4 rounded"
      onClick={onClick}
    >
      <div className="flex">
        <div className="w-10 h-10 bg-[#F0F3F4] rounded-full flex p-1 justify-center">
          <img src={src} />
        </div>
        <h1 className="flex items-center text-lg font-medium leading-5 ml-4 ">
          {title}
        </h1>
      </div>
      <div className="border border-dotted w-46 bg-[#7F8182] mt-4"></div>
      <div>
        <ul className="mt-4">
          {item?.map((e, i) => (
            <li key={i + e} className="list-disc ml-8">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
