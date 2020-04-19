/* -------------------- */
/*   1. 배열의 선언 실습    */
/* -------------------- */

var server1 = ["솝트", "서버파트", 43, null, true];
var server2 = Array("홍길동", "신짱구", 13);
var server3 = new Array("경기도", "군포시", false, undefined);

console.log("server1 : ", server1);
console.log("server2 : ", server2);
console.log("server3 : ", server3);


/* -------------------- */
/*   2. 배열의 추가 실습    */
/* -------------------- */

server1.push(321);
server2[server2.length] = "서버파트 최고";
server3[99] = "server3의 길이는~?";

console.log("server1 : ", server1);
console.log("server2 : ", server2);
console.log("server3 : ", server3);


/* -------------------- */
/*   3. 배열의 순회 실습    */
/* -------------------- */


let str1 = "server1에는 ";
for (var item of server1) {                        // for-of 배열의 원소를 하나씩 꺼내옴
    str1 += item + ", ";
}

str1 += "이 들어있네요~";
console.log(str1);


let str2 = "server2에는 ";
for (var item in server2) {                        // for-in 배열의 인덱스를 하나씩 꺼내옴
    str2 += server2[item] + ", ";
}

str2 += "이 들어있네요~";
console.log(str2);


let str3 = "server3에는 ";
server3.forEach(item => str3 += item + ", ");      // forEach 배열의 원소를 하나씩 꺼내옴 
str3 += "이 들어있네요~";
console.log(str3);