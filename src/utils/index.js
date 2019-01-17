import api from './endpoints';

const isJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
};

const responseHandlerOldFashioned = async (response) => {
  if (response.ok) {
    const data = await response.text();
    return isJson(data) || data;
  }
  throw Error(response.status);
};

const errorHandler = err => console.log(`something wrong occurred: ${err}`);
const responseHandler = ({ response }) => console.log(response);

export default {
  responseHandlerOldFashioned,
  errorHandler,
  responseHandler,
  api,
};
