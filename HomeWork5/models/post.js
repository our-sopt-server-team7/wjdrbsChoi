const pool = require('../modules/pool');
const table = 'post';

const post = {
    showAllPost : async() => {
        const query = `SELECT * FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch(err) {
            console.log('ShowALLPost Error : ', err);
            throw err;
        }
    },

    checkPostId : async(postIdx) => {
        const query = `SELECT * FROM ${table} WHERE postIdx = "${postIdx}"`;
        try {
            const result = await pool.queryParam(query);
            if (result.length == 0) {
                return false;
            }

            return true;

        } catch(err) {
            console.log("checkPostId Error" , err);
            throw err;
        }
    },

    searchPost : async(postIdx) => {
        const query = `SELECT * FROM ${table} WHERE postIdx = ${postIdx}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch(err) {
            console.log("searchPost Err", err);
            throw err;
        }
    },

    createPost : async(author, title, contents, createdAt) => {
        const fields = 'author, title, content, createdAt';
        const questions = `?, ?, ?, ?`;
        const values = [author, title, contents, createdAt];
        const query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;

        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch(err) {
            if (err.errno == 1062) {
                console.log('createdPost ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('createdPost ERROR', err);
            throw err;
        }
    }

}

module.exports = post;