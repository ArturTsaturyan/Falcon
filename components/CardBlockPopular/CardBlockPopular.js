export default function CardBlockPopular({imgLogo,img,title,text,onClick,key}) {
  return (
    <div key={key} className="md:flex-1 w-full max-w-xs lg:h-[420px] h-[430px] md:h-[] border border-[#E9ECEE] m-auto rounded p-6 mb-24 m-2" onClick={onClick}>
      <div className="w-10 h-10 bg-[#F0F3F4] rounded-full flex p-1 justify-center float-right">
        <img src={imgLogo}/>
      </div>
      <div className="flex justify-center">
        <img src={img}   className="w-44 h-44"/>
      </div>
      <div className="border border-dotted w-46 bg-[#7F8182] mt-4"></div>
      <div className="mt-5">
        <h1 className="text-base font-medium text-[#000000]">{title}</h1>
        <p className="mt-4 text-[#4C4F50] text-sm" dangerouslySetInnerHTML={{__html: `${text}`}}></p>
      </div>
    </div>
  );
}
