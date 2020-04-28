const filterForm = document.getElementById("filter-form");

// axios
//   .get("/test")
//   .then((dbRes) => {
//     console.log(dbRes);
//   })
//   .catch((err) => {
//     console.log("ici");
//   });

filterForm.onchange = handleChange;

function handleChange(e) {
    const filters = [];
    // const Level=[]
    // const Bodypart=[]
    const inputs = filterForm.querySelectorAll("[name='filter']");
    // const inputsLevel = filterForm.querySelectorAll("[name='filterLevel']");
    // const inputsBodyPart = filterForm.querySelectorAll("[name='filterBodyPart']");
    console.log("input handled")
    // inputsLevel.forEach et inputsBodyPart.forEach
    inputs.forEach((input) => {
        if (input.checked) {
            filters.push(input.value);
            console.log(input.value + " pushed)")
        }
    });
    console.log(filters)

    getExercises(filters)
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
  <p>${exercise.name}</p>
  <p>${exercise.description}</p>
  <p>${exercise.level}</p>
  <p>${exercise.bodyPart}</p>
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

function getExercises(filters) {
    console.log("i am filters", filters)
    console.log("inside getExercise)")
    return axios.get("/api" + window.location.pathname, {
        params: { // axios.get(url, options)
            level: filters // This params option object 
        }, // will be sent as a query parameter // query string.
    });
}