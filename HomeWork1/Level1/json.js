/* -------------------- */
/*   1. JSON 객체 실습    */
/* -------------------- */

var sopt = {
    name : "서버파트 MVP",
    slogan : "최고의 서버파트",
    part : ["plan", "design", "android", "iOS", "server"],
    number : 180,

    printName : function() {
        console.log("name : ", this.name);
    },
    printNum : function() {
        console.log("number : ", this.number);
    }
};

console.log("typeof sopt : ", typeof sopt);

console.log("sopt : " + sopt);                  // Object 출력
console.log("sopt : ", sopt);                   // JSON 형식 출력


/* -------------------- */
/*   2. JSON 배열 실습    */
/* -------------------- */

var dogs = [
    { name : "수리", family : "시츄", age : 2, weight : 2.14},
    { name : "콩콩", family : "포메라니안", age : 3, weight : 2.5},
    { name : "두팔", family : "푸들", age : 7, weight : 3.1}
];

console.log('dogs : ' + dogs);
console.log('dogs : ', dogs);
console.log('dogs :' + JSON.stringify(dogs));

dogs.forEach( 
    dog => console.log(dog.name+'는 종이 '+dog.family+'이고, 나이가 '+dog.age+'세입니다 ~')
);
