import React, {useEffect, useState} from 'react';
import Select from './Select';
import Switch from './Switch';
const LiveDemoBox = () => {
  const [configValues, setConfigValues] = useState<any>({
    dropdown: {},
    switch: {},
  });

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
          <div className="row">
            <div className="col-2">
              <Select dropdownLabel="Type" dropdownOptions={configValues.dropdown.type} disabled={false} />
            </div>
            <div className="col-2">
              <Select dropdownLabel="Theme" dropdownOptions={configValues.dropdown.theme} disabled={true} />
            </div>
            <div className="col-2">
              <Select dropdownLabel="Style" dropdownOptions={configValues.dropdown.style} disabled={false} />
            </div>
          </div>
          <div className="row">
            <div className="p-card col-6">
              <h3>Example</h3>
              <p className="p-card__content">space for exmaple here</p>
            </div>
            <div className="col-2">
              <Switch switchOptions={configValues.switch} />
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default LiveDemoBox;
