const express = require('express');

const router = express.Router();

const studentController = require('../controllers/studentController');

module.exports = (app) => {
    router.get('/api/students', (req, res) => {studentController.index(app, req, res)});
    router.get('/api/student/:studentID', (req, res) => {studentController.show(app, req, res)});
    router.post('/api/student', (req, res) => {studentController.create(app, req, res)});
    router.put('/api/student/:studentID', (req, res) => {studentController.update(app, req, res)});
    router.delete('/api/student/:studentID', (req, res) => {studentController.delete(app, req, res)});
    return router;
}