
const mapToArray = (data) => {
  let keys = Object.keys(data);
  let finalData = []

  for (let key of keys) {
    let temp = data[key];
    temp.id = key;
    finalData.push(temp);
  }
  return finalData;
}

export default mapToArray;
