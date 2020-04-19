/* -------------------- */
/*   1. 함수 선언식 실습    */
/* -------------------- */


function addNum(x, y) {
    console.log(x + y);
}

addNum(5, 10);


/* -------------------- */
/*   2. 함수 표현식 실습    */
/* -------------------- */

var addStr = function (x, y) {
    console.log(x + y);
}

addStr("함수", "표현식");


/* -------------------- */
/*   3. 화살표 함수 실습    */
/* -------------------- */

var addBool = (x, y) => {
    console.log(x + y);
}

addBool(true, false);