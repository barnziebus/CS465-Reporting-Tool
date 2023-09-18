export class Row{
    constructor(tableContainer, displaySummary) {
        this.rowEls = {}
        this.displaySummary = displaySummary
        
        this.createRow(tableContainer)
    }

    createRow(tableContainer) {
        let newRow = document.createElement("tr");

        this.buildHazardName(newRow);
        this.buildLikelihood(newRow);
        this.buildConsequence(newRow);
        this.buildRiskHazardLevel(newRow);
        this.buildDeleteButton(newRow);
        
        tableContainer.appendChild(newRow);

        this.addRowListeners()
    }

    buildHazardName(rowContainer) {
        let hazrdNameCell = document.createElement("td");
        let nameInput = document.createElement("input");

        nameInput.placeholder="Example Hazard";
        
        this.rowEls["name"] = nameInput;
        
        hazrdNameCell.appendChild(nameInput);
        rowContainer.appendChild(hazrdNameCell);
    }

    buildLikelihood(rowContainer) {
        let likelihoodCell = document.createElement("td");
        let likelihoodSelect = document.createElement("select");

        let likelihoodOptions = ["Likelihood", "Low", "Medium", "High", "Certain"];

        for (let option of likelihoodOptions) {
            let optionEl = document.createElement("option");

            optionEl.value = option
            optionEl.innerText = option

            likelihoodSelect.appendChild(optionEl)
        }

        this.rowEls["likelihood"] = likelihoodSelect;

        likelihoodCell.appendChild(likelihoodSelect);
        rowContainer.appendChild(likelihoodCell);
    };

    buildConsequence(rowContainer) {
        let consequenceCell = document.createElement("td");
        let consequenceSelect = document.createElement("select");

        let consequenceOptions = ["Consequence", "Low", "Medium", "High"];

        for (let option of consequenceOptions) {
            let optionEl = document.createElement("option");

            optionEl.value = option
            optionEl.innerText = option

            consequenceSelect.appendChild(optionEl)
        }

        this.rowEls["consequence"] = consequenceSelect;

        consequenceCell.appendChild(consequenceSelect);
        rowContainer.appendChild(consequenceCell);
    }

    buildRiskHazardLevel(rowContainer) {
        let riskHazardLevelCell = document.createElement("td");

        riskHazardLevelCell.innerText = "N/A";

        this.rowEls["risk hazard level"] = riskHazardLevelCell;

        rowContainer.appendChild(riskHazardLevelCell);
    }

    buildDeleteButton(rowContainer) {
        let deleteCell = document.createElement("td");
        let deleteButton = document.createElement("button");

        deleteButton.innerText = "❌";

        this.rowEls["delete"] = deleteButton;

        deleteButton.addEventListener("click", () => {
            rowContainer.remove()
            this.displaySummary()
        })

        deleteCell.appendChild(deleteButton);
        rowContainer.appendChild(deleteCell);
    }

    getRiskHazardLevel(likelihood, consequence) {
        likelihood = likelihood.toLowerCase();
        consequence = consequence.toLowerCase();

        let RHL = "N/A"

        if (likelihood === "low") {
            if (consequence === "low")    {RHL = "N"};
            if (consequence === "medium") {RHL = "VL"};
            if (consequence === "high")   {RHL = "L"};
        };
        if (likelihood === "medium") {
            if (consequence === "low")    {RHL = "VL"};
            if (consequence === "medium") {RHL = "L"};
            if (consequence === "high")   {RHL = "M"};
        };
        if (likelihood === "high") {
            if (consequence === "low")    {RHL = "L"};
            if (consequence === "medium") {RHL = "M"};
            if (consequence === "high")   {RHL = "H"};
        };
        if (likelihood === "certain") {
            if (consequence === "low")    {RHL = "M"};
            if (consequence === "medium") {RHL = "H"};
            if (consequence === "high")   {RHL = "VH"};
        };

        return RHL;
    }

    addRowListeners() {
        this.rowEls["likelihood"].addEventListener("change", () => {
            this.updateRHL()
            this.displaySummary()
        })
        this.rowEls["consequence"].addEventListener("change", () => {
            this.updateRHL()
            this.displaySummary()
        })
    }

    updateRHL() {
        let consq = this.rowEls["consequence"].value;
        let likelihood = this.rowEls["likelihood"].value;

        let riskHazardLevel = this.getRiskHazardLevel(likelihood, consq);
        let colors = this.getHazardColour(riskHazardLevel);
        let bgCol = colors.bg;
        let textCol = colors.text; 

        this.rowEls["risk hazard level"].innerText = riskHazardLevel;
        this.rowEls["risk hazard level"].style.backgroundColor = bgCol//this.getHazardColour(riskHazardLevel);
        this.rowEls["risk hazard level"].style.color = textCol//this.getHazardColour(riskHazardLevel);
    }

    getHazardColour(riskHazardLevel) {
        let rhlCols = {
            "N/A": {bg: "", text: ""},
            "N":   {bg: "rgb(0, 188, 85)",    text: "aliceblue"},
            "VL":  {bg: "rgb(178, 229, 131)", text: "black"},
            "L":   {bg: "rgb(239, 251, 125)", text: "black"},
            "M":   {bg: "rgb(255, 217, 97)",  text: "black"},
            "H":   {bg: "rgb(252, 100, 32)",  text: "aliceblue"},
            "VH":  {bg: "rgb(252, 39, 4)",    text: "aliceblue"}
        }

        return rhlCols[riskHazardLevel];
    }

}