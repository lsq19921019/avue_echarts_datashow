import { url } from '@/config';
var request = window.axios;
export const getList = (params) => request({
  url: url + '/map/list',
  method: 'get',
  params: params
});



export const getObj = (id) => request({
  url: url + '/map/detail',
  method: 'get',
  params: {
    id
  }
});

export const addObj = (data) => request({
  url: url + '/map/save',
  method: 'post',
  data: data
});
export const updateObj = (data) => request({
  url: url + '/map/update',
  method: 'post',
  data: data
});



export const delObj = (id) => request({
  url: url + '/map/remove',
  method: 'post',
  params: {
    ids: id
  }
});