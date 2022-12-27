export default function ButtonContact({onClick,buttonTitle}) {
  return (
    <div className="pt-4 pb-3">
      <button className="bg-gradient-to-r to-[#7F8182] from-[#000000] text-[#FFFFFF] sm:text-base text-sm p-2 sm:w-40 w-36 rounded flex-auto" onClick={onClick}>
        {buttonTitle}
      </button>
    </div>
  );
}
