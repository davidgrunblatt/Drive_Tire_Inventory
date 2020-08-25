const express = require('express');
const router = express.Router();
const Tire = require('./model');

router.get('/', async (req, res) => {
    try {
        const find = await Tire.find({});
        res.send(find);
    }
    catch(ex) {
        res.send(ex);
    }
});

module.exports = router;