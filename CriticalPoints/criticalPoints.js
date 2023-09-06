console.log(`critical points`)

addInputEventListners()

function calculateExposures(numberOfPoints, longitudinal) {
    let exposureNumber = 0;
    if (longitudinal) {
        exposureNumber = 3.57 * numberOfPoints ** 0.36;
    } else {
        exposureNumber = 1.21 * numberOfPoints ** 0.36;
    }
    exposureNumber = Math.round(exposureNumber)
    return exposureNumber;
}

function calculateExposurePercentage(numberOfPoints, numberOfExposures) {
    let percentage = (numberOfExposures / numberOfPoints) * 100
    percentage = percentage.toFixed(1)
    return percentage
}

function addInputEventListners() {
    let longInput = document.getElementById("long-input")
    let transInput = document.getElementById("trans-input")

    longInput.addEventListener("input", () => {
        console.log(`long input`)
        let numberOfPoints = longInput.value
        displayLongInfo(numberOfPoints)
    })

    transInput.addEventListener("input", () => {
        console.log(`long input`)
        let numberOfPoints = transInput.value;
        displayTransInfo(numberOfPoints)
    })
}

function displayLongInfo(numberOfPoints) {
    let longOutput = document.getElementById("long-output")
    let longPercent = document.getElementById("long-percentage")

    let exposureNumber = calculateExposures(numberOfPoints, true)
    let exposurePercentage = calculateExposurePercentage(numberOfPoints, exposureNumber)

    longOutput.innerText = exposureNumber;
    longPercent.innerText = `(${exposurePercentage}%)`
}

function displayTransInfo(numberOfPoints) {
    let transOutput = document.getElementById("trans-output")
    let transPercent = document.getElementById("trans-percentage")

    let exposureNumber = calculateExposures(numberOfPoints, false)
    let exposurePercentage = calculateExposurePercentage(numberOfPoints, exposureNumber)

    transOutput.innerText = exposureNumber;
    transPercent.innerText = `(${exposurePercentage}%)`
}