const db = require('../connection.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('accounts').select('id', 'username', 'department').orderBy();
};

function findBy(filter) {
    return db('accounts').where(filter).orderBy('id');
};

function findById(id) {
    return db('accounts').where({id}).first();
};

async function add(user) {
    try {
        const [id] = await db('accounts').insert(user, 'id');
        return findById(id);
    } catch (err) {
        throw err;
    }
};