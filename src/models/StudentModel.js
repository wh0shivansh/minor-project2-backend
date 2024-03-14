const mongoose = require("mongoose");

//create schema
const studentSchema = new mongoose.Schema(
    {
        eno:{
            type: String,
            required:true,
        },
        studentName: {
            type: String,
            required:true,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

//Compile schema into model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
