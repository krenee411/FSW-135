const express = require('express');
const inventory = require('../models/inventory');
const inventoryModel = require('../models/inventory');
const toryRouter = express.Router()


//CRUD
toryRouter
    .get('/', (req,res, next) => {
        inventoryModel.find((err, items) =>{
            if(err){
                res.status(500)
                return(err)
            }
            return res.status(200).send(items)
        })
    
    })

    //get one
.get("/:itemId", (req,res,next) => {
    inventoryModel.find(
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
        const newItem = new inventory(req.body)
        newItem.save((err, savedItem) => {

          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(savedItem)
        })
      })


    .put("/:itemId", (req, res, next) => {
        inventoryModel.findOneAndUpdate(
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
        inventoryModel.findOneAndDelete(
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

    module.exports = toryRouter;