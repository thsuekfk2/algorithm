
function solution(arr) {
  let sound = ["aya", "ye", "woo", "ma"]; //네 가지 발음
  let count = 0;

  for (let data of arr) {
    let index = 0;
    
    while (index <= data.length) {
        let isValid = false;
      for (let sound_data of sound) {
        if (data.startsWith(sound_data, index)) {
          index += sound_data.length;
          isValid = true;
        }
      }
      if (!isValid) {
        break;
      }
      if (index === data.length) {
        count++;
        break;
      }
    }
  }
  console.log(count);
  return count;
}