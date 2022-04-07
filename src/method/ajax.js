/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
const getHttpRequest = () => {
  let httpRequest = false;

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  } else if (window.ActiveXObject) {
    // IE
    try {
      httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        console.error(e);
      }
    }
  }

  if (!httpRequest) {
    console.error('unable to create XMLHTTP instance');
  }

  return httpRequest;
};

const ajax = ({
  request = 'auto',
  method = 'GET',
  url,
  data,
  format,
  headers,
  mode,
  cache,
  response,
  error,
}) => {
  const fetchRequest = () => {
    const init = {};
    method ? (init.method = method) : '';
    headers ? (init.headers = headers) : '';
    data ? (init.body = data) : '';
    mode ? (init.mode = mode) : '';
    cache ? (init.cache = cache) : '';

    fetch(url, init)
      .then((res) => {
        if (format === 'json' || format === 'JSON') {
          res.json().then((data) => {
            response(data);
          });
        } else {
          response(res);
        }
      })
      .catch((err) => {
        if (error) {
          error(err);
        }
      });
  };

  const xhrRequest = () => {
    const httpRequest = getHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        if (format === 'json' || format === 'JSON') {
          response(JSON.parse(httpRequest.response));
        } else {
          response(httpRequest.response);
        }
      } else if (
        httpRequest.readyState === 4 &&
        httpRequest.status !== 200 &&
        error
      ) {
        error(`Error: status ${httpRequest.status}`);
      }
    };
    httpRequest.open(method, url, true);
    for (const key in headers) {
      httpRequest.setRequestHeader(key, headers[key]);
    }
    httpRequest.send(method === 'POST' ? data : null);
  };

  if (request === 'auto') {
    if (window.fetch) {
      // Fetch
      fetchRequest();
    } else {
      // XMLHttpRequest
      xhrRequest();
    }
  } else if (request === 'fetch') {
    // Fetch
    fetchRequest();
  } else if (request === 'xhr' || request === 'XMLHttpRequest') {
    // XMLHttpRequest
    xhrRequest();
  }
};

export default ajax;
