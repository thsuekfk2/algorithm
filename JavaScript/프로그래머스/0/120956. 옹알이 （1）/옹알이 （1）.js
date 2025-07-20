
function solution(babbling) {
  let sound = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let data of babbling) {
    let index = 0;
    console.log("data", data);

    while (index < data.length) {
      let isValid = false;
      for (let i = 0; i < sound.length; i++) {
        console.log(i, sound[i], index, data.startsWith(sound[i], index));
        if (data.startsWith(sound[i], index)) {
          index += sound[i].length;
          isValid = true;
          break;
        }
      }
      if (!isValid) {
        break;
      }
      if (data.length === index) {
        count++;
        break;
      }
    }
  }
  console.log("count", count);
  return count;
}