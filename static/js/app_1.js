// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
// declaring a variable tbody
// use d3.select to tell Javascript to look for the <tbody> tags in the HTML
var tbody=d3.select("tbody");
function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    data.forEach((dataRow)=> {
        // find the tbody tag in HTML and add a tablerow "tr"
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
      );
    });
  }
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let City = d3.select("#city").property("value");
    let State = d3.select("#state").property("value");
    let Country = d3.select("#country").property("value");
    let Duration = d3.select("#durationMinutes").property("value");

    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (City) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.city === City);
    }
    if (State) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.state === State);
    }
    if (Country) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.country === Country);
    }
    if (Duration) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.durationMinutes === Duration);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
