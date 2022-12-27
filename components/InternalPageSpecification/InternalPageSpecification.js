import InternalPageSpecificationItem from "./InternalPageSpecificationItem/InternalPageSpecificationItem";

export default function InternalPageSpecification() {
  const internalPageSpecificationItem = [
    {
      title: "Operating weight",
      number: "89,960 - 91,840 kg",
    },
    {
      title: "Gross power",
      number: "450 kW",
    },
    {
      title: "...at engine speed",
      number: "1,800 rpm",
    },
    {
      title: "Bucket capacity",
      number: "3.9 - 6 m³",
    },
    {
      title: "Operating weight",
      number: "89,960 - 91,840 kg",
    },
    {
      title: "Gross power",
      number: "450 kW",
    },
    {
      title: "...at engine speed",
      number: "1,800 rpm",
    },
    {
      title: "Bucket capacity",
      number: "3.9 - 6 m³",
    },
    {
      title: "Operating weight",
      number: "89,960 - 91,840 kg",
    },
  ];
  return (
    <div className="max-w-7xl m-auto px-4 pt-12">
      <h1 className="font-medium text-xl">
        TECHNICAL SPECIFICATIONS FOR EC950E
      </h1>
      <InternalPageSpecificationItem
        internalPageSpecificationItem={internalPageSpecificationItem}
      />
    </div>
  );
}
