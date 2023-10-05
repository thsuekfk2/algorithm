
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

function solution(survey, choices) {
    let object = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    survey.map((data,i)=>{
        [...data].map((innerData,j)=>{
                if(j===0 && choices[i] <= 3){
                    object[innerData] += 4 - choices[i]
                }else if(j===1 && choices[i] > 4){
                    object[innerData] +=  choices[i] - 4 
                }
    })})
      let table = Object.entries(object);
      let result = "";
      for (let i = 0; i < 7; i += 2) {
        if (table[i][1] < table[i + 1][1]){
            result += table[i + 1][0];
        } else result += table[i][0];
      }
      return result;
}