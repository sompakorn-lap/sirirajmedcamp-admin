const mongoose = require('mongoose')

const WritingQuestionSchema = mongoose.Schema({
  questionId: String,
  questionSet: Number,
  text: String,
  image: String
})

const MedicalExamQuestion = mongoose.model('medical-exam-question', WritingQuestionSchema)
const CreativeExamQuestion = mongoose.model('creative-exam-question', WritingQuestionSchema)

module.exports = {
  MedicalExamQuestion,
  CreativeExamQuestion
}