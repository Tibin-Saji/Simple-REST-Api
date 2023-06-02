let CustomerModel = require('../models/customer_model')
let express = require('express')
let router = express.Router()

// Create
router.post('/customer',  (req, res) => {
    if(!req.body){
        return res.status(400).send('Request contains invalid body')
    }

    let model = new CustomerModel(req.body);
    model.save().then(doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send("The query returns null");
        }
        res.status(201).send(doc)
    }).catch(err => {
        return res.status(500).json(err)
    })
})

// Read
router.get('/customer',  (req, res) => {
    if(!req.query.email){
        return res.status(400).send('Required query missing : Email')
    }

    CustomerModel.findOne({ 
        email: req.query.email
    }).then(doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send("The query returns null");
        }
        res.status(201).send(doc)
    }).catch(err => {
        return res.status(500).json(err)
    })
})

// Update
router.put('/customer',  (req, res) => {
    if(!req.query.email || !req.body){
        return res.status(400).send('Required query missing : Email')
    }

    CustomerModel.findOneAndUpdate({ 
        email: req.query.email
    }, req.body, {
        new : true
    }).then(doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send("The query returns null");
        }
        res.status(201).send(doc)
    }).catch(err => {
        return res.status(500).json(err)
    })
})

// Delete
router.delete('/customer',  (req, res) => {
    if(!req.query.email){
        return res.status(400).send('Required query missing : Email')
    }

    CustomerModel.findOneAndDelete({ 
        email: req.query.email
    }).then(doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send("The query returns null");
        }
        res.status(201).send(doc)
    }).catch(err => {
        return res.status(500).json(err)
    })
})

module.exports = router;