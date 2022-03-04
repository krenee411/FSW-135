const express = require("express")
const user = require("../models/user")
const UserModel = require('../models/user')
const userRouter = express.Router()

userRouter
    .get("/", (req, res, next) => {
        UserModel.find((err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(user)
        })
    }) 

    .get("/:userID",(req,res,next) => {
        UserModel.find(
            { _id: req.params.userID},
            (err,founduser) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(founduser)
            }
        )
    })

    .post("/", (req, res, next) => {
        const newUser = new user(req.body)
        newUser.save((err, saveduser) => {

          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(saveduser)
        })
      })

      .put("/:userID", (req,res,next) =>{
          UserModel.findOneAndUpdate(
              {id: req.params.userID},
              req.body,
              {new: true},
              (err, updateduser) => {
                  if(err){
                      res.status(500)
                      return next(err)
                  }
                  return res.status(201).send(updateduser)
              }
          )
      })

      .delete("/:userID", (req, res, next) => {
        UserModel.findOneAndDelete(
            {_id: req.params.userID},
            (err, deleteduser) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(`Successfully deleted item ${deleteduser} from the database`)
        })
    }) 

module.exports = userRouter;