// throttling function calls, by Remy Sharp
// http://remysharp.com/2010/07/21/throttling-function-calls/
export const throttle = function (fn, delay) {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};
