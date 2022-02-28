export const debounce = (fn, wait) => {
  let timeout;

  return (...args) => {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), wait);
  };
};

export const throttle = (callback, wait, immediate = false) => {
  let timeout = null;
  let initialCall = true;

  return function (...args) {
    const callNow = immediate && initialCall;
    const next = () => {
      callback.apply(this, args);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
};

export const removeChildNode = (el) => {
  const parent = el.parentNode;

  parent.removeChild(el);
};
