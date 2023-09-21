console.log("RA Hazards")

import { Row } from "./RHLRow.js"
import { SummaryCalc } from "./summaryCalc.js"

let tableEl = document.getElementById("hazard-table")

let summaryCalc = new SummaryCalc(tableEl)

let hazardRows = []
let instanceId = 0


loadRowData()


for (let row in hazardRows) {
    console.log(hazardRows[row].rowContent.name)
}



function saveData() {
    let rawData = []
    for (let row in hazardRows) {
        let rowContent = hazardRows[row].getRowContent()
        rawData.push(rowContent)
    }

    let saveDataJSON = JSON.stringify(rawData)

    localStorage.setItem("row data", saveDataJSON)
}

function loadRowData() {
    let loadJSON = localStorage.getItem("row data");
    
    if (loadJSON !== null) {
        let rowData = JSON.parse(loadJSON);     

        for (let row in rowData) {
            let newRow = new Row(instanceId, tableEl, summaryCalc.displaySummaryInformation, null, saveData, deleteRowInstance)
            newRow.displayRowContent(rowData[row])
            hazardRows.push(newRow)
            instanceId ++;
            console.log(instanceId)
        }
    } 
}

function deleteRowInstance(idToRemove) {
    console.log("id to remove", idToRemove)

    for (let row in hazardRows) {
        if (hazardRows[row].id === idToRemove) {
            hazardRows.splice(row, 1);
            break;
        }
    }

    saveData()
}

let addRowButton = document.getElementById("add row button")
addRowButton.addEventListener("click", () => {
    let newRow = new Row(instanceId, tableEl, summaryCalc.displaySummaryInformation, null, saveData, deleteRowInstance)
    instanceId ++
    hazardRows.push(newRow)
})

let debug = document.getElementById("debug")
debug.addEventListener("click", () => {
    console.log(hazardRows)
})