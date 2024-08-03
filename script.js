let employeeArray = [];
let employeeIdCount = 0;

function addEmployee() {
  // console.log(employeeArray);

  var empName = document.getElementById("employee-name").value;
  var empProfession = document.getElementById("employee-profession").value;
  var empAge = document.getElementById("employee-age").value;

  if (empName == "" || empProfession == "" || empAge == "") {
    document.getElementById("is-successful").style.color = "#ff3131";
    document.getElementById("is-successful").textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee!";
  } else {
    let employee = {};
    employee["Id"] = ++employeeIdCount;
    employee["Name"] = empName;
    employee["Profession"] = empProfession;
    employee["Age"] = empAge;
    employeeArray.push(employee);
    document.getElementById("is-successful").style.color = "#0FFF50";
    document.getElementById("is-successful").textContent =
      "Success : Employee Added!";
    // console.log(employee);
    console.log("Employee added!");
    document.getElementById("employee-count").innerHTML = "";

    displayDetails();
  }

  function displayDetails() {
    const employeeTable = document.getElementById("employee-table");
    employeeTable.innerHTML = "";
    for (let i = 0; i < employeeArray.length; i++) {
      const employee = employeeArray[i];
      const employeeRow = document.createElement("div");
      employeeRow.style.display = "inline-flex";
      employeeRow.style.width = "60%";

      const employeeDiv = document.createElement("div");
      employeeDiv.style.height = "30px";
      employeeDiv.style.width = "400px";
      employeeDiv.style.border = "1px solid white";
      employeeDiv.style.color = "white";
      employeeDiv.style.margin = "5px";
      employeeDiv.style.padding = "5px";
      employeeDiv.style.display = "flex";
      employeeDiv.style.alignItems = "center";

      var details =
        employee["Id"] +
        ".\t Name:" +
        employee["Name"] +
        "\t Profession:" +
        employee["Profession"] +
        "\t Age:" +
        employee["Age"];

      const empDetails = document.createElement("pre");
      empDetails.innerHTML = details;
      employeeDiv.appendChild(empDetails);
      employeeRow.appendChild(employeeDiv);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete User";
      deleteBtn.style.borderRadius = "35px";
      deleteBtn.onclick = function () {
        deleteEmployee(i);
      };
      employeeRow.appendChild(deleteBtn);

      employeeTable.appendChild(employeeRow);
    }
  }

  function deleteEmployee(i) {
    console.log(i + " button clicked");
    employeeArray.splice(i, 1);
    displayDetails();
    console.log(employeeArray);
  }

  document.getElementById("details-form").reset();
}
