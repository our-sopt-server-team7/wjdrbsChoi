/* -------------------- */
/*   1. 변수 재선언 실습    */
/* -------------------- */

var vv = 123;
var vv = 321;                          // 변수 재선언 가능

console.log("vv : ", vv);


let ll = 123;
//let ll = 321;                       // 변수 재선언 안됨 -> 에러 발생

console.log("ll : ", ll);


const cc = 123;
//const cc = 321;                     // 변수 재선언 안됨 -> 에러 발생 

console.log("cc : ", cc);


/* -------------------- */
/*   2. 변수 재할당 실습    */
/* -------------------- */

var vv1 = "abc"; 
vv1 = "def";                           // 변수 재할당 가능

console.log("vv1 : ", vv1);


let le = "abc";
le = "def";

console.log("le : ", le);              // 변수 재할당 가능


const cc1 = "abc";
//cc1 = "def";                        // 변수 재할당 안됨 -> 에러발생
console.log("cc1 : ", cc1);



/* -------------------- */
/*   3. 변수 초기화 실습    */
/* -------------------- */


var vc;
console.log("vc : ", vc);

let lc;
console.log("lc : ", lc);

const cv;                           // 초기화 필수 -> 에러 발생
console.log("cv : ", cv)

