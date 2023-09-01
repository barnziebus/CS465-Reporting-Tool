// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const inputEls = {
        "yearFactorInpt": document.getElementById("yearFactorInpt"),
        "formFactorInpt": document.getElementById("formFactorInpt"),
        "vulnerableFactorInput": document.getElementById("vulnerableDetailFactorInpt"),
        "conditionFactorInpt": document.getElementById("conditionFactorInpt"),
        "consequenceFactorInpt": document.getElementById("consequenceFactorInpt"),
    };

    const outputEl = document.getElementById("output");

    for (let inputEl in inputEls) {
        inputEls[inputEl].addEventListener("input", calculateRiskRating);
    }

    function calculateRiskRating() {
        let Fy = parseFloat(inputEls["yearFactorInpt"].value);
        let Ff = parseFloat(inputEls["formFactorInpt"].value);
        let Fv = parseFloat(inputEls["vulnerableFactorInput"].value);
        let Fc = parseFloat(inputEls["conditionFactorInpt"].value);
        let Fq = parseFloat(inputEls["consequenceFactorInpt"].value);

        let riskRating = ((100 * (((4 * Fy + Ff + Fv + Fc) * Fq) - 6)) / 254).toFixed(2);

        outputEl.textContent = riskRating;
    }
});
