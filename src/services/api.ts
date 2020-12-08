import axios from 'axios';

export const apiSearchCity = axios.create({
  baseURL: "http://dataservice.accuweather.com/locations/v1/cities/"
});

export const apiSearchCondition = axios.create({
  baseURL: "http://dataservice.accuweather.com/currentconditions/v1/"
});