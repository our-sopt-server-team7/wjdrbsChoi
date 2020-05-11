const fs = require("fs");

const numArr = [1, 2, 3, 4, 5];

numArr.forEach((num) => {
    const title = "async" + num;
    const data = `파일이 잘 만들어 졌어요\n제 이름은 ${title}.txt입니다~`;
    fs.writeFile(`${title}.txt`, data, (err, data) => {
        if (err) return console.log(err.message);
        console.log(`${title} 비동기라 순서가 뒤죽박죽~`);
    });
});


numArr.forEach((num) => {
    const title = 'async' + num;
    fs.readFile(`${title}.txt`, (err, data) => {
        if (err) return console.log (err.message);
        console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
    });
});



