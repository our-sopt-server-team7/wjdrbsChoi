const pool = require('../modules/pool');
const table = 'user';

const user = {
    signup: async (id, name, password, salt, email) => {
        const fields = 'id, name, password, salt, email';
        const questions = `?, ?, ?, ?, ?`;
        const values = [id, name, password, salt, email];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
            
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    checkUser: async (id) => {},
    signin: async (id, password) => {},
}

module.exports = user;  


  
//   module.exports = [
//     {
//         id: 'gngsn',
//         name: '박경선',
//         password: 'qwerty',
//         salt : "sdsdsdwe2322222222sdqwewqeqeqe",
//         hashed : "ekdkkriiaiakdkwmwnzjzkxlbkxblxk",
//         email: 'gngsn@gmail.com'
//     },
//     {
//         id: 'EZYOON',
//         name: '이지윤',
//         password: 'fl0wer',
//         salt : "asdi2jajbn2fjfj9ajdsj@masd",
//         hashed : "xcnxcxnmgnsfsfadjaidjwijd@asdskdsjd",
//         email: 'gngsn@gmail.com'
//     },
//     {
//         id: 'wjdrbs',
//         name: '최정균',
//         password: 'password',
//         salt : "eweweei2oia82jj@ajdaskj2ena",
//         hashed : "zsdsdsdmmwiweiewei2iuwdwidu2ieu2u@sdjasdksajdsad",
//         email: 'wjdrbs@gmail.com'
//     }
// ];