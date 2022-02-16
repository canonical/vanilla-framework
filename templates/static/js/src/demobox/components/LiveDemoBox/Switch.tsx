import React from 'react';

type Props = {
  switchOptions: any;
};

const Switch = ({switchOptions}: Props) => {
  return (
    <>
      {switchOptions && switchOptions.length && switchOptions.map((option: any) => { 
        return (
        <label className="p-switch">
          <input type="checkbox" class="p-switch__input" role="switch"></input>
          <span className="p-switch__slider"></span>
          <span className="p-switch__label">{option.label && option.label}</span>
        </label>
      )})}
    </>
  );
};

export default Switch;
