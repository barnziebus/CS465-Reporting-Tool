class Row{
    constructor(rowData, table) {
        this.abbrv = rowData.abbrv
        this.title = rowData.title
        this.description = rowData.description

        this.rowElements = {}

        this.createRow(table)
    }

    createRow(table) {
        let rowEl = document.createElement("tr")
        this.setAbbrv(rowEl)
        this.setTitle(rowEl)
        this.setDescription(rowEl)

        table.appendChild(rowEl)
    }

    setAbbrv(row) {
        let abbrvEl = document.createElement("td");
        abbrvEl.innerText = this.abbrv;
        row.appendChild(abbrvEl)
    }

    setTitle(row) {
        let titleEl = document.createElement("td");
        titleEl.innerText = this.title;
        row.appendChild(titleEl)
    }

    setDescription(row) {
        let descriptionEl = document.createElement("td");
        descriptionEl.innerText = this.description;
        row.appendChild(descriptionEl)
    }
}

let glossaryData = [
    {abbrv: "DTE",  title: "Duct and Tendon Exposure", description: "Intrusive investigation to detrermine the condition of the post-tensioned duct and tendon"},
    {abbrv: "EAE",  title: "End Anchorage Exposure", description: "Intrusive investigation to detrermine the condition of the post-tensioned end anchorages"},
    {abbrv: "CTA",  title: "Corrosion Test Area", description: "A test area to assess the potential rate of corrosion within reinforced concrete"},
    {abbrv: "GI",   title: "General Inspection", description: "On foot inspection undertaken every 2 years."},
    {abbrv: "PI",   title: "Principal Inspection", description: "Touching distance inpsection undertaken every 6 years."},
    {abbrv: "SI",   title: "Special Inspection", description: "Inspection undertaken to the structure for a specific reason eg. surfacing condition, reinforced concrete condition"},
    {abbrv: "PTSI", title: "Post-Tensioned Special Inspection", description: "Special inspection undertaken to the post-tensioned elements. Typically comprising of DTEs, EAEs and CTAs"},
    {abbrv: "", title: "", description: ""},
    {abbrv: "", title: "", description: ""},
]


let tableEl = document.getElementById("glossaryTable")

for (let i in glossaryData) {
    let rowData = glossaryData[i]
    new Row(rowData, tableEl)
}