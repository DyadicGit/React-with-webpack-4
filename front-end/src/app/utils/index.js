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

export default {
  handleResponse,
  isJson,
};
