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
  const [selectValue, setSelectValues] = useState({type: "information", style: "block", action: true, dismiss: true, timestamp:true })


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
  const handleChange = (e :any) => {
    console.log(e.target.value)
    setSelectValues({...selectValue, [e.target.name] : e.target.value.toLowerCase()} )}
  // }&style=inline&actions=true&dismiss=true&timestamp=true
  function iframe() {
    const url =`/docs/examples/patterns/notifications/toast?type=${selectValue.type}&style=${selectValue.style}&actions=${selectValue.action}`
    return {
        __html: `<iframe src=${url} width="540" height="450"></iframe>`
    }
}
  return (
    <section className="p-strip--light">
      {configValues && configValues.dropdown && configValues.switch && (
        <form>
          <div className="row" style={{gridGap: 0}}>
            <div className="col-2">
              <Select id="type" label="Type" name="type" onChange={(e) => handleChange(e)} options={configValues.dropdown.type} />
            </div>
            <div className="col-2">
              <Select id="theme" label="Theme" name="theme" onChange={(e) => handleChange(e)} options={configValues.dropdown.theme} disabled />
            </div>
            <div className="col-2">
              <Select id="style" label="Style" name="style" onChange={(e) => handleChange(e)} options={configValues.dropdown.style}/>
            </div>
          </div>
          <div className="row" style={{gridGap: 0}}>
            <div className="p-card col-6">
              <h3>Example</h3>
              <p className="p-card__content">
              <div>
                <div dangerouslySetInnerHTML={iframe()} />
              </div>
              </p>
            </div>
            <div className="col-2 p-card">
              <Switch switchOptions={configValues.switch} handleChange={handleChange}/>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default LiveDemoBox;
