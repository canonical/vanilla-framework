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

type SelectValueType =  {
  [key: string]: string | boolean;
}

const LiveDemoBox = () => {
  const [configValues, setConfigValues] = useState<InitialState>();
  const [selectValue, setSelectValues] = useState<SelectValueType>({type: "information", style: "block", actions: false, dismiss: false, timestamp: false })


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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if(e.target.value === "on"){
      setSelectValues({...selectValue, [e.target.name] : !selectValue[e.target.name]} )
    } else {
      setSelectValues({...selectValue, [e.target.name] : e.target.value.toLowerCase()} )
    }
  }

  const url =`/docs/examples/patterns/notifications/toast?type=${selectValue.type}&style=${selectValue.style}&actions=${selectValue.actions}&dismiss=${selectValue.dismiss}&timestamp=${selectValue.timestamp}`

  return (
    <section className="p-strip--light">
      {configValues && configValues.dropdown && configValues.switch && (
        <form>
          <div className="row" style={{gridGap: 0}}>
            <div className="col-2">
              <Select id="type" label="Type" name="type" onChange={handleChange} options={configValues.dropdown.type} />
            </div>
            <div className="col-2">
              <Select id="theme" label="Theme" name="theme" onChange={handleChange} options={configValues.dropdown.theme} disabled />
            </div>
            <div className="col-2">
              <Select id="style" label="Style" name="style" onChange={handleChange} options={configValues.dropdown.style}/>
            </div>
          </div>
          <div className="row" style={{gridGap: 0}}>
            <div className="p-card col-6">
              <h3>Example</h3>
              <p className="p-card__content">
              <div>
                <iframe src={url} width="100%" height="200"></iframe>
              </div>
              </p>
            </div>
            <div className="col-2 p-card">
              <Switch switchOptions={configValues.switch} handleChange={handleChange} />
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default LiveDemoBox;
