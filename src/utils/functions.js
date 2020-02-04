/* eslint-disable import/prefer-default-export */

export const getParametersFromUrl = () => {
  const { search } = window.location;

  if (search && search.startsWith('?')) {
    const paramsArray = search.substring(1).split('&');

    const res = {};

    paramsArray.forEach((param) => {
      const [ parameter, value ] = param.split('=');

      res[parameter] = value;
    });

    return res;
  }

  return {};
};
