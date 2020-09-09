const express = require("express");
const router = express.Router();

const pdata = require('../data/helpers/projectModel')


//post

router.post('/', (req, res) => {
    pdata.insert(req.body)
       .then(postData => {
          res.status(201).json(req.body)
       })
       .catch(error => {
          console.log(error);
          res.status(500).json({
             message: "There was an error while posting",
          });
       });
 });

 // get

 router.get('/:id', (req, res) => {
     pdata.get(req.params.id)
        .then(postData => {
            res.status(200).json(postData)
        })
        .catch(err => {
            res.status(404).json({message: "error item not found"})
        })
        
 })

 // Get Actions

router.get('/:id/actions', (req, res) => {
    pdata.getProjectActions(req.params.id)
       .then(postData => {
          res.status(200).json(postData);
       })
       .catch(err => {
             res.status(500).json({
             message: "The actions could not be obtained",
          });
       });
 });

 // Put

 router.put('/:id', (req, res) => {
    pdata.update(req.params.id, req.body)
       .then(postData => {
          res.status(200).json(req.body);
       })
       .catch(err => {
             res.status(500).json({ 
             message: "item could not be modified" 
          });
       });
 });

// Delete

router.delete('/:id', (req, res) => {
    pdata.remove(req.params.id)
       .then(postData => {
          res.status(201).json({
             message: "Item was  removed."
          })
       })
       .catch(err => {
          
          res.status(500).json({
             message: "Unable to remove"
          });
       });
 });

module.exports = router