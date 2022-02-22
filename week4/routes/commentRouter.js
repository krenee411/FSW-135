const express = require("express")
const comment = require("../models/comment")
const CommentModel = require('../models/comment')
const commentRouter = express.Router()

commentRouter
    .get("/", (req, res, next) => {
        CommentModel.find((err, comments) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(comments)
        })
    }) 

    .get("/:commentId",(req,res,next) => {
        CommentModel.find(
            { _id: req.params.commentId},
            (err,foundcomment) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(foundcomment)
            }
        )
    })

    .post("/", (req, res, next) => {
        const newComment = new comment(req.body)
        newComment.save((err, savedComment) => {

          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(savedComment)
        })
      })

      .put("/:commentID", (req,res,next) =>{
          CommentModel.findOneAndUpdate(
              {id: req.params.commentID},
              req.body,
              {new: true},
              (err, updatedcomment) => {
                  if(err){
                      res.status(500)
                      return next(err)
                  }
                  return res.status(201).send(updatedcomment)
              }
          )
      })

      .delete("/:commentID", (req, res, next) => {
        CommentModel.findOneAndDelete(
            {_id: req.params.commentID},
            (err, deletedcomment) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(`Successfully deleted item ${deletedcomment.comment} from the database`)
        })
    }) 

module.exports = commentRouter;