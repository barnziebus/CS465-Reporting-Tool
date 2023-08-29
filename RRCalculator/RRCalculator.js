let inputElements = {
    "yearFactorInpt": document.getElementById("yearFactorInpt"),
    "consctionFactorInpt": document.getElementById("constructionFactorInpt"),
    "conditionFactorInpt": document.getElementById("conditionFactorInpt"),
    "vulnerableFactorInput": document.getElementById("vulnerableDetailFactorInpt"),
    "consequenceFactorInpt": document.getElementById("consequenceFactorInpt"),
    "formFactorInpt": document.getElementById("formFactorInpt")
}

for (let inputElement in inputElements) {
    inputElements[inputElement].addEventListener("change", calculateRiskRating)
}


function calculateRiskRating() {
    console.log('Value changed')
}