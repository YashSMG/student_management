let selectedrow = null;
let username = document.getElementById('username');
let email = document.getElementById('email');
let phoneno = document.getElementById('phoneno');
let city = document.getElementById('city');

//when user click on submit button

function enterData() {
	let studentData = fetchData();
	if (selectedrow == null) {
		addData(studentData);
	}
	else{
		updateData(studentData);
	}
	clearForm();
}

//A function to fetch the data 

function fetchData() {
	let studentData = {};
	studentData.username = username.value;
	studentData.email = email.value;
	studentData.phoneno = phoneno.value;
	studentData.city = city.value;
	return studentData;
}

//Function to add data inside the table 

function addData(studentData) {

	//target the tbody element
	//(here first targated table element by its id selecotor
	// and then, inside we need to select table body using tag its tag name)
	//it just like nested selectors
	let table = document.getElementById('studentList').getElementsByTagName('tbody')[0];

	//it inserts the new row inside the tbody of size 0
	let newRow = table.insertRow(0);

	cell1 = newRow.insertCell(0);
	cell1.innerHTML = studentData.username;

	cell2 = newRow.insertCell(1);
	cell2.innerHTML = studentData.email;

	cell3 = newRow.insertCell(2);
	cell3.innerHTML = studentData.phoneno;

	cell4 = newRow.insertCell(3);
	cell4.innerHTML = studentData.city;

	cell5 = newRow.insertCell(4);
	cell5.innerHTML = `<button onclick = "editData(this)"> EDIT </button>
						<button onclick = "deleteData(this)">DELETE</button>`;
}

//update function to update the selected row 

function updateData(data) {
	selectedrow.cells[0].innerHTML = data.username;
	selectedrow.cells[1].innerHTML = data.email;
	selectedrow.cells[2].innerHTML = data.phoneno;
	selectedrow.cells[3].innerHTML = data.city;

}

//delete function to delete the selected row
function deleteData(btn) {
    if (confirm("Are you sure that, You want to delete the data")) {
        row = btn.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
    }
}



//edit functionality

function editData(btn) {
	selectedrow = btn.parentElement.parentElement;
	username.value = selectedrow.cells[0].innerHTML;
	email.value = selectedrow.cells[1].innerHTML;
	phoneno.value = selectedrow.cells[2].innerHTML;
	city.value = selectedrow.cells[3].innerHTML;

}
//function to clear form

function clearForm() {
	username.value = "";
	email.value = "";
	phoneno.value = "";
	city.value = "";
	selectedrow = null;

}
