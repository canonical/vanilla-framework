import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import { Select } from "@canonical/react-components";
import Code from "./Code";
import useCode from "demobox/hooks/useCode";
import CodepenPrefill from "react-codepen-prefill";

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

  const { html, js, css, isSuccess } = useCode(jsonUrl || "");
  const patternName = window.location.pathname.split("/").pop();

  return (
    <section className="p-strip is-shallow">
      {configValues && configValues.dropdown && configValues.switch && (
        <>
          <div className="row" style={{ gridGap: 0 }}>
            {dropdownOptions?.map((dropdownOption) => {
              const optionValues = configValues?.dropdown[dropdownOption].map(
                (item) => ({ ...item, value: item.key })
              );
              return (
                <div className="col-2" key={dropdownOption}>
                  <Select
                    className="u-no-margin--bottom"
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
            <div className="p-card col-6 u-no-padding u-no-margin--bottom">
              <div className="p-card__content">
                <div>
                  <iframe src={url} width="100%" height={300}></iframe>
                </div>
              </div>
              <div className="p-card__inner u-align--right u-no-padding--top u-no-padding--bottom">
                <ul className="p-inline-list u-no-margin--bottom">
                  <li className="p-inline-list__item">
                    {isSuccess && (
                      <CodepenPrefill
                        label="Edit on CodePen"
                        className="p-button--link"
                        target="_blank"
                        title={`Vanilla framework ${patternName} example`}
                        css_external="https://assets.ubuntu.com/v1/vanilla-framework-version-3.1.0.min.css;https://assets.ubuntu.com/v1/4653d9ba-example.css"
                        html={html}
                        css={css}
                        js={js}
                        editors="111"
                      />
                    )}
                  </li>
                  <li className="p-inline-list__item">
                    <a
                      className="p-icon--fullscreen"
                      href={url}
                      target="_blank"
                    >
                      Fullscreen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 p-card u-no-margin--bottom">
              <Switch
                switchOptions={configValues.switch}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="row" style={{ gridGap: 0 }}>
            <div className="p-card col-8 u-no-padding">
              <Code path={url} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default LiveDemoBox;
