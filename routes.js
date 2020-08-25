const express = require('express');
const router = express.Router();
const Tire = require('./model');

router.get('/', async (req, res) => {
    const t = await Tire.find({});
    
    res.send(t);
});

module.exports = router;