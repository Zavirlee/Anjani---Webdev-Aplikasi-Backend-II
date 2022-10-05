const express = require("express");
const router = express.Router();
const { dataController } = require("../controllers");
const { dataValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(dataController.getdata);

// Example with route /:name in longer version
router.route("/:nama").get(
    param('nama').isLength({min: 5}),
    (req, res, next) => {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(400).json({errors: error.array()});
        }
        next();
    },
    dataController.getdataByName);

// Example with route /:name in shorter version
// router.route("/:name").get(dataValidation.getdataByName, dataController.getdataByName);
router.route("/:email/:telepon").get(dataValidation.getdataByemailtelepon, dataController.getdataByemailtelepon );
router.route("/insert").post(dataValidation.insertdata, dataController.insertdata );
router.route("/delete").delete(dataValidation.deletedatabyemail, dataController.deletedatabyemail);
router.route("/update").patch(dataValidation.updatedatabyname, dataController.updatedatabyname);
router.route("/bulkinsert").post(dataValidation.bulkinsert, dataController.bulkinsert);


module.exports = router;