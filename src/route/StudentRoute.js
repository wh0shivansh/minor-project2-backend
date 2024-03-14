const express = require("express");
const router = express.Router();
const passport = require('passport');
const { addStudent, getStudents } = require("../controller/StudentController");

router.post('/create-student',addStudent);
router.get('/get-student/:id',getStudents);

module.exports = router; 