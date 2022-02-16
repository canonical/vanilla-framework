import React from 'react';

export type SwitchInfo = {
  query: string;
  label: string;
};

type SwitchProps = {
  switchOptions?: [SwitchInfo];
};

const Switch = ({switchOptions}: SwitchProps) => {
  return (
    <>
      {switchOptions &&
        switchOptions.length &&
        switchOptions.map((option) => {
          return (
            <label className="p-switch">
              <input type="checkbox" class="p-switch__input" role="switch"></input>
              <span className="p-switch__slider"></span>
              <span className="p-switch__label">{option.label && option.label}</span>
            </label>
          );
        })}
    </>
  );
};

export default Switch;
