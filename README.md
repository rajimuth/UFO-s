# Creating and Visualizing an Interactive Table in a HTML Page
## Purpose and Goal of the analysis:
The purpose of the current analysis is to create a table from a huge Javascript array that has data on multiple UFO sightings in a webpage for users to see
The goal is to make the table intereactive and facilate easy parsing of data by the users
### Languages used: 
    HTML to build a webpage
    JavaScript to present the dynamic table in the webpage
### Big picture plan of the webpage:    
    
<img width="338" alt="image" src="https://user-images.githubusercontent.com/94877067/158070896-a3faa4e1-5483-40b3-a1ab-0498cc477b86.png">

### Methods and Results:
#### Functions used:
##### TO CREATE TABLE: function buildTable(data)
- We start by clearing the data in tbody.html("") that tells Javascript to use a blank canvas before creating a table
- for Each function is then used to loop through the data array and add rows of data to the table

<img width="572" alt="image" src="https://user-images.githubusercontent.com/94877067/158072123-7a6223a6-0184-438b-940e-361b4e18b8f7.png">


##### TO CREATE FILTERS FOR USER FRIENDLY DATA VISUALIZATION: function updateFilters()
- The table created is huge as there are lots of data
- so the next step is to add the ability to filter the data
- Additional list elements for filter was created in the HTML file
- <img width="264" alt="image" src="https://user-images.githubusercontent.com/94877067/158072907-7a0511ba-3f29-469f-929e-d927cea17d36.png">
- This function will focus on filtering the built table by listening to the change event in the input element

<img width="245" alt="image" src="https://user-images.githubusercontent.com/94877067/158072448-6215d796-813c-4100-ac65-535c3a18b8cc.png">

- Based on changes in user input, d3.select(this) will choose the corresponding elementid and its value from the data table 

- An if-elese statement is included to check if the vlaue was changed by the user. In the value was changed the new iput value will be retrieved from the data. 
- If a value is not entered then the element id will be cleared from the filter

##### TO UPDATE THE FILTERED TABLE FROM THE DATA: filterTable()
- In this function the filtered data  will be equal to the variable that builds table
- This will filter the corresponding rows from the data and rebuild the table for easy visulazation by the user 
<img width="935" alt="image" src="https://user-images.githubusercontent.com/94877067/158072992-4929c4fb-db4e-40a3-b95f-220c10435570.png">

### Summary:
In summary, we were able to successfully build a table from a huge amount of data from JavaScript array. The table was also made interactive for users to parse the data, filter and visualize the filtered table. 
Below is an image that shows the filtered table for Date:1/1/2010, State:ca, Country:us, Shape:light

<img width="933" alt="image" src="https://user-images.githubusercontent.com/94877067/158073616-784e6ce5-8ff3-4f55-8112-863a41c52c9c.png">

Drawback:
- If the user need to go back to the original table, each of the search parameters need to be deleted which cumbersome to move back and forth between results
- The default text in the input  of the filter search is slightly confusing

Further development plan:
- A clear button can be created below the filter to clear of the search parameters and for going back to the original table
- Options for providing more than one input parameters  for filter search should be provided
Eg: Option for user to filter table from 2 states - ca and ar
- The default text in the inout of the filter search can be changed to hints and just not explicitly give a vlaue from the original data table
Eg: Enter Date
    M-D-Y
    Enter a City
    Eg:ca





