const asyncHandler = require('express-async-handler')
const { MedicalExamAnswer } = require('../models/WritingAnswer')

const getAnswer = asyncHandler(async (req, res) => {
  const { userId, questionId } = req.query
  if(!userId){
    const answers = await MedicalExamAnswer.find({ editable: false }).select('userId score').lean().exec()
    return res.status(200).json(answers) 
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

module.exports = {
  getAnswer,
  scoreAnswer
}