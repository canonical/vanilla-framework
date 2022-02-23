import React from "react";

export type SwitchInfo = {
  key: string;
  label: string;
};

type SwitchProps = {
  switchOptions?: SwitchInfo[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch = ({ switchOptions, handleChange }: SwitchProps) => {
  return (
    <>
      {switchOptions &&
        switchOptions.length &&
        switchOptions.map((option) => {
          return (
            <label className="p-switch" key={option.key}>
              <input
                type="checkbox"
                className="p-switch__input"
                role="switch"
                name={option.key}
                onChange={handleChange}
              ></input>
              <span className="p-switch__slider"></span>
              <span className="p-switch__label">
                {option.label && option.label}
              </span>
            </label>
          );
        })}
    </>
  );
};

export default Switch;
