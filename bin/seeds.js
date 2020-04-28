require('dotenv').config();
const mongoose = require('mongoose');
const Exercise = require('../models/Exercise');
const Program = require("../models/Program")

const exercises = [{
		name: 'Knee Push-ups',
		description: 'Come to the ground on your knees. Tighten your core and maintain a flat back. Position your hands on the ground in front of you, directly below your shoulders. Cross your feet in the back. Lower your chest towards the ground. Bend your elbows at a 60-degree angle until your chest is just above the ground. You should feel a stretch across your chest. Hold for a count of one. Without locking your elbows, push yourself back to the starting position by straightening your arms.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Pushups',
		description: 'Get into position by placing your hands flat on the floor, directly below your shoulders. Extend 	your legs out behind you, with only your toes and balls of your feet touching the floor. Hold your body up and keep your back straight by tightening your abdominal muscles. Lower your chest towards the ground by bending your elbows until your chest is just above the ground or you feel a stretching of your chest and shoulders. Hold for a count of one. Press upwards from your chest and shoulders, straightening your arms as you return to the starting position. Hold for a count of one. Repeat.',
		level: 'Intermediate',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Spiderman Push-ups',
		description: 'Go into a standard push-up position, supporting your weight on your toes and hands. Your back is flat and your core is tight. Your hands should be directly beneath your shoulders. Lower yourself into a push-up. Focus the tension in the chest. As you descend, bring your right leg up and to the side. Try to touch the knee to the elbow. As you push yourself back up, return the leg to its original position. Repeat with the other side.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Chair Squats',
		description: 'Place a chair behind you. Stand up straight with a tight core and flat back. Fold your arms in front. Your feet should be shoulder-width and toes and pointing forward. Slowly descend by bending your knees and driving your hips back. Keep your chest and head up. Touch the chair with your butt then slowly rise back to the starting position.',
		level: 'Beginner',
		bodyPart: 'Full body',
		exerciseUrl: String
	},

	{
		name: 'Air Squats',
		description: 'Place your feet at shoulder width apart while keeping your chest up and your abdominals braced. Begin the movement by swinging your arms up towards your shoulders. At the same time, bend at the knees and drive your hips back like you’re sitting in a chair. Once your upper thighs are parallel with the ground, pause, then drive your hips forward to return to the starting position.',
		level: 'Intermediate',
		bodyPart: 'Full body',
		exerciseUrl: String
	},

	{
		name: 'Jump Squats',
		description: 'Stand with your feet hip width apart. Your toes should be pointing straight ahead or only slightly outward. Cross your arms in front of your body, place your hands behind your head or at the sides of your head. Keep your weight on your heels and bend your knees while lowering your hips towards the ground as if you are sitting down on a chair. Keep your back straight at all times. Continue until you feel a slight stretch in your quadriceps. Do not let your knees extend out beyond the level of your toes. Pause for a count of one. In an explosive movement, drive down through your heels pushing yourself up of the floor with your quads. At the same time extend our arms out above you. Land with your knees slightly bent to absorb the impact. Repeat',
		level: 'Advanced',
		bodyPart: 'Full body',
		exerciseUrl: String
	},

	{
		name: 'Bodyweight Lunges',
		description: 'Stand tall with a tight core and make sure your feet are shoulder-width apart. Bring your hands together for balance. Step directly to the left, leaving your right foot in place. Bend the left knee and pause once the upper left thigh is parallel to the ground. Your right leg should be completely straight. Contract the hamstring muscle then push off the ground to return to the starting position. Repeat on the right side. Alternate this movement.',
		level: 'Beginner',
		bodyPart: 'Lower body',
		exerciseUrl: String
	},

	{
		name: 'Water Bottle Lunges',
		description: 'Holding a water bottle in each hand, stand with your feet shoulder width apart. Keep your shoulders back. And your back straight. Take a long stride forward with your right leg. Your right foot should be in a position, that when you bend your right knee, your upper and lower leg form a 90-degree angle. Slowly bend both your knees, to lower your hips until your left knee is just above the floor. Hold for a count of one. Return to the start position by slowly straightening your legs and raising your body back to a standing position. Complete all the repetitions for one set full set, then switch legs, or you can alternate between legs for each rep.',
		level: 'Intermediate',
		bodyPart: 'Lower body',
		exerciseUrl: String
	},

	{
		name: 'Explosive Jumping Alternating Lunges',
		description: 'Stand straight with a tight core and your chest up. You will be in a classic lunge position. Step forward and be sure to keep your front knee bent. At the same time, extend the back leg. Your back knee should be slightly bent. Place your hands on your hips. If you want a challenge, place them straight above the head. Using all of your force, jump into the air. Simultaneously, switch your leg stance in midair. Land in the lunge position and repeat.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Knee Plank',
		description: 'Lie face down on the ground with your legs together and your arms at your sides. Position your hands beneath your shoulders. Tighten your core and elevate your upper body off the ground, stabilizing yourself with your forearms. Your feet, shins, and knees will remain on the ground. Do not allow your hips to drop down. Hold the tension in your core for the prescribed amount of time. Slowly release back to the starting position.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Plank',
		description: 'Get into a face down position on the floor supporting your upper body on your forearms. Your elbows should be bent at 90 degrees. Extend your legs straight out behind you, supporting them on your toes and balls of your feet. Keep your body in a straight line by tightening your abdominal and oblique muscles. Hold for as long as possible.',
		level: 'Intermediate',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Plank Knee to Elbow',
		description: 'Lay face down on the ground with extended legs. Point your toes while you place your hands beneath your shoulders. Push yourself up into the plank position. Maintaining a tight core and flat back, bring your left knee to your right elbow. Pause and slowly return each to the starting point. Repeat with the other side and keep alternating.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Standing Arm Circles',
		description: 'Standing with a flat back and tight core, raise your arms to the sides. While focusing on the shoulders, slowly rotate your arms in a circular motion. Start with small circles. Gradually increase the size of the circles. After completing one set of a pre-determined number (such as 10 repetitions), reverse the direction, going counter-clockwise.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Water Bottle Overhead Shoulder Presses',
		description: 'Holding a water bottle in each hand, stand straight, with your feet shoulder width apart. Raise the water bottles to head height by rotating your arms forward and up. Your triceps should be parallel to the floor and your elbows bent at 90 degrees. This is the start position. Keeping your back straight and using only your arms, extend through your shoulders and elbows to drive the water bottles straight up, exhaling as you do so. As your arms reach the fully extended position, bring them in towards each other until the water bottles touch lightly together. Hold for a count of one, while squeezing your shoulder muscles. In a controlled movement, return to the starting position, inhaling as you do so.Repeat.',
		level: 'Intermediate',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Single-Arm Front Water Bottle Raises',
		description: 'Stand straight holding a water bottle in each hand with an overhand grip. Hold the water bottles in front of your thighs with your palms of the facing your thighs. Keep your arms fully extended. This is the start position. Raise the left water bottle out and upwards, while keeping a slight bend in your elbow. Your palms must always face down for this exercise. Continue raising the water bottle until your arm is a little above parallel to the floor. Exhale as you are raising the water bottle. Pause for a count of one. Inhale and slowly lower the water bottle to the start position. As you lower the left water bottle, begin to lift the right water bottle, duplicating the movement. When both water bottles have been raised and lowered in a cycle, that is one repetition. Repeat.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Chair / Bench Tricep Dips',
		description: 'Sit on a chair with your hands either next to your hips or slightly under the hips. Lift up onto your hands and bring your hips forward. Bend your elbows and lower your hips down, keeping shoulders down and hips close to the chair. Push back up but don’t lock your elbows and repeat.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Standing Water Bottle Bicep Curls',
		description: 'Holding a water bottle in each hand, stand with your feet shoulder width apart. Let your arms hang by your side with your palms facing in to the side of your body. Keep your elbows close to your sides. Curl the water bottles up towards your shoulders. Do not swing your hips to get the weight moving. Continue raising the water bottles until they are level with your shoulders with your palms facing in. Your forearm should be in a vertical position. Squeeze or flex your bicep and hold for a count of one. Slowly lower the water bottles to the starting position.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Bent Over Water Bottle Flyes',
		description: 'Begin by holding a pair of water bottles and standing with a braced core. Bend at the knees slightly and lean forward from the hips. Maintain a flat back throughout. Keeping your elbows slightly bent throughout the movement, lift the water bottles up and out to the side. Be sure to focus the contraction in the back of the shoulders. Pause at the top of the movement then slowly bring the water bottles to the starting position.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Supermans / Extended Arms & Legs Lifts',
		description: 'Lie face down on a mat, with your arms fully extended above your head and your legs fully extended behind you. Lift your chest, arms and legs off the floor by arching your back. Only the tops of your quads and your lower abdomen should be in contact with the floor. Hold for a count of 2 while squeezing your abdominals and obliques. Return to the starting position for a count of one, then repeat..',
		level: 'Intermediate',
		bodyPart: 'Upper body',
		exerciseUrl: String
	},

	{
		name: 'Alternating Reach & Kickbacks',
		description: 'Position yourself on all fours with knees underneath the hips and wrists under the shoulders. Engage your abs and keep your spine neutral, pulling the shoulder blades towards the hips. Lengthen the left leg until it is straight out and in line with your hips while simultaneously raising and straightening your right arm until it is parallel to the floor. Keep your head and shoulders aligned at all times. Gently lower your arm and leg back to the starting position and alternate with the other arm and leg.',
		level: 'Advanced',
		bodyPart: 'Full body',
		exerciseUrl: String
	}
];

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true
	})
	.then((self) => {
		console.log(`Connected to ${self.connection.name}`);

		Exercise
			.create(exercises)
			.then((exercises) => {
				exercises.forEach((exercise) => {
					console.log(exercise.name);
				});
				Exercise.find({
					level: "Beginner"
				}).then(dbRes => {
					console.log(dbRes)
					ids = []
					dbRes.forEach((dbRe) => {
						ids.push(dbRe._id)
					})
					if (dbRes != []) {
						Program.create({
							name: dbRes[0].level + " Program",
							description: dbRes[0].level + " Program",
							exercisesList: ids
						})
					}
				}).catch(dbErr => console.log(dbErr))
				Exercise.find({
					level: "Intermediate"
				}).then(dbRes => {
					console.log(dbRes)
					ids = []
					dbRes.forEach((dbRe) => {
						ids.push(dbRe._id)
					})
					if (dbRes != []) {
						Program.create({
							name: dbRes[0].level + " Program",
							description: dbRes[0].level + " Program",
							exercisesList: ids
						})
					}
				}).catch(dbErr => console.log(dbErr))
				Exercise.find({
					level: "Advanced"
				}).then(dbRes => {
					console.log(dbRes)
					ids = []
					dbRes.forEach((dbRe) => {
						ids.push(dbRe._id)
					})
					if (dbRes != []) {
						Program.create({
							name: dbRes[0].level + " Program",
							description: dbRes[0].level + " Program",
							exercisesList: ids
						})
					}
				}).catch(dbErr => console.log(dbErr))

			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(`Error occured while connecting to the Database ${err}`);
	});