const express = require('express');
const router = express.Router();
const Tire = require('./model');

router.get('/', async (req, res) => {
    const bleh = {
        id: 0,
        name: 'Bridgestone'
    }

    res.send(bleh);
});

module.exports = router;