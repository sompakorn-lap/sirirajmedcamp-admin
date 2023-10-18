const asyncHandler = require('express-async-handler')
const { MedicalExamAnswer } = require('../models/WritingAnswer')
const { MedicalExamQuestion } = require('../models/WritingQuestion')

const getAnswer = asyncHandler(async (req, res) => {
  const { userId, questionId } = req.query
  if(!userId){
    const answers = await MedicalExamAnswer.find({ editable: false }).sort({ userId: 1 }).lean().exec()
    return res.status(200).json(answers.map((answer) => {
      const index = answer.answers.findIndex((item) => (item.questionId === questionId))
      return {
        userId: answer.userId,
        answer: answer.answers[index]
      }
    }))
  }

  const answer = await MedicalExamAnswer.findOne({ userId, editable: false }).lean().exec()
  if(!answer){
    return res.status(404).send('answer not found')
  }
  const index = answer.answers.findIndex((item) => (item.questionId === questionId))
  if(index === -1){
    return res.status(404).send('answer not found')
  }
  res.status(200).json(answer.answers[index])
})

const scoreAnswer = asyncHandler(async (req, res) => {
  const { userId, questionId } = req.query
  const { score } = req.body
  const answer = await MedicalExamAnswer.findOne({ userId, editable: false })
  if(!answer){
    return res.status(404).send('answer not found')
  }
  const index = answer.answers.findIndex((item) => (item.questionId === questionId))
  if(index === -1){
    return res.status(404).send('answer not found')
  }
  answer.answers[index].score = score
  answer.score = answer.answers.reduce((sum, item) => ( sum + item.score ), 0)
  await answer.save()
  res.status(200).send('update score successful')
})

const viewQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.params

  const question = await MedicalExamQuestion.findOne({ questionId }).lean().exec()
  if(!question){
    return res.status(404).send('Question not found')
  }
  res.status(200).json(question)
})

module.exports = {
  getAnswer,
  scoreAnswer,
  viewQuestion
}