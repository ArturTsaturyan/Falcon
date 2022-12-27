export default function InternalPageSpecificationItem({internalPageSpecificationItem}) {
  let count = 0;
  return (
    <div className="lg:w-3/5 md:w-4/5 mt-12">
      {internalPageSpecificationItem?.map((e) => {
        count++;
        return count % 2 == 1 ? (
          <div className="w-full bg-[#F0F3F4] px-6 py-4 flex justify-between items-center">
            <p className="mb-0 text-[#4C4F50] md:text-base text-xs font-medium">{e?.title}</p>
            <p className="mb-0 text-[#4C4F50] md:text-base text-xs font-medium">{e?.number}</p>
          </div>
        ) : (
          <div className="w-full bg-[#FFFFFF] px-5 py-4 flex justify-between items-center">
            <p className="mb-0 text-[#4C4F50] md:text-base text-xs font-medium">{e?.title}</p>
            <p className="mb-0 text-[#4C4F50] md:text-base text-xs font-medium">{e?.number}</p>
          </div>
        );
      })}
    </div>
  );
}
