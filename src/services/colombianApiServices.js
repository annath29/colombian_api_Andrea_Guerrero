import endpoints from "./endpoints";

export const getAllPresidents = async () => {
  try {
    const startTime = performance.now();
    const response = await fetch(endpoints.getAllPresidents);
    const data = await response.json()
    ;
    const endTime = performance.now();
    const responseTime=endTime - startTime
    return [data,responseTime];
  } catch (e) {
    console.error(e);
    return [];
  }
};
export const getAllAirports = async () => {
  try {
    const startTime = performance.now();
    const response = await fetch(endpoints.getAllAirports);
    const data = await response.json();

    const endTime = performance.now();
    const responseTime=endTime - startTime
    return [data,responseTime];

  } catch (e) {
    console.error(e);
    return [];
  }
};
export const getAllTouristicAttraction = async () => {
  try {
    const startTime = performance.now();
    const response = await fetch(endpoints.getAllTouristicAttraction);
    const data = await response.json();
    const endTime = performance.now();
    const responseTime=endTime - startTime
    return [data,responseTime];
  } catch (e) {
    console.error(e);
    return [];
  }
};