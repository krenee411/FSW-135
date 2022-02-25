const express = require('express');
const authRouter = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

authRouter
    .get('/', (req, res, next) => {
        User.find((err, users) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(users);
        })
    }) 

    .delete('/:userID', (req, res, next) => {
        User.findOneAndDelete({_id: req.params.userID}, (err, deleted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send('Item successfully deleted')
        })
    }) 

    .get('/search/user', (req, res, next) => {
        User.findOne({_id: req.query._id}, (err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(user);
        })
    }) 

    .post('/signup', (req, res, next) => {
        User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (user) {
                res.status(403);
                return next(new Error('username already exists'));
            }
            const newUser = new User(req.body);
            newUser.save((err, savedUser) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
                return res.status(201).send({token, user: savedUser})
            })
        })
    }) 

    .post('/login', (req, res, next) => {
        User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (!user || req.body.password !== user.password) {
                res.status(403);
                return next(new Error('Invalid login information'));
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(200).send({token, user});
        })
    }) 

module.exports = authRouter;