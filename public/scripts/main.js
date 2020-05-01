const filterForm = document.getElementById("filter-form");
const btnCreateProgram = document.getElementById("create-program-btn");
const exercisesIds = [];

filterForm.onchange = handleChange;

setEventListenerFavourite()
// btnCreateProgram.onclick = createProgram;

function setEventListenerFavourite(e) {

    const favourites = document.querySelectorAll("[name='favourite']");
    console.log(favourites)
    favourites.forEach((input) => {
        input.addEventListener("change", e => {
            if (input.checked) {
                exercisesIds.push(input.value);
                console.log(input.value + " pushed)")
                console.log(exercisesIds)
                console.log(exercisesIds)
                console.log(document.querySelector("[name='exercisesList']"))
                document.querySelector("[name='exercisesList']").value = exercisesIds
                console.log(document.querySelector("[name='exercisesList']").value)
            }
            // exercisesIds.push(input.value);
            // console.log(input.value + " pushed)")
        })

    });
    console.log(exercisesIds)
    console.log(document.querySelector("[name='exercisesList']"))
    document.querySelector("[name='exercisesList']").textContent = exercisesIds
    console.log(document.querySelector("[name='exercisesList']").textContent)
    return exercisesIds
}

// function createProgram(e) {
//     const programName = document.querySelector("[name='programName']");
//     const programDescription = document.querySelector("[name='programDescription']")
//     Program.create({
//         name: programName,
//         description: programDescription,
//         exercisesList: exercisesIds,
//         // creator: String,
//     }).then(dbRes =>{console.log(dbRes)})
//     .catch(dbErr =>{console.log(dbErr)})

// }

function handleChange(e) {
    // const filters = [];
    const levels = []
    const bodyParts = []
    // const inputs = filterForm.querySelectorAll("[name='filter']");
    const inputsLevel = filterForm.querySelectorAll("[name='filterLevel']");
    const inputsBodyPart = filterForm.querySelectorAll("[name='filterBodyPart']");
    console.log("input handled")
    // inputsLevel.forEach et inputsBodyPart.forEach
    inputsLevel.forEach((input) => {
        if (input.checked) {
            levels.push(input.value);
            console.log(input.value + " pushed)")
        }
    });
    inputsBodyPart.forEach((input) => {
        if (input.checked) {
            bodyParts.push(input.value);
            console.log(input.value + " pushed)")
        }
    });
    console.log(levels, bodyParts)

    getExercises(levels, bodyParts)
        .then((res) => {
            console.log(res.data)
            console.log("i want to display here")
            displayExercises(res.data);
            setEventListenerFavourite()
        })
        .catch((err) => {
            console.log(err);
        });

}

function exerciseCard(exercise) {
    let card = `<li class="exercise unique-exercise">
    <div class="exercise-upper-info">
        <p>${exercise.name} <input name="favourite" value=${exercise._id} type="checkbox" class="checkbox" />
            <label for="favourite"></label></p>
        <p>${exercise.level}</p>
        <p>${exercise.bodyPart}</p>
    </div>
    <iframe width="100%" height="315" src=${exercise.exerciseUrl}>
    </iframe>
</li>`;
    console.log("exercise card function yo")
    return card + `</a>`;
}

function displayExercises(exercises) {
    const container = document.getElementById("exoList");
    container.innerHTML = "";
    console.log("displayExercise here")
    exercises.forEach((exercise) => {
        container.innerHTML += exerciseCard(exercise);
    });
}

function getExercises(levels, bodyParts) {
    console.log("i am levels", levels)
    console.log("i am bodyParts", bodyParts)
    console.log("inside getExercise)")
    return axios.get("/api" + window.location.pathname, {
        params: { // axios.get(url, options)
            level: levels,
            bodyPart: bodyParts
            // This params option object 
        }, // will be sent as a query parameter // query string.
    });
}