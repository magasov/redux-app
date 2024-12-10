const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
