function funcScope() {
    var v1 = 1234;
    if (true) {
        var v2 = 123;
        let ll = "abc";
        console.log("let은 Block Scope, ll : ", ll);
    }
    
    // console.log(ll);                                // let은 블록스코프 이기 때문에 에러 발생 
    console.log("var은 function Scope, v2 : ", v2);    // var 는 function Scope 이다. 
}

funcScope();