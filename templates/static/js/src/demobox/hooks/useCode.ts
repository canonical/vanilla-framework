import { useState } from "react";
import { useQuery } from "react-query";
import { getHtml, getJs, getCss } from "../utils/code";

type CodeRecord = Record<string, string | null>;

const useCode = (path: string) => {
  const [html, setHtml] = useState<CodeRecord>({});
  const [js, setJs] = useState<CodeRecord>({});
  const [css, setCss] = useState<CodeRecord>({});

  const { isLoading, isSuccess, isError, error } = useQuery(
    path,
    async () => {
      const response = await fetch(path);
      const responseText = await response.text();

      const responseHtml = getHtml(responseText);
      const responseJs = getJs(responseText);
      const responseCss = getCss(responseText);

      setHtml({ ...html, [path]: responseHtml });
      setJs({ ...js, [path]: responseJs });
      setCss({ ...css, [path]: responseCss });
    },
    { enabled: true }
  );

  return {
    html: html[path],
    js: js[path],
    css: css[path],
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export default useCode;
