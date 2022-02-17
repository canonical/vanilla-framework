import React, {useEffect, useState} from 'react';
import Switch from './Switch';
import {Select} from '@canonical/react-components';

export type InputOptions = {
  query: string;
  label: string;
};

type DropDown = {
  type: [InputOptions];
  theme: [InputOptions];
  style: [InputOptions];
};

type InitialState = {
  dropdown: DropDown;
  switch: [InputOptions];
};

const LiveDemoBox = () => {
  const [configValues, setConfigValues] = useState<InitialState>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/docs/examples/patterns/notifications/toast.json');
        const json = await response.json();
        setConfigValues({dropdown: json.dropdown, switch: json.switch});
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="p-strip--light">
      {configValues && configValues.dropdown && configValues.switch && (
        <form>
          <div className="row" style={{gridGap: 0}}>
            <div className="col-2">
              <Select id="select-type" label="select-type" name="Type" options={configValues.dropdown.type} />
            </div>
            <div className="col-2">
              <Select id="select-theme" label="select-theme" name="Theme" options={configValues.dropdown.theme} disabled />
            </div>
            <div className="col-2">
              <Select id="select-style" label="select-style" name="Style" options={configValues.dropdown.style} />
            </div>
          </div>
          <div className="row" style={{gridGap: 0}}>
            <div className="p-card col-6">
              <h3>Example</h3>
              <p className="p-card__content">space for exmaple here</p>
            </div>
            <div className="col-2 p-card">
              <Switch switchOptions={configValues.switch} />
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default LiveDemoBox;
