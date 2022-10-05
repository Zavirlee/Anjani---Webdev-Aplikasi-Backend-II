const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getdataByName = [
    param('nama').isLength({min: 8}),
    validator
]

const getdataByemailtelepon = [
    param('email').isEmail(),
    param('telepon').isLength(12),
    validator
]

const updatedatabyname = [
    body('nama').isLength({min: 8}),
    body('telepon').isLength(12),
    validator
]
const deletedatabyemail = [
    body('email').isEmail(),
    validator
]
const insertdata =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L', 'P']),
    body('angkatan').isInt({min:2018}),
    body('email').isEmail(),
    body('telepon').isLength({max: 12}),
    body('deskripsi').notEmpty(),
    validator
]

const bulkinsert =  [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['L', 'P']),
    body('*.angkatan').isInt({min:2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength({max: 12}),
    body('*.deskripsi').notEmpty(),
    validator
]

module.exports = {
    getdataByName,
    getdataByemailtelepon,
    updatedatabyname,
    deletedatabyemail,
    insertdata,
    bulkinsert
}
