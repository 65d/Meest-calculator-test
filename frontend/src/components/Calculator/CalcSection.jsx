import React, { useState } from "react";
import { Button } from "../button/Button";
import { PersonInfo } from "./PersonInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./Slider";
import dataNames from "./dataNames";

export function CalcSection() {
  const [selectedType, setSelectedType] = useState(dataNames.personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(dataNames.bodyParts[0]);
  const [selectedBrand, setSelectedBrand] = useState(dataNames.brands[0]);
  const [selectedTopCl, setSelectedTopCl] = useState(dataNames.topCl[0]);
  const [selectedLowCl, setSelectedLowCl] = useState(dataNames.lowCl[0]);
  const [inputData, setInputData] = useState({});

  const handleSelectionChange = (newValue, setSelectedValue) => {
    if (newValue !== setSelectedValue) {
      setSelectedValue(newValue);
      setInputData({});
    }
  };
  const handleTypeClick = (type) => {
    handleSelectionChange(type, setSelectedType);
  };
  const handlePartChange = (part) => {
    handleSelectionChange(part, setSelectedBodyPart);
  };
  const handleBrandChange = (brand) => {
    handleSelectionChange(brand, setSelectedBrand);
  };
  const handleTopClChange = (topCl) => {
    handleSelectionChange(topCl, setSelectedTopCl);
  };
  const handleLowClChange = (topCl) => {
    handleSelectionChange(topCl, setSelectedLowCl);
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCarouselChange = (item) => {
    handleTypeClick(dataNames.personTypes[item]);
  };

  // const stylesType = (currType) => {
  //   if (selectedType == "men") {
  //     if (currType == "women") {
  //       return "ml-auto";
  //     }
  //   } else if (selectedType == "women") {
  //     if (currType == "men") {
  //       return "mr-auto";
  //     } else if (currType == "child") {
  //       return "ml-auto";
  //     }
  //   } else if (selectedType == "child") {
  //     if (currType == "women") {
  //       return "mr-auto";
  //     }
  //   } else {
  //     return "";
  //   }
  // };

  const personTypeElements = () => {
    return dataNames.personTypes.map((type) => (
      <PersonInfo
        key={type}
        type={type}
        part={selectedBodyPart}
        inputData={inputData}
        onClick={() => handleTypeClick(type)}
        onChange={handleInputChange}
        isSelected={selectedType === type}
        // stylesType={stylesType(type)}
      />
    ));
  };

  const CustomSelect = ({ value, onChange, options, translateMap }) => (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="calc-option-bar"
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {translateMap[item]}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <div className="flex flex-col items-center py-10 w-full">
        <div className="w-full bg-[#EFF1F4] rounded-[40px] py-8 relative px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 calc-shadow-box my-8">
          <h2 className="text-center text-sm-h sm:text-md-h lg:text-lg-h">Калькулятор розмірів</h2>
          <div className="text-sm-p sm:text-md-p lg:text-lg-p flex absolute flex-wrap gap-2 justify-around mt-4 left-5 right-5 md:flex-col md:items-end md:right-10">
            <CustomSelect
              value={selectedBodyPart}
              onChange={handlePartChange}
              options={dataNames.bodyParts}
              translateMap={dataNames.translateBodyParts}
            />
            <CustomSelect
              value={selectedBrand}
              onChange={handleBrandChange}
              options={dataNames.brands}
              translateMap={dataNames.translateBrands}
            />
            {selectedBodyPart === "top" && (
              <CustomSelect
                value={selectedTopCl}
                onChange={handleTopClChange}
                options={dataNames.topCl}
                translateMap={dataNames.translateTopCl}
              />
            )}
            {selectedBodyPart === "lower" && (
              <CustomSelect
                value={selectedLowCl}
                onChange={handleLowClChange}
                options={dataNames.lowCl}
                translateMap={dataNames.translateLowCl}
              />
            )}
          </div>
          <div className="flex items-end mt-[120px] max-md:hidden">{personTypeElements()}</div>

          <div className="mt-[60px] md:hidden">
            <Slider
              onChange={handleCarouselChange}
              selectedItem={dataNames.personTypes.indexOf(selectedType)}
              displayItems={1}
              loop={false}
            >
              {personTypeElements()}
            </Slider>
          </div>
        </div>
        <Button
          onClick={() =>
            console.log({
              type: selectedType,
              bodyPart: selectedBodyPart,
              data: inputData,
              brand: selectedBrand,
              clothes: selectedTopCl,
            })
          }
        >
          Розрахувати
        </Button>
      </div>
    </>
  );
}
