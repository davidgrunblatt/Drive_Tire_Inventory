const express = require('express');
const router = express.Router();
const Tire = require('./model');

router.get('/', async (req, res) => {
    const t = await Tire.find({})
    .then(d => res.send(d))
    .catch(ex => console.log(ex));
});

module.exports = router;