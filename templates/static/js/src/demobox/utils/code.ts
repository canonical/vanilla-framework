export const getHeadHtml = (code: string) => {
  const headPattern = /<head[^>]*>((.|[\n\r])*)<\/head>/im;
  const parsed = headPattern.exec(code);
  const headHtml = parsed ? parsed[1].trim() : "";
  return headHtml;
};

export const getBodyHtml = (code: string) => {
  const bodyPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
  const parsed = bodyPattern.exec(code);
  const bodyHtml = parsed ? parsed[1].trim() : "";
  return bodyHtml;
};

export const getHtml = (code: string) => {
  const div = document.createElement("div");
  div.innerHTML = getBodyHtml(code);
  const scripts = div.getElementsByTagName("script");
  let i = scripts.length;
  while (i--) {
    const parentNode = scripts[i].parentNode;
    if (parentNode) {
      parentNode.removeChild(scripts[i]);
    }
  }
  return div.innerHTML.trim();
};

export const getJs = (code: string) => {
  const div = document.createElement("div");
  div.innerHTML = getBodyHtml(code);
  const script = div.querySelector("script");
  return script ? script.innerHTML.trim() : null;
};

export const getCss = (code: string) => {
  const div = document.createElement("div");
  div.innerHTML = getHeadHtml(code);
  const style = div.querySelector("style");
  return style ? style.innerHTML.trim() : null;
};
