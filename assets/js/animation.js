document.addEventListener("DOMContentLoaded", ()=>{
    // Variables
        // langue
    const capacityText = document.querySelectorAll(".capacity")
        // "A propos"
    const tapeText = document.querySelector("#tapeText")
    let copyTapeText = tapeText.innerHTML
    tapeText.innerHTML=""
        // Expertise
        // Eye Ball Positions
        const eyeBallPosition = [5,7,3]
        let indexEyeBallPosition = 0
        const eye = document.querySelector("#eye")
        const eyeBall = document.querySelector("#eye circle")






    // function
        // Text Animation on language
    let animateCapacityText = (textTonimate, capacityNumber) => {
        for (let i = 0; i <= capacityNumber; i++) {
            setTimeout(() => {
                textTonimate.innerHTML= i+"%";
            }, (8005/capacityNumber)*i);
        }
    }

        // Text Animation on language
    capacityText.forEach((language, index) => {
        if (index === 0) {
            animateCapacityText(language, 100)
        }
        else if(index === 1) {
            animateCapacityText(language, 75)
        }
        else {
            animateCapacityText(language, 85)
        }
    });

        // Eye animation
    const animateEyeBall = () => {
        eyeBall.setAttribute("cx", eyeBallPosition[indexEyeBallPosition]);
        indexEyeBallPosition = (indexEyeBallPosition + 1) % eyeBallPosition.length;
        eyeBallAnimation = setTimeout(animateEyeBall, 1000);
    }
    animateEyeBall()

        // "A propos" animation
    let cursor = document.createElement("span")
    cursor.setAttribute("id","cursorTape")
    cursor.innerHTML = "|"
    let animatedText = document.createElement("span")
    animatedText.setAttribute("id","animatedText")

    tapeText.append(animatedText)
    tapeText.append(cursor)

    for (let i = 0; i < copyTapeText.length; i++) {
        setTimeout(() => {
            animatedText.innerHTML += copyTapeText[i]
        }, (10000/copyTapeText.length)*i);      
    }
})