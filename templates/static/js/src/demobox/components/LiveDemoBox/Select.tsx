import React from 'react';

type Props = {
  dropdownOptions: any;
  dropdownLabel: string;
  disabled: boolean;
};

const Select = ({dropdownOptions, dropdownLabel, disabled}: Props) => {
  return (
    <>
      <label htmlFor="exampleSelect" style={{opacity: disabled === true ? 0.5 : 1}}>
        {dropdownLabel}
      </label>
      <select name="exampleSelect" id="exampleSelect" disabled={disabled}>
        {dropdownOptions &&
          dropdownOptions.map((dropdownOption: any) => {
            return <option value={dropdownOption.label}>{dropdownOption.label}</option>;
          })}
      </select>
    </>
  );
};

export default Select;
