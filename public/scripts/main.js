const filterForm = document.getElementById("filter-form");
const btnCreateProgram = document.getElementById("create-program");

// axios
//   .get("/test")
//   .then((dbRes) => {
//     console.log(dbRes);
//   })
//   .catch((err) => {
//     console.log("ici");
//   });

filterForm.onchange = handleChange;
btnCreateProgram.onclick = createProgram;

function createProgram(e) {
    const exercisesIds = []
    const favourites = filterForm.querySelectorAll("[name='favourite']");
    favourites.forEach((input) => {
        if (input.checked) {
            exercisesIds.push(input.value);
            console.log(input.value + " pushed)")
        }
    });
    console.log(exercisesIds)
}

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
        })
        .catch((err) => {
            console.log(err);
        });
}

function exerciseCard(exercise) {
    let card = `<li class="exercise">
  <p>${exercise.name} <input name="favourite" value="favourite" type="checkbox" class="checkbox" />
  <label for="favourite">favourite</label></p>
  <p>${exercise.description}</p>
  <p>${exercise.level}</p>
  <p>${exercise.bodyPart}</p>
  <iframe width="420" height="315" src=${exercise.exerciseUrl}>
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