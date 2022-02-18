import React from 'react';

export type SwitchInfo = {
  query: string;
  label: string;
};

type SwitchProps = {
  switchOptions?: [SwitchInfo];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch = ({switchOptions, handleChange}: SwitchProps) => {
  return (
    <>
      {switchOptions &&
        switchOptions.length &&
        switchOptions.map((option) => {
          return (
            <label className="p-switch">
              <input type="checkbox" className="p-switch__input" role="switch" name={option.query} onChange={handleChange}></input>
              <span className="p-switch__slider"></span>
              <span className="p-switch__label">{option.label && option.label}</span>
            </label>
          );
        })}
    </>
  );
};

export default Switch;
