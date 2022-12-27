import CardBlockOwlCarousel from "../CardBlockOwlCarousel/CardBlockOwlCarousel";

export default function InternalPageOtherModels({
  itemPopular,
  cardBlockTitle,
  className,
  onClick,
}) {
  return (
    <div className="max-w-7xl m-auto px-4 pt-14">
      <div className="border-t-2 bordr-[#D1D1D1]"></div>
      <div>
        <CardBlockOwlCarousel
          itemPopular={itemPopular}
          cardBlockTitle={cardBlockTitle}
          className={className}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
