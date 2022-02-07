const express = require('express');
const Schema = mongoose.Schema;
const ClimateModel = require('../models/user.js');
const ActionRouter = express.Router();

//CRUD
ActionRouter
    .get('/', (req,res, next) => {
        ClimateModel.find((err, items) =>{
            if(err){
                res.status(500)
                return(err)
            }
            return res.status(200).send(items)
        })
    
    })

    //get one
.get("/:itemId", (req,res,next) => {
    ClimateModel.find(
        { _id: req.params.itemId},
        (err,foundItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundItem)
        }
    )
})

    .post("/", (req, res, next) => {
        const newItem = new climate(req.body)
        newItem.save((err, savedItem) => {

          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(savedItem)
        })
      })


    .put("/:itemId", (req, res, next) => {
        ClimateModel.findOneAndUpdate(
          { _id: req.params.itemId},
          req.body,
          {new: true},
          (err, updatedItem) => {
            if(err){
              res.status(500)
              return next(err)
            }
            return res.status(201).send(updatedItem)
          }
        )  
      })


    .delete("/:itemId", (req, res, next) => {
        ClimateModel.findOneAndDelete(
          {_id: req.params.itemId}, 
          (err, deletedItem) => {
            if(err){
              res.status(500)
              return next(err)
            }
            return res.status(200).send(`Successfully deleted item ${deletedItem.item} from the database`)
          }
        )
      })

    module.exports = ActionRouter;