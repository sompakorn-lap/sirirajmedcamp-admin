const mongoose = require('mongoose')

const WritingAnswerSchema = mongoose.Schema({
  userId: String,
  editable: Boolean,
  recentlyIndex: Number,
  answers: [{
    questionId: String,
    text: String,
    score: Number
  }],
  score: Number
})

const MedicalExamAnswer = mongoose.model('medical-exam-answer', WritingAnswerSchema)
const CreativeExamAnswer = mongoose.model('creative-exam-answer', WritingAnswerSchema)

module.exports = {
  MedicalExamAnswer,
  CreativeExamAnswer
}