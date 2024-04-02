var eventForm = document.getElementById('event-form');
var eventTable = document.getElementById('event-table');



eventForm.addEventListener('submit', handleSubmit = (event)=> {
    event.preventDefault(); 

    // Retrieve values from form fields
    var name = document.getElementsByName('name')[0].value;
    var date = document.getElementsByName('date')[0].value;
    var time = document.getElementsByName('time')[0].value;
    var location = document.getElementsByName('location')[0].value;

    // Create a new row and cells and buttons
    var newRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    var dateCell = document.createElement('td');
    var timeCell = document.createElement('td');
    var locationCell = document.createElement('td');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    // Assign values to the cells (note that the button is considered an element in the row)
    nameCell.textContent = name;
    dateCell.textContent = date;
    timeCell.textContent = time;
    locationCell.textContent = location;
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Remove";

    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(locationCell);
    newRow.appendChild(editButton);
    newRow.appendChild(deleteButton);

    // Append the row to the table
    eventTable.appendChild(newRow);

    // Clear form fields after adding event
    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('date')[0].value = '';
    document.getElementsByName('time')[0].value = '';
    document.getElementsByName('location')[0].value = '';



    // Delete Functionality
    deleteButton.addEventListener('click', function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    })



    // Edit Functionality
    editButton.addEventListener('click', function() {
        var row = this.parentNode;
        var cells = row.getElementsByTagName('td'); // Get all cells in the row
        var name = cells[0].textContent;
        var date = cells[1].textContent;
        var time = cells[2].textContent;
        var location = cells[3].textContent;

        // Set form fields with current values
        document.getElementsByName('name')[0].value = name;
        document.getElementsByName('date')[0].value = date;
        document.getElementsByName('time')[0].value = time;
        document.getElementsByName('location')[0].value = location;

        // Change submit button text and functionality
        var submitButton = document.getElementById('submit-button');
        submitButton.innerHTML = "Confirm Edit";
        eventForm.removeEventListener('submit', handleSubmit);


        // Add event listener to confirm edit
        submitButton.addEventListener('click', confirmEdit = (event)=>{
            event.preventDefault();

            // Retrieve updated values from the form
            var editName = document.getElementsByName('name')[0].value;
            var editDate = document.getElementsByName('date')[0].value;
            var editTime = document.getElementsByName('time')[0].value;
            var editLocation = document.getElementsByName('location')[0].value;

            // Update the row with new values
            cells[0].textContent = editName;
            cells[1].textContent = editDate;
            cells[2].textContent = editTime;
            cells[3].textContent = editLocation;

            // Reset form fields
            document.getElementsByName('name')[0].value = '';
            document.getElementsByName('date')[0].value = '';
            document.getElementsByName('time')[0].value = '';
            document.getElementsByName('location')[0].value = '';

            submitButton.innerHTML = "Add Event";

            // reAssign the correct event listener
            submitButton.removeEventListener('click', confirmEdit);
            eventForm.addEventListener('submit', handleSubmit);
        });
    });
});


