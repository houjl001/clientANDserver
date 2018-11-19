import axios from 'axios';
let get = (url, params) => {
  return new Promise((reslove, reject) => {
    axios.get(url, { params }).then(respose => {
      reslove(respose);
    }).catch(error => {
      reject(error);
    });
  });
};
let post = (url, data) => {
  return new Promise((reslove, reject) => {
    axios.post(url, { data }).then(respose => {
      reslove(respose);
    }).catch(error => {
      reject(error);
    });
  });
};
export default {
  home: params => { return get('home/home', params); },
  about: params => { return post('home/about', params); }
};