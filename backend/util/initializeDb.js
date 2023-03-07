const Exercise = require("../models/exercise")
const PlannedSet = require("../models/plannedSet")
const PlannedWorkout = require("../models/plannedWorkout")
const Routine = require("../models/routine")

const exercises = require("./data/exercises")

const multiplySet = (set, amount) => {
  const res = []
  for (let i = 0; i < amount; i++) {
    res.push(set)
  }
  return res
}

const initializeDatabase = async (user) => {
  const userExercises = exercises.map((exercise) => ({
    ...exercise,
    user: user._id,
  }))

  await Exercise.insertMany(userExercises)

  const squat = await Exercise.findOne({ name: "Squat", user: user._id })
  const benchPress = await Exercise.findOne({
    name: "Bench Press",
    user: user._id,
  })
  const pullUp = await Exercise.findOne({ name: "Pull Up", user: user._id })
  const overheadPress = await Exercise.findOne({
    name: "Overhead Press",
    user: user._id,
  })
  const barbellCurl = await Exercise.findOne({
    name: "Barbell Curl",
    user: user._id,
  })
  const cableCrunch = await Exercise.findOne({
    name: "Cable Crunch",
    user: user._id,
  })

  const squatSetsForGoldenSix = await PlannedSet.insertMany(
    multiplySet(
      {
        type: "work",
        user: user._id,
        exercise: squat._id,
        plannedReps: 10,
      },
      4
    )
  )

  const benchPressSetsForGoldenSix = await PlannedSet.insertMany(
    multiplySet(
      {
        type: "work",
        user: user._id,
        exercise: benchPress._id,
        plannedReps: 10,
      },
      3
    )
  )

  const pullUpSetsForGoldenSix = await PlannedSet.insertMany(
    multiplySet(
      {
        type: "work",
        user: user._id,
        exercise: pullUp._id,
        plannedReps: 10,
      },
      3
    )
  )

  const overheadPressSetsForGoldenSix = await PlannedSet.insertMany(
    multiplySet(
      {
        type: "work",
        user: user._id,
        exercise: overheadPress._id,
        plannedReps: 10,
      },
      4
    )
  )

  const barbellCurlSetsForGoldenSix = await PlannedSet.insertMany(
    multiplySet(
      {
        type: "work",
        user: user._id,
        exercise: barbellCurl._id,
        plannedReps: 10,
      },
      3
    )
  )

  const cableCrunchSetsForGoldenSix = await PlannedSet.insertMany(
    multiplySet(
      {
        type: "work",
        user: user._id,
        exercise: cableCrunch._id,
        plannedReps: 10,
      },
      3
    )
  )

  const goldenSixWorkout = await PlannedWorkout.create({
    name: "Arnold's Golden Six Workout",
    user: user._id,
    notes: "Arnold Schwarzenegger's 'Golden Six' full body workout.",
    estimatedDuration: 60,
    plannedExercises: [
      {
        exercise: squat._id,
        sets: squatSetsForGoldenSix,
      },
      {
        exercise: benchPress._id,
        sets: benchPressSetsForGoldenSix,
      },
      {
        exercise: pullUp._id,
        sets: pullUpSetsForGoldenSix,
      },
      {
        exercise: overheadPress._id,
        sets: overheadPressSetsForGoldenSix,
      },
      {
        exercise: barbellCurl._id,
        sets: barbellCurlSetsForGoldenSix,
      },
      {
        exercise: cableCrunch._id,
        sets: cableCrunchSetsForGoldenSix,
      },
    ],
  })

  await Routine.create({
    name: "Arnold's Golden Six Routine",
    user: user._id,
    notes:
      "Arnold Schwarzenegger's workout routine known as 'Golden Six' is a 3 day beginner bodybuilding routine that can be run indefinitely.",
    weeks: [
      {
        week: 1,
        plannedWorkouts: [goldenSixWorkout, goldenSixWorkout, goldenSixWorkout],
      },
    ],
  })
}

module.exports = initializeDatabase
