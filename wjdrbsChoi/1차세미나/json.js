var sopt = {
    name : 'OUR SOPT',
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 100,
    printName : function() {
        console.log("name : ", this.name)
    },
    printNum : function() {
        console.log('number : ', this.number)
    }
};

console.log('typeof soot : ' + typeof sopt);
console.log('sopt : ' + sopt);
console.log('sopt : ', sopt);
console.log('sopt :' + JSON.stringify(sopt));

sopt.printName();
sopt.number = 190;
sopt.printNum();
