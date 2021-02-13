// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// tableBuilder function
function tableBuilder(data){
    tbody.html("");
    data.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

tableBuilder(data);

var button = d3.select("#filter-btn");
var form = d3.select("#filters");

// event handler
button.on("click", submitHandler);
form.on("submit", submitHandler);


// sumbitHandler function
function submitHandler() {
     d3.event.preventDefault();
     
     var inputElement = d3.select("#datetime"); 
     var userInput = inputElement.property("value");
     
     var filteredData = tableData.filter(data => data.datetime === userInput);
    //  display new filtered table
     tableBuilder(filteredData);
};

tableBuilder(data);

