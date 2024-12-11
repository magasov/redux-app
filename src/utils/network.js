export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};
