import axios from 'axios';

const API = axios.create({
  baseURL: '/fitkal/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 18000,
});

API.interceptors.request.use(
  function(config) {
    // config.headers = { Authorization: localStorage.getItem('token') };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let status = (error.response && error.response.status) || 0;
    let message = error.response && error.response.data.message;

    if (status === 401) {
      message = message || 'Kimlik doğrulaması başarısız.';
    } else if (status === 403) {
      message = message || 'Bu işlem için yetkiniz yoktur.';
    } else if (status === 500) {
      message = 'Beklenmedik bir hata oluştu';
    } else if (status === 504) {
      message = 'İstek zaman aşımına uğradı.';
    }

    // axios timeout
    else if (error.code === 'ECONNABORTED') {
      message = 'İstek zaman aşımına uğradı.';
      status = 504;
    }

    message = message || `İşlem başarısız`;

    if (process.env.NODE_ENV === 'development') {
      console.error('We have an error', { ...error });
      console.error(message, status);
    }

    return Promise.reject({ status, message });
  },
);

export { API };
