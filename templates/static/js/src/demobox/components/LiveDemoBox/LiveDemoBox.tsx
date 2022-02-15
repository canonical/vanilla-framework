import React, {useEffect, useState} from 'react';
import Select from './Select';

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
      <h3>Hello, I am the live demo box rendered in React!</h3>
      {configValues && configValues.dropdown && (
        <form>
          <div className="row">
            <div className="col-3">
              <Select dropdownLabel="Type" dropdownOptions={configValues.dropdown.type} />
            </div>
            <div className="col-3">
              <Select dropdownLabel="Theme" dropdownOptions={configValues.dropdown.theme} />
            </div>
            <div className="col-3">
              <Select dropdownLabel="Style" dropdownOptions={configValues.dropdown.style} />
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default LiveDemoBox;
