require('dotenv').config();
const mongoose = require('mongoose');
const Exercise = require('../models/Exercise');
const Program = require('../models/Program');

const exercises = [{
		name: 'Knee Push-ups',
		description: 'Come to the ground on your knees. Tighten your core and maintain a flat back. Position your hands on the ground in front of you, directly below your shoulders. Cross your feet in the back. Lower your chest towards the ground. Bend your elbows at a 60-degree angle until your chest is just above the ground. You should feel a stretch across your chest. Hold for a count of one. Without locking your elbows, push yourself back to the starting position by straightening your arms.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/N_bPELOZ0T4'
	},

	{
		name: 'Pushups',
		description: 'Get into position by placing your hands flat on the floor, directly below your shoulders. Extend 	your legs out behind you, with only your toes and balls of your feet touching the floor. Hold your body up and keep your back straight by tightening your abdominal muscles. Lower your chest towards the ground by bending your elbows until your chest is just above the ground or you feel a stretching of your chest and shoulders. Hold for a count of one. Press upwards from your chest and shoulders, straightening your arms as you return to the starting position. Hold for a count of one. Repeat.',
		level: 'Intermediate',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/_w9IjJtFqDQ'
	},

	{
		name: 'Spiderman Push-ups',
		description: 'Go into a standard push-up position, supporting your weight on your toes and hands. Your back is flat and your core is tight. Your hands should be directly beneath your shoulders. Lower yourself into a push-up. Focus the tension in the chest. As you descend, bring your right leg up and to the side. Try to touch the knee to the elbow. As you push yourself back up, return the leg to its original position. Repeat with the other side.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/47lfnF4iRxk'
	},

	{
		name: 'Hand Help Squats',
		description: 'Stand up straight with a tight core and flat back. Place your arms in front of your kness. Your feet should be shoulder-width and toes and pointing forward. Slowly descend by bending your knees and driving your hips back. Keep your chest and head up. Once your upper thighs are parallel with the ground, pause, then drive your hips forward to return to the starting position.',
		level: 'Beginner',
		bodyPart: 'Full body',
		exerciseUrl: 'https://www.youtube.com/embed/98c-YrA0ROY'
	},

	{
		name: 'Squats',
		description: 'Place your feet at shoulder width apart while keeping your chest up and your abdominals braced. Begin the movement by swinging your arms up towards your shoulders. At the same time, bend at the knees and drive your hips back like you’re sitting in a chair. Once your upper thighs are parallel with the ground, pause, then drive your hips forward to return to the starting position.',
		level: 'Intermediate',
		bodyPart: 'Full body',
		exerciseUrl: 'https://www.youtube.com/embed/2GVzT1Sd_bg'
	},

	{
		name: 'Jump Squats',
		description: 'Stand with your feet hip width apart. Your toes should be pointing straight ahead or only slightly outward. Cross your arms in front of your body, place your hands behind your head or at the sides of your head. Keep your weight on your heels and bend your knees while lowering your hips towards the ground as if you are sitting down on a chair. Keep your back straight at all times. Continue until you feel a slight stretch in your quadriceps. Do not let your knees extend out beyond the level of your toes. Pause for a count of one. In an explosive movement, drive down through your heels pushing yourself up of the floor with your quads. At the same time extend our arms out above you. Land with your knees slightly bent to absorb the impact. Repeat',
		level: 'Advanced',
		bodyPart: 'Full body',
		exerciseUrl: 'https://www.youtube.com/embed/sc7qP0gbFjM'
	},

	{
		name: 'Hand Help Lunges',
		description: 'Stand with your feet shoulder width apart, keep your shoulders back and your back straight. Take a long stride forward with your right leg. Your right foot should be in a position, that when you bend your right knee, your upper and lower leg form a 90-degree angle. Slowly bend both your knees, to lower your hips until your left knee is just above the floor. Hold for a count of one. Return to the start position by slowly straightening your legs and raising your body back to a standing position. Complete all the repetitions for one set full set, then switch legs, or you can alternate between legs for each rep.',
		level: 'Beginner',
		bodyPart: 'Lower body',
		exerciseUrl: 'https://www.youtube.com/embed/gkAYeOEe33U'
	},

	{
		name: 'Lunges',
		description: 'Stand tall with a tight core and make sure your feet are shoulder-width apart. Bring your hands together for balance. Step directly to the left, leaving your right foot in place. Bend the left knee and pause once the upper left thigh is parallel to the ground. Your right leg should be completely straight. Contract the hamstring muscle then push off the ground to return to the starting position. Repeat on the right side. Alternate this movement.',
		level: 'Intermediate',
		bodyPart: 'Lower body',
		exerciseUrl: 'https://www.youtube.com/embed/NIgy4oCp_Kw'
	},

	{
		name: 'Split Lunges',
		description: 'Stand straight with a tight core and your chest up. You will be in a classic lunge position. Step forward and be sure to keep your front knee bent. At the same time, extend the back leg. Your back knee should be slightly bent. Place your hands on your hips. If you want a challenge, place them straight above the head. Using all of your force, jump into the air. Simultaneously, switch your leg stance in midair. Land in the lunge position and repeat.',
		level: 'Advanced',
		bodyPart: 'Lower body',
		exerciseUrl: 'https://www.youtube.com/embed/sDIWqlk5rjI'
	},

	{
		name: 'Plank Hold',
		description: 'Get into a face down position on the floor supporting your upper body on your forearms. Your elbows should be bent at 90 degrees. Extend your legs straight out behind you, supporting them on your toes and balls of your feet. Keep your body in a straight line by tightening your abdominal and oblique muscles. Hold for as long as possible.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/I_uMNn8WBWk'
	},

	{
		name: 'Plank Switches',
		description: 'Start in the plank position with your elbows shoulder-width apart.Press yourself up from the floor one arm at a time into a push-up, maintaining your body in a straight line. Slowly return to the starting plank position the same way, one arm at a time. Repeat the movement alternating sides.',
		level: 'Intermediate',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/lOSgvVrvnCM'
	},

	{
		name: 'Plank Knee to Elbow',
		description: 'Lay face down on the ground with extended legs. Point your toes while you place your hands beneath your shoulders. Push yourself up into the plank position. Maintaining a tight core and flat back, bring your left knee to your right elbow. Pause and slowly return each to the starting point. Repeat with the other side and keep alternating.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/FogEixvbdLU'
	},

	{
		name: 'Hip Raises',
		description: 'Lie on an exercise mat with your knees bent so that your feet are flat on the floor. Keep your back straight. Place your hands out to your sides palms flat for stability. Raise your glutes off the floor by extending your hips upward while pushing down through you heels.Continue until your back, hips and thighs are in a straight line. Hold for a count of one. single leg hip raisesReturn to the start position by lowering your hips back to the floor. Pause then repeat.',
		level: 'Beginner',
		bodyPart: 'Lower body',
		exerciseUrl: 'https://www.youtube.com/embed/qyw_m7g4oVg'
	},

	{
		name: 'Single Leg Hip Raises',
		description: 'Lie on an exercise mat with your knees bent so that your feet are flat on the floor. Raise one leg off the floor and bend your knee up towards your chest. This is the start position. Perform the exercise by pushing down through your other heel and pushing your hips up, raising your glutes off the mat. Continue until your hips are in a straight line with your torso. Hold for a count of one. Return to the start position by lowering your hip to the floor. Complete all the repetitions for one set before changing legs.',
		level: 'Intermediate',
		bodyPart: 'Lower body',
		exerciseUrl: 'https://www.youtube.com/embed/6_215Vy2qkM'
	},

	{
		name: 'Pistol',
		description: 'Stand straight with your feet hip width apart, arms fully extended and your hands by your sides. Raise your left foot from the floor, extending your leg out in front of you. As you do so, raise both arms out in front of you in a smooth arc for balance. This is the start position. In a controlled movement, lower your body toward the floor by bending your right knee while pushing your hips back as if sitting down in a chair. Continue this downward movement until your right thigh is parallel to the floor. Hold for a count of one. Return to the start position by pushing down through your right heel and straightening your leg. Lower your arms to the start position as you do so. Repeat.',
		level: 'Advanced',
		bodyPart: 'Lower body',
		exerciseUrl: 'https://www.youtube.com/embed/3yie374GUuQ'
	},

	{
		name: 'Supermans Holds',
		description: 'Lie face down on a mat, with your arms fully extended above your head and your legs fully extended behind you. Lift your chest, arms and legs off the floor by arching your back. Only the tops of your quads and your lower abdomen should be in contact with the floor. Hold for a count of 2 while squeezing your abdominals and obliques. Return to the starting position for a count of one, then repeat.',
		level: 'Beginner',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/F6TxCdnEUP0'
	},

	{
		name: 'Ground Supermans',
		description: 'Lie face down on a mat, with your arms fully extended above your head and your legs fully extended behind you. Lift your chest by arching your back. Move your arms backwards and forward, then repeat.',
		level: 'Intermediate',
		bodyPart: 'Full body',
		exerciseUrl: 'https://www.youtube.com/embed/-VzhQDlIOjo'
	},

	{
		name: 'Supermans / Extended Arms & Legs Lifts',
		description: 'Lie face down on a mat, with your arms fully extended above your head and your legs fully extended behind you. Lift your chest, arms and legs off the floor by arching your back. Only the tops of your quads and your lower abdomen should be in contact with the floor. Move your arms backwards and forward, then repeat.',
		level: 'Advanced',
		bodyPart: 'Upper body',
		exerciseUrl: 'https://www.youtube.com/embed/_Iouhn4M8t8'
	}
];

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true
	})
	.then((self) => {
		console.log(`Connected to ${self.connection.name}`);

		Exercise.create(exercises)
			.then((exercises) => {
				exercises.forEach((exercise) => {
					console.log(exercise.name);
				});
				Exercise.find({
						level: 'Beginner'
					})
					.then((dbRes) => {
						console.log(dbRes);
						ids = [];
						dbRes.forEach((dbRe) => {
							ids.push(dbRe._id);
						});
						if (dbRes != []) {
							Program.create({
								name: 'BEGINNER PROGRAM',
								description: dbRes[0].level + ' Program',
								exercisesList: ids
							});
						}
					})
					.catch((dbErr) => console.log(dbErr));
				Exercise.find({
						level: 'Intermediate'
					})
					.then((dbRes) => {
						console.log(dbRes);
						ids = [];
						dbRes.forEach((dbRe) => {
							ids.push(dbRe._id);
						});
						if (dbRes != []) {
							Program.create({
								name: 'INTERMEDIATE PROGRAM',
								description: dbRes[0].level + ' Program',
								exercisesList: ids
							});
						}
					})
					.catch((dbErr) => console.log(dbErr));
				Exercise.find({
						level: 'Advanced'
					})
					.then((dbRes) => {
						console.log(dbRes);
						ids = [];
						dbRes.forEach((dbRe) => {
							ids.push(dbRe._id);
						});
						if (dbRes != []) {
							Program.create({
								name: 'ADVANCED PROGRAM',
								description: dbRes[0].level + ' Program',
								exercisesList: ids
							});
						}
					})
					.catch((dbErr) => console.log(dbErr));
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(`Error occured while connecting to the Database ${err}`);
	});