import React from 'react';

type Props = {
  switchOptions: any;
};

const Switch = ({switchOptions}: Props) => {
  console.log(typeof switchOptions);
  return (
    <>
      <p>{switchOptions && switchOptions[0] && switchOptions[0].label && switchOptions[0].label}</p>
      {switchOptions && switchOptions.map((switch: any) => <input>{switch.label}</input>)}
    </>
  );
};

export default Switch;
