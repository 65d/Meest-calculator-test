import React from "react";
import { MultiSlider } from "./MultiSlider";

export function BrandsInfo() {
  return (
    <>
      <h2 className="text-[30px] sm:text-[40px] lg:text-[70px] text-mainblue mb-10 md:mb-12">
        Бренди
      </h2>
      <div className="w-full relative">
        <MultiSlider>
          {[...Array(6).keys()].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center px-2 sm:px-3 md:px-8 xl:px-12 max-w-[1920px] lg:my-10"
            >
              <img
                src={`https://meest.shopping/uploads/elFinder/catalog-img/mm-logo-156x75-${i}.png`}
                alt=""
              />
            </div>
          ))}
        </MultiSlider>
      </div>
    </>
  );
}
