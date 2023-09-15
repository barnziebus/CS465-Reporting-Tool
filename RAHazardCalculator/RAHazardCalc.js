console.log("RA Hazards")

import { Row } from "./RHLRow.js"

let tableEl = document.getElementById("hazard-table")
let exampleRow1 = new Row(tableEl)

let addRowButton = document.getElementById("add row button");
addRowButton.addEventListener("click", () => {
    new Row(tableEl)
})
