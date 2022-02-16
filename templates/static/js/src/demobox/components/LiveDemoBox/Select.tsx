import React from 'react';

export type DropdownInfo = {
  query: string;
  label: string;
};

export type DropdownProps = {
  dropdownOptions?: [DropdownInfo];
  dropdownLabel?: string;
  disabled?: boolean;
};

const Select = ({dropdownOptions, dropdownLabel, disabled}: DropdownProps) => {
  return (
    <>
      <label htmlFor="exampleSelect" style={{opacity: disabled === true ? 0.5 : 1}}>
        {dropdownLabel}
      </label>
      <select name="exampleSelect" id="exampleSelect" disabled={disabled}>
        {dropdownOptions &&
          dropdownOptions.map((dropdownOption) => {
            return <option value={dropdownOption.label}>{dropdownOption.label}</option>;
          })}
      </select>
    </>
  );
};

export default Select;
