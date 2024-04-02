import React from "react";
import inputPositions from "./inputPositions";

export function PersonInfo(props) {
  const { type, part, inputData, isSelected, onClick, onChange } = props;

  const typePositions = inputPositions[type];
  const partPositions = typePositions[part];
  const inputNames = partPositions ? Object.keys(partPositions) : [];

  return (
    <div
      className={`item-person-block ${isSelected ? "selected-person" : ""} ${
        part != "none" ? "translate-left" : ""
      }`}
    >
      <button className="h-full flex items-end m-auto" onClick={onClick}>
        <div className="relative">
          <img
            src={`${import.meta.env.BASE_URL}/images/${type}.png`}
            className={`object-contain person-img ${
              isSelected ? "selected-person-block" : "non-selected-person-block"
            }`}
          />
          {isSelected && part != "none" && (
            <>
              <img
                src={`${import.meta.env.BASE_URL}/images/${type}/desc_${part}.png`}
                className="absolute green-diagram-img appear-animation"
              />

              {inputNames.map((name) => (
                <input
                  key={name}
                  type="text"
                  className="input-green-diagram appear-animation "
                  name={name}
                  value={inputData[name]}
                  onClick={(event) => event.stopPropagation()}
                  onChange={(event) => onChange(name, event.target.value)}
                  style={{
                    top: partPositions[name].top,
                    left: partPositions[name].left,
                  }}
                  maxLength="4"
                  required
                />
              ))}
            </>
          )}
        </div>
      </button>
    </div>
  );
}
