/* eslint-disable no-console */
const getPoem = (data) => {
  // eslint-disable-next-line prefer-const
  let result = [];
  result.push(data.origin);
  result.push(data.author);
  result.push(data.content);
  return result;
};

const getPoetry = async () => {
  return fetch("https://v1.jinrishici.com/all.json", {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => getPoem(data))
    .catch((error) => console.log(`Error: ${error}`));
};

export default getPoetry;
