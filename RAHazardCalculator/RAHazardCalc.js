console.log("RA Hazards")

import { Row } from "./RHLRow.js"
import { SummaryCalc } from "./summaryCalc.js"

let tableEl = document.getElementById("hazard-table")

let summaryCalc = new SummaryCalc(tableEl)
let exampleRow1 = new Row(tableEl, summaryCalc.displaySummaryInformation)

let addRowButton = document.getElementById("add row button");
addRowButton.addEventListener("click", () => {
    new Row(tableEl, summaryCalc.displaySummaryInformation)
})