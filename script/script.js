const now = new Date();
const timeDay = now.toLocaleString('en-US', { weekday: 'short' });
const timeFormat = now.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

const date = document.getElementById('dateToday');
date.innerHTML = `
<p class="text-xl font-bold"><span class="font-normal">${timeDay},</span><br>${timeFormat}</p>

`


const completedBtn = document.querySelectorAll('.completed-btn');

for (const btn of completedBtn) {
    btn.addEventListener('click', function (event) {
        btn.setAttribute("disabled", "true");
        const taskAssigned = getTextValueById('task-assigned');
        alert('Board updated Successfully');
        const updatedTask = taskAssigned - 1;
        document.getElementById('task-assigned').innerText = updatedTask;
        if (updatedTask === 0) {
            alert('congrates!!! You have completed all the current task')
        }
        const allTaskAssigned = getTextValueById('all-task-assigned');
        const updatedAllTask = allTaskAssigned + 1;
        document.getElementById('all-task-assigned').innerText = updatedAllTask;
        const cardTitle = event.target.parentNode.parentNode.querySelector('.card-title').innerText;

        const now = new Date();
        const dateFormat = now.toLocaleTimeString('en-US');

        const container = document.getElementById('completed-task');
        const div = document.createElement('div');
        div.innerHTML = `
            <p class="bg-[#F4F7FF] p-4 rounded-xl mb-4 completed">You have completed the task ${cardTitle} at ${dateFormat}</p>
        `
        container.appendChild(div);

    })
}


document.getElementById('clear-history-btn')
    .addEventListener('click', function (event) {
        const tasks = document.getElementById("completed-task");
        while (tasks.hasChildNodes()) {
            tasks.removeChild(tasks.firstChild);
        }
    })


document.getElementById('theme-btn')
    .addEventListener('click', function () {
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    })


document.getElementById('dicover-new').addEventListener('click', function () {
    window.location.href = './blog.html'
})
