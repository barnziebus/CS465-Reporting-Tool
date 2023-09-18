export class SummaryCalc {
    constructor() {
        this.outputEl = {
            "very high":  document.getElementById("RHL VH"),
            "high":       document.getElementById("RHL H"),
            "medium":     document.getElementById("RHL M"),
            "low":        document.getElementById("RHL L"),
            "very low" :  document.getElementById("RHL VL"),
            "negligible": document.getElementById("RHL N"),
            "sum":        document.getElementById("sum"),
            "mean":       document.getElementById("mean"),
        }

        this.displaySummaryInformation();
    }

    displaySummaryInformation() {
        let RHLs = []
        let tableEl = document.getElementById("hazard-table")
        for (let i = 1; i < tableEl.rows.length; i++) {
            let row = tableEl.rows[i];
            let cells = row.cells;
    
            RHLs.push(cells[3].innerText);
        }

        let sumRHL = {
            "very high": 0,
            "high": 0,
            "medium": 0,
            "low": 0,
            "very low": 0,
            "negligible": 0
        };
    
        for (let RHL of RHLs) {
            if (RHL === "VH") {sumRHL["very high"]  ++;}
            if (RHL === "H")  {sumRHL["high"]       ++;}
            if (RHL === "M")  {sumRHL["medium"]     ++;}
            if (RHL === "L")  {sumRHL["low"]        ++;}
            if (RHL === "VL") {sumRHL["very low"]   ++;}
            if (RHL === "N")  {sumRHL["negligible"] ++;}
        };
    
        let VHoutputEl = document.getElementById("RHL VH");
        let HoutputEl = document.getElementById("RHL H");
        let MoutputEl = document.getElementById("RHL M");
        let LoutputEl = document.getElementById("RHL L");
        let VLoutputEl = document.getElementById("RHL VL");
        let NoutputEl = document.getElementById("RHL N");
    
        VHoutputEl.innerText = sumRHL["very high"];
        HoutputEl.innerText =  sumRHL["high"];
        MoutputEl.innerText =  sumRHL["medium"];
        LoutputEl.innerText =  sumRHL["low"];
        VLoutputEl.innerText = sumRHL["very low"];
        NoutputEl.innerText =  sumRHL["negligible"];
    }
}
