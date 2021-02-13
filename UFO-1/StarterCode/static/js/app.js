// from data.js
var tableData = data;

var tbody = d3.select("tbody");



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


  



// // sumbitHandler function
// function submitHandler() {
//      d3.event.preventDefault();
     
//      var inputElement = d3.select("#datetime"); 
//      var userInput = inputElement.property("value");


// };


// var button = d3.select("#filter-button")
// var form = d3.select(".form-control")

// // event handler
// button.on("click", submitHandler);
// form.on("submit", submitHandler)


tableBuilder(tableData);