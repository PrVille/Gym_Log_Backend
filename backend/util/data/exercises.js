const exercises = [
  {
    name: "Conventional Deadlift",
    instructions:
      "Set up close to the barbell with your feet set wide, and your feet pointing outwards. Set your grip on the barbell, gripping inside of your knees with straight arms. Set your hips to a comfortable height and push your knees outwards to align with your foot angle. Brace your back by depressing and retracting your scapula, and brace your core after breathing in. Push with your legs while maintaining your torso angle to lift the bar, staying braced and finish the lift by pushing your hips through and flexing the glutes to stand up straight.",
    primaryMuscles: ["gluteals", "quadriceps", "lats", "traps", "hamstrings"],
    secondaryMuscles: ["abs, forearms"],
    favourite: true
  },
  {
    name: "Sumo Deadlift",
    instructions:
      "Set up with your shins approximately an inch away from the barbell, at a width slightly narrower than shoulder width apart. Your feet should be pointing straight forwards or very slightly outwards. Grip the bar outside of your knees with straight arms. Set your hips to a comfortable height and push your knees outwards. Brace your back by depressing and retracting your scapula, and brace your core after breathing in. Push with your legs while maintaining your torso angle to lift the bar, staying braced and finish the lift by pushing your hips through and flexing the glutes to stand up straight.",
    primaryMuscles: ["gluteals", "quadriceps", "lats", "traps"],
    secondaryMuscles: ["abs", "hamstrings, forearms"],
  },
  {
    name: "Bench Press",
    instructions:
      "Set your feet at a stable position and lie on a flat bench with the racked bar above your face. Place your hands slightly wider than shoulder width on the bar, ensuring the grip is even on both sides and the width is comfortable. Leverage yourself against the bar to retract and depress your scapula, and push with your legs to reinforce your lower back arch. Unrack the bar and bring it forward over your chest with straight arms. Lower the bar in a controlled manner until it touches your lower chest before pressing it back to its starting position, all while maintaining the same scapula position and lower back arch.",
    primaryMuscles: ["pectoralis", "triceps"],
    secondaryMuscles: ["deltoids"],
    favourite: true
  },
  {
    name: "Squat",
    instructions:
      "Set up in front of a racked barbell at shoulder height. Grip the bar evenly on the barbell outside of shoulder width. Step underneath the bar and place it on top of your trapezius across the top of your shoulders, ensuring that it is stable. Stand up with the bar to unrack it and step backwards to clear the rack. Set your feet at a comfortable width and angle, usually at shoulder width with toes pointed out slightly. Take a deep breath and brace your core. Squat down by bending at the hips and knees to a comfortable depth, allowing your torso to lean forwards slighty. Aim for your thighs to be parallel or beneath parallel to the floor. Stand back up with the weight to the starting position by extending the hips and knees until your torso angle and legs are straight.",
    primaryMuscles: ["quadriceps", "gluteals"],
    secondaryMuscles: ["hamstrings", "abs"],
    favourite: true
  },
  {
    name: "Bent Over Barbell Row",
    instructions:
      "Set your feet and shoulder width apart, and grip the barbell at a comfortable width outside of your knees. Brace your core and lift the bar slightly off the ground with straight arms and a straight back. Row the barbell towards your body by driving your elbows up, maintaining the same back angle, making contact with your stomach then returning the bar to its original position slightly above the ground.",
    primaryMuscles: ["lats", "traps"],
    secondaryMuscles: ["biceps", "deltoids, forearms"],
  },
  {
    name: "Bulgarian Split Squat",
    instructions:
      "Set up in a split stance position while grasping dumbbells by your side with a neutral grip. Position the back foot on a bench or circular pad to increase the range of motion. Descend by flexing the front knee and continue until the back knee touches the ground directly beneath the hip. Drive through the front foot and extend the knee as you return to the starting position. Repeat for the desired number of repetitions.",
    primaryMuscles: ["quadriceps"],
    secondaryMuscles: ["abs", "calves", "hamstrings", "deltoids", "traps"],
  },
  {
    name: "Cable Pull-through",
    instructions:
      "Begin with a rope handle attached to the low pulley of a cable station. Grab the ends of the rope in each hand with your back facing the weight stack so that the rope is between your legs. With the rope between your legs, bend over at your hips and knees and lower your torso until its at a 45-degree angle. Next, begin exercise by thrusting your hips forward and raising torso up to standing position. Squeeze glutes as you push hips forward. Repeat.",
    primaryMuscles: ["gluteals"],
    secondaryMuscles: ["quadriceps", "hamstrings", "calves"],
  },
  {
    name: "Deficit Deadlift",
    instructions:
      "2.5-10 cm deficit. Set up close to the barbell with your feet set wide, and your feet pointing outwards. Set your grip on the barbell, gripping inside of your knees with straight arms. Set your hips to a comfortable height and push your knees outwards to align with your foot angle. Brace your back by depressing and retracting your scapula, and brace your core after breathing in. Push with your legs while maintaining your torso angle to lift the bar, staying braced and finish the lift by pushing your hips through and flexing the glutes to stand up straight.",
    primaryMuscles: ["gluteals", "quadriceps", "lats", "traps", "hamstrings"],
    secondaryMuscles: ["abs, forearms"],
  },
  {
    name: "Romanian Deadlift",
    instructions:
      "Start with the barbell in front of your feet and bend over and grab the bar about shoulder width apart. Bend slightly at the knees, lift the weight upward to your waist. As you lift the weight to your waist thrust your hips forward. Lower the weight down to mid-shin level and repeat exercise.",
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: ["gluteals"],
  },
  {
    name: "Dumbbell Walking Lunge",
    instructions:
      "Grab a pair of dumbbells and hold at your sides. Step forward with your right foot. Drop down into the lunge so that your back knee is almost touching the ground and your leading knee forms a right angle. Come up out of the lunge and step back. Repeat with the left leg.",
    primaryMuscles: ["quadriceps"],
    secondaryMuscles: ["gluteals", "hamstrings", "calves"],
  },
  {
    name: "Leg Extension",
    instructions:
      "Sit on a leg extension machine. Position your legs under the pad and grasp the side bars with your hands. This is the starting position. Extend your legs to the maximum, exhaling as you do so. Pause a second in this contracted position. Lower the weight back to the original position as you inhale. Make sure your legs don't go past the 90-degree angle point.",
    primaryMuscles: ["quadriceps"],
    secondaryMuscles: [],
  },
  {
    name: "Front Squat",
    instructions:
      "Perform this exercise inside a squat rack for safety reasons. Set the bar on a rack corresponds to your height. Bring your arms up under the bar; keep your arms up under the bar and your upper arm slightly above parallel to the floor. Rest the bar on top of your deltoids and cross your arms. Grasp the bar for control. Lift the bar off the rack by pushing with your legs and straightening your torso. Step back from the rack and place your legs shoulder width apart with your toes slightly pointed out. Keep your back straight. This is the starting position for the exercise. Lower the bar slowly until the angle between your upper legs and calves is slightly less than 90 degrees. Your upper legs should be parallel with the floor. Inhale as you do so. Raise the bar by pushing the middle of your foot against the floor. Straighten your legs and go back to the starting position. Exhale as you do so.",
    primaryMuscles: ["quadriceps"],
    secondaryMuscles: ["gluteals", "hamstrings", "calves"],
  },
  {
    name: "Hip Thrust",
    instructions:
      "Start seated with your back supported by the side of a flat bench and your knees bent in front of you. Your feet should be planted in a good position to lift the barbell. Place the barbell on your hips and support with your hands. In one motion, thrust the barbell upwards with your hips. Return backside to floor and repeat exercise as desired.",
    primaryMuscles: ["gluteals"],
    secondaryMuscles: ["abs", "quadriceps", "hamstrings"],
  },
  {
    name: "Leg Press",
    instructions:
      "Sit down on a leg press machine and place your legs on the platform in front of you. Your feet should be positioned approximately a foot to one and half feet apart. Lower the safety bars holding the platform in place. Press the platform all the way up until your legs are fully extended, without locking your knees. This is the starting position. As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle. Push with the heels of your feet and use your quadriceps to go back to the starting position. Exhale as you do so. Repeat for the number of reps in your set. Make sure that the safety pins are locked properly once you have finished.",
    primaryMuscles: ["quadriceps"],
    secondaryMuscles: ["abs", "gluteals", "hamstrings"],
  },
  {
    name: "Lying Leg Curl",
    instructions:
      "The lying leg curl is a great exercise to isolate the hamstrings. Set up for the leg curl by selecting the weight you want to use on the stack and adjusting the padding to suit your leg length. ay face down on the machine. The padding should be positioned just above the back of your ankles. If it's higher than that, adjust the length. Tense up the hamstrings by taking the weight slightly off the stack. This is the starting position for the exercise. Squeeze the hamstrings and curl the weight up as far as possible. Squeeze the hamstring hard, and then slowly lower the weight back to the starting position.",
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: [],
  },
  {
    name: "Hip Abduction",
    instructions:
      "Setup in an upright position with your back against the pad and your spine neutral. Exhale and push the legs apart as you open the pads. Once your hips are fully externally rotated, slowly return to the starting position.",
    primaryMuscles: ["gluteals"],
    secondaryMuscles: ["hamstrings", "abs"],
  },
  {
    name: "Seated Leg Curl",
    instructions:
      "Sit upright on a leg press machine that is adjusted to your height. Your back should be against the back pad and your feet should be on the foot rests with your thighs under the leg pads. Grasp the handle bars and raise your legs so that they are fully extended in front of you and parallel to the floor for your starting position. Exhale and lower your legs, bending at the knees, until your legs form a 90 degree angle. Pause for a moment and then inhale as you raise your legs back to the starting position.",
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: [],
  },
  {
    name: "Standing Calf Raise",
    instructions:
      "Grab a barbell and place across upper back and hold with an overhand grip. Stand tall with back straight. Next, place the balls of your feet on two large weight plates or place both feet on an elevated step up platform. This is the starting position. Begin exercise by simply allowing your heel to rest on the ground or as close to the ground as possible. Then raise up on your toes as high as possible, pause, then lower back down as far as possible. This completes one rep.",
    primaryMuscles: ["calves"],
    secondaryMuscles: [],
  },
  {
    name: "Seated Calf Raise",
    instructions:
      "Sit on a calf raise machine and place your toes on the foot platform. You heels should hang off the back of the platform. Adjust the thigh padding so your lower thighs rest just under the padding. Grasp the handle bars and then raise up on your toes to release the safety for your starting position. Inhale as you slowly lower your heels until they are below your toes and your calves are fully stretched. Exhale as you raise your heels as high as you can until you are on your tippy toes. Hold for a moment and then repeat for a complete set.",
    primaryMuscles: ["calves"],
    secondaryMuscles: [],
  },
  {
    name: "Stiff Leg Deadlift",
    instructions:
      "Stand in front of a barbell placed on the floor and grasp the barbell with an overhand grip. Keep head up, lower back tucked in, and do not bend knees. Stand straight up using power from legs, back, and arms. Squeeze shoulder blades together at the top of the movement.",
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: ["abs", "gluteals", "forearms"],
  },
  {
    name: "Cable Crunch",
    instructions:
      "Attach the rope attachment to a high pulley cable and set the appropriate weight on the stack. Stand directly in front of the cable machine, facing away from it. Grasp the rope from behind your head with your palms facing inward and drop to your knees. Your buttocks should be resting on top of your feet. Keeping your elbows bent and hands at either head height or shoulder height, crunch down as far as possible. Pause, then slowly lower yourself back to the starting position.",
    primaryMuscles: ["abs"],
    secondaryMuscles: [],
  },
  {
    name: "Arnold Press",
    instructions:
      "Set up for the exercise by grabbing a pair of dumbbells and standing straight up with your feet around shoulder width apart. Raise the dumbbells to shoulder height on each side, and twist so that your palms are facing your body. The dumbbells should now be positioned in front of your shoulders. Your back should be straight and there should be a slight bend in your knees. This is the starting position for the exercise. Keeping your eyes facing forwards, slowly raise the dumbbells above your head while turning your wrists so that your palms are now facing forward (away from your body). Keep raising the weight until your arms are almost fully extended. Do not pause at the top of the movement, and begin lowering the dumbbells back down to the starting position - twisting at the wrist until your palms are facing your body once again.",
    primaryMuscles: ["deltoids"],
    secondaryMuscles: [],
  },
  {
    name: "Close-grip Bench Press",
    instructions: "Lie flat on a bench and set your hands at shoulder width. Set your shoulder blades by pinching them together and driving them into the bench. Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back. Let the weight settle and ensure your upper back remains tight after lift off. Inhale and allow the bar to descend slowly by unlocking the elbows. Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest. Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.",
    primaryMuscles: ["triceps"],
    secondaryMuscles: ["pectoralis", "deltoids"],
  },
  {
    name: "Incline Bench Press",
    instructions: "Lie flat on an incline bench and set your hands just outside of shoulder width. Set your shoulder blades by pinching them together and driving them into the bench. Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back. Let the weight settle and ensure your upper back remains tight after lift off. Inhale and allow the bar to descend slowly by unlocking the elbows. Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest. Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.",
    primaryMuscles: ["pectoralis"],
    secondaryMuscles: ["deltoids", "triceps"],
  },
  {
    name: "Overhead Press",
    instructions: "Adjust the barbell to just below shoulder height then load the desired weight onto the bar. Assume a shoulder width stance and place your hands at (or just outside of) shoulder width with a pronated grip on the bar. Step underneath the bar and unrack it while keeping the spine in a neutral position. Take two steps back, inhale, brace, tuck the chin, then press the bar to lockout overhead. Exhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to your chest.",
    primaryMuscles: ["deltoids"],
    secondaryMuscles: ["abs", "traps", "triceps"],
  },
  {
    name: "Cable Close-grip Row",
    instructions: "Set the appropriate weight on the weight stack and attach a close-grip bar to the seated row machine. Grasp the bar with a neutral grip (palms facing in). Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position. Keeping your body in position, pull the handle into your stomach. Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.",
    primaryMuscles: ["lats"],
    secondaryMuscles: ["biceps", "deltoids"],
  },
  {
    name: "Pec Deck",
    instructions:
      "Sit on the machine seat with your back flat against the back pad. Grip the machine handles far out to your sides with a pronated grip or with your palms facing inwards, stretching the chest. Keep your elbows slightly bent and point them backwards. Bring the machine handles together, keeping your elbow angle the same until your hands or the handles touch in the centre. Return the machine handles to the original starting position out towards your sides.",
    primaryMuscles: ["pectoralis"],
    secondaryMuscles: ["deltoids"],
  },
  {
    name: "Ez Bar Curl",
    instructions: "The standing EZ bar curl is a variation of the barbell curl, but using an EZ bar. Grasp an EZ bar at around shoulder width apart using a underhand grip (palms facing up). Stand straight up, feet together (you may be more comfortable taking one foot back for stability), back straight, and with your arms fully extended. The bar should not be touching your body. Keeping your eyes facing forwards, elbows tucked in at your sides, and your body completely still, slowly curl the bar up. Squeeze your biceps hard at the top of the movement, and then slowly lower it back to the starting position.",
    primaryMuscles: ["biceps"],
    secondaryMuscles: [],
  },
  {
    name: "Skull Crusher",
    instructions: "Sit on the end of a flat bench with a barbell on your thighs. Grip the barbell with an overhand grip (palms facing down) with your hands about shoulder-width apart. Bring the bar up to your chest and lay down on your back. Extend your arms straight up above your chest. Keeping your elbows fixed in place and not pointing out, slowly lower the bar until it is about an inch from your forehead (hence the name skullcrusher!). Pause, and then slowly extend your arms back to the starting position. Do not lock your elbows out, and then repeat for desired reps.",
    primaryMuscles: ["triceps"],
    secondaryMuscles: [],
  },
  {
    name: "Hammer Curl",
    instructions: "The hammer curl is a great exercise for the biceps and forearms. Set up by grasping a set of dumbbells and standing straight up with the dumbbells by your sides. You should be using a neutral grip, meaning your palms are facing your body. Bend your arms slightly to take tension into the biceps. Keeping your body fixed and elbows in at your sides, slowly curl the dumbbells up as far as possible. Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting position.",
    primaryMuscles: ["biceps"],
    secondaryMuscles: ["forearms"],
  },
  {
    name: "Lat Pulldown",
    instructions: "Attach a wide grip handle to the lat pulldown machine and assume a seated position. Grasp the handle with a pronated grip (double overhand) and initiate the movement by depressing the shoulder blade and then flexing the elbow while extending the shoulder. Pull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control.",
    primaryMuscles: ["lats"],
    secondaryMuscles: ["biceps", "deltoids"],
  },
  {
    name: "Machine Chest Press",
    instructions: "Sit down on the chest press machine. Select the weight you want to work with. Step on the lever to bring the handles forward. Grab the handles and fully extend your arms. Grasp the handles in a palms-down grip. Lift your elbows so that your upper arms are parallel to the floor to the side of your torso. Push the handles forward and extend your arms; this is the starting position. Move the handles back towards you as you inhale. Push the handles away from you as you flex your pecs. Hold the contraction for a second and move back to the starting position. Repeat for the number of reps in your set. When you have finished, step on the lever again and move the handles back to their original position.",
    primaryMuscles: ["pectoralis"],
    secondaryMuscles: ["deltoids", "triceps"],
  },
  {
    name: "Chest-supported Row",
    instructions: "Place your feet in the stirrups and your chest on the pad. Reach down and grab the handles with both hands. Let your arms hang with the weight. Pull the weight up to your chest and try to pinch your shoulder blades together at the top. Lower the weight back down. This completes one repetition.",
    primaryMuscles: ["lats"],
    secondaryMuscles: ["deltoids", "forearms", "traps", "biceps"],
  },
  {
    name: "Machine Shoulder Press",
    instructions: "Adjust the seat to the right height and then sit down. Grab the handles and then push them up straight in the air. And then bring your hands back down to about eye level, don't need to go all the way back down.",
    primaryMuscles: ["pectoralis"],
    secondaryMuscles: ["deltoids", "triceps"],
  },
  {
    name: "Dumbbell Curl",
    instructions: "Assume the starting position for the standing dumbbell curl by grasping a pair of dumbbells and standing straight up, feet together and dumbbells by your side. The dumbbells should not be touching your body. Your palms should facing upwards. Take up the slack by bending the elbows slightly. Tension should be on the biceps. Slowly curl the dumbbells up as far as possible. Squeeze the biceps hard, and then slowly lower the dumbbells back down to the starting position.",
    primaryMuscles: ["biceps"],
    secondaryMuscles: [],
  },
  {
    name: "Tricep Pushdown",
    instructions: "Attach a straight bar to a cable stack as high as possible and assume a standing position. Grasp the straight bar with a pronated grip (palms facing down) and lean forward slightly by hinging at the hips. Initiate the movement by extending the elbows and flexing the triceps. Pull the handle downward until the elbows are almost locked out and then slowly lower under control back to the starting position.",
    primaryMuscles: ["triceps"],
    secondaryMuscles: [],
  },
  {
    name: "Pull Up",
    instructions: "Using a pronated grip, grasp the pull bar with a slightly wider than shoulder width grip. Take a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.",
    primaryMuscles: ["lats"],
    secondaryMuscles: ["abs", "biceps", "deltoids"],
  },
  {
    name: "Barbell Curl",
    instructions: "The standing barbell curl is the cornerstone of many bicep building routines. Grasp a barbell or Olympic bar at around shoulder width apart using an underhand grip (palms facing up). Stand straight up, feet together (you may be more comfortable putting one foot back for stability), back straight, and with your arms fully extended. The bar should not be touching your body. Keeping your eyes facing forwards, elbows tucked in at your sides, and your body completely still, slowly curl the bar up. Squeeze your biceps hard at the top of the movement, and then slowly lower it back to the starting position.",
    primaryMuscles: ["biceps"],
    secondaryMuscles: [],
  },
]

module.exports = exercises
