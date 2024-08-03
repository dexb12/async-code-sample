//async and await

import { wakeUp, getMeditate, workOut } from "./promises.js";


async function doItYourself() {

    function displayFinishedTask(task) {
        
        const taskContainer = document.getElementById("taskContainer");
        const li = document.createElement("p");
        li.textContent = task;
        taskContainer.appendChild(li);
    }

    try {
        const wakeUpResult = await wakeUp();
        displayFinishedTask(wakeUpResult);

        const getMeditateResult = await getMeditate();
        displayFinishedTask(getMeditateResult);

        const workOutResult = await workOut();
        displayFinishedTask(workOutResult);

        displayFinishedTask("You finished all the tasks")
    }
    
    catch(error) {
        console.error(error);
        displayFinishedTask(error);
    }
}

doItYourself();