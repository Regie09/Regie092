// 6. modify basic JS object, with "this" keyword
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  fullName: function() {return this.firstName  + " " + person.lastName}
}
document.getElementById("1A").innerHTML = person.fullName();

// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
let streetAddress = {
  address: "7400 Bay Rd",
  city: "Saginaw",
  state: "MI",
  zipcode: 48710,
  fullAddress: function() {return this.address + ", " + streetAddress.city + ", " + streetAddress.state + " " + streetAddress.zipcode }
}
  document.getElementById("1B").innerHTML = streetAddress.fullAddress();

person.streetAddress = "123 Main Street";

// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let table2a = createTable("table2a");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow3(table2a,"1","2","3");
appendTableRow3(table2a,"4","5","6");
appendTableRow3(table2a,"7","8","9");

// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">
let div2b = document.getElementById("2B");
let table2b = createTable("table2b");
div2b.appendChild(table2b);
table2b.setAttribute("style", "border:1px solid black;")
table2b.setAttribute("width", "100%")
appendTableRow5(table2b, "td","1","2","3","4","5");
appendTableRow5(table2b, "td","6","7","8","9","10");
appendTableRow5(table2b, "td","11","12","13","14","15");
appendTableRow5(table2b, "td","16","17","18","19","20");
appendTableRow5(table2b, "td","21","22","23","24","25");

function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  table.setAttribute("class", "table table-striped");
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}

function appendTableRow (tableobj, colType, col1, col2, col3, col4, col5) {
  let text1  = document.createTextNode(col1);
  let text2  = document.createTextNode(col2);
  let text3  = document.createTextNode(col3);
  let text4  = document.createTextNode(col4);
  let text5  = document.createTextNode(col5);
  
  let td1    = document.createElement(colType);
  let td2    = document.createElement(colType);
  let td3    = document.createElement(colType);
  let td4    = document.createElement(colType);
  let td5    = document.createElement(colType);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);

  let tr    = document.createElement("tr");

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  tableobj.children[0].appendChild(tr);
}

// ==================

// 8. create "totals" row and column in a table

// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column
let table03B = document.getElementById("table03B");

let arr00 = create2dArray(table03B);

let totalsRow = createTotalsRow(arr00);

appendTableRow(table03B, "td", totalsRow[0], totalsRow[1], totalsRow[2]);

function create2dArray(table03B){
  let arr = [];
  let rows = table03B.children[0].children.lenght;
  let cols = table03B.children[0].children[0].children.lenght;
  for(let i=0; i<rows; i++){
    arr[i] = [];
    for(let j=0; j<cols; j++){
      arr[i][j] = table03B.children[0].children[i].children[j].innerHTML;
    }
  }
  return arr;
}

function createTotalsRow(table03B){
  let totalsRow = ["Total", 0, 0];
  let rows = table03B.lenght;
  let cols = table03B[0].lenght;
  for(let i=1; i<rows; i++){
    for(let j=1; j<cols; j++){
      totalsRow[j] += Number.parseFloat(table03B[i][j]);
    }
  }
  return totalsRow;
}

function appendTableRow(tableobj, colType, col1, col2, col3){
  let text1 = document.createTextNode(col1);
  let text2 = document.createTextNode(col2);
  let text3 = document.createTextNode(col3);
  
  let td1 = document.createElement(colType);
  let td2 = document.createElement(colType);
  let td3 = document.createElement(colType);
  
  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  
  let tr = document.createElement("tr");
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  
  tableobj.children[0].appendChild(tr);
}



// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* its own error (not the errors of all the other fields), however, if the user clicks the "validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

    // initialize error div id array
    var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

    // function: validate() ---------------------------------------------
    function validate() {
        // initialize input array
        var inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
        // initialize error array
        var errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        // update error array with error message
        for (i in inputs) {
            var errMessage = errors[i];
            var div = divs[i];
            if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
            else if (i == 2) {
                var atpos = inputs[i].indexOf("@");
                var dotpos = inputs[i].lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
                    document.getElementById('errEmail').innerHTML 
                      = "<span style='color: red'>Enter a valid email address!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else if (i == 5) {
                var first = document.getElementById('password').value;
                var second = document.getElementById('confirm').value;
                if (second != first)
                    document.getElementById('errConfirm').innerHTML 
                      = "<span style='color: red'>Your passwords don't match!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else
                document.getElementById(div).innerHTML = "OK!";
        }
    }

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        var count = 0;
        for (i = 0; i < 6; i++) {
            var div = divs[i];
            if (document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
        }
        if (count == 6)
            document.getElementById("errFinal").innerHTML 
              = "All the data you entered is correct!!!";
    }


// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object 
let form00 = document.getElementById("form00");
let table00 = createTable("table00");
form00.appendChild(table00);

// Step 2. Create an JS object array containing form info 
let formArray = [
  {label: "First name:", inputType: "text", id: "first10", 
    onkeyup: "validate10();", errorId: "errFirst10"}, 
  {label: "Last name:",  inputType: "text", id: "last10",  
    onkeyup: "validate10();", errorId: "errLast10" }, 
  {label: "Email:",      inputType: "text", id: "email10", 
    onkeyup: "validate10();", errorId: "errEmail10"}, 
  {label: "User id:",    inputType: "text", id: "uid10",   
    onkeyup: "validate10();", errorId: "errUid10"  }, 
  {label: "Password:",   inputType: "password", id: "password10", 
    onkeyup: "validate10();", errorId: "errPassword10"}, 
  {label: "Confirm Password:", inputType: "password", id: "confirm10", 
    onkeyup: "validate10();", errorId: "errConfirm10"}
];

// Step 3. loop through the JS object array to populate the form

// your code here

// append to tableobj a 3-column table row 
function appendTableRow3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}

// possible object oriented form append code
/*
let fieldLabel, fieldEntry, fieldError;
for(let i=0; i<formArray.length; i++) {
  fieldLabel = formArray[i].label;
  fieldEntry =  `<input type='${formArray[i].inputType}' `
    + `id='${formArray[i].id}' name='${formArray[i].id}' `  
    + `onkeyup='${formArray[i].onkeyup}' \/>`;
  fieldError = `<span id='' + formArray[i].errorId + ''></span>`;
  appendTableRow3(table00,fieldLabel,fieldEntry,fieldError);
}
console.log(fieldLabel);
console.log(fieldEntry);
console.log(fieldError);
*/
