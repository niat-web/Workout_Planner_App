/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // --- Core Concepts ---
    // Primitive Types
    const workoutName = "Full Body Workout"; // String
    let sets = 3; // Number
    const isComplete = false; // Boolean
    const emptyValue = null; // Null
    let undefinedValue; // Undefined
    const symbolValue = Symbol("workout"); // Symbol
    const bigIntValue = 9007199254740991n; // BigInt

    // Type Conversion
    const stringNumber = "10";
    const convertedNumber = Number(stringNumber); // String to Number

    // Type Coercion
    console.log(5 + "5"); // Number + String = String

    // Template Literals
    const user = "John";
    const greeting = `Hello, ${user}!`;

    // Variable Scoping
    function exampleScope() {
        let localVar = "Inside function"; // Local Scope
        if (true) {
            var functionVar = "Inside if block"; // Function Scope (var)
        }
        console.log(functionVar); // Accessible
    }

    exampleScope();

    // --- Control Flow ---
    const temperature = 20;
    if (temperature > 25) {
        console.log("It's hot!");
    } else if (temperature > 15) {
        console.log("It's warm.");
    } else {
        console.log("It's cold.");
    }

    const day = "Monday";
    switch (day) {
        case "Monday":
            console.log("Start of the week");
            break;
        default:
            console.log("Another day");
    }

    const isSunny = true;
    const weatherMessage = isSunny ? "It's sunny!" : "It's not sunny.";

    try {
        // Risky code
        if (temperature < 0) {
            throw new Error("Temperature is below zero!");
        }
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Finally block executed");
    }

    // --- User Input & Math ---
    const workoutForm = document.getElementById('workoutForm');
    const exerciseLogForm = document.getElementById('exerciseLogForm');
    const workoutPlanOutput = document.getElementById('workoutPlanOutput');
    const workoutLogOutput = document.getElementById('workoutLogOutput');
    const totalWorkoutsElement = document.getElementById('totalWorkouts');

    // Local Storage variables
    let workoutLogs = JSON.parse(localStorage.getItem('workoutLogs')) || [];
    let totalWorkoutsCompleted = localStorage.getItem('totalWorkoutsCompleted') || 0;
    totalWorkoutsElement.textContent = totalWorkoutsCompleted;

    function displayNotification(message) {
        const notificationArea = document.getElementById('notificationArea');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        notificationArea.appendChild(notification);

        // Show the notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Hide and remove the notification after a delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300); // Wait for the transition to complete
        }, 3000); // Display for 3 seconds
    }

    function clearFormFields(form) {
        const formElements = form.elements;
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type !== 'button' && element.type !== 'submit') {
                element.value = '';
            }
        }
    }

    if (workoutForm) {
        workoutForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const goal = document.getElementById('goal').value;
            const experience = document.getElementById('experience').value;
            const days = parseInt(document.getElementById('days').value);

            // Input Validation Example
            if (isNaN(days) || days < 1 || days > 7) {
                displayNotification('Please enter a valid number of days (1-7).');
                return;
            }

            const plan = generateWorkoutPlan(goal, experience, days);
            workoutPlanOutput.innerHTML = `<p>${plan}</p>`;
            displayNotification('Workout plan generated!');
            clearFormFields(workoutForm);
        });
    }

    if (exerciseLogForm) {
        exerciseLogForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const exerciseName = document.getElementById('exerciseName').value;
            const sets = parseInt(document.getElementById('sets').value);
            const reps = parseInt(document.getElementById('reps').value);
            const weight = parseFloat(document.getElementById('weight').value);

            // Input Validation
            if (!exerciseName) {
                displayNotification('Exercise name is required.');
                return;
            }
            if (isNaN(sets) || sets <= 0) {
                displayNotification('Sets must be a positive number.');
                return;
            }

            const logEntry = {
                exercise: exerciseName,
                sets: sets,
                reps: reps,
                weight: weight,
                date: new Date().toLocaleDateString()
            };

            workoutLogs.push(logEntry);
            localStorage.setItem('workoutLogs', JSON.stringify(workoutLogs));

            totalWorkoutsCompleted++;
            localStorage.setItem('totalWorkoutsCompleted', totalWorkoutsCompleted);
            totalWorkoutsElement.textContent = totalWorkoutsCompleted;

            displayWorkoutLogs();
            displayNotification('Exercise logged!');
            clearFormFields(exerciseLogForm);
        });
    }

    function generateWorkoutPlan(goal, experience, days) {
        let plan = `Based on your goal (${goal}), experience (${experience}), and ${days} days per week, here's a sample workout plan:\n`;
        if (goal === 'strength') {
            plan += '- Day 1: Squats, Bench Press, Rows\n- Day 2: Deadlifts, Overhead Press, Pull-ups\n- Day 3: Rest or Active Recovery';
        } else if (goal === 'cardio') {
            plan += '- Day 1: 30 min Running\n- Day 2: 30 min Cycling\n- Day 3: 30 min Swimming';
        } else {
            plan += '- Day 1: Yoga\n- Day 2: Stretching\n- Day 3: Pilates';
        }
        return plan;
    }

    // --- Arrays & Objects ---
    const exercises = ['Squats', 'Bench Press', 'Deadlifts'];
    exercises.push('Overhead Press'); // Add to array
    exercises.pop(); // Remove from array

    const exerciseObjects = exercises.map(exercise => ({ name: exercise, type: 'strength' }));
    const strengthExercises = exerciseObjects.filter(exercise => exercise.type === 'strength');
    const exerciseNames = exerciseObjects.map(exercise => exercise.name);

    const combinedObject = { ...{ name: 'Workout' }, ...{ duration: '60 minutes' } };

    // --- Functions & Events ---
    function handleClick(event) {
        console.log('Button clicked!', event);
    }

    // Example of event listener
    // const myButton = document.getElementById('myButton');
    // if (myButton) {
    //     myButton.addEventListener('click', handleClick);
    // }

    // Event Delegation (not used in the actual code, but included for demo)
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('some-dynamic-element')) {
            console.log('Delegated click');
        }
    });

    // --- Async Operations ---
    // Example using Promises
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 1000);
        });
    };

    // --- DOM Manipulation ---
    function displayWorkoutLogs() {
        workoutLogOutput.innerHTML = ''; // Clear previous logs

        if (workoutLogs.length === 0) {
            workoutLogOutput.innerHTML = '<p>No workouts logged yet.</p>';
            return;
        }

        const table = document.createElement('table');
        table.classList.add('table');

        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Date</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        workoutLogs.forEach(log => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${log.exercise}</td>
                <td>${log.sets}</td>
                <td>${log.reps}</td>
                <td>${log.weight}</td>
                <td>${log.date}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        workoutLogOutput.appendChild(table);
    }

    displayWorkoutLogs(); // Initial display

    // --- Forms & Storage ---
    // Already handled above with form submission

    // --- UI Enhancements ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // PWA service worker registration (for offline functionality)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
});