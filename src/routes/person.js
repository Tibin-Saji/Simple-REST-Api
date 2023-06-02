let express = require('express');
let router = express.Router();

// Query
router.get('/person', (req, res) => {
    res.send(`You have requested a person ${req.query.name} as a query.`)
})

// Params
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name} as a param.`)
})

module.exports = router;