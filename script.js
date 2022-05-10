const task = document.getElementById("task");
const difficulty = document.getElementById("difficulty");
const btn = document.getElementById("btn");
const TASKS = [
    {
        task: "Score 180 points",
        difficulty: "Expert"
    },
    {
        task: "Score 60 points",
        difficulty: "Beginner"
    },
    {
        task: "Checkout 41",
        difficulty: "Beginner"
    },
    {
        task: "Checkout 84",
        difficulty: "Regular"
    },
    {
        task: "Checkout 125",
        difficulty: "Expert"
    },
];
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}
const getTask = () => {
    const index = getRandomNumber(TASKS.length);
    task.textContent = "Choosing task...";
    setTimeout(() => {
        task.textContent = TASKS[index].task;
        difficulty.textContent = `Difficulty level: ${TASKS[index].difficulty}`;
    }, 1500)
    
}
window.addEventListener("load", getTask);
btn.addEventListener("click", getTask);