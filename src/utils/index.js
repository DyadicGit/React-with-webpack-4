const isJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
};

const handleResponse = async (response) => {
  if (response.ok) {
    const data = await response.text();
    return isJson(data) || data;
  }
  throw Error(response.status);
};

const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedOnChange = (callbackFn) => {
  const deb = debounce(callbackFn, 1000);
  return e => deb(e.target.value);
};

export default {
  handleResponse,
  isJson,
  debounce,
  debouncedOnChange,
};
