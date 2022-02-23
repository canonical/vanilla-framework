import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import { Select } from "@canonical/react-components";

export type InputOptions = {
  key: string;
  label: string;
};

type DropDownType = {
  [key: string]: InputOptions[];
};

type InitialState = {
  dropdown: DropDownType;
  switch: InputOptions[];
};

type SelectValueType = {
  [key: string]: string | boolean | InputOptions[];
};

const LiveDemoBox = () => {
  const element = document.querySelector(".react-live-demo-box");
  const jsonUrl = element?.getAttribute("data-id");
  const [configValues, setConfigValues] = useState<InitialState>();
  const [selectValue, setSelectValues] = useState<SelectValueType>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${jsonUrl}.json`);
        const json = await response.json();
        setConfigValues({ dropdown: json.dropdown, switch: json.switch });

        const object: SelectValueType = {};

        const setDefaultDropdownValues = (dropdownOption: any) => {
          json.dropdown[dropdownOption].forEach((dropdownValue: any) => {
            "default" in dropdownValue &&
              (object[dropdownOption] = dropdownValue.key);
          });
        };

        Object.keys(json.dropdown).forEach((key) =>
          setDefaultDropdownValues(key)
        );

        json.switch.forEach((switchOption: any) => {
          object[switchOption.key] = false;
        });

        setSelectValues(object);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    if (e.target.value === "on") {
      setSelectValues({
        ...selectValue,
        [e.target.name]: !selectValue[e.target.name],
      });
    } else {
      setSelectValues({
        ...selectValue,
        [e.target.name]: e.target.value.toLowerCase(),
      });
    }
  };
  const constructUrl = () => {
    let url = `${jsonUrl}?`;
    const arrayOfKeys = Object.keys(selectValue);
    arrayOfKeys.forEach((key) => {
      url += `${key}=${selectValue[key]}&`;
    });
    return url;
  };

  let url = constructUrl();
  const dropdownOptions = configValues && Object.keys(configValues.dropdown);

  return (
    <section className="p-strip--light is-shallow">
      {configValues && configValues.dropdown && configValues.switch && (
        <form>
          <div className="row" style={{ gridGap: 0 }}>
            {dropdownOptions?.map((dropdownOption) => {
              const optionValues = configValues?.dropdown[dropdownOption].map(
                (item) => ({ ...item, value: item.key })
              );
              return (
                <div className="col-2" key={dropdownOption}>
                  <Select
                    id={dropdownOption}
                    label={
                      dropdownOption[0].toUpperCase() +
                      dropdownOption.substring(1)
                    }
                    name={dropdownOption}
                    onChange={handleChange}
                    options={optionValues}
                    disabled={optionValues.length === 1}
                  />
                </div>
              );
            })}
          </div>
          <div className="row" style={{ gridGap: 0 }}>
            <div className="p-card col-6 u-no-padding">
              <div className="p-card__content">
                <div>
                  <iframe src={url} width="100%" height={300}></iframe>
                </div>
              </div>
            </div>
            <div className="col-2 p-card">
              <Switch
                switchOptions={configValues.switch}
                handleChange={handleChange}
              />
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default LiveDemoBox;
