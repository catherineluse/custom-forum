const removeEmptyDataFromDTO = payload => {
  // DynamoDB throws an error if you submit empty strings
  // or arrays
  let input = {};
  for (let key in payload) {
    if (payload[key] !== "" && payload[key] !== []) {
      input[key] = payload[key];
    }
  }
  return input;
};

export default removeEmptyDataFromDTO;
