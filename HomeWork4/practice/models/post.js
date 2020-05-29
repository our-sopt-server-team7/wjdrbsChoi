const pool = require('../modules/pool');
const table = 'post';

const post = {

    findAll : async() => {
        const query = 'SELECT * FROM post';
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch(err) {
            if (err.errno == 1062) {
                console.log('postList ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('postList ERROR : ', err);
            throw err;
        }
    },

    write : async (author, title, content, createdAt) => {
        const fields = 'author, title, content, createdAt';
        const questions = `?, ?, ?, ?`;
        const values = [author, title, content, createdAt]
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        console.log(fields);
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('postWrite ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('postWrite ERROR : ', err);
            throw err;
        }
    },

    postCheck : async(idx) => {
        const query = `SELECT * FROM ${table} WHERE postIdx = ${idx}`;
        try {
            const result = await pool.queryParam(query);
            if(result.length === 0){
                return false;
            } 
            
            return true;

        } catch(err){
            throw err;
        }
    },

    // 수정하고 싶은 필드만 수정하게 만들어야함 (따라서 수정하고 싶은 필드의 값들만 dao에 잘 담겨 있음)
    update : async(idx, dao) => {
        // request를 보낼 때 ex): author, content만 (title 뺴고) 수정하고 싶을 경우도 있기 때문에 if 문으로 check하기
        var fields = "";
        const values = [];
        for (key in dao) {
            if (dao[key] !== undefined) {
                values.push(dao[key]);
                fields += key + "=?, ";
            }
        }
        
        // 맨 뒤에 ,와 공백을 제거해주기 위해서 substring 이용
        fields = fields.substring(0, fields.length - 2);

        const query = `UPDATE ${table} SET ${fields} WHERE postIdx = ${idx}`;

        try{
            const result = await pool.queryParamArr(query, values);
            return result.protocol41;
        } catch(err){
            throw err;
        }
    },

    delete : async(idx) => {
        const query = `DELETE FROM ${table} WHERE postIdx = ${idx}`;
        try {
            const result = await pool.queryParam(query);
            if(result.length === 0){
                return false;
            } 
            
            return true;

        } catch(err){
            throw err;
        }
    }
}

module.exports = post;
