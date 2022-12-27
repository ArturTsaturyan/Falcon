import Link from "next/link";
import { useState } from "react";

export default function InternalPageLink() {
  const [active, setActive] = useState(false);

  return (
    <div className="max-w-7xl m-auto px-4">
      <div className="border-b-2 flex" id="InternalPageLink">
        <div className="flex flex-col">
          <Link
            href={"#"}
            className="text-[#000000] underline decoration-4 text-base font-medium"
            onClick={() => setActive(false)}
          >
            Specifications
          </Link>
          {!active && <div className="w-auto h-0.5 bg-[#000000] "></div>}
        </div>
        <div className="flex flex-col">
          <Link
            href={"#"}
            className="text-[#000000] ml-10 text-base font-medium"
            onClick={() => setActive(true)}
          >
            Features
          </Link>
          {active && <div className="w-auto h-0.5 bg-[#000000] ml-10"></div>}
        </div>
      </div>
    </div>
  );
}
