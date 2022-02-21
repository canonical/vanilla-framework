import React, { useEffect, useState } from "react";
import { Select } from "@canonical/react-components";
import Prism from "prismjs";
import useCode from "../../hooks/useCode";
import CodepenPrefill from "react-codepen-prefill";

type Props = {
  path: string;
};

const Code = ({ path }: Props) => {
  const [language, setLanguage] = useState("html");

  const { html, js, css, isLoading, isSuccess } = useCode(path);

  useEffect(() => {
    if (
      !isLoading &&
      isSuccess &&
      ((language === "js" && !js) || (language === "css" && !css))
    ) {
      setLanguage("html");
    }

    Prism.highlightAll();
  }, [html, js, css, language, isLoading, isSuccess]);

  const selectOptions = [
    {
      value: "html",
      label: "HTML",
      disabled: !html,
    },
    {
      value: "js",
      label: "JS",
      disabled: !js,
    },
    {
      value: "css",
      label: "CSS",
      disabled: !css,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <div className="p-code-snippet">
        <div className="p-code-snippet__header">
          <h5 className="p-code-snippet__title">Notifications</h5>
          {isSuccess && (
            <div className="p-code-snippet__dropdowns">
              <Select
                className="p-code-snippet__dropdown"
                options={selectOptions}
                onChange={handleChange}
                value={language}
              />
            </div>
          )}
          <div className="p-code-snippet__codepen-link">
            <CodepenPrefill
              label="Edit on CodePen"
              className="p-button--link"
              target="_blank"
              title="Vanilla framework example"
              css_external="https://assets.ubuntu.com/v1/vanilla-framework-version-3.1.0.min.css;https://assets.ubuntu.com/v1/4653d9ba-example.css"
              html={html}
              editors="111"
            />
          </div>
        </div>
        <pre
          className={`p-code-snippet__block u-no-margin language-${language}`}
          data-lang={language}
          style={{ maxHeight: "300px" }}
        >
          <code className={`language-${language}`}>
            {(language == "html" && html) ||
              (language == "js" && js) ||
              (language == "css" && css)}
          </code>
        </pre>
      </div>
    </>
  );
};

export default Code;
