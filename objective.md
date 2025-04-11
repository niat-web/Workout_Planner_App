```markdown
# Workout_Planner_App

## Objective
The Workout Planner App is a web application designed to help users generate personalized workout plans based on their goals, experience level, and available days per week. It also allows users to log their exercises, track their progress, and provides a dark mode feature for enhanced user experience. The app leverages JavaScript for DOM manipulation, event handling, local storage for persistent data, and basic input validation. This documentation provides a comprehensive overview of the application's functionality, technical aspects, and implementation details.

## Output
<iframe src="https://niat-web.github.io/Workout_Planner_App" height="1000" width="300" title="Workout_Planner_App"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Local Storage

## Features to Implement
- Generate workout plans based on user input (goal, experience, days).
- Log exercises with details (exercise name, sets, reps, weight, date).
- Display workout logs in a table format.

## UI Enhancements
- Implement a dark mode toggle for improved user experience.
- Display notifications for user feedback (e.g., plan generated, exercise logged).

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Create HTML form for workout plan generation | User can input goal, experience, and days to generate a plan. |
| Implement workout plan generation logic | Workout plan is generated based on user input and displayed on the page. |
| Create HTML form for exercise logging | User can input exercise name, sets, reps, and weight to log an exercise. |
| Implement exercise logging logic | Exercise log is saved to local storage and displayed in a table. |
| Implement dark mode toggle | User can switch between light and dark themes. |
| Implement notification system | User receives feedback on actions such as workout plan generation and exercise logging. |
| Implement service worker registration | Application will function when offline. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to dynamically update the content of the HTML page, such as displaying workout plans and logs. |
| Event Handling | Used to respond to user interactions, such as form submissions and button clicks. |
| Local Storage | Used to persist workout logs and theme preferences across sessions. |
| Functions | Used to encapsulate reusable logic, such as generating workout plans and displaying workout logs. |
| Arrays and Objects | Used to store and manipulate data, such as workout exercises and user preferences. |
| Promises | Used to handle asynchronous operations, such as fetching data. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Local Storage API | `localStorage.setItem()`, `localStorage.getItem()` | Used for storing and retrieving workout logs and theme preferences. |
| Service Worker API | `navigator.serviceWorker.register()` | Used to register a service worker for offline functionality. |

## MISC Section:

### 1. Formulas/Calculations:
- There are no complex mathematical formulas used in this code. The calculation is simply adding 1 to the `totalWorkoutsCompleted` variable, to track the users progress, that can be found here: `totalWorkoutsCompleted++;`.

