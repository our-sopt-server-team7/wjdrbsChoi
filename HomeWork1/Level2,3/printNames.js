let printNames = function() {
    console.log("이름은 " + this.name + ", 별명은 " + this.nickName + "이고, " + "성별은 " + this.gender + ", 주량은 " + this.drinkingCapacity + "병 입니다!");
}

let members = [
    {
        name : "박현주",
        age : 25,
        nickName : "현주",
        gender : "남자",
        drinkingCapacity : 2,
        printName : printNames
    },
    {
        name : "김성윤",
        age : 23,
        nickName : "성윤",
        gender : "남자",
        drinkingCapacity : 2,
        printName : printNames
    },
    {
        name: '최정균', 
        age: 25, 
        nickName : "정균",
        gender: '남자', 
        drinkingCapacity: 2,
        printName : printNames
    },
    {
        name: '천명희', 
        age: 24, 
        nickName : "명희",
        gender: '여자', 
        drinkingCapacity: 2,
        printName : printNames
    },
    {
        name: '백선혜', 
        age: 22, 
        nickName : "선혜",
        gender: '여자', 
        drinkingCapacity: 2,
        printName : printNames
    },
    {
        name : "장세영",
        age : 22,
        nickName : "세영",
        gender : "여자",
        drinkingCapacity : 2,
        printName : printNames
    }
]

// Level2 
for (var member of members) {
    member.printName();
}


// Level3

members.forEach(member => {
    console.log(member.name, "은(는) ",
                member.age, "살 ",
                member.nickName, "이 닉네임이고 ",
                member.gender, "이며 주량은 소주 ", 
                member.drinkingCapacity, "병 입니다.")
})
