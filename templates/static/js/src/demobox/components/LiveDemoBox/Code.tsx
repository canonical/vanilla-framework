import React, { useEffect, useState } from "react";
import { Select } from "@canonical/react-components";
import Prism from "prismjs";
import useCode from "../../hooks/useCode";

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
      <div className="p-code-snippet u-no-margin--bottom">
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
