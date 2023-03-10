const router = require("express").Router()
const Exercise = require("../models/exercise")

router.get("/", async (req, res) => {
  const user = req.user  
  const exercises = await Exercise.find({ user: user._id }).populate("sets")
  res.json(exercises)
})

router.post("/", async (req, res) => {
  const user = req.user
  const newExercise = await Exercise.create({ ...req.body, user: user._id })
  const newPopulatedExercise = await Exercise.findById(
    newExercise._id
  ).populate("sets")
  res.json(newPopulatedExercise)
})

router.put("/:id", async (req, res) => {
  const exercise = req.body
  const updatedExercise = await Exercise.findByIdAndUpdate(
    req.params.id,
    exercise,
    { new: true, runValidators: true, context: "query" }
  ).populate("sets")
  res.json(updatedExercise)
})

router.delete("/:id", async (req, res) => {
  const exerciseToDelete = await Exercise.findById(req.params.id)
  await exerciseToDelete.remove()
  res.json(exerciseToDelete)
})

module.exports = router
