const { databaseQuery } = require('../database');

const getdata = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getdataByName = async (nama) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE nama = $1`;
        const result = await databaseQuery(query, [nama]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getdataByemailtelepon = async (email,telepon) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE email=$1 and telepon=$2 `;
        const result = await databaseQuery(query, [email, telepon]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}
const updatedatabyname = async (nama,telepon ) => {
    try {
        const query = `UPDATE praktikan_webdev SET telepon=$1 WHERE nama=$2`;
        const result = await databaseQuery(query, [telepon, nama]);
        if (!result) {
            throw new Error('Error deleting data');
        }
        if (result.rowCount === 0) {
            throw new Error('data not found');
        }
        return {
            message: 'data updated successfully',
        };
    } catch (error) {
        return error
    }
}
const deletedatabyemail = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE email=$1`;
        const result = await databaseQuery(query, [email]);

        if (!result) {
            throw new Error('Error deleting data');
        }
        if (result.rowCount === 0) {
            throw new Error('data not found');
        }
        return {
            message: 'data deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}


const insertdata = async (nama, jenis_kelamin, angkatan, email, telepon, deskripsi ) => {
    try {
        const query = `INSERT INTO praktikan_webdev (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) VALUES ($1, $2, $3, $4, $5, $6)`;
        const result = await databaseQuery(query, [nama, jenis_kelamin, angkatan, email, telepon, deskripsi]);

        if (!result) {
            throw new Error('Error inserting data');
        }
        return {
            message: 'data inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const bulkinsert = async (POM) => {
    try {
        let BAN = []
        JSON.parse(POM,(a,b)=>{BAN.push(b)})
        for (let a=0;a<(BAN.length-1)/7;a++){
            const query = `INSERT INTO praktikan_webdev VALUES ('${BAN[a*7]}','${BAN[(a*7)+1]}','${BAN[(a*7)+2]}','${BAN[(a*7)+3]}','${BAN[(a*7)+4]}','${BAN[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error inserting Data');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }
        }
        console.log(BAN)
        console.log(POM)
        return {
            message: 'Data inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

module.exports =  {
    getdata,
    getdataByName,
    getdataByemailtelepon,
    updatedatabyname,
    deletedatabyemail,
    insertdata,
    bulkinsert
}