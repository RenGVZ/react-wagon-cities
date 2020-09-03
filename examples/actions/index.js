// TODO: add and export your own actions
// import cities from '../components/app';
export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
