const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

issueRouter
  .get("/", (req, res, next) => {
    Issue.find((err, issues) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      res.status(200).send(issues);
    })
  }) 

  .get("/:issueID", (req, res, next) => {
    Issue.find(
      {_id: req.params.issueID},
       (err, issue) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      if (issue.length === 0) {
        const err = new Error('Sorry, that post was not found');
        return next(err);
      }
      else if (issue.length !== 0) {
        res.status(200).send(issue);
      }
    })
  }) 

  .post("/", (req, res, next) => {
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      res.status(201).send(savedIssue);
    })
  })
  .put("/:issueID", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueID },
      req.body,
      { new: true },
      (err, updatedIssue) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        res.status(201).send(updatedIssue);
      }
    )
  }) 

  .delete("/:issueID", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueID },
      (err, deletedIssue) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`);
      }
    )
  })


module.exports = issueRouter;