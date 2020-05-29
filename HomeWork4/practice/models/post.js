const pool = require('../modules/pool');
const table = "post";

const post = {
    write : async (author, title, content, createdAt) => {
        const fields = 'name, password, salt, email';
        const questions = `?, ?, ?, ?`;
        const values = [author, title, content, createdAt]
        const query = `INSERT INTO ${table} (${fields}) VALUES(${questions})`;
        try {
            const result = await pool.queryParam(query, values);
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
    }
}

module.exports = post;
