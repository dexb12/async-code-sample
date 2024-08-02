

export function wakeUp() {

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            const awake = true;

            if (awake) {
                resolve("You wake up early 😶");
            } else {
                reject("You don't wake up early! 😓")
            }
        }, 1500);
    })
    
}

export function getMeditate() {
   
    
    return new Promise((resolve, reject) => {
    
        
        setTimeout(() => {
            const meditate = true;
            
            if(meditate) {
                resolve("You become greatfull 😇");
            } else {
                reject(" You didn't meditate, you'll have a bad mode!😓");
            }
        }, 1000);
    })
}

export function workOut() {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const workingOut = true;

            if(workingOut) {
                resolve("You do 20 mins workout 💪");
            } else {
                reject("You don't workout 😢")
            }           
        }, 500);
    })
}

