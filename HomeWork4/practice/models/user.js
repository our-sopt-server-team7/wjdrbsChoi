const pool = require('../modules/pool')
const table = 'user';

const user = {
    signup : async (name, password, email, phone) => {
        const fields = 'name, password, email, phone';
        const questions = '?, ?, ?, ?';
        const values = [name, password, email, phone];
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

    checkUser : async (id) => {
        const query = `SELECT * FROM ${table} WHERE id="${id}"`;
        try {
            const result = await pool.queryParam(query);
            // 쿼리 결과가 존재하지 않을 때
            if (result.length === 0) {
                return false;
            }
            // 쿼리 결과가 존재할 때
            return true;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }

            console.log('signup ERROR : ', err);
            throw err;
        }
    },

    getUserById : async (id) => {
        const query = `SELECT * FROM ${table} WHERE id=?`;
        try {
            return await pool.queryParamArr(query, [id]);
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }

            console.log('signup ERROR : ', err);
            throw err;
        }
    }
    
}

module.exports = user;