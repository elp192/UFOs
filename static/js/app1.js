//import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody"); //Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

function buildTable(data) {
  tbody.html(""); //Tells JavaScript to use an empty string when creating the table; create a blank canvas. This is a standard way to clear data.


//Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell

  data.forEach((dataRow) => {
    let row = tbody.append("tr"); //Tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
    Object.values(dataRow).forEach((val) => { //Tells JavaScript to reference one object from the array of UFO sightings, 
                                         // Add (dataRow) as the argument, we are saying that we want the values to go into the dataRow.
                                          //Aadd forEach((val) to specify that we want one object per row.
   let cell = row.append("td"); //Set up the action of appending data into a table data tag (<td>)
   cell.text(val);  //add the values
    }
  );
 });
}

function handleClick() {
    //// Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value"); //Tell D3 to look for the #datetime id in the HTML tags.
                                                      //Tell D3 to look for where our date values are stored on the webpage, and grab that information and hold it in the "date" variable

  let filteredData = tableData; //original data as imported from our data.js file
     // Check to see if a date was entered and filter the data using that date.
  if (date) {
      filteredData = filteredData.filter(row => row.datetime === date); //Show only the rows where the date is equal to the date filter we created above
    };
    // Rebuild the table using the filtered data
      // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);  //Assign a unique id to a button element in the HTML called "filter-btn
                                                         // Tell D3 to execute  handleClick() function when the button with an id of filter-btn is clicked.
// Build the table when the page loads
buildTable(tableData);
