
// 문자열 정수로 바꾸기

return Number(s)

// 핸드폰 번호 가리기

function solution(num) {
    let result = ' '; 
    
    let password = ' ';
    let answer = ' ';

    for(let i=0; i < num.length; i = i +1){
        if(i < num.length - 4){
            password = password + '*';
        } else {
            answer = answer + num[i];
        }
    }
    
    return password + answer;    
}

// 같은 숫자는 싫어

function solution(arr)
{
    var result = []
    
    for(let i =0; i <arr.length; i=i+1){
        if(arr[i] !== arr[i+1]) {
            result.push(arr[i]);
        }
    }
    return result;
}