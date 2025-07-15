
function solution(genres, plays) {
  let obj = {};

  for (let i = 0; i < genres.length; i++) {
    if (obj[genres[i]]) {
      obj[genres[i]].arr.push(i);
      obj[genres[i]].sum += plays[i];
    } else {
      obj[genres[i]] = { sum: plays[i], arr: [i] };
    }
  }

  let sortGenre = Object.keys(obj).sort((a, b) => obj[b].sum - obj[a].sum);

  let answer = [];
  for (let genre of sortGenre) {
    let sortPlays = obj[genre].arr.sort((a, b) => {
      if (a == b) {
        return a - b;
      } else {
        return plays[b] - plays[a];
      }
    });
    answer.push(...sortPlays.splice(0, 2));
  }
    return answer;
}