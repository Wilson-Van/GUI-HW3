// variables to for each form element
var elForm = document.getElementById("inputForm")
var elErrorMessage = document.getElementById("error-message");

var elStartMultiplier = document.getElementById("startMultiplier");
var elEndMultiplier = document.getElementById("endMultiplier");
var elStartMultiplicand = document.getElementById("startMultiplicand");
var elEndMultiplicand = document.getElementById("endMultiplicand");

var table_location = document.getElementById("table-container");

elForm.addEventListener("submit", checkForm);


function checkForm(event) {
    event.preventDefault();
    // check if all the fields are filled
    if (!elStartMultiplier.value || 
        !elEndMultiplier.value || 
        !elStartMultiplicand.value || 
        !elEndMultiplicand.value) {
        elErrorMessage.textContent = "Please Fill All Fields";
    }
    // check if the start multiplier is less than the end multiplier
    else if (parseInt(elStartMultiplier.value) > parseInt(elEndMultiplier.value)) {
        elErrorMessage.textContent = "The Start Multiplier Must Be Less Than Or Equal To The End Multiplier";
    }
    // check if the start multiplicand is less than the end multiplicand
    else if (parseInt(elStartMultiplicand.value) > parseInt(elEndMultiplicand.value)) {
        elErrorMessage.textContent = "The Start Multiplicand Must Be Lesss Than Or Equal To The End Multiplicand";
    }
    // check if all the fields are less than 50 and greater than -50
    else if (parseInt(elStartMultiplier.value) < -50 || parseInt(elStartMultiplier.value) > 50) {
        elErrorMessage.textContent = "The Start Multiplier Must Be Greater Than Or Equal To -50 And Less Than Or Equal To 50";
    }
    else if (parseInt(elEndMultiplier.value) < -50 || parseInt(elEndMultiplier.value) > 50) {
        elErrorMessage.textContent = "The End Multiplier Must Be Greater Than Or Equal To -50 And Less Than Or Equal To 50";
    }
    else if (parseInt(elStartMultiplicand.value) < -50 || parseInt(elStartMultiplicand.value) > 50) {
        elErrorMessage.textContent = "The Start Multiplicand Must Be Greater Than Or Equal To -50 And Less Than Or Equal To 50";
    }
    else if (parseInt(elEndMultiplicand.value) < -50 || parseInt(elEndMultiplicand.value) > 50) {
        elErrorMessage.textContent = "The End Multiplicand Must Be Greater Than Or Equal To -50 And Less Than Or Equal To 50";
    }
    // if there is no error make sure there is no error message then generate the mult table
    else {
        elErrorMessage.textContent = "";
        generateTable();
    }
}

// function to generate a multiplication table of the entered fields
function generateTable() {
    // clear the previous table if there was one
    table_location.innerHTML = "";

    // parse the fields
    var startMultiplier = parseInt(elStartMultiplier.value);
    var endMultiplier = parseInt(elEndMultiplier.value);
    var startMultiplicand = parseInt(elStartMultiplicand.value);
    var endMultiplicand = parseInt(elEndMultiplicand.value);

    // creating the table
    var table = document.createElement("table")
    table.className = "table table-bordered"
    // creating the row for multipliers
    var headerRow = document.createElement("tr");
    headerRow.id = "multiplierRow"
    var cornerCell = document.createElement("th");
    cornerCell.textContent = "x";
    headerRow.appendChild(cornerCell);
    for (let m = startMultiplier; m <= endMultiplier; m++) {
        var th = document.createElement('th');
        th.textContent = m;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    // creating the body
    for (let mcand = startMultiplicand; mcand <= endMultiplicand; mcand++) {
        var row = document.createElement('tr');
        
        // multiplicand column
        var rowHeader = document.createElement('th');
        rowHeader.id = "multiplicandColumn"
        rowHeader.textContent = mcand;
        row.appendChild(rowHeader);
        
        // nested for loop to multiply the multiplicand and multiplier together
        for (let mplier = startMultiplier; mplier <= endMultiplier; mplier++) {
            var td = document.createElement('td');
            td.textContent = mcand * mplier;
            row.appendChild(td);
        }
        
        table.appendChild(row);
    }
    table_location.appendChild(table);
}
