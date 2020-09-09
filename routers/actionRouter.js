const express = require("express");
const router = express.Router();

const pdata = require('../data/helpers/projectModel')
const adata = require('../data/helpers/actionModel')


//post

router.post('/:id', (res, req) => {
    let body = req.body 
    body.id = req.params.id
    adata.insert(req.body)
        .then(postRes => {
            res.statusCode(201).json(req.body)
        })
        .catch(err => {
            res.statusCode(500).json({message: "There was an error with saving to the database"})
        })
})

//get

router.get('/:id', (res, req) => {
    adata.get(req.params.id)
        .then(postRes => {
            res.statusCode(200).json(postRes)
        })
        .catch(err => {
            res.statusCode(404).json({message: "The data you were looking for can not be found"})
        })
})

//put

router.put('/:id', (req, res) => {
    adata.update(req.params.id, req.body) 
        .then(postdata => {
            res.status(200).json(req.body)
        })
        .catch(err => {
            res.status(500).json({message: "The item could not be modified"})
        })
})

//delete

router.delete('/:id', (req, res) => {
   adata.remove(req.params.id)
    .then(postdata => {
        res.status(200).json({message: "message was deleted"})
    .catch(err => {
        res.status(500).json({message: "Error: unable to delete"})
    })
    }) 
})

module.exports = router