const Student = require("../models/StudentModel");

exports.getStudents = async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.find({
            eno:id
        });
        return res.status(200).json({
            student,
            message: "Student Fetched Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

exports.addStudent = async (req, res) => {
    try {
        const { studentName,eno } = req.body;
        Student.create({
            eno,
            studentName
        }).then((studentCreated) => {
            return res.status(200).json({
                studentCreated
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}