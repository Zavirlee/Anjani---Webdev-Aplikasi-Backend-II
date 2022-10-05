const { dataServices } = require('../service');
const { responseHelper } = require('../helper');

const getdata = async (req, res) => {
    try {

        const data = await dataServices.getdata();
        if(data instanceof Error) {
            throw new Error(data);
        } 
        res.status(responseHelper.status.success).json(data);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getdataByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const data = await dataServices.getdataByName(nama);
        res.status(responseHelper.status.success).json(data);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getdataByemailtelepon = async (req, res) => {
    try {
        const { email, telepon } = req.params;
        const data = await dataServices.getdataByemailtelepon(email,telepon);
        res.status(responseHelper.status.success).json(data);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updatedatabyname = async (req, res) => {
    try {
        const { nama, telepon } = req.body;
        const data = await dataServices.updatedatabyname(nama,telepon);
        res.status(responseHelper.status.success).json(data);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertdata = async (req, res) => {
    try {

        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi  } = req.body;
        const result = await dataServices.insertdata(nama, jenis_kelamin, angkatan, email, telepon, deskripsi );
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deletedatabyemail = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await dataServices.deletedatabyemail(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const bulkinsert = async (req, res) => {
    try {
        const result = await dataServices.bulkinsert(JSON.stringify(req.body));
        
        if(result instanceof Error) {
            throw new Error(result);
        }

        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getdata,
    getdataByName,
    getdataByemailtelepon,
    updatedatabyname,
    deletedatabyemail,
    insertdata,
    bulkinsert
}